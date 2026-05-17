# 🖼️ IMAGE STRATEGY GUIDE - Sanad Platform

## Overview
This guide defines how to integrate meaningful, human-centered images across the Sanad platform to build trust, emotional connection, and engagement.

---

## 1. IMAGE FOLDERS STRUCTURE

```
src/assets/images/
├── associations/
│   ├── logo-org-1.png
│   ├── cover-org-1.jpg
│   ├── logo-org-2.png
│   └── cover-org-2.jpg
├── requests/
│   ├── thumb-request-1.jpg
│   ├── thumb-request-2.jpg
│   └── ...
├── hero/
│   ├── hero-background.jpg
│   └── hero-overlay.jpg
├── placeholders/
│   ├── association-placeholder.svg
│   └── request-placeholder.svg
└── icons/
    ├── verified-badge.svg
    └── ...
```

---

## 2. HOMEPAGE HERO SECTION

**Visual:** 
- Soft background image showing people helping each other
- Slightly faded or blurred (opacity 0.3-0.5)
- Text overlay with high contrast

**Specifications:**
- Size: 1920x1080px or wider
- Format: JPEG (optimized for web)
- Max file size: 150-200KB
- Content: Human solidarity, hands, diverse group

**Implementation:**
```css
.hero {
  background-image: linear-gradient(135deg, rgba(36, 67, 154, 0.7), rgba(38, 180, 106, 0.7)),
                    url('/assets/images/hero/hero-background.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

---

## 3. ASSOCIATION CARDS

Each association includes:

### Logo
- Size: 60x60px (40x40px in cards)
- Format: PNG with transparency
- Content: Organization mark/symbol

### Cover Image
- Size: 1200x400px
- Aspect ratio: 3:1
- Format: JPEG
- Content: Organization activity, volunteers in action
- Brightness: 80-90% (slightly faded)

### Trust Indicators
- Verification badge (small SVG icon)
- Location badge
- Year active

**Card Layout:**
```
┌─────────────────────────┐
│   Cover Image (3:1)     │
│  [slightly faded]       │
├─────────────────────────┤
│ Logo + Name             │
│ Location • Verified ✓   │
│ Description (2 lines)   │
│                         │
│ [View Profile Button]   │
└─────────────────────────┘
```

---

## 4. REQUEST CARDS

### Thumbnail Image
- Size: 400x300px
- Aspect ratio: 4:3
- Format: JPEG
- Content: Real situation/need (family, children, medical, etc.)
- Style: Natural lighting, human-centered

### Card Structure:
```
┌──────────────────┐
│ Thumbnail (4:3)  │
│ [Category Badge] │
├──────────────────┤
│ Title            │
│ Description      │
│ Organization     │
│ Progress Bar     │
│ [View More ▶]    │
└──────────────────┘
```

---

## 5. DETAIL PAGE LAYOUT

### Hero Image (Large)
- Size: 1200x600px
- Aspect ratio: 2:1
- Format: JPEG
- Placement: Full-width at top
- Content: Large contextual image of the cause

### Layout:
```
┌────────────────────────────────┐
│  Detail Image (2:1, full width)│
│  [Overlay: Category + Trust]   │
├────────────────────────────────┤
│ Title, Progress, CTA Button    │
│                                │
│ Description + Organization     │
│                                │
│ Timeline / Impact              │
└────────────────────────────────┘
```

---

## 6. IMAGE OPTIMIZATION GUIDELINES

### File Sizes (Target)
- Small thumbnails: 30-50KB
- Card images: 80-120KB
- Hero/full-width: 150-200KB
- Logos: 5-10KB (SVG preferred)

### Format Recommendations
- **Hero & Card Images:** JPEG (85-90 quality)
- **Logos & Badges:** SVG or PNG-8
- **Thumbnails:** WebP (with JPEG fallback)

### Aspect Ratios (Standardize)
- Association covers: 3:1 (1200x400px)
- Request thumbnails: 4:3 (400x300px)
- Detail hero: 2:1 (1200x600px)
- Logos: 1:1 (60x60px)

---

## 7. VISUAL BALANCE PRINCIPLES

✅ **Do:**
- Use real images of actual help/community
- Show diverse, inclusive situations
- Include faces when appropriate (build connection)
- Use soft, natural lighting
- Keep colors warm and inviting
- Use consistent filters/color grading

❌ **Don't:**
- Use generic stock photos (no clichés)
- Overload with images (max 2-3 per page section)
- Use bright/loud colors that distract
- Show poverty in patronizing way
- Mix different visual styles
- Use low-resolution images

---

## 8. COLOR GRADING & FILTERS

Apply consistent filters to maintain visual cohesion:

```css
/* Warm, compassionate filter */
filter: brightness(0.95) saturate(1.1) hue-rotate(5deg);

/* Gentle fade for overlays */
filter: brightness(0.90) contrast(1.05);

/* Soft, welcoming look */
filter: brightness(1.05) saturate(0.95) contrast(1.1);
```

---

## 9. PLACEHOLDER STRATEGY

For missing images, use:
- **SVG placeholders** with brand colors (not generic)
- **Gradient backgrounds** with icons
- **Initials/abbreviations** for organizations

Example SVG placeholder:
```html
<svg viewBox="0 0 400 300" class="placeholder-image">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad)"/>
  <text x="50%" y="50%" text-anchor="middle" fill="#cbd5e1">
    No Image Available
  </text>
</svg>
```

---

## 10. ACCESSIBILITY CONSIDERATIONS

- **Alt Text:** Every image must have descriptive alt text
- **Contrast:** Ensure text over images has sufficient contrast
- **Loading:** Use `loading="lazy"` for below-fold images
- **Size Variants:** Provide responsive image sets (srcset)

Example:
```html
<img 
  src="/assets/images/request-thumb.jpg"
  srcset="/assets/images/request-thumb-md.jpg 600w, 
          /assets/images/request-thumb-lg.jpg 1200w"
  alt="Family receiving educational support for children"
  loading="lazy"
/>
```

---

## 11. IMPLEMENTATION CHECKLIST

- [ ] Create image folder structure
- [ ] Add placeholder SVGs
- [ ] Update Association component with cover images
- [ ] Update Request cards with thumbnails
- [ ] Add Hero image to homepage
- [ ] Optimize all images for web
- [ ] Add alt text to all images
- [ ] Test responsive image display
- [ ] Add lazy loading
- [ ] Create image preloading strategy

---

## 12. RECOMMENDED IMAGE SOURCES

For authentic, human-centered images:
- **Unsplash:** Free, high-quality community images
- **Pexels:** Diverse, inclusive photography
- **Pixabay:** Wide selection of causes-related content
- **Local Photographers:** Best for authentic community photos
- **User-Generated Content:** Volunteers sharing their work

**Search Keywords:**
- "community helping"
- "solidarity hands"
- "education support"
- "healthcare volunteers"
- "food distribution"
- "diverse volunteers"

---

## 13. PROGRESSIVE IMAGE LOADING

Implement blur-up effect for faster perceived loading:

```html
<!-- Low-quality placeholder (blurred) -->
<img 
  src="placeholder-blur.jpg" 
  alt="Description"
  data-src="full-image.jpg"
/>

<!-- JavaScript: Lazy load full image -->
<script>
  const img = document.querySelector('[data-src]');
  const fullImg = new Image();
  fullImg.src = img.dataset.src;
  fullImg.onload = () => {
    img.src = fullImg.src;
    img.classList.add('loaded');
  };
</script>
```

---

## Summary

**Key Principles:**
1. ✨ Use **real, human-centered** images
2. 🎯 Keep **consistent visual style**
3. ⚡ **Optimize for speed** (not heavy files)
4. 📐 Standardize **aspect ratios** & sizes
5. 🤝 Build **emotional connection** & trust
6. ♿ Ensure **accessibility** (alt text, contrast)
7. 🌍 Show **diversity & inclusion**
8. 🧼 Maintain **clean layout** (don't overload)

---

**Next Steps:** 
1. Gather/create image assets
2. Update components with image integration
3. Test responsive behavior
4. Monitor performance
