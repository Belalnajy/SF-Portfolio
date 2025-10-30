import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { User, Briefcase, Mail, Store, Phone, MapPin } from 'lucide-react';
import { submitStoreRequest, formatApiErrors } from '../services/api';
// سأستخدم هذا للانتقال إلى صفحة النجاح
interface FormPageProps {
  onSuccess?: () => void;
}

export default function StorePageForm({ onSuccess }: FormPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    phone: '',
    email: '',
    storeName: '',
    storePhone: '',
    storeType: '',
    address: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const storeTypes = ['سوبر ماركت', 'بقالة', 'مطعم', 'صيدلية', 'محل ملابس', 'أخرى'];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.job.trim()) newErrors.job = 'المسمى الوظيفي مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.storeName.trim()) newErrors.storeName = 'اسم المتجر مطلوب';
    if (!formData.address.trim()) newErrors.address = 'العنوان مطلوب';

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    // Phone validation
    if (formData.phone && !/^[0-9]{9}$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف يجب أن يكون 9 أرقام';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await submitStoreRequest(formData);
      
      // Navigate to success page
      navigate('/success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      const apiErrors = formatApiErrors(error);
      setErrors(apiErrors);
      
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="pt-[130px] md:pt-[120px] pb-8 md:pb-12"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] mb-8 md:mb-12 lg:mb-[70px]"
        >
          <div className="flex gap-[10px] items-center justify-end">
            <p
              className="font-extrabold leading-[normal] not-italic text-[#2c4653] text-base sm:text-lg md:text-[20px]"
              dir="auto"
            >
              نموذج طلب الخدمة
            </p>
            <div className="bg-[#5dba47] h-[30px] md:h-[40px] rounded-br-[20px] rounded-tl-[20px] shrink-0 w-[6px] md:w-[8px]" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]"
        >
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-[15px] md:rounded-[20px] shadow-0 md:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] overflow-clip sm:p-6 md:p-10 lg:p-[60px] max-w-[1360px] mx-auto"
          >
            {/* Notes */}
            <div className="mb-8 md:mb-12 lg:mb-[60px] space-y-4 md:space-y-[20px]">
              <div className="flex gap-2 md:gap-[8px] items-start justify-end">
                <p
                  className="leading-[normal] not-italic text-sm md:text-[15px] text-[rgba(44,70,83,0.8)] text-right"
                  dir="auto"
                >
                  <span>{`انضم اليوم وامنح عملاءك تجربة تسوّق أسرع وأسهل مع `}</span>
                  <span className="font-bold">{`S&F`}</span>.
                </p>
                <div className="h-4 md:h-[19px] w-2 md:w-[8px] shrink-0">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8 19"
                  >
                    <circle cx="4" cy="15" fill="#5DBA47" r="4" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-2 md:gap-[8px] items-start justify-end">
                <p
                  className="leading-[normal] not-italic text-sm md:text-[15px] text-[rgba(44,70,83,0.8)] text-right"
                  dir="auto"
                >
                  كل خطوة نحو التحول الذكي تعني مبيعات أكثر ورضا أكبر لعملائك.
                </p>
                <div className="h-4 md:h-[19px] w-2 md:w-[8px] shrink-0">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 8 19"
                  >
                    <circle cx="4" cy="15" fill="#5DBA47" r="4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Form Inputs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] mb-6 md:mb-8 lg:mb-[40px]">
              {/* Name Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  أسم مقدم الطلب
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="الأسم الرباعي"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.name ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="auto"
                      />
                      <div className="shrink-0">
                        <User className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.name}</p>
                  )}
                </div>
              </div>

              {/* Job Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  المسمى الوظيفي
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.job}
                        onChange={e => setFormData({ ...formData, job: e.target.value })}
                        placeholder="الصفة الوظيفية في المتجر"
                        className={`flex-1 font-semibold text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.job ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="auto"
                      />
                      <div className="shrink-0">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                  {errors.job && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.job}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] mb-6 md:mb-8 lg:mb-[40px]">
              {/* Phone Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  رقم الهاتف
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="تأكد من استخدام رقمك الشخصي"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.phone ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="ltr"
                      />
                      <p
                        className="font-bold text-[#5dba47] text-base md:text-lg lg:text-[18px] shrink-0"
                        dir="auto"
                      >
                        +966
                      </p>
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  البريد الإلكتروني
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@example.com"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.email ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="ltr"
                      />
                      <div className="shrink-0">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[40px] mb-6 md:mb-8 lg:mb-[40px]">
              {/* Store Name Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end lg:col-span-2">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  اسم المتجر
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.storeName}
                        onChange={e => setFormData({ ...formData, storeName: e.target.value })}
                        placeholder="اسم المتجر أو العلامة التجارية"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.storeName ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="auto"
                      />
                      <div className="shrink-0">
                        <Store className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                  {errors.storeName && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.storeName}</p>
                  )}
                </div>
              </div>

              {/* Store Phone Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  رقم المتجر
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="tel"
                        value={formData.storePhone}
                        onChange={e => setFormData({ ...formData, storePhone: e.target.value })}
                        placeholder="رقم المتجر"
                        className="flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)]"
                        dir="auto"
                      />
                      <div className="shrink-0">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[40px] mb-6 md:mb-8 lg:mb-[40px]">
              {/* Store Type Dropdown */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  نوع المتجر
                </label>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] w-full flex items-center justify-between px-3 md:px-[15px] py-0 transition-colors ${
                      formData.storeType
                        ? 'bg-[#5dba47] hover:bg-[#4da338]'
                        : 'bg-white border border-[rgba(44,70,83,0.2)] hover:border-[#5dba47]'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <div
                        className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      >
                        <div className="h-[5px] md:h-[6px] w-[16px] md:w-[20px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 22 8"
                          >
                            <path
                              d="M1 1L11 7L21 1"
                              stroke={formData.storeType ? 'white' : '#5DBA47'}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p
                      className={`font-semibold text-xs md:text-sm lg:text-[14px] text-right ${
                        formData.storeType ? 'text-white' : 'text-[rgba(44,70,83,0.6)]'
                      }`}
                      dir="auto"
                    >
                      {formData.storeType || 'اختر نوع المتجر'}
                    </p>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[rgba(44,70,83,0.2)] rounded-[12px] md:rounded-[15px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
                      {storeTypes.map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, storeType: type });
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-3 md:px-[15px] py-2 md:py-[10px] text-sm md:text-base text-right hover:bg-[rgba(93,186,71,0.1)] transition-colors first:rounded-t-[12px] md:first:rounded-t-[15px] last:rounded-b-[12px] md:last:rounded-b-[15px]"
                          dir="auto"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Address Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end lg:col-span-2">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  عنوان المتجر
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                        placeholder="المدينة ,الحي ,الشارع"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.address ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                        dir="auto"
                      />
                      <div className="shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#5DBA47]" />
                      </div>
                    </div>
                  </div>
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[12px] text-right">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-8 md:mt-12 lg:mt-[60px]">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`h-[50px] md:h-[60px] lg:h-[65px] px-6 md:px-8 lg:px-[30px] py-3 md:py-[15px] rounded-[12px] md:rounded-[15px] w-full sm:w-[280px] md:w-[300px] transition-colors flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#5dba47] hover:bg-[#4da338]'
                }`}
              >
                <p
                  className="font-bold text-base md:text-lg lg:text-[18px] text-white text-center"
                  dir="auto"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </p>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
