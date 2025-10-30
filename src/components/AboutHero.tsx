import { motion } from 'framer-motion';
import DecorativeBackground from './DecorativeBackground';

export default function AboutHero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* Decorative Background */}
      <DecorativeBackground />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-2 text-right"
            dir="rtl"
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-[#2c4653]">
              تعرّف على <span className="text-[#5dba47]">S&F</span> ...
            </h1>
            <p className="text-lg lg:text-2xl text-[#2c4653]/80 mb-6 leading-relaxed">
              <span className="font-bold text-[#5dba47]">Smart & Fast Shopping</span> مقرها{' '}
              <span className="font-bold">مكة المكرمة، المملكة العربية السعودية</span>، نسعى لتطوير
              حلول تقنية ذكية تمكّن المتاجر التقليدية من التحول إلى تجارب رقمية متكاملة، وتمنح
              العملاء تجربة تسوق أسرع، أذكى، وأكثر شفافية.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#5dba47] text-white px-22 py-6 rounded-lg font-bold text-lg hover:bg-[#4da839] transition-colors"
            >
              تواصل معنا
            </motion.button>
          </motion.div>

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[500px]">
              {/* Green Organic Shape Background */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <img
                  src="/Ellipse 2544.png"
                  alt="Background Shape"
                  className="w-full h-full object-contain animate-pulse"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(93, 186, 71, 0.2))' }}
                />
              </div>

              {/* Main Image - Person Shopping */}
              <div className="relative z-10 w-full aspect-square flex items-center justify-center lg:justify-start p-4 sm:p-6 md:p-8 lg:p-10">
                <img
                  src="/Ellipse 2543.png"
                  alt="S&F Smart Shopping Experience"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
