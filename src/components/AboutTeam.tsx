import { motion } from 'framer-motion';
import DecorativeBackground from './DecorativeBackground';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'داوود داوود',
    role: 'مدير تنفيذي / مهندس شبكي',
    image: '/about-team.png',
  },
  {
    name: 'داوود داوود',
    role: 'مدير تنفيذي / مهندس شبكي',
    image: '/about-team.png',
  },
  {
    name: 'داوود داوود',
    role: 'مدير تنفيذي / مهندس شبكي',
    image: '/about-team.png',
  },
  {
    name: 'داوود داوود',
    role: 'مدير تنفيذي / مهندس شبكي',
    image: '/about-team.png',
  },
];

export default function AboutTeam() {
  return (
    <section className="py-6 pb-20 bg-white relative overflow-hidden" dir="rtl">
      {/* Decorative Background */}
      <DecorativeBackground />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-2xl lg:text-3xl font-bold text-[#2c4653] mb-4">فريق العمل</h2>
          <p className="text-xl font-bold opacity-70 text-[#2c4653]/70 max-w-3xl mx-auto leading-relaxed">
            الكفاءات والخبرات التي تقف وراء نجاحنا
          </p>
          <p className="text-[29px] text-right md:text-center font-semibold text-[#2C4653]/60 max-w-8xl mx-auto mt-4 ">
            يتكون فريق Smart & Fast Shopping من مجموعة من الشباب الموهوبين في مجالات التقنية،
            والمالحين بتقديم منتج ذو قيمة للمجتمع. يعمل بروح واحدة لتحقيق هدف مشترك: جعل تجربة
            التسوق داخل المتاجر أذكى وأكثر خصوصية وراحة
          </p> */}
        </motion.div>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 max-w-8xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container with Green Background */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#5dba47] to-[#4da639]">
          {/* Decorative Shape */}
          <div className="absolute top-0 right-0 w-full h-full">
            <svg viewBox="0 0 200 300" className="absolute top-0 right-0 w-full h-full opacity-30">
              <path d="M200,0 Q150,100 200,200 L200,0 Z" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>

          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={e => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=5dba47&color=fff&bold=true`;
            }}
          />
        </div>

        {/* Content - Dark Footer */}
        <div className="p-5 text-center bg-[#2c4653]">
          <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
          <p className="text-white/70 text-sm">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
