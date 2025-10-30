import Footer from '../components/Footer';
import HeroStore from '../components/HeroStore';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import StatsItem from '../components/StatsItem';
import ImageSection from '../components/ImageSection';
import StoreTypesSidebar from '../components/StoreTypesSidebar';
import PageDecorations from '../components/PageDecorations';
import StoreBenefitsSection from '../components/StoreBenefitsSection';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function StorePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const features = [
    {
      title: 'تحليل البيانات',
      description: 'نقدم لك لوحة تحكم متطورة تمنحك رؤية واضحة لسلوك عملائك.',
      iconType: 'analytics' as const,
    },
    {
      title: 'ولاء العملاء',
      description: 'امنح عميلك تجربة تسوق سلسة وسريعة تجعله يعود إليك مرارًا وتكرارًا.',
      iconType: 'loyalty' as const,
    },
    {
      title: 'زيادة المبيعات',
      description: 'نحول كل عميل إلى فرصة شراء أكبر عبر عروض ذكية ومخصصة تظهر على التطبيق',
      iconType: 'sales' as const,
    },
    {
      title: 'سهولة التكامل',
      description: 'لا حاجة لتغيير أنظمتك المحاسبية. حلولنا تتكامل مع أنظمتك الحالية بكل سهولة.',
      iconType: 'integration' as const,
    },
    {
      title: 'ميزة تنافسية أمام المنافسين',
      description: 'المتجر الذي يقدم تجربة تسوق أسرع وشفافة يكسب سمعة أفضل.',
      iconType: 'competitive' as const,
    },
    {
      title: 'تقليل الطوابير والازدحام',
      description: 'تقليل وقت الانتظار, نفس عدد الموظفين يخدم عملاء أكثر في وقت أقل.',
      iconType: 'queue' as const,
    },
  ];

  const stats = [
    {
      title: 'نسبة نمو المشروع',
      value: '40% أخر 6 أشهر',
      iconType: 'growth' as const,
    },
    {
      title: 'عدد العملاء',
      value: '4820+ متجر',
      iconType: 'customers' as const,
    },
    {
      title: 'العمليات الناجحة',
      value: '5420+ متجر',
      iconType: 'operations' as const,
    },
    {
      title: 'عدد الفروع',
      value: '420+ متجر',
      iconType: 'branches' as const,
    },
    {
      title: 'عدد المتاجر',
      value: '300+ متجر',
      iconType: 'stores' as const,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <motion.div
        className="pt-[80px] md:pt-[120px]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroStore />
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="relative mx-auto mt-[80px] md:mt-[150px] px-4 md:px-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        {/* Decorations */}
        <PageDecorations />

        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <div className="mb-[50px] md:mb-[100px]">
            <SectionTitle
              title="وداعًا للطوابير، ومرحباً بالولاء!"
              subtitle="حوّل تجربة عملائك إلى ميزة تنافسية تعزز مبيعاتك وتبني ولاءً طويل الأمد"
            />
          </div>

          {/* Feature Cards Grid */}
          <motion.div
            className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-16 max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.5 }}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  iconType={feature.iconType}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative mx-auto mt-[100px] md:mt-[200px] px-4 md:px-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        {/* Decorations */}
        <PageDecorations />

        <div className="max-w-[1440px] mx-auto">
          {/* Section Title */}
          <div className="mb-[50px] md:mb-[100px]">
            <SectionTitle
              title="رحلة النمو التجاري مع S&F"
              subtitle="استراتيجيات ناجحة لنمو الأعمال وتحسين الأداء"
              alignment="right"
            />
          </div>

          {/* Stats Items */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-[35px] "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.4 }}>
                <StatsItem title={stat.title} value={stat.value} iconType={stat.iconType} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Image and Store Types Section */}
      <motion.section
        className="relative mx-auto mt-[100px] md:mt-[200px] max-w-[1440px] px-4 md:px-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-[100px]">
          {/* Store Types Sidebar */}
          <motion.div
            className="w-full lg:w-auto lg:shrink-0 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StoreTypesSidebar />
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full lg:w-auto lg:shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ImageSection />
          </motion.div>
        </div>
      </motion.section>

      {/* Store Benefits Section */}
      <motion.div
        className="relative mt-[140px] md:mt-[140px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <StoreBenefitsSection />
      </motion.div>

      {/* Footer */}
      <div className="relative mt-[100px] md:mt-[200px]">
        <Footer />
      </div>
    </div>
  );
}
