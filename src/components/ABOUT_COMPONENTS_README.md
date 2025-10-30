# About Page Components Documentation

## Overview

مكونات صفحة "من نحن" المصممة باحترافية مع أفضل الممارسات (Best Practices)

## Components

### 1. AboutHero

**الغرض**: قسم البطل الرئيسي في صفحة من نحن
**المميزات**:

- تصميم متجاوب (Responsive) لجميع الشاشات
- أنيميشن سلس عند التحميل
- دعم RTL كامل
- صورة دائرية مع تأثيرات بصرية
- زر Call-to-Action تفاعلي

### 2. AboutVision

**الغرض**: عرض رؤية الشركة
**المميزات**:

- تصميم بطاقة أنيق (Card Design)
- أنيميشن عند الظهور في viewport
- خلفية متدرجة (Gradient Background)
- نص واضح ومنظم

### 3. AboutMission

**الغرض**: عرض رسالة الشركة
**المميزات**:

- خلفية داكنة مع تأثيرات ضوئية
- تخطيط Grid متجاوب
- نقاط رسالة منظمة مع أيقونات
- صورة جانبية مع overlay

### 4. AboutTeam

**الغرض**: عرض فريق العمل
**المميزات**:

- Grid متجاوب (1-2-4 أعمدة)
- بطاقات تفاعلية مع hover effects
- صور مع fallback إلى UI Avatars
- أنيميشن متتالي للبطاقات

## Best Practices المطبقة

### 1. Performance

- ✅ Lazy loading للصور
- ✅ استخدام `whileInView` لتحسين الأداء
- ✅ تقليل re-renders غير الضرورية

### 2. Accessibility

- ✅ نصوص بديلة للصور (alt text)
- ✅ تباين ألوان مناسب
- ✅ أحجام خطوط قابلة للقراءة

### 3. Responsive Design

- ✅ Mobile-first approach
- ✅ Breakpoints واضحة (sm, md, lg)
- ✅ تخطيطات مرنة (Flexbox & Grid)

### 4. Code Quality

- ✅ TypeScript للـ type safety
- ✅ مكونات قابلة لإعادة الاستخدام
- ✅ تنظيم واضح للكود
- ✅ تعليقات توضيحية

### 5. UX/UI

- ✅ أنيميشن سلسة وغير مزعجة
- ✅ تفاعلية واضحة (hover, tap)
- ✅ تدرجات ألوان متناسقة
- ✅ مسافات منتظمة (spacing)

### 6. RTL Support

- ✅ دعم كامل للغة العربية
- ✅ استخدام `dir="rtl"` في الأماكن المناسبة
- ✅ محاذاة نصوص صحيحة

## Color Palette

```css
Primary: #5dba47 (Green)
Secondary: #2c4653 (Dark Blue)
Background: White to Gray-50 gradient
Text: #2c4653 with opacity variants
```

## Usage Example

```tsx
import AboutPage from './pages/AboutPage';

// في App.tsx
<Route path="/about" element={<AboutPage />} />;
```

## Customization

لتخصيص المكونات:

1. تعديل الألوان في كل مكون
2. تغيير النصوص حسب المحتوى
3. إضافة/إزالة أقسام حسب الحاجة
4. تعديل الصور في مجلد `/public`

## Images Required

ضع الصور التالية في مجلد `/public`:

- `about-hero.jpg` - صورة البطل الرئيسية
- `about-mission.jpg` - صورة الرسالة
- `team-1.jpg` إلى `team-4.jpg` - صور أعضاء الفريق

**ملاحظة**: المكونات تحتوي على fallback images من Unsplash و UI Avatars
