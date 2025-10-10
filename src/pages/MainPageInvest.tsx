import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { TrendingUp, Users, Target, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import bgInvest from "/bg-invest.png";

export default function MainPageInvest() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 text-[#5dba47]" />,
      title: "سوق ضخم",
      description: "دخول سوق البقالة المستهدف في المملكة والخليج بإيرادات 78.5 مليار ريال"
    },
    {
      icon: <Target className="w-12 h-12 md:w-16 md:h-16 text-[#5dba47]" />,
      title: "حل مبتكر",
      description: "تقنية تجربة التسوق داخل المتاجر التقليدية عبر الدمج الذكي، العروض، والإعلانات"
    },
    {
      icon: <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-[#5dba47]" />,
      title: "طلب متنام",
      description: "طلب متنام للمتاجر والمستثمرين يطالبون عن خدمات التحول الرقمي، وإدارة الأرباح"
    },
    {
      icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-[#5dba47]" />,
      title: "فريق مؤسس قوي",
      description: "يجمع بين الخبرة التقنية، التطوير الذكاء الاصطناعي وإدارة المشاريع"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-[130px] md:pt-[150px] pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        {/* Background Image - Desktop */}
        <div 
          className="hidden md:block absolute top-30 left-0 right-0 bottom-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${bgInvest})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Background Image - Mobile */}
        <div 
          className="block md:hidden absolute top-10 left-0 right-0 bottom-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${bgInvest})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40 md:bg-white/50"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2c4653] mb-4 md:mb-6" 
              dir="auto"
            >
              شاركنا في إعادة تعريف تجربة التسوق
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-[#5dba47] mb-6 md:mb-8" 
              dir="auto"
            >
              داخل المتاجر التقليدية
            </motion.p>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 md:space-y-4 mb-8 md:mb-10"
            >
              <p className="text-sm sm:text-base md:text-lg text-[rgba(44,70,83,0.8)] leading-relaxed" dir="auto">
                انضم إلينا اليوم كمستثمر معنا وكن جزءًا من تحول سعودية تسعى للتطور تقنيًا وعالميًا،
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[rgba(44,70,83,0.8)] leading-relaxed" dir="auto">
                استثمارات اليوم في <span className="font-bold text-[#5dba47]">Smart & Fast Shopping</span> هي استثمار في مستقبل التجارة الذكية في المنطقة
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/invest')}
              className="bg-[#5dba47] hover:bg-[#4da338] text-white font-bold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-[15px] transition-all shadow-lg hover:shadow-xl"
              dir="auto"
            >
              انضم إلينا
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-14 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2c4653] mb-4" dir="auto">
              لماذا تستثمر معنا؟
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10" dir="rtl">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flex flex-col items-center text-center p-6 md:p-8 rounded-[20px] bg-white border border-[rgba(44,70,83,0.1)] hover:border-[#5dba47] hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mb-4 md:mb-6"
                >
                  {benefit.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#2c4653] mb-3 md:mb-4" dir="auto">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[rgba(44,70,83,0.7)] leading-relaxed" dir="auto">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Stat 1 */}
              <div className="text-center p-6 md:p-8 rounded-[20px] bg-white shadow-md">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5dba47] mb-2">
                  78.5B
                </div>
                <p className="text-sm md:text-base text-[#2c4653] font-semibold" dir="auto">
                  حجم السوق المستهدف
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center p-6 md:p-8 rounded-[20px] bg-white shadow-md">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5dba47] mb-2">
                  1000+
                </div>
                <p className="text-sm md:text-base text-[#2c4653] font-semibold" dir="auto">
                  متجر مستهدف
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center p-6 md:p-8 rounded-[20px] bg-white shadow-md">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5dba47] mb-2">
                  2025
                </div>
                <p className="text-sm md:text-base text-[#2c4653] font-semibold" dir="auto">
                  سنة الإطلاق
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#5dba47]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 md:mb-6" dir="auto">
              هل أنت مستعد للانضمام إلى المستقبل؟
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8" dir="auto">
              كن جزءًا من ثورة التسوق الذكي في المنطقة
            </p>
            <button
              onClick={() => navigate('/invest')}
              className="bg-white hover:bg-gray-100 text-[#5dba47] font-bold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-[15px] transition-all shadow-lg hover:shadow-xl"
              dir="auto"
            >
              ابدأ الاستثمار الآن
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
