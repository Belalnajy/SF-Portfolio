import React from 'react';
import { motion } from 'framer-motion';
import DecorativeBackground from './DecorativeBackground';

interface MissionPointProps {
  text: string;
}

function MissionPoint({ text }: MissionPointProps) {
  return (
    <div className="flex w-full items-center justify-end gap-3 text-white">
      <div className="flex flex-1 flex-col items-end justify-center text-right">
        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed" dir="rtl">
          {text}
        </p>
      </div>

      {/* Icon */}
      <div className="shrink-0">
        <div className="h-[8px] w-[8px] bg-[#5DBA47] rounded-full"></div>
      </div>
    </div>
  );
}

function MissionSidebar() {
  const missionPoints = [
    {
      text: 'نحن نعمل على بناء جسر بين المتاجر والعملاء',
    },
    {
      text: 'حيث نمزج التقنية بالاحترام والذكاء بالبساطة',
    },
  ];

  return (
    <div className="w-full max-w-[700px] h-full md:h-[450px] lg:max-w-[600px] rounded-[15px] sm:rounded-[20px] bg-[#2c4653] px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:absolute lg:left-[-540px] lg:top-[50px] z-10">
      {/* Title */}
      <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col items-end justify-center text-right text-white">
        <p
          className="text-[20px] sm:text-[25px] md:text-[30px] leading-tight font-semibold"
          dir="rtl"
        >
          رسالتنا المؤسسية في <span className="text-[#5DBA47]">S&F</span>
        </p>
        <p
          className="text-[14px] sm:text-[17px] md:text-[23px] opacity-70 mt-1 sm:mt-2 font-bold"
          dir="rtl"
        >
          كيف نُحدث فرقًا في حياة عملائنا يوميًا
        </p>
      </div>

      {/* Description */}
      <div className="mb-6 sm:mb-8 text-right">
        <p
          className="text-[13px] sm:text-[14px] md:text-[18px] text-white/90 leading-relaxed"
          dir="rtl"
        >
          رسالتنا هي تمكين المتاجر من التحول نحو الرقمنة بخطوات عملية، وتحسين تجربة العملاء داخل
          المتجر عبر حلول تقنية متكاملة تربط أنظمة الدفع والعروض والعضوية، وتحليل البيانات، في
          منظومة واحدة تُسهم في رفع كفاءة التشغيل وزيادة المبيعات وتعزيز الولاء.
        </p>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 font-bold">
        {missionPoints.map((point, index) => (
          <MissionPoint key={index} text={point.text} />
        ))}
      </div>
    </div>
  );
}

function MissionImageSection() {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[612px] w-full max-w-[947px] overflow-hidden rounded-[20px] sm:rounded-[25px]">
      {/* Background Image */}
      <img src="/about-mission.png" alt="Mission" className="size-full object-cover" />

      {/* Gradient Overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    </div>
  );
}

export default function AboutMission() {
  return (
    <section className="relative py-12 overflow-hidden bg-white">
      {/* Decorative Background */}
      <DecorativeBackground />

      <div className="container  px-4 sm:px-6 md:px-8 lg:px-[40px] max-w-[1440px]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex flex-col lg:flex-row items-center justify-end gap-8">
            {/* Image Section */}
            <motion.div
              className="w-full lg:w-auto relative order-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MissionImageSection />

              {/* Mission Sidebar - Overlapping on large screens */}
              <div className="hidden lg:block">
                <MissionSidebar />
              </div>
            </motion.div>

            {/* Mission Sidebar - Separate on mobile */}
            <motion.div
              className="w-full lg:hidden order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MissionSidebar />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
