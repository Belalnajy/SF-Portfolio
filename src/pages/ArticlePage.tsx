import { motion } from 'framer-motion';
import { BadgePercent, Check, ScanLine, TrendingUp } from 'lucide-react';
import DecorativeBackground from '../components/DecorativeBackground';
import ExploreSection from '@/components/ExploreSection';

// Data Constants
const DIGITAL_TRANSFORMATION_FEATURES = [
  'الدمج الذكي والسريع عبر الهاتف بدون تطوير',
  'أنظمة الفوترة والتحقق الذكية التي تضمن الشفافية والدقة',
  'تحليلات فورية لسلوك العملاء والمبيعات',
  'عروض موجهة وبرامج ولاء رقمية تزيد من تكرار الزيارة',
];

const STORE_PROBLEMS = [
  'طوابير الدفع الطويلة لا تعني فقط الإزعاج، بل عملاء تتعامل دون إتمام شراء',
  'البحث اليدوي عن المنتجات يعني ضياع فرص بيع إضافية',
  'ضعف التواصل مع العملاء يؤدي إلى انخفاض الولاء وتكرار الزيارة',
  'كل دقيقة انتظار أمام الكاشير = خسارة محتملة في الإيرادات',
];

const DIGITAL_OPPORTUNITIES = [
  'تقليل وقت المحاسبة بنسبة تصل إلى 85%',
  'رفع المبيعات بحد أدنى 26% عبر تحسين تجربة التسوق وتقليل الازدحام',
  'تحسين دقة التسعير وإدارة العروض',
  'الحصول على بيانات حقيقية لسلوك العملاء تساعد في التخطيط الذكي للمخزون والمبيعات',
];

interface PartnershipCard {
  icon: 'phone' | 'trending' | 'badge' | 'scan' | 'logo';
  title: string;
}

const PARTNERSHIP_CARDS: PartnershipCard[] = [
  {
    icon: 'phone',
    title: 'نظام الدفع الذاتي عبر الهاتف لتجربة سريعة ومرنة',
  },
  {
    icon: 'trending',
    title: 'أدوات تحليل فورية للأداء والمبيعات',
  },
  {
    icon: 'badge',
    title: 'عروض ذكية موجهة حسب تفضيلات العملاء',
  },
  {
    icon: 'scan',
    title: 'أجهزة تحقق وشاشات تفاعلية داخل الفروع',
  },
  {
    icon: 'logo',
    title: 'لأن عميلك أغلى، خلينا تسوقه أذكى.',
  },
];

interface Statistic {
  percentage: string;
  description: string;
}

const SUCCESS_STATS: Statistic[] = [
  { percentage: '82%', description: 'نسبة تقليص وقت الانتظار' },
  { percentage: '14%', description: 'نسبة ارتفاع متوسط القائمة الشرائية' },
  { percentage: '35%', description: 'نسبة انخفاض حالات إلغاء المشتريات عند الكاشير' },
];

const VISION_2030_CONTRIBUTIONS = [
  'رفع كفاءة المنشآت التجارية عبر أدوات رقمية محلية الصنع',
  'خلق بيئة تسوق ذكية ومستدامة تخدم المجتمع والاقتصاد معًا',
  'دعم التحول الرقمي في قطاع التجزئة السعودي',
];

const ArticlePage = () => {
  // Helper function to render partnership card icon
  const renderPartnershipIcon = (iconType: string) => {
    const iconClasses = 'w-10 h-10 md:w-12 md:h-12';
    const containerClasses =
      'p-2 bg-[#5DBA470D] rounded-4xl flex items-center justify-center flex-shrink-0';

    switch (iconType) {
      case 'phone':
        return (
          <div className={containerClasses}>
            <svg
              className={`${iconClasses} text-[#5DBA47]`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        );
      case 'trending':
        return (
          <div className={containerClasses}>
            <TrendingUp className={`${iconClasses} text-[#5DBA47]`} />
          </div>
        );
      case 'badge':
        return (
          <div className={containerClasses}>
            <BadgePercent className={`${iconClasses} text-[white] fill-[#5DBA47]`} />
          </div>
        );
      case 'scan':
        return (
          <div className={containerClasses}>
            <ScanLine className={`w-10 h-10 text-[#5DBA47]`} />
          </div>
        );
      case 'logo':
        return (
          <div className={containerClasses}>
            <img src="/part-logo-icon.png" alt="S&F" className="w-12 h-12 object-contain" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white mt-[130px] relative" dir="rtl">
      {/* Decorative Background */}
      <DecorativeBackground />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/article-hero-section.png"
            alt="Digital Transformation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative bottom-[-290px] md:bottom-[-480px] container  px-4 sm:px-6 lg:px-8 flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-right max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight">
              أهمية التحول الرقمي...
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight mt-6">
              <span className="text-[#5DBA47]">في عالم التسوق</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-right text-[#2C4653CC]/60 mb-12 md:mb-20 leading-relaxed">
            في عصر السرعة والتطور، أصبح التحول الرقمي أحد أهم العوامل التي غيّرت شكل عالم التسوق
            والتجارة الإلكترونية. لم يعد التسوق مقتصرًاعلى زيارة المتاجر التقليدية، بل أصبح الاعتماد
            على التسوق الإلكتروني والمنصات الرقمية هو الخيار الأول لمعظم العملاء حول العالم .
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-right">
            ما هو التحول الرقمي في التسوق؟
          </h2>
          <div className="prose text-right text-lg sm:text-xl md:text-2xl lg:text-[30px] max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              يشهد قطاع التجزئة <span className="text-[#5DBA47]">السعودي</span> تحولًا رقميًا غير
              مسبوق ضمن مستهدفات <span className="text-[#5DBA47]">رؤية السعودية 2030</span>، التي
              تسعى لرفع كفاءة الاقتصاد الوطني وتنويع مصادر الدخل عبر الابتكار التقني, في عالم أصبح
              فيه الوقت والسهولة من أهم أولويات العميل، تواجه المتاجر التقليدية تحديًا حقيقيًا في
              مواكبة التوقعات المتزايدة لعملائها، الذين يبحثون عن تجربة تسوق أسرع، أذكى، وأكثر
              تفاعلية, لكن التحول الرقمي لا يعني فقط “إضافة التقنية”، بل يعني تحقيق نمو حقيقي في
              المبيعات وتقليل التكاليف التشغيلية من خلال حلول ذكية متكاملة تربط العميل بالمتجر في
              تجربة رقمية سلسة .
            </p>
          </div>
        </motion.section>

        {/* What is Digital Transformation Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 relative"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center overflow-hidden  md:bg-transparent rounded-2xl md:rounded-none p-6 md:p-0">
            {/* Background Shape - Hidden on mobile */}
            <div className="absolute left-0 z-0 hidden md:block">
              <img src="/Rectangle 27.png" alt="Background" className="h-full object-cover" />
            </div>

            {/* Content */}
            <div className="order-1 md:order-1 text-right px-0 md:pr-12 py-4 md:py-8 relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-4 md:mb-8">
                ما هو التحول الرقمي في قطاع التجزئة؟
              </h2>

              <p className="text-[#2C4653CC]/80  md:text-[28px]  mb-4 md:mb-6">
                التحول الرقمي هو عملية إعادة ابتكار تجربة التسوق بالكامل باستخدام تقنيات تربط بين
                العمليات داخل المتجر وسلوك العميل لحظيًا, من أبرز عناصر هذا التحول :
              </p>

              <div className="space-y-3 md:space-y-4">
                {DIGITAL_TRANSFORMATION_FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="p-1 rounded-full bg-[#5DBA47] flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[#2C4653CC]/80 text-sm md:text-xl mt-2">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-2 md:order-2 relative z-10 p-0 md:p-12">
              <img
                src="/article-page-section.png"
                alt="Smart Shopping"
                className="w-full h-[260px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center  rounded-2xl overflow-hidden p-6 md:p-12">
            {/* Content */}
            <div className="order-1 md:order-2 text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-4 md:mb-6 leading-relaxed">
                الكثير من المتاجر اليوم تخسر دون أن تشعر بسبب مشاكل بسيطة ولكنها مؤثرة :
              </h2>

              <div className="space-y-3 md:space-y-4">
                {STORE_PROBLEMS.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg md:text-xl font-bold">✕</span>
                    </div>
                    <p className="text-[#2C4653CC] text-base md:text-xl mt-1">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="/article-2.png"
                alt="Store Problems"
                className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 bg-gradient-to-br from-[#5DBA47]/5 to-transparent rounded-2xl"
        >
          <div className="flex flex-col items-center justify-center p-6 md:p-12 max-w-5xl mx-auto">
            {/* Content */}
            <div className="text-right w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-4 md:mb-6 leading-relaxed">
                الفرص التي يقدمها التحول الرقمي للمتاجر
              </h2>

              <p className="text-[#2C4653] text-base md:text-2xl mb-6 md:mb-8">
                باستخدام حلول مثل{' '}
                <span className="text-[#5DBA47] font-bold">Smart & Fast Shopping</span> يمكن للمتاجر
                أن تحقق قفزة في الكفاءة التشغيلية والمبيعات :
              </p>

              <div className="space-y-4 md:space-y-5 bg-white/50 rounded-xl p-6 md:p-8">
                {DIGITAL_OPPORTUNITIES.map((opportunity, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5DBA47] flex-shrink-0"></div>
                    <p className="text-[#2C4653CC] text-base md:text-xl leading-relaxed">{opportunity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Partnership Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 bg-gray-50 rounded-2xl md:p-12"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-8xl mx-auto">
            {PARTNERSHIP_CARDS.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-right shadow-md hover:shadow-lg transition-shadow w-full sm:w-[calc(60%-1rem)] lg:w-[calc(26%-1.5rem)]"
              >
                <div className="flex items-center justify-center gap-4">
                  {renderPartnershipIcon(card.icon)}
                  <div>
                    <h3 className="text-base md:text-xl text-[#2C4653]/80 mb-1 w-[270px]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Side - Stats */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#2C4653] leading-tight mb-4">
                قصة نجاح تجريبية (المرحلة الأولى)
              </h2>
              <p className="text-[#2C4653CC]/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
                ضمن المرحلة الأولى لاختبار النظام في أحد المتاجر الكبرى
              </p>
              {SUCCESS_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#ffff] p-6 shadow-[#00000028] shadow-[0px_0px_10px_0px] hover:shadow-[0px_0px_20px_0px] transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5DBA47] flex-shrink-0"></div>
                    <p className="text-[#2C4653CC]/80 text-base md:text-lg lg:text-xl">
                      {stat.description}
                    </p>
                  </div>
                  <span className="text-[#5DBA47] text-3xl md:text-4xl lg:text-[32px] font-bold">
                    {stat.percentage}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Side - Title */}
            <div className="text-right">
              <h3 className="text-xl md:text-2xl lg:text-[37px] font-bold text-[#2C4653] mb-6 leading-relaxed">
                مساهمة <span className="text-[#5DBA47]">Smart & Fast Shopping</span> في تحقيق أهداف
                <span className="text-[#5DBA47]"> رؤية 2030</span>
              </h3>
              <div className="space-y-6">
                {VISION_2030_CONTRIBUTIONS.map((contribution, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-[#ffff] p-6 shadow-[#00000028] shadow-[0px_0px_10px_0px] hover:shadow-[0px_0px_20px_0px] transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5DBA47] flex-shrink-0"></div>
                      <p className="text-[#2C4653CC]/80 text-base md:text-lg lg:text-xl">
                        {contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <ExploreSection />
      </div>
    </div>
  );
};

export default ArticlePage;
