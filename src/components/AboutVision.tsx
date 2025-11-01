import { motion } from 'framer-motion';
import DecorativeBackground from './DecorativeBackground';

export default function AboutVision() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Decorative Background */}
      <DecorativeBackground />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2c4653] mb-4">
            رؤية تغيّر قواعد <span className="text-[#5dba47]">التسوّق</span>
          </h2>
          <p className="text-lg text-[#2c4653]/70 max-w-3xl mx-auto">
            كيف نصنع المستقبل الذي نطمح إليه
          </p>
        </motion.div>

        {/* Vision Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right md:text-center mt-5"
          >
            <p className="text-lg lg:text-[31px] text-[#2c4653]/80 leading-relaxed">
              أن نكون <span className="font-bold">الرواد</span> في رسم مستقبل قطاع التجزئة، من خلال
              تحويل تجربة التسوق التقليدية إلى تجربة ذكية وسلسة، تعزز الكفاءة التشغيلية للمتاجر،
              وتمكّن العملاء من التسوق بطريقة أسرع وأكثر شفافية، مما يجعل قطاع التجزئة أكثر مرونة
              على المنافسة مع التجارة الإلكترونية.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
