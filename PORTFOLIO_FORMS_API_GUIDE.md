# 📋 Portfolio Forms API - دليل شامل

## نظرة عامة

تم تنفيذ Portfolio Forms API بنجاح باستخدام أفضل الممارسات (Best Practices) لتوفير endpoints آمنة وموثوقة لنماذج موقع Portfolio.

---

## 🎯 الميزات المنفذة

### ✅ النماذج (Models)
- **StoreRequest**: طلبات خدمة المتجر
- **EmployeeApplication**: طلبات التوظيف
- **InvestmentRequest**: طلبات الاستثمار

### ✅ Validation كامل
- التحقق من رقم الهاتف (9 أرقام بالضبط)
- التحقق من صحة البريد الإلكتروني
- التحقق من حجم ونوع ملف السيرة الذاتية (5MB كحد أقصى)
- دعم القيم بالعربية والإنجليزية

### ✅ Rate Limiting
- 10 طلبات/ساعة للمستخدمين غير المسجلين
- حماية من الـ spam والـ abuse

### ✅ Admin Interface
- واجهات إدارة احترافية مع ألوان وأيقونات
- إمكانية تغيير حالة الطلبات بسهولة
- بحث وفلترة متقدمة

---

## 🔗 API Endpoints

### 1️⃣ Store Service Request

**Endpoint:** `POST /api/store-requests/`

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "محمد أحمد",
  "job": "مدير",
  "phone": "501234567",
  "email": "mohammed@example.com",
  "storeName": "متجر النور",
  "storePhone": "0112345678",
  "storeType": "supermarket",
  "address": "الرياض، حي النخيل"
}
```

**Store Types:**
- `supermarket` - سوبر ماركت
- `grocery` - بقالة
- `restaurant` - مطعم
- `pharmacy` - صيدلية
- `clothing` - محل ملابس
- `other` - أخرى

**Success Response (201):**
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": {
    "id": 1,
    "name": "محمد أحمد",
    "job": "مدير",
    "phone": "501234567",
    "email": "mohammed@example.com",
    "storeName": "متجر النور",
    "storePhone": "0112345678",
    "storeType": "supermarket",
    "address": "الرياض، حي النخيل",
    "status": "pending",
    "created_at": "2025-10-30T20:10:57+03:00",
    "updated_at": "2025-10-30T20:10:57+03:00"
  },
  "created_at": "2025-10-30T20:10:57+03:00"
}
```

**Error Response (400):**
```json
{
  "errors": {
    "phone": ["رقم الهاتف يجب أن يكون 9 أرقام بالضبط"],
    "email": ["البريد الإلكتروني غير صحيح"]
  }
}
```

---

### 2️⃣ Employee Application

**Endpoint:** `POST /api/employee-applications/`

**Content-Type:** `multipart/form-data`

**Form Data:**
- `name` (required): الاسم
- `email` (required): البريد الإلكتروني
- `phone` (required): رقم الهاتف (9 أرقام)
- `jobTitle` (required): المسمى الوظيفي
- `academicLevel` (required): المستوى الأكاديمي
- `cv` (optional): السيرة الذاتية (PDF, JPG, PNG - Max 5MB)

**Job Titles:**
- `junior_software_engineer` - مهندس سوفت وير مبتدئ
- `frontend_developer` - مطور واجهات أمامية
- `backend_developer` - مطور خلفية
- `ui_ux_designer` - مصمم UI/UX
- `project_manager` - مدير مشروع
- `other` - أخرى

**Academic Levels:**
- `high_school` - ثانوية عامة
- `diploma` - دبلوم
- `bachelor` - بكالوريوس
- `master` - ماجستير
- `phd` - دكتوراه

**Success Response (201):**
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": {
    "id": 1,
    "name": "أحمد محمد",
    "email": "ahmed@example.com",
    "phone": "501234567",
    "jobTitle": "frontend_developer",
    "academicLevel": "bachelor",
    "cv": "/media/portfolio/cvs/2025/10/cv.pdf",
    "cv_url": "http://localhost:8000/media/portfolio/cvs/2025/10/cv.pdf",
    "status": "pending",
    "created_at": "2025-10-30T20:10:57+03:00",
    "updated_at": "2025-10-30T20:10:57+03:00"
  },
  "cv_url": "http://localhost:8000/media/portfolio/cvs/2025/10/cv.pdf",
  "created_at": "2025-10-30T20:10:57+03:00"
}
```

---

### 3️⃣ Investment Request

**Endpoint:** `POST /api/investment-requests/`

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "خالد عبدالله",
  "phone": "501234567",
  "email": "khalid@example.com",
  "job": "مستثمر",
  "investmentAmount": "100k",
  "howDidYouHear": "LinkedIn - شاهدت إعلانكم"
}
```

**Investment Amounts:**
- `10k` - $10k
- `50k` - $50k
- `100k` - $100k
- `150k` - $150k
- `200k` - $200k
- `250k` - $250k أو أكثر

**Success Response (201):**
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": {
    "id": 1,
    "name": "خالد عبدالله",
    "phone": "501234567",
    "email": "khalid@example.com",
    "job": "مستثمر",
    "investmentAmount": "100k",
    "howDidYouHear": "LinkedIn - شاهدت إعلانكم",
    "status": "pending",
    "created_at": "2025-10-30T20:10:57+03:00",
    "updated_at": "2025-10-30T20:10:57+03:00"
  },
  "created_at": "2025-10-30T20:10:57+03:00"
}
```

---

## 🔒 Security Features

### Rate Limiting
- **Anonymous Users**: 10 requests/hour
- **Authenticated Users**: 1000 requests/hour
- يتم إرجاع HTTP 429 عند تجاوز الحد

### Validation
- جميع الحقول المطلوبة يتم التحقق منها
- رقم الهاتف: 9 أرقام بالضبط
- البريد الإلكتروني: صيغة صحيحة
- ملف السيرة الذاتية: حجم أقصى 5MB

### CORS
- مفعّل للـ Frontend
- Allowed Origins مُعرّفة في settings.py

---

## 🧪 Testing with cURL

### Store Request
```bash
curl -X POST http://localhost:8000/api/store-requests/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "محمد أحمد",
    "job": "مدير",
    "phone": "501234567",
    "email": "test@example.com",
    "storeName": "متجر النور",
    "storeType": "supermarket",
    "address": "الرياض"
  }'
```

### Employee Application
```bash
curl -X POST http://localhost:8000/api/employee-applications/ \
  -F "name=أحمد محمد" \
  -F "email=ahmed@example.com" \
  -F "phone=501234567" \
  -F "jobTitle=frontend_developer" \
  -F "academicLevel=bachelor" \
  -F "cv=@/path/to/cv.pdf"
```

### Investment Request
```bash
curl -X POST http://localhost:8000/api/investment-requests/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "خالد عبدالله",
    "phone": "501234567",
    "email": "khalid@example.com",
    "job": "مستثمر",
    "investmentAmount": "100k",
    "howDidYouHear": "LinkedIn"
  }'
```

---

## 📊 Admin Panel

### الوصول
```
http://localhost:8000/admin/portfolio/
```

### الميزات
- **عرض جميع الطلبات** مع فلترة حسب الحالة والتاريخ
- **تغيير الحالة** بسهولة من خلال Actions
- **بحث متقدم** في جميع الحقول
- **ألوان مميزة** لكل حالة
- **تحميل السير الذاتية** مباشرة

### حالات الطلبات

**Store Request:**
- `pending` - قيد الانتظار
- `in_progress` - قيد المعالجة
- `completed` - مكتمل
- `rejected` - مرفوض

**Employee Application:**
- `pending` - قيد الانتظار
- `reviewing` - قيد المراجعة
- `interview` - مقابلة
- `accepted` - مقبول
- `rejected` - مرفوض

**Investment Request:**
- `pending` - قيد الانتظار
- `reviewing` - قيد المراجعة
- `meeting` - اجتماع
- `accepted` - مقبول
- `rejected` - مرفوض

---

## 🎨 Frontend Integration

### React Example

```javascript
// Store Request
const submitStoreRequest = async (formData) => {
  try {
    const response = await fetch('http://localhost:8000/api/store-requests/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const errors = await response.json();
      console.error('Validation errors:', errors);
      return;
    }
    
    const data = await response.json();
    console.log('Success:', data);
    alert(data.message);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Employee Application with File Upload
const submitEmployeeApplication = async (formData) => {
  const form = new FormData();
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', formData.phone);
  form.append('jobTitle', formData.jobTitle);
  form.append('academicLevel', formData.academicLevel);
  if (formData.cv) {
    form.append('cv', formData.cv);
  }
  
  try {
    const response = await fetch('http://localhost:8000/api/employee-applications/', {
      method: 'POST',
      body: form,
    });
    
    const data = await response.json();
    if (response.ok) {
      console.log('Success:', data);
      alert(data.message);
    } else {
      console.error('Errors:', data.errors);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 🚀 Deployment Notes

### Environment Variables
لا توجد متغيرات بيئة إضافية مطلوبة. جميع الإعدادات موجودة في `settings.py`.

### Media Files
تأكد من إعداد MEDIA_ROOT و MEDIA_URL بشكل صحيح:
```python
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB
```

### CORS Settings
تأكد من إضافة Frontend URL إلى CORS_ALLOWED_ORIGINS:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # React/Vite
    "http://localhost:3000",  # React
    "https://your-portfolio-domain.com",
]
```

---

## 📝 Best Practices المطبقة

### ✅ Code Organization
- فصل كامل للـ Models, Serializers, Views, URLs
- Admin interfaces احترافية
- Validation شامل

### ✅ Security
- Rate limiting لمنع الـ abuse
- File upload validation
- Input sanitization
- CORS configuration

### ✅ User Experience
- رسائل خطأ واضحة بالعربية
- دعم القيم بالعربية والإنجليزية
- استجابات JSON منظمة

### ✅ Maintainability
- كود نظيف ومنظم
- تعليقات شاملة
- Logging للأخطاء
- Documentation كاملة

---

## 📞 Support

للأسئلة أو المشاكل، يرجى التواصل مع فريق Backend.

---

## 📄 License

هذا المشروع جزء من Smart Shopping Platform.
