'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { importTopicsAction, importTopicsInitialState } from '@/app/(dashboard)/admin/topics/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Uploading…' : 'Upload & Import'}
    </Button>
  );
}

export function TopicUploadForm() {
  const [state, formAction] = useFormState(importTopicsAction, importTopicsInitialState);

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.error) {
      toast.error(state.error);
    } else if (state.success && state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="topics-file">Upload JSON file</Label>
        <Input
          id="topics-file"
          name="file"
          type="file"
          accept="application/json,.json"
          required
        />
        <p className="text-xs text-muted-foreground">
          Use the provided template (`data/claimcenter-topics.json`) or a custom JSON
          file matching the same schema.
        </p>
      </div>

      <SubmitButton />

      {state?.success && state.count !== undefined ? (
        <p className="text-sm text-green-600">
          Imported {state.count} topics successfully.
        </p>
      ) : null}
    </form>
  );
}

export default TopicUploadForm;

