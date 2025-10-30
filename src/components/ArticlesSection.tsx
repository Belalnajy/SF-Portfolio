import { motion } from 'framer-motion';

interface Article {
  image: string;
  title: string;
  description: string;
}

const RELATED_ARTICLES: Article[] = [
  {
    image: '/article-page-section.png',
    title: 'أهمية التحول الرقمي في عالم التسوق',
    description:
      'في عصر السرعة والتطور، أصبح التحول الرقمي أحد أهم العوامل التي غيّرت شكل عالم التسوق والتجارة الإلكترونية...',
  },
  {
    image: '/article-page-section.png',
    title: 'أهمية التحول الرقمي في عالم التسوق',
    description:
      'في عصر السرعة والتطور، أصبح التحول الرقمي أحد أهم العوامل التي غيّرت شكل عالم التسوق والتجارة الإلكترونية...',
  },
  {
    image: '/article-page-section.png',
    title: 'أهمية التحول الرقمي في عالم التسوق',
    description:
      'في عصر السرعة والتطور، أصبح التحول الرقمي أحد أهم العوامل التي غيّرت شكل عالم التسوق والتجارة الإلكترونية...',
  },
];

export default function ArticlesSection() {
  return (
    <section className="container mx-auto py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C4653] mb-4">
            استكشف المستقبل
          </h2>
          <p className="text-[#2C4653CC]/70 text-lg md:text-xl lg:text-2xl">
            اكتشف مقالات ملهمة وورق عميقة من خبراء{' '}
            <span className="text-[#5DBA47] font-bold">S&F</span> حول عالم التسوق الذكي
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {RELATED_ARTICLES.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#2C4653] mb-3 group-hover:text-[#5DBA47] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#2C4653CC]/80 text-base md:text-lg leading-relaxed">
                  {article.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
