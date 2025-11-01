import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import DecorativeBackground from '../components/DecorativeBackground';
import ExploreSection from '@/components/ExploreSection';

// Data Constants
const TRADITIONAL_VS_SMART = [
  {
    type: 'traditional',
    text: 'في المتاجر التقليدية، يضطر العميل إلى التنقّل بين الأقسام، البحث يدويًا، انتظار المساعدة، والوقوف في طوابير طويلة للدفع',
  },
  {
    type: 'smart',
    text: 'في المتاجر الذكية، كل شيء أسرع وأكثر تخصيصًا — من لحظة الدخول، يجد العميل ترحيبًا رقميًا، إرشادًا تلقائيًا للمنتجات المطلوبة، وربما حتى عروضًا حصرية بناءً على تفضيلاته السابقة',
  },
];

const SMART_PAYMENT_FEATURES = [
  'أنظمة الدفع الذكي (Self-checkout)',
  'تطبيقات الدفع عبر الهاتف',
  'كاميرات تتابع المنتجات المأخوذة وتخصمها تلقائيًا',
  'الخروج من المتجر دون الوقوف ثانية واحدة في طابور',
];

const AI_ANALYSIS_POINTS = [
  'ماذا يشتري العميل؟',
  'ماذا يفضّل؟',
  'كم يقضي وقتًا في كل قسم؟',
  'تقديم عروض فورية مخصصة تظهر على الشاشات أو تُرسل عبر التطبيق',
];

const Article2Page = () => {
  return (
    <div className="min-h-screen bg-white mt-[130px] relative" dir="rtl">
      {/* Decorative Background */}
      <DecorativeBackground />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/article-hero-section.png"
            alt="Customer Experience Transformation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative bottom-[-290px] md:bottom-[-480px] container px-4 sm:px-6 lg:px-8 flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-right max-w-3xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              كيف يمكن للتقنية أن تحوّل
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight mt-4">
              <span className="text-[#5DBA47]">تجربة العميل داخل المتجر؟</span>
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
          <p className="text-lg sm:text-xl md:text-2xl text-right text-[#2C4653CC]/80 leading-relaxed">
            لم يعد العميل يبحث فقط عن منتج جيد، بل أصبح يبحث عن{' '}
            <span className="text-[#5DBA47] font-bold">تجربة تسوق ذكية، سريعة، ومريحة</span>.
            التقنية الحديثة غيّرت مفهوم "زيارة المتجر" من مجرد عملية شراء إلى رحلة متكاملة تلبي
            الاحتياج وتُراعي الوقت وتُدهش بالتخصيص.
          </p>
        </motion.section>

        {/* Traditional vs Smart Shopping Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-8 text-right">
            1. الفرق بين تجربة التسوق التقليدية والذكية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TRADITIONAL_VS_SMART.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 ${
                  item.type === 'traditional'
                    ? 'bg-red-50 border-r-4 border-red-500'
                    : 'bg-green-50 border-r-4 border-[#5DBA47]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      item.type === 'traditional' ? 'bg-red-500' : 'bg-[#5DBA47]'
                    }`}
                  >
                    {item.type === 'traditional' ? (
                      <span className="text-white text-lg font-bold">✕</span>
                    ) : (
                      <Check className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <p className="text-[#2C4653CC]/80 text-base md:text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Smart Payment Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 bg-gradient-to-br from-[#5DBA47]/5 to-transparent rounded-2xl p-6 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-6 text-right">
            2. كيف تقضي التقنية على مشكلة الانتظار والطوابير؟
          </h2>
          <p className="text-lg md:text-xl text-[#2C4653CC]/80 mb-8 text-right leading-relaxed">
            من خلال أنظمة الدفع الذكي (Self-checkout) وتطبيقات الدفع عبر الهاتف، وحتى الكاميرات التي
            تتابع المنتجات المأخوذة وتخصمها تلقائيًا، أصبح بإمكان العميل الخروج من المتجر دون الوقوف
            ثانية واحدة في طابور.
          </p>

          <div className="space-y-4 bg-white/50 rounded-xl p-6 md:p-8">
            {SMART_PAYMENT_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5DBA47] flex-shrink-0"></div>
                <p className="text-[#2C4653CC] text-base md:text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-[#5DBA47]/10 to-transparent rounded-xl p-6 border-r-4 border-[#5DBA47]">
            <p className="text-lg md:text-xl text-[#2C4653] font-semibold text-right">
              التقنيات هذه لا توفّر الوقت فقط، بل تمنح العميل شعورًا بالتحكم والراحة.
            </p>
          </div>
        </motion.section>

        {/* AI Analysis Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 text-right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-6 leading-relaxed">
                3. دور الذكاء الاصطناعي في فهم تفضيلات العملاء وتخصيص العروض
              </h2>
              <p className="text-lg md:text-xl text-[#2C4653CC]/80 mb-6 leading-relaxed">
                يقوم الذكاء الاصطناعي بتحليل سلوك العميل داخل المتجر:
              </p>
              <div className="space-y-4">
                {AI_ANALYSIS_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#5DBA47] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[#2C4653CC] text-base md:text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[#5DBA47]/10 rounded-xl p-6">
                <p className="text-base md:text-lg text-[#2C4653] font-semibold">
                  بناءً على هذه البيانات، يمكن تقديم عروض فورية مخصصة، مما يجعل العميل يشعر بأن
                  المتجر "يفهمه" ويقدّر رغباته.
                </p>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <img
                src="/article-page-section.png"
                alt="AI Analysis"
                className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* S&F Success Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 bg-gray-50 rounded-2xl p-6 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-6 text-right">
            4. كيف يرفع <span className="text-[#5DBA47]">Smart & Fast Shopping</span> رضا العملاء
            بنسبة تتجاوز 90%؟
          </h2>
          <p className="text-lg md:text-xl text-[#2C4653CC]/80 mb-8 text-right leading-relaxed">
            عندما يُمنح العميل تجربة تسوّق ذكية وسلسة، تقلّ التوترات، تزيد سرعة اتخاذ القرار، ويشعر
            بالرضا من البداية للنهاية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#5DBA47]">90%</span>
                <p className="text-lg md:text-xl text-[#2C4653] mt-2">نسبة رضا العملاء</p>
              </div>
              <p className="text-base md:text-lg text-[#2C4653CC]/80 text-center">
                في المتاجر الذكية التي تعتمد تقنيات Smart & Fast Shopping
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-4">
                <span className="text-5xl md:text-6xl font-bold text-red-500">60-70%</span>
                <p className="text-lg md:text-xl text-[#2C4653] mt-2">نسبة رضا العملاء</p>
              </div>
              <p className="text-base md:text-lg text-[#2C4653CC]/80 text-center">
                في التجارب التقليدية
              </p>
            </div>
          </div>
        </motion.section>

        {/* Conclusion Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-[#5DBA47]/10 to-transparent rounded-2xl p-8 md:p-12 text-right border-r-4 border-[#5DBA47]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C4653] mb-6">
              الخلاصة: التقنية لم تُلغِ دور المتجر، بل طوّرته
            </h2>
            <p className="text-lg md:text-xl text-[#2C4653CC]/80 leading-relaxed mb-4">
              من خلال أدوات ذكية وذكاء اصطناعي مدروس، يمكن لكل متجر أن يحوّل زواره إلى عملاء دائمين،
              ويوفّر تجربة تسوّق تُشبه المستقبل.
            </p>
            <p className="text-xl md:text-2xl text-[#5DBA47] font-bold">
              ابدأ رحلتك نحو التحول الذكي مع Smart & Fast Shopping
            </p>
          </div>
        </motion.section>

        <ExploreSection />
      </div>
    </div>
  );
};

export default Article2Page;
