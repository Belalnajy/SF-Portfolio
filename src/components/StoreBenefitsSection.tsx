import { motion } from 'framer-motion';
import { CheckCircle, Dot } from 'lucide-react';

interface Benefit {
  text: string;
}

const BENEFITS: Benefit[] = [
  {
    text: 'تسريع عمليات الدفع بنسبة تصل إلى 85%',
  },
  {
    text: 'تقارير فورية عن المبيعات، أكثر المنتجات طلبًا، وسلوك العملاء داخل الفروع',
  },
  {
    text: 'تقليل الطوابير وتسريع عملية الخروج',
  },
  {
    text: 'برامج ولاء رقمية ذكية',
  },
  {
    text: 'خفض تكاليف التشغيل',
  },

  {
    text: 'نظام نقاط وكاش باك مخصص لزيادة تكرار زيارات العملاء وتحفيز المبيعات',
  },

  {
    text: 'تقليل الاعتماد على عدد كبير من الكاشيرات بفضل الأتمتة والتقنيات الذكية',
  },
  {
    text: 'إعلانات مجانية داخل التطبيق',
  },

  {
    text: 'بيانات وتحليلات لحظية',
  },
  {
    text: 'عرض منتجاتك وعروضك مباشرة لعملائك النشطين داخل المتجر بدون تكلفة',
  },

  {
    text: 'إدارة أسعار وعروض مرنة',
  },
  {
    text: 'تحديث الأسعار والعروض لحظيًا عبر لوحة تحكم واحدة بدل الطرق اليدوية القديمة',
  },

  {
    text: 'دعم تسويقي مجاني من خلال المنصة والإعلانات الموجهة داخل الفروع وللجمهور القريب من فروعك.',
  },
  {
    text: 'رفع نسبة المبيعات بمعدل 20% ( تسويق رقمي مجاني )',
  },
];

const StoreBenefitsSection = () => {
  return (
    <section className=" bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-4" dir="rtl">
            <span className="text-[#2C4653]">المميزات</span>{' '}
            <span className="text-[#5DBA47]">التي نقدمها لمتجرك</span>
          </h2>
        </motion.div>

        {/* Benefits Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto bg-[#2C4653] rounded-br-[60px] rounded-tl-[60px] p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 text-right group"
              >
                {/* Check Icon */}
                <div className="flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5DBA47]"></div>
                </div>
                {/* Benefit Text */}
                <p className="text-white text-base md:text-lg leading-[1.4] flex-1">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreBenefitsSection;
