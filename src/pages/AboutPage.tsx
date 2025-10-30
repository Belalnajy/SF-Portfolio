import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutVision from '../components/AboutVision';
import AboutMission from '../components/AboutMission';
import AboutTeam from '../components/AboutTeam';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="pt-[80px] lg:pt-[100px]">
        {/* Hero Section */}
        <AboutHero />

        {/* Vision Section */}
        <AboutVision />

        {/* Mission Section */}
        <AboutMission />

        {/* Team Section */}
        <AboutTeam />
      </main>
      <Footer />
    </div>
  );
}
