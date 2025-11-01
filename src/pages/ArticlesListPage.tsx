import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DecorativeBackground from '../components/DecorativeBackground';
import Footer from '../components/Footer';

interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  date: string;
  category: string;
}

const ALL_ARTICLES: Article[] = [
  {
    id: 1,
    image: '/article-page-section.png',
    title: 'أهمية التحول الرقمي في عالم التسوق',
    description:
      'في عصر السرعة والتطور، أصبح التحول الرقمي أحد أهم العوامل التي غيّرت شكل عالم التسوق والتجارة الإلكترونية. اكتشف كيف يمكن للتقنية أن تحدث ثورة في تجربة التسوق.',
    link: '/article',
    date: '2024',
    category: 'التحول الرقمي',
  },
  {
    id: 2,
    image: '/article-page-section.png',
    title: 'كيف يمكن للتقنية أن تحوّل تجربة العميل داخل المتجر؟',
    description:
      'لم يعد العميل يبحث فقط عن منتج جيد، بل أصبح يبحث عن تجربة تسوق ذكية، سريعة، ومريحة. اكتشف كيف تغير التقنية مفهوم التسوق من عملية شراء إلى رحلة متكاملة.',
    link: '/article-vision-2030',
    date: '2024',
    category: 'تجربة العميل',
  },
];

const ArticlesListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white mt-[130px] relative" dir="rtl">
      {/* Decorative Background */}
      <DecorativeBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C4653] mb-6">
              مقالات <span className="text-[#5DBA47]">S&F</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2C4653CC]/70 leading-relaxed">
              اكتشف مقالات ملهمة وأوراق عميقة من خبراء{' '}
              <span className="text-[#5DBA47] font-bold">Smart & Fast Shopping</span> حول عالم
              التسوق الذكي والتحول الرقمي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-12 md:mb-16">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#5DBA47]">
                {ALL_ARTICLES.length}
              </span>
              <p className="text-[#2C4653CC]/70 text-lg md:text-xl mt-2">مقالة متاحة</p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ALL_ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(article.link)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#5DBA47] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-right">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#2C4653CC]/60">{article.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C4653] mb-4 group-hover:text-[#5DBA47] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-[#2C4653CC]/80 text-base md:text-lg leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#5DBA47] font-semibold group-hover:gap-4 transition-all">
                    <span>اقرأ المزيد</span>
                    <svg
                      className="w-5 h-5 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State for Future Articles */}
          {ALL_ARTICLES.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-[#2C4653] mb-2">لا توجد مقالات حاليًا</h3>
              <p className="text-[#2C4653CC]/70 text-lg">تابعنا لمزيد من المقالات قريبًا</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#5DBA47]/10 to-transparent rounded-2xl p-8 md:p-12 text-center border-2 border-[#5DBA47]/20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C4653] mb-4">
            هل تريد معرفة المزيد؟
          </h2>
          <p className="text-lg md:text-xl text-[#2C4653CC]/80 mb-6 max-w-2xl mx-auto">
            تواصل معنا لمعرفة كيف يمكن لـ Smart & Fast Shopping أن يحول متجرك إلى تجربة تسوق ذكية
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#5DBA47] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4da83d] transition-colors shadow-lg hover:shadow-xl"
          >
            تواصل معنا
          </button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ArticlesListPage;
