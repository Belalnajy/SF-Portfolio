# Backend API Documentation - S&F Portfolio

## 📋 Overview
REST API endpoints documentation for Django backend integration with React frontend forms.

---

## 🔗 API Endpoints

| Endpoint | Method | Content-Type | Description |
|----------|--------|--------------|-------------|
| `/api/store-requests/` | POST | application/json | Store service request form |
| `/api/employee-applications/` | POST | multipart/form-data | Employee application form |
| `/api/investment-requests/` | POST | application/json | Investment request form |

---

## 1️⃣ Store Service Request

### Endpoint
```
POST /api/store-requests/
Content-Type: application/json
```

### Request Body
```json
{
  "name": "string (required, max 255)",
  "job": "string (required, max 255)",
  "phone": "string (required, 9 digits)",
  "email": "string (required, valid email)",
  "storeName": "string (required, max 255)",
  "storePhone": "string (optional)",
  "storeType": "string (optional)",
  "address": "string (required, max 500)"
}
```

### Store Types
- سوبر ماركت
- بقالة
- مطعم
- صيدلية
- محل ملابس
- أخرى

### Validation
- **phone**: Must be exactly 9 digits (without +966)
- **email**: Valid email format

### Success Response (201)
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": { /* submitted data */ },
  "created_at": "2025-10-30T20:07:09+03:00"
}
```

### Error Response (400)
```json
{
  "errors": {
    "phone": ["رقم الهاتف يجب أن يكون 9 أرقام"],
    "email": ["البريد الإلكتروني غير صحيح"]
  }
}
```

---

## 2️⃣ Employee Application

### Endpoint
```
POST /api/employee-applications/
Content-Type: multipart/form-data
```

### Request Body
```json
{
  "name": "string (required, max 255)",
  "email": "string (required, valid email)",
  "phone": "string (required, 9 digits)",
  "jobTitle": "string (required, max 255)",
  "academicLevel": "string (required, max 255)",
  "cv": "file (optional, .pdf/.jpg/.jpeg/.png, max 5MB)"
}
```

### Job Titles
- مهندس سوفت وير مبتدئ
- مطور واجهات أمامية
- مطور خلفية
- مصمم UI/UX
- مدير مشروع
- أخرى

### Validation
- **phone**: Must be exactly 9 digits
- **email**: Valid email format
- **cv**: Max 5MB, allowed extensions: .pdf, .jpg, .jpeg, .png

### Success Response (201)
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": { /* submitted data */ },
  "cv_url": "http://localhost:8000/media/cvs/file.pdf",
  "created_at": "2025-10-30T20:07:09+03:00"
}
```

---

## 3️⃣ Investment Request

### Endpoint
```
POST /api/investment-requests/
Content-Type: application/json
```

### Request Body
```json
{
  "name": "string (required, max 255)",
  "phone": "string (required, 9 digits)",
  "email": "string (required, valid email)",
  "job": "string (required, max 255)",
  "investmentAmount": "string (required)",
  "howDidYouHear": "string (required, max 1000)"
}
```

### Investment Amounts
- 10k ($10k)
- 50k ($50k)
- 100k ($100k)
- 150k ($150k)
- 200k ($200k)
- 250k ($250k أو أكثر)

### Success Response (201)
```json
{
  "id": 1,
  "message": "تم إرسال الطلب بنجاح",
  "data": { /* submitted data */ },
  "created_at": "2025-10-30T20:07:09+03:00"
}
```

---

## 🔧 Django Configuration

### CORS Setup
```python
# settings.py
INSTALLED_APPS = ['corsheaders', ...]
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:3000",
]
CORS_ALLOW_CREDENTIALS = True
```

### Media Files
```python
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB
```

### Rate Limiting
```python
REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '10/hour',
    }
}
```

---

## 📝 Django Models

```python
from django.db import models
from django.core.validators import FileExtensionValidator

class StoreRequest(models.Model):
    name = models.CharField(max_length=255)
    job = models.CharField(max_length=255)
    phone = models.CharField(max_length=9)
    email = models.EmailField()
    store_name = models.CharField(max_length=255)
    store_phone = models.CharField(max_length=20, blank=True)
    store_type = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class EmployeeApplication(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=9)
    job_title = models.CharField(max_length=255)
    academic_level = models.CharField(max_length=255)
    cv = models.FileField(
        upload_to='cvs/',
        blank=True,
        null=True,
        validators=[FileExtensionValidator(['pdf', 'jpg', 'jpeg', 'png'])]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class InvestmentRequest(models.Model):
    INVESTMENT_CHOICES = [
        ('10k', '$10k'),
        ('50k', '$50k'),
        ('100k', '$100k'),
        ('150k', '$150k'),
        ('200k', '$200k'),
        ('250k', '$250k أو أكثر')
    ]
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=9)
    email = models.EmailField()
    job = models.CharField(max_length=255)
    investment_amount = models.CharField(max_length=10, choices=INVESTMENT_CHOICES)
    how_did_you_hear = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

---

## 🎯 Testing

### Test Store Request
```bash
curl -X POST http://localhost:8000/api/store-requests/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "محمد أحمد",
    "job": "مدير",
    "phone": "501234567",
    "email": "test@example.com",
    "storeName": "متجر النور",
    "storeType": "سوبر ماركت",
    "address": "الرياض"
  }'
```

### Test Employee Application
```bash
curl -X POST http://localhost:8000/api/employee-applications/ \
  -F "name=أحمد محمد" \
  -F "email=ahmed@example.com" \
  -F "phone=501234567" \
  -F "jobTitle=مطور واجهات أمامية" \
  -F "academicLevel=بكالوريوس" \
  -F "cv=@/path/to/cv.pdf"
```

### Test Investment Request
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

## 📧 Optional Features

### Email Notifications
Send confirmation emails after successful form submission

### Admin Panel
Register models in Django admin for easy management

### Logging
Log all form submissions for analytics

---

## 📞 Contact
For questions or issues, contact the backend team.
