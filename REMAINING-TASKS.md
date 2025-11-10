# 📋 **REMAINING TASKS TO COMPLETE**

## ✅ **COMPLETED:**
1. ✅ Navigation reordered (Solutions → Industries → Careers → Resources → Academy)
2. ✅ Logo updated (InTime blue + eSolutions orange)
3. ✅ Company removed from top nav
4. ✅ Footer rebuilt with real contact info (3 offices)
5. ✅ Divider removed in consulting dropdown
6. ✅ All footer links fixed (no 404s)

---

## 🔨 **IN PROGRESS:**

### **1. Fix Job Listings Apply Now Links (404s)**
**Issue:** Some Apply Now buttons lead to 404s  
**Files:** 
- `/app/(marketing)/careers/open-positions/page.tsx`
- `/app/(marketing)/careers/join-our-team/page.tsx`

**Fix:** Ensure all jobs link to `/careers/jobs/[slug]` with correct slugs

---

### **2. Adjust Salary Ranges to Moderate/Realistic**
**Issue:** Current salaries too high ($120K-160K)  
**Files:**
- `/app/(marketing)/careers/jobs/[id]/page.tsx`
- `/app/(marketing)/careers/join-our-team/page.tsx`
- `/app/(marketing)/careers/open-positions/page.tsx`

**Suggested Ranges:**
- Senior Guidewire Developer: $110-130K (was $120-160K)
- Technical Recruiter: $60-80K + Commission (was $70-90K)
- Contractor rates: $85-105/hr (was $95-120/hr)

---

### **3. Expand Cross-Border Solutions Page Scope**
**Issue:** Content limited to only H1B→Canada and Canada→USA  
**File:** `/app/(marketing)/solutions/cross-border/page.tsx`

**Expand to include:**
- H1B to Canada (existing)
- Canada to USA (existing)
- **NEW:** India to USA (H1B sponsorship)
- **NEW:** India to Canada (Express Entry support)
- **NEW:** UK/Europe to North America
- **NEW:** Intra-company transfers
- **NEW:** Global mobility consulting
- **VALUES:** Speed, transparency, end-to-end support, compliance

---

### **4. Fill Out All Industries Pages with SEO Content**
**Issue:** Industry pages have placeholder content  
**Files:** `/app/(marketing)/industries/[industry]/page.tsx` (15 pages)

**Each page needs:**
- Compelling hero (industry-specific pain points)
- Services we offer (staffing, consulting, training for that industry)
- Key roles we fill (5-7 specific job titles)
- Success metrics (placements, time-to-fill, client satisfaction)
- Client testimonial (industry-specific)
- CTA (contact us, view jobs, explore talent)

**SEO Keywords per Industry:**
- IT: "IT staffing", "software engineers", "tech recruiting"
- Healthcare: "healthcare staffing", "clinical jobs", "medical recruiting"
- Financial: "finance jobs", "accounting staffing", "CPA recruiting"
- Engineering: "engineering staffing", "mechanical engineers", "civil engineering jobs"
- etc.

---

## 🎯 **PRIORITY ORDER:**

1. **Fix Job Links** (High Priority - affects UX immediately)
2. **Adjust Salaries** (Medium Priority - affects credibility)
3. **Expand Cross-Border** (Medium Priority - key differentiator)
4. **Industries Pages** (Lower Priority - SEO long-term)

---

## 📝 **NOTES:**

- User wants **authentic content** aligned with company values
- Focus on **speed, innovation, and transparency**
- Every page should be a **sales page** with:
  - Hook (attention)
  - Pain point (problem)
  - Solution (our services)
  - Why us (differentiators)
  - CTA (action)

---

**Last Updated:** $(date +%Y-%m-%d)

