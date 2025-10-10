import React from "react";
import {AboutSection} from "../components/AboutSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="pt-[120px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">من نحن</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن فريق S&F المتخصص في تطوير الحلول التقنية المبتكرة لتحسين تجربة التسوق والأعمال التجارية
            </p>
          </div>
          <AboutSection />
          
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">رؤيتنا ورسالتنا</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    أن نكون الشركة الرائدة في تقديم الحلول التقنية المبتكرة التي تحول تجربة التسوق إلى تجربة سلسة وممتعة للعملاء والتجار على حد سواء.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">رسالتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    نسعى لتطوير تقنيات متقدمة تساعد المتاجر على زيادة مبيعاتها وبناء علاقات قوية مع عملائها من خلال تقديم خدمات مخصصة وذكية.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
