// API Service for Portfolio Forms
const API_BASE_URL = 'https://belalnagy-smart-fast-api-demo.hf.space';

// Type definitions
export interface StoreRequestData {
  name: string;
  job: string;
  phone: string;
  email: string;
  storeName: string;
  storePhone?: string;
  storeType?: string;
  address: string;
}

export interface EmployeeApplicationData {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  academicLevel: string;
  cv?: File | null;
}

export interface InvestmentRequestData {
  name: string;
  phone: string;
  email: string;
  job: string;
  investmentAmount: string;
  howDidYouHear: string;
}

export interface ApiResponse<T = any> {
  id?: number;
  message: string;
  data?: T;
  created_at?: string;
  cv_url?: string;
}

export interface ApiError {
  errors: {
    [key: string]: string[];
  };
}

// Store Type Mapping (Arabic to English)
const storeTypeMap: { [key: string]: string } = {
  'سوبر ماركت': 'supermarket',
  بقالة: 'grocery',
  مطعم: 'restaurant',
  صيدلية: 'pharmacy',
  'محل ملابس': 'clothing',
  أخرى: 'other',
};

// Job Title Mapping (Arabic to English)
const jobTitleMap: { [key: string]: string } = {
  'مهندس سوفت وير مبتدئ': 'junior_software_engineer',
  'مطور واجهات أمامية': 'frontend_developer',
  'مطور خلفية': 'backend_developer',
  'مصمم UI/UX': 'ui_ux_designer',
  'مدير مشروع': 'project_manager',
  أخرى: 'other',
};

/**
 * Submit Store Service Request
 */
export const submitStoreRequest = async (data: StoreRequestData): Promise<ApiResponse> => {
  try {
    const payload = {
      name: data.name,
      job: data.job,
      phone: data.phone,
      email: data.email,
      storeName: data.storeName,
      storePhone: data.storePhone || '',
      storeType: storeTypeMap[data.storeType || ''] || data.storeType || 'other',
      address: data.address,
    };

    const response = await fetch(`${API_BASE_URL}/api/store-requests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Submit Employee Application
 */
export const submitEmployeeApplication = async (
  data: EmployeeApplicationData
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('jobTitle', jobTitleMap[data.jobTitle] || data.jobTitle || 'other');
    formData.append('academicLevel', data.academicLevel);

    if (data.cv) {
      formData.append('cv', data.cv);
    }

    const response = await fetch(`${API_BASE_URL}/api/employee-applications/`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Submit Investment Request
 */
export const submitInvestmentRequest = async (
  data: InvestmentRequestData
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/investment-requests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Format API errors for display
 */
export const formatApiErrors = (error: any): { [key: string]: string } => {
  if (error && error.errors) {
    const formattedErrors: { [key: string]: string } = {};
    Object.keys(error.errors).forEach(key => {
      formattedErrors[key] = error.errors[key].join(', ');
    });
    return formattedErrors;
  }
  return { general: 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.' };
};
