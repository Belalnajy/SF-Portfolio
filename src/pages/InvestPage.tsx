import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase } from 'lucide-react';
import { submitInvestmentRequest, formatApiErrors } from '../services/api';

interface InvestPageProps {
  onSuccess?: () => void;
}

export default function InvestPage({ onSuccess }: InvestPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    job: '',
    investmentAmount: '10k',
    howDidYouHear: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const investmentOptions = [
    { value: '10k', label: '$10k' },
    { value: '50k', label: '$50k' },
    { value: '100k', label: '$100k' },
    { value: '150k', label: '$150k' },
    { value: '200k', label: '$200k' },
    { value: '250k', label: '$250k أو أكثر' },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.job.trim()) newErrors.job = 'الصفة/الجهة مطلوب';
    if (!formData.howDidYouHear.trim()) newErrors.howDidYouHear = 'هذا الحقل مطلوب';

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
      await submitInvestmentRequest(formData);
      
      navigate('/success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      const apiErrors = formatApiErrors(error);
      setErrors(apiErrors);
      
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
              أستثمر مع S&F
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
            className="relative bg-white rounded-[15px] md:rounded-[20px] shadow-0 md:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] overflow-clip sm:p-8 md:p-10 lg:p-[60px] max-w-[1360px] mx-auto"
          >
            {/* Notes */}
            <div className="mb-8 md:mb-12 lg:mb-[60px] space-y-4 md:space-y-[20px]">
              <div className="flex gap-2 md:gap-[8px] items-start justify-end">
                <p
                  className="leading-[normal] not-italic text-sm md:text-[15px] text-[rgba(44,70,83,0.8)] text-right"
                  dir="auto"
                >
                  معنا فرصة ذهبية للأستثمار في أسواقنا الحديثة ونبني أثرًا حقيقيًا، نقطع الطريق نحو
                  الذكاء
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
                  استثمارات سريع الإنتشار وضمن قانونيين بالشفافية وتنوع المستدام وتحقيق عوائد متوسطة
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
                  الاسم الكامل
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="الاسم الرباعي"
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

              {/* Email Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  البريد الالكتروني
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example @example.com"
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] mb-6 md:mb-8 lg:mb-[40px]">
              {/* Phone Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  رقم الواتس
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

              {/* Job Field */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full"
                  dir="auto"
                >
                  الصفة/الجهة
                </label>
                <div className="relative w-full">
                  <div className="h-[50px] md:h-[60px] lg:h-[65px] rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)] flex items-center">
                    <div className="flex gap-2 md:gap-[10px] h-full items-center justify-end px-3 md:px-[15px] py-0 w-full">
                      <input
                        type="text"
                        value={formData.job}
                        onChange={e => setFormData({ ...formData, job: e.target.value })}
                        placeholder="مستثمر من شركة/صندوق/مكتب/خاص"
                        className={`flex-1 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] ${errors.job ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
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

            {/* Investment Amount and How Did You Hear - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] mb-8 md:mb-12 lg:mb-[60px]">
              {/* How Did You Hear */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full block mb-2"
                  dir="auto"
                >
                  كيف سمعت عنّا؟
                </label>
                <div className="relative w-full">
                  <div className="rounded-[12px] md:rounded-[15px] border border-[rgba(44,70,83,0.2)]">
                    <textarea
                      value={formData.howDidYouHear}
                      onChange={e => setFormData({ ...formData, howDidYouHear: e.target.value })}
                      placeholder="صديق، متابعة LinkedIn، خبر صحفي..."
                      className={`w-full min-h-[60px] md:min-h-[60px] px-3 md:px-[15px] py-3 md:py-4 font-semibold text-xs md:text-sm lg:text-[14px] text-right bg-transparent outline-none placeholder:text-[rgba(44,70,83,0.6)] rounded-[12px] md:rounded-[15px] resize-none ${errors.howDidYouHear ? 'text-red-500' : 'text-[rgba(44,70,83,0.6)]'}`}
                      dir="auto"
                    />
                  </div>
                  {errors.howDidYouHear && (
                    <p className="text-red-500 text-sm mt-1 text-right">{errors.howDidYouHear}</p>
                  )}
                </div>
              </div>
              {/* Investment Amount */}
              <div className="flex flex-col gap-1 md:gap-[5px] items-end">
                <label
                  className="font-bold text-[#2c4653] text-sm md:text-[15px] text-right w-full block mb-4"
                  dir="auto"
                >
                  قيمة الاستثمار المتوقعة
                </label>
                <div className="flex flex-wrap gap-2 md:gap-3 justify-end" dir="rtl">
                  {investmentOptions.map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, investmentAmount: option.value })}
                      className={`px-[9px] sm:px-3 md:px-5 py-5 md:py-6 rounded-[10px] md:rounded-[12px] font-semibold text-[13px] sm:text-xs md:text-sm whitespace-nowrap transition-all ${
                        formData.investmentAmount === option.value
                          ? 'bg-[#5dba47] text-white shadow-md'
                          : 'bg-white border border-[rgba(44,70,83,0.2)] text-[#2c4653] hover:border-[#5dba47]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
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
            <div className="flex justify-center">
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
