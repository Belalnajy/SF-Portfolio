import {AboutSection} from "../components/AboutSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="pt-[120px]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن فريق S&F المتخصص في تطوير الحلول التقنية المبتكرة لتحسين تجربة التسوق والأعمال التجارية
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutSection />
          </motion.div>
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-center mb-12"
              >
                رؤيتنا ورسالتنا
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    أن نكون الشركة الرائدة في تقديم الحلول التقنية المبتكرة التي تحول تجربة التسوق إلى تجربة سلسة وممتعة للعملاء والتجار على حد سواء.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-600">رسالتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نسعى لتطوير تقنيات متقدمة تساعد المتاجر على زيادة مبيعاتها وبناء علاقات قوية مع عملائها من خلال تقديم خدمات مخصصة وذكية.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
