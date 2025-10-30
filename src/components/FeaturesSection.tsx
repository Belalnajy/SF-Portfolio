import { motion } from 'framer-motion';
import { FileText, Smartphone, Megaphone, Coffee, BadgePercent, ShoppingBag } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <BadgePercent className="w-10 h-10 text-[#5DBA47]" />,
    title: 'عروض شخصية وموجهة',
    description:
      'عروض موجهة حسب تفضيلات العميل واقتراحات لمنتجات مخفّضة أو ذات جودة أعلى بناءً على سلوك الشراء السابق.',
  },
  {
    icon: <FileText className="w-10 h-10 text-[#5DBA47]" />,
    title: 'تتبع الفاتورة والأسعار',
    description:
      'معرفة الفاتورة أولاً بأول حيث يعرض التطبيق السعر الإجمالي بشكل مستمر، مما يزيل مفاجآت الدفع.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-[#5DBA47]" />,
    title: 'الدفع السريع والذاتي',
    description:
      'مسح المنتجات مباشرةً من الهاتف وإتمام عملية الدفع فورًا، مما يلغي الحاجة للانتظار في طوابير الكاشير.',
  },
  {
    icon: <img src="/Loyalty-points.png" alt="Loyalty" className="w-10 h-10" />,
    title: 'نظام الولاء والكاش باك',
    description:
      'نظام ولاء متكامل يمنح العميل نقاطًا أو استرجاعًا نقديًا (كاش باك) يمكن استخدامه لاحقًا في المشتريات القادمة.',
  },
  {
    icon: <Megaphone className="w-10 h-10 text-[#5DBA47]" />,
    title: 'إشعارات وخصومات فورية',
    description:
      'إشعارات العروض اللحظية داخل الفروع بالإضافة إلى مجموعة شاملة من الخصومات المميزة (المتاجر، التطبيق).',
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-[#5DBA47]" />,
    title: 'تجربة تسوق متطورة',
    description:
      'تقديم تجربة رقمية حديثة داخل المتجر تعزز تفاعل العميل وتجعل عملية الشراء أكثر سلاسة وفعالية.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <span>
              <span className="text-[#5DBA47]">المميزات</span> التي نقدمها في S&F{' '}
            </span>
          </h2>
          <p className="text-[#2C4653]/70 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            تجربة تسوق أسرع وأذكى{' '}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#2C4653] rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-end mb-6">
                <div className="p-4 rounded-full transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-bold text-right mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-base md:text-lg leading-relaxed text-right">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
