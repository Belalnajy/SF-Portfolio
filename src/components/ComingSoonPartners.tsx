import { motion } from 'framer-motion';

export function ComingSoonPartners() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-[80px] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-[8px] mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#2c4653] text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-bold text-center"
          >
            شركاء النجاح قريباً
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[rgba(44,70,83,0.8)] text-sm sm:text-base md:text-lg lg:text-[20px] font-bold opacity-70 text-center px-4"
          >
            نعمل على شراكات استراتيجية مع أكبر الأسواق في المملكة
          </motion.p>
        </div>

        {/* Coming Soon Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-[#5DBA47] to-[#4a9538] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2c4653] mb-4">
                شراكات مميزة في الطريق
              </h3>
              <p className="text-[rgba(44,70,83,0.8)] text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                نحن نعمل بجد لإقامة شراكات استراتيجية مع أفضل الأسواق والمتاجر في المملكة العربية
                السعودية لتقديم أفضل تجربة تسوق ذكية لعملائنا
              </p>
              <p className="text-[#5DBA47] text-lg md:text-xl font-bold">ترقبوا الإعلان قريباً!</p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center gap-2"
            >
              <div className="w-3 h-3 bg-[#5DBA47] rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-[#5DBA47] rounded-full animate-pulse delay-75"></div>
              <div className="w-3 h-3 bg-[#5DBA47] rounded-full animate-pulse delay-150"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional: Grid placeholder for future partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div
                key={item}
                className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center"
              >
                <span className="text-4xl md:text-5xl text-gray-300">?</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
