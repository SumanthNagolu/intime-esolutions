# Comprehensive Test Plan - Guidewire Training Platform

## Overview
This document outlines the testing strategy to achieve:
- **90%+ code coverage** across critical user flows
- **End-to-end validation** of all major user journeys
- **Regression prevention** for future changes

## Testing Stack

### Recommended Tools
```json
{
  "unit-integration": "@testing-library/react + @testing-library/jest-dom + vitest",
  "e2e": "@playwright/test",
  "api": "supertest",
  "database": "supabase-test-helpers",
  "coverage": "vitest coverage (c8 or istanbul)"
}
```

### Installation
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D @playwright/test
npm install -D @vitest/coverage-c8
npm install -D happy-dom # or jsdom
```

---

## 1. Unit Tests (Target: 85% coverage)

### 1.1 Components

#### Button Components
**File:** `components/ui/button.test.tsx`
```typescript
describe('Button', () => {
  it('renders with default variant', () => {});
  it('renders with different sizes', () => {});
  it('handles onClick events', () => {});
  it('renders with asChild prop and passes to Link', () => {});
  it('is disabled when disabled prop is true', () => {});
});
```

#### TopicEditButton
**File:** `components/features/admin/TopicEditButton.test.tsx`
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import TopicEditButton from './TopicEditButton';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('TopicEditButton', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('renders Edit button', () => {
    render(<TopicEditButton topicId="123" />);
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
  });

  it('navigates to correct topic edit page on click', () => {
    render(<TopicEditButton topicId="abc-123-def" />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockPush).toHaveBeenCalledWith('/admin/topics/abc-123-def');
  });

  it('logs navigation attempt', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<TopicEditButton topicId="test-id" />);
    fireEvent.click(screen.getByRole('button'));
    expect(consoleSpy).toHaveBeenCalledWith(
      '[TopicEditButton] Navigating to:', 
      '/admin/topics/test-id'
    );
  });

  it('uses custom title when provided', () => {
    render(<TopicEditButton topicId="123" title="Edit Custom Topic" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Edit Custom Topic');
  });
});
```

#### ContentViewer
**File:** `components/features/content/ContentViewer.test.tsx`
```typescript
describe('ContentViewer', () => {
  it('renders single PDF when only assignment provided', () => {});
  it('renders tabs when multiple content types provided', () => {});
  it('handles external URLs (YouTube, Loom)', () => {});
  it('shows no content message when all fields are null', () => {});
  it('defaults to first tab', () => {});
});
```

#### TopicEditForm
**File:** `components/features/admin/TopicEditForm.test.tsx`
```typescript
describe('TopicEditForm', () => {
  it('pre-fills form with topic data', () => {});
  it('validates required fields', () => {});
  it('handles form submission', () => {});
  it('displays field errors from server action', () => {});
  it('shows success toast on successful update', () => {});
  it('handles prerequisite multi-select', () => {});
  it('toggles published switch', () => {});
});
```

### 1.2 Server Actions

#### updateTopicAction
**File:** `app/(dashboard)/admin/topics/[id]/actions.test.ts`
```typescript
import { updateTopicAction } from './actions';
import { createClient } from '@/lib/supabase/server';

jest.mock('@/lib/supabase/server');

describe('updateTopicAction', () => {
  it('returns error when user is not authenticated', async () => {
    // Mock unauthenticated state
    const result = await updateTopicAction(
      { status: 'idle' },
      new FormData()
    );
    expect(result.status).toBe('error');
    expect(result.message).toContain('Unauthorized');
  });

  it('returns error when user is not admin', async () => {
    // Mock non-admin user
    const result = await updateTopicAction(
      { status: 'idle' },
      createMockFormData({ topicId: '123' })
    );
    expect(result.status).toBe('error');
    expect(result.message).toContain('Admin access required');
  });

  it('validates required fields with Zod', async () => {
    const formData = new FormData();
    formData.append('topicId', 'invalid-uuid');
    
    const result = await updateTopicAction({ status: 'idle' }, formData);
    expect(result.status).toBe('error');
    expect(result.fieldErrors?.topicId).toBeDefined();
  });

  it('updates topic successfully', async () => {
    // Mock admin user and successful update
    const result = await updateTopicAction(
      { status: 'idle' },
      createMockFormData({
        topicId: 'valid-uuid',
        title: 'Updated Title',
        durationMinutes: '45',
      })
    );
    expect(result.status).toBe('success');
  });

  it('preserves existing content fields', async () => {
    // Ensure slides, demos, assignment are not overwritten
  });
});
```

#### uploadContentFile
**File:** `modules/admin/actions.test.ts`
```typescript
describe('uploadContentFile', () => {
  it('rejects non-admin users', async () => {});
  it('uploads PPTX and updates slides field', async () => {});
  it('uploads PDF and updates assignment field', async () => {});
  it('uploads video and appends to demos array', async () => {});
  it('handles upload errors gracefully', async () => {});
  it('revalidates correct paths after upload', async () => {});
});
```

### 1.3 API Routes

#### Content Delivery API
**File:** `app/api/content/[...path]/route.test.ts`
```typescript
import { GET } from './route';

describe('GET /api/content/[...path]', () => {
  it('returns 401 for unauthenticated users', async () => {});
  
  it('validates product code format', async () => {
    const response = await GET(
      new Request('http://localhost:3000'),
      { params: Promise.resolve({ path: ['INVALID', 'cc-01-001', 'file.pdf'] }) }
    );
    expect(response.status).toBe(400);
  });

  it('blocks path traversal attempts', async () => {
    const response = await GET(
      new Request('http://localhost:3000'),
      { params: Promise.resolve({ path: ['CC', '../..', 'file.pdf'] }) }
    );
    expect(response.status).toBe(400);
  });

  it('returns signed URL for valid path', async () => {});
  
  it('sanitizes filenames with special characters', async () => {});
});
```

#### AI Mentor API
**File:** `app/api/ai/mentor/route.test.ts`
```typescript
describe('POST /api/ai/mentor', () => {
  it('validates request payload with Zod', async () => {});
  it('enforces rate limiting', async () => {});
  it('returns streaming response', async () => {});
  it('tracks token usage', async () => {});
  it('stores conversation in database', async () => {});
});
```

### 1.4 Database Queries

#### getTopicById
**File:** `modules/topics/queries.test.ts`
```typescript
describe('getTopicById', () => {
  it('returns null for non-existent topic', async () => {});
  it('includes progress data when userId provided', async () => {});
  it('marks topic as locked when prerequisites not met', async () => {});
  it('marks topic as unlocked when prerequisites met', async () => {});
  it('returns null for unpublished topics (non-admin)', async () => {});
});
```

---

## 2. Integration Tests (Target: 70% flow coverage)

### 2.1 Authentication Flows

**File:** `tests/integration/auth.test.ts`
```typescript
describe('Authentication', () => {
  it('redirects unauthenticated users to login', async () => {});
  it('allows signup with valid credentials', async () => {});
  it('sends email verification', async () => {});
  it('prevents login with unverified email', async () => {});
  it('redirects to profile-setup for new users', async () => {});
  it('redirects to dashboard for existing users', async () => {});
});
```

### 2.2 Profile Setup

**File:** `tests/integration/profile-setup.test.ts`
```typescript
describe('Profile Setup', () => {
  it('creates user profile on form submission', async () => {});
  it('validates first name and last name', async () => {});
  it('stores experience level (persona)', async () => {});
  it('redirects to dashboard after setup', async () => {});
  it('prevents accessing dashboard before profile setup', async () => {});
});
```

### 2.3 Topic Progression

**File:** `tests/integration/topic-progression.test.ts`
```typescript
describe('Topic Progression', () => {
  it('displays all products on topics page', async () => {});
  it('filters topics by selected product', async () => {});
  it('shows first topic as unlocked', async () => {});
  it('shows subsequent topics as locked', async () => {});
  it('marks topic as in-progress on first visit', async () => {});
  it('marks topic as completed when user clicks complete', async () => {});
  it('unlocks next topic after completion', async () => {});
  it('enforces prerequisite chain', async () => {});
});
```

### 2.4 Content Viewing

**File:** `tests/integration/content-viewing.test.ts`
```typescript
describe('Content Viewing', () => {
  it('fetches signed URL for PDF', async () => {});
  it('fetches signed URL for video', async () => {});
  it('fetches signed URL for PPTX', async () => {});
  it('handles content not found errors', async () => {});
  it('renders tabs when multiple content types exist', async () => {});
  it('embeds YouTube videos correctly', async () => {});
});
```

### 2.5 Admin Workflows

**File:** `tests/integration/admin-workflows.test.ts`
```typescript
describe('Admin Workflows', () => {
  describe('Topic Management', () => {
    it('lists all topics grouped by product', async () => {});
    it('navigates to edit page on Edit button click', async () => {});
    it('updates topic metadata successfully', async () => {});
    it('updates prerequisites', async () => {});
    it('publishes/unpublishes topics', async () => {});
  });

  describe('Content Upload', () => {
    it('uploads PPTX and links to topic', async () => {});
    it('uploads PDF assignment', async () => {});
    it('uploads demo video', async () => {});
    it('shows upload progress', async () => {});
    it('displays error for invalid file types', async () => {});
  });

  describe('Bulk Import', () => {
    it('validates JSON structure', async () => {});
    it('imports all topics in batch', async () => {});
    it('reports errors for duplicate codes', async () => {});
  });
});
```

### 2.6 AI Features

**File:** `tests/integration/ai-features.test.ts`
```typescript
describe('AI Mentor', () => {
  it('creates new conversation on first message', async () => {});
  it('appends to existing conversation', async () => {});
  it('streams response in real-time', async () => {});
  it('enforces rate limit after 50 queries', async () => {});
  it('provides Socratic guidance (no direct answers)', async () => {});
});

describe('Interview Simulator', () => {
  it('lists templates filtered by experience level', async () => {});
  it('starts interview session', async () => {});
  it('exchanges messages with AI interviewer', async () => {});
  it('ends interview and shows feedback', async () => {});
  it('stores interview history', async () => {});
});
```

### 2.7 Quiz Engine

**File:** `tests/integration/quiz-engine.test.ts`
```typescript
describe('Quiz Engine', () => {
  it('lists available quizzes for completed topics', async () => {});
  it('starts quiz attempt', async () => {});
  it('advances through questions', async () => {});
  it('calculates score correctly', async () => {});
  it('shows correct/incorrect feedback', async () => {});
  it('stores attempt history', async () => {});
  it('prevents retaking before cooldown', async () => {});
});
```

---

## 3. End-to-End Tests (Target: 10 critical user journeys)

**Setup:** `playwright.config.ts`
```typescript
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 3.1 New User Journey

**File:** `tests/e2e/new-user-journey.spec.ts`
```typescript
import { test, expect } from '@playwright/test';

test.describe('New User Onboarding', () => {
  test('complete onboarding flow', async ({ page }) => {
    // 1. Visit homepage
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /guidewire training/i })).toBeVisible();

    // 2. Click Get Started
    await page.getByRole('link', { name: /get started/i }).click();

    // 3. Sign up
    await page.fill('[name="email"]', `test-${Date.now()}@example.com`);
    await page.fill('[name="password"]', 'SecurePass123!');
    await page.getByRole('button', { name: /sign up/i }).click();

    // 4. Verify email (mock or use test helper)
    // ... email verification step ...

    // 5. Complete profile setup
    await expect(page).toHaveURL('/profile-setup');
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.selectOption('[name="persona"]', '3-5 years experience');
    await page.getByRole('button', { name: /complete setup/i }).click();

    // 6. Land on dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(/welcome back, test/i)).toBeVisible();
  });
});
```

### 3.2 Topic Completion Journey

**File:** `tests/e2e/topic-completion.spec.ts`
```typescript
test.describe('Topic Completion', () => {
  test.beforeEach(async ({ page }) => {
    // Login as existing user
    await loginAsUser(page, 'test@example.com', 'password');
  });

  test('complete first topic and unlock next', async ({ page }) => {
    // 1. Navigate to topics
    await page.goto('/topics');
    await page.getByText('ClaimCenter').click();

    // 2. Click first topic
    await page.getByRole('link', { name: /topic #1/i }).click();

    // 3. View content
    await expect(page.getByRole('heading', { name: /lesson slides/i })).toBeVisible();
    
    // 4. Mark as complete
    await page.getByRole('button', { name: /mark complete/i }).click();
    await expect(page.getByText(/great job!/i)).toBeVisible();

    // 5. Go back and verify next topic unlocked
    await page.goBack();
    const topic2 = page.getByRole('link', { name: /topic #2/i });
    await expect(topic2).not.toHaveClass(/opacity-50/);
  });
});
```

### 3.3 Admin Topic Edit Journey

**File:** `tests/e2e/admin-topic-edit.spec.ts`
```typescript
test.describe('Admin Topic Management', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  test('edit topic metadata and verify changes', async ({ page }) => {
    // 1. Navigate to topic management
    await page.goto('/admin/topics');
    await expect(page.getByRole('heading', { name: /topic management/i })).toBeVisible();

    // 2. Click Edit on first topic
    await page.getByRole('button', { name: /edit/i }).first().click();

    // 3. Verify edit form loads
    await expect(page).toHaveURL(/\/admin\/topics\/[a-f0-9-]+/);
    await expect(page.getByRole('heading', { name: /edit topic/i })).toBeVisible();

    // 4. Update title
    const titleInput = page.locator('[name="title"]');
    await titleInput.fill('Updated Topic Title');

    // 5. Update duration
    await page.locator('[name="durationMinutes"]').fill('60');

    // 6. Toggle published
    await page.locator('[name="published"]').click();

    // 7. Save changes
    await page.getByRole('button', { name: /save changes/i }).click();

    // 8. Verify success toast
    await expect(page.getByText(/topic updated successfully/i)).toBeVisible();

    // 9. Go back and verify changes reflected
    await page.goto('/admin/topics');
    await expect(page.getByText('Updated Topic Title')).toBeVisible();
  });

  test('edit button is clickable and navigates correctly', async ({ page }) => {
    await page.goto('/admin/topics');
    
    // Get first Edit button
    const editButton = page.getByRole('button', { name: /edit/i }).first();
    
    // Verify button is visible and enabled
    await expect(editButton).toBeVisible();
    await expect(editButton).toBeEnabled();
    
    // Click and verify navigation
    const [response] = await Promise.all([
      page.waitForNavigation(),
      editButton.click(),
    ]);
    
    // Should navigate to /admin/topics/[id]
    expect(page.url()).toMatch(/\/admin\/topics\/[a-f0-9-]+/);
    
    // Edit form should load
    await expect(page.getByRole('heading', { name: /edit topic/i })).toBeVisible();
  });
});
```

### 3.4 Content Upload Journey

**File:** `tests/e2e/content-upload.spec.ts`
```typescript
test.describe('Content Upload', () => {
  test('upload and view PPTX content', async ({ page }) => {
    await loginAsAdmin(page);
    
    // 1. Navigate to content upload
    await page.goto('/admin/content-upload');
    
    // 2. Select product and topic
    await page.selectOption('[name="product"]', 'CC');
    await page.selectOption('[name="topic"]', 'cc-01-001');
    
    // 3. Upload file
    await page.setInputFiles('[type="file"]', 'tests/fixtures/sample.pptx');
    await page.getByRole('button', { name: /upload/i }).click();
    
    // 4. Verify upload success
    await expect(page.getByText(/successfully uploaded/i)).toBeVisible();
    
    // 5. Navigate to topic and verify content displays
    await page.goto('/topics/cc-01-001');
    await expect(page.getByText(/lesson slides/i)).toBeVisible();
  });
});
```

### 3.5 AI Mentor Journey

**File:** `tests/e2e/ai-mentor.spec.ts`
```typescript
test.describe('AI Mentor', () => {
  test('ask question and receive Socratic guidance', async ({ page }) => {
    await loginAsUser(page);
    
    // 1. Navigate to AI Mentor
    await page.goto('/ai-mentor');
    
    // 2. Type question
    await page.fill('[placeholder*="ask"]', 'What is a claim in ClaimCenter?');
    await page.getByRole('button', { name: /send/i }).click();
    
    // 3. Wait for streaming response
    await page.waitForSelector('[data-message-role="assistant"]', { timeout: 10000 });
    
    // 4. Verify response is Socratic (contains questions)
    const response = await page.locator('[data-message-role="assistant"]').first().textContent();
    expect(response).toMatch(/\?/); // Contains a question
    
    // 5. Verify no direct answer given
    expect(response?.toLowerCase()).not.toContain('a claim is');
  });
});
```

### 3.6 Quiz Journey

**File:** `tests/e2e/quiz-journey.spec.ts`
```typescript
test.describe('Quiz', () => {
  test('complete quiz and view results', async ({ page }) => {
    await loginAsUser(page);
    
    // 1. Navigate to quizzes
    await page.goto('/assessments/quizzes');
    
    // 2. Start quiz
    await page.getByRole('button', { name: /start quiz/i }).first().click();
    
    // 3. Answer all questions
    for (let i = 1; i <= 5; i++) {
      await page.getByRole('radio', { name: /A\)/ }).check();
      await page.getByRole('button', { name: /next/i }).click();
    }
    
    // 4. Submit
    await page.getByRole('button', { name: /submit/i }).click();
    
    // 5. Verify results
    await expect(page.getByText(/your score/i)).toBeVisible();
    await expect(page.locator('[data-testid="quiz-score"]')).toContainText(/\d+%/);
  });
});
```

### 3.7 Interview Simulator Journey

**File:** `tests/e2e/interview-simulator.spec.ts`
```typescript
test.describe('Interview Simulator', () => {
  test('complete mock interview', async ({ page }) => {
    await loginAsUser(page);
    
    // 1. Navigate to interview simulator
    await page.goto('/assessments/interview');
    
    // 2. Select experience level and template
    await page.selectOption('[name="experienceLevel"]', 'mid');
    await page.selectOption('[name="template"]', 'ClaimCenter Data Model');
    
    // 3. Start interview
    await page.getByRole('button', { name: /start interview/i }).click();
    
    // 4. Answer first question
    await page.fill('[placeholder*="answer"]', 'In ClaimCenter, a Claim represents...');
    await page.getByRole('button', { name: /send/i }).click();
    
    // 5. Wait for AI response
    await page.waitForSelector('[data-message-role="interviewer"]', { timeout: 10000 });
    
    // 6. End interview
    await page.getByRole('button', { name: /end interview/i }).click();
    
    // 7. Verify feedback
    await expect(page.getByText(/interview feedback/i)).toBeVisible();
  });
});
```

---

## 4. Performance Tests

**File:** `tests/performance/load-testing.ts`
```typescript
import { check } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down
  ],
};

export default function () {
  const response = http.get('https://your-app.vercel.app/topics');
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}
```

---

## 5. Test Execution

### 5.1 Local Development

```bash
# Unit + Integration tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage

# Watch mode
npm run test:watch
```

### 5.2 CI/CD Pipeline

**File:** `.github/workflows/test.yml`
```yaml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  unit-integration:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v3

  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 6. Coverage Goals

| Category | Target | Priority |
|----------|--------|----------|
| **Overall** | 85% | High |
| **Critical paths** | 95% | Critical |
| **Auth & Security** | 100% | Critical |
| **Admin functions** | 90% | High |
| **AI features** | 80% | Medium |
| **UI components** | 70% | Medium |

---

## 7. Continuous Monitoring

### 7.1 Vercel Analytics
- Track Core Web Vitals
- Monitor error rates
- Track API response times

### 7.2 Sentry
- Error tracking
- Performance monitoring
- User session replay

### 7.3 Supabase Logs
- Database query performance
- RLS policy violations
- Auth failures

---

## 8. Test Data Management

### 8.1 Fixtures
```
tests/fixtures/
├── users.json
├── topics.json
├── quizzes.json
├── sample.pptx
├── sample.pdf
├── sample.mp4
```

### 8.2 Database Seeding
```typescript
// tests/helpers/seed.ts
export async function seedTestData() {
  // Create test users
  // Create test topics
  // Create test quizzes
}

export async function cleanupTestData() {
  // Delete test data
}
```

---

## Next Steps

1. ✅ Set up testing infrastructure (vitest + playwright)
2. ✅ Write critical path E2E tests first
3. ✅ Add unit tests for new components
4. ✅ Integrate coverage reporting in CI/CD
5. ✅ Set up pre-commit hooks for test running
6. ✅ Document test patterns for team

**Priority Order:**
1. E2E test for admin topic edit (current blocker)
2. Integration tests for content upload
3. Unit tests for TopicEditButton
4. Remaining E2E flows
5. Achieve 85% coverage

---

**Status:** Ready for implementation
**Est. Time:** 3-5 days for 90% coverage
**Maintainability:** Update tests with each feature change

