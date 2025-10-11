import svgPaths from "./svg-ydrjxszx6x";
import { Link } from "react-router-dom";

function Facebook() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="facebook">
          <g id="Ellipse 2520"></g>
          <path d={svgPaths.p12e5b600} fill="var(--fill-0, #F9F9F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Insta() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="insta">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="insta">
          <g id="Ellipse 2521"></g>
          <g id="Group 1000004257">
            <path d={svgPaths.pd404280} fill="var(--fill-0, #F9F9F9)" id="Vector (Stroke)" />
            <path d={svgPaths.p3bdfce00} fill="var(--fill-0, #F9F9F9)" id="Vector (Stroke)_2" />
            <path d={svgPaths.p1a1cb2c0} fill="var(--fill-0, #F9F9F9)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="x">
          <g id="Ellipse 2522"></g>
          <path d={svgPaths.p2c865f00} id="Vector" stroke="var(--stroke-0, #F9F9F9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Whatsapp() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="whatsapp">
          <g id="Ellipse 2523"></g>
          <g id="Vector">
            <path d={svgPaths.pb22800} fill="var(--fill-0, #F9F9F9)" />
            <path d={svgPaths.p6d7c900} fill="var(--fill-0, #F9F9F9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tiktok() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="tiktok">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="tiktok">
          <g id="Ellipse 2524"></g>
          <path d={svgPaths.p130ff780} fill="var(--fill-0, #F9F9F9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[61px] w-[170px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 284 61">
        <g id="logo">
          <g id="letters">
            <path d={svgPaths.p2fb184c0} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p2575fc00} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5fcaf00} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p21d01f80} fill="#5DBA47" />
          </g>
          <g id="Vector">
            <path d={svgPaths.p33940000} fill="white" />
            <path d={svgPaths.p60bc180} fill="white" />
            <path d={svgPaths.p1ba60f80} fill="white" />
            <path d={svgPaths.p33ae6400} fill="white" />
            <path d={svgPaths.p17779980} fill="white" />
            <path d={svgPaths.p359a7e80} fill="white" />
            <path d={svgPaths.p3b4aaf00} fill="white" />
            <path d={svgPaths.p3ac0a800} fill="white" />
            <path d={svgPaths.p174bfb00} fill="white" />
            <path d={svgPaths.p10cabba0} fill="#5DBA47" />
            <path d={svgPaths.p3258b580} fill="#5DBA47" />
            <path d={svgPaths.p1b751e80} fill="#5DBA47" />
            <path d={svgPaths.p142e1900} fill="#5DBA47" />
            <path d={svgPaths.p1e64500} fill="#5DBA47" />
            <path d={svgPaths.p39b38b00} fill="#5DBA47" />
            <path d={svgPaths.p2555ed00} fill="#5DBA47" />
            <path d={svgPaths.pc01a100} fill="#5DBA47" />
            <path d={svgPaths.p16ab4c00} fill="#5DBA47" />
            <path d={svgPaths.p3e671c00} fill="#5DBA47" />
            <path d={svgPaths.p1fd36f00} fill="#5DBA47" />
            <path d={svgPaths.p3aa8c500} fill="#5DBA47" />
            <path d={svgPaths.p1eecbc00} fill="#5DBA47" />
          </g>
        </g>
      </svg>
    </div>
  );
}


function Footer() {
  const handleDownloadApp = () => {
    window.open('https://docs.google.com/forms/d/1LiQrZB2muwkIZRAyfhvkXgIy0xNo8n9KvQTgfla4zbM/edit?usp=drivesdk', '_blank');
  };
  
  return (
    <>
      <footer className="bg-[#132c38] w-full py-12 lg:py-[50px]">
        <div className="container mx-auto px-6 lg:px-[40px]">
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:block">
          {/* Navigation Grid - 3 cols (tablet), 6 cols (desktop) - Logo is the 6th item */}
          <div className="mb-8">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 text-right">
                      {/* Logo - 6th item in grid */}
                      <div className="flex items-center justify-end">
                <div className="h-[61px] w-[170px]">
                  <Logo />
                </div>
              </div>
              {/* كن شريك النجاح */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f9f9f9] text-[15px] font-bold mb-2 font-['Cairo:Bold',_sans-serif]" dir="auto">
                  كن شريك النجاح
                </h3>
                <div className="flex flex-col gap-2 text-[rgba(249,249,249,0.65)] text-[12px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                  <Link to="/employee" className="hover:text-[#5dba47] transition-colors" dir="auto">سجل كموظف</Link>
                  <Link to="/store-form" className="hover:text-[#5dba47] transition-colors" dir="auto">شراكة الامتياز التجاري (فرنشايز)</Link>
                  <Link to="/invest" className="hover:text-[#5dba47] transition-colors" dir="auto">برنامج الاستثمار</Link>
                </div>
              </div>

              {/* أنتشار خدماتنا */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f9f9f9] text-[15px] font-bold mb-2 font-['Cairo:Bold',_sans-serif]" dir="auto">
                  أنتشار خدماتنا
                </h3>
                <div className="flex flex-col gap-2 text-[rgba(249,249,249,0.65)] text-[12px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                  <p dir="auto">المملكة العربية السعودية</p>
                </div>
              </div>

              {/* عن S&F */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f9f9f9] text-[15px] font-bold mb-2 font-['Cairo:Bold',_sans-serif]" dir="auto">
                  عن S&F
                </h3>
                <div className="flex flex-col gap-2 text-[rgba(249,249,249,0.65)] text-[12px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                  <Link to="/about" className="hover:text-[#5dba47] transition-colors" dir="auto">حول التطبيق</Link>
                  <Link to="/" className="hover:text-[#5dba47] transition-colors" dir="auto">الصفحة الرئيسية</Link>
                  <button onClick={handleDownloadApp} className="hover:text-[#5dba47] transition-colors text-right cursor-pointer " dir="auto">تحميل التطبيق</button>
                </div>
              </div>

              {/* الدعم */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f9f9f9] text-[15px] font-bold mb-2 font-['Cairo:Bold',_sans-serif]" dir="auto">
                  الدعم
                </h3>
                <div className="flex flex-col gap-2 text-[rgba(249,249,249,0.65)] text-[12px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                  <p className="break-words" dir="auto">info@smart-fast.com</p>
                  <p dir="auto">الخط الساخن : 0595072987 </p>
                  <p dir="auto">خدمة الدردشة عبر التطبيق</p>
                </div>
              </div>

              {/* تواصل معنا */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f9f9f9] text-[15px] font-bold mb-2 font-['Cairo:Bold',_sans-serif]" dir="auto">
                  تواصل معنا
                </h3>
                <div className="grid grid-cols-5 gap-3 items-center flex-wrap">
                  <div className="hover:opacity-80 transition-opacity cursor-pointer">
                    <Facebook />
                  </div>
                  <div className="hover:opacity-80 transition-opacity cursor-pointer">
                    <Insta />
                  </div>
                  <div className="hover:opacity-80 transition-opacity cursor-pointer">
                    <X />
                  </div>
                  <div className="hover:opacity-80 transition-opacity cursor-pointer">
                    <Whatsapp />
                  </div>
                  <div className="hover:opacity-80 transition-opacity cursor-pointer">
                    <Tiktok />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Section - Copyright */}
          <div className="text-center pt-8 border-t border-[rgba(249,249,249,0.1)] mt-8">
            <p className="text-[rgba(249,249,249,0.65)] text-[12px] font-semibold font-['Cairo:SemiBold',_sans-serif]" dir="auto">
              2025 جميع الحقوق محفوظة - Smart & Fast Shopping | سياسة الخصوصية | الشروط والأحكام
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Grid Layout - Logo + Tagline + Sections */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-right">
            {/* Logo */}
            <img 
        src="/logo.png" 
        alt="S&F Logo" 
        className="w-[120px] h-[43px] ms-10"
      />
            {/* Tagline */}
            <div className="text-right flex flex-col justify-center">
              <p className="text-[#f9f9f9] text-[14px] font-bold font-['Cairo:Bold',_sans-serif] leading-tight" dir="auto">
                لان وقتك أغلى
              </p>
              <p className="text-[#5dba47] text-[14px] font-bold font-['Cairo:Bold',_sans-serif] leading-tight" dir="auto">
                خليها تسوقك أسرع
              </p>
            </div>

            {/* الدعم */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#f9f9f9] text-[14px] font-bold mb-1 font-['Cairo:Bold',_sans-serif]" dir="auto">
                الدعم
              </h3>
              <div className="flex flex-col gap-1.5 text-[rgba(249,249,249,0.65)] text-[11px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                <p className="break-all" dir="auto">info@smart-fast.com</p>
                <p dir="auto">الخط الساخن : 0595072987</p>
                <p dir="auto">خدمة الدردشة عبر التطبيق</p>
              </div>
            </div>
            {/* كن شريك النجاح */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#f9f9f9] text-[14px] font-bold mb-1 font-['Cairo:Bold',_sans-serif]" dir="auto">
                كن شريك النجاح
              </h3>
              <div className="flex flex-col gap-1.5 text-[rgba(249,249,249,0.65)] text-[11px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                <Link to="/employee" className="hover:text-[#5dba47] transition-colors" dir="auto">سجل كموظف</Link>
                <Link to="/store-form" className="hover:text-[#5dba47] transition-colors" dir="auto">شراكة الامتياز التجاري (فرنشايز)</Link>
                <Link to="/invest" className="hover:text-[#5dba47] transition-colors" dir="auto">برنامج الاستثمار</Link>
              </div>
            </div>

            {/* أنتشار خدماتنا */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#f9f9f9] text-[14px] font-bold mb-1 font-['Cairo:Bold',_sans-serif]" dir="auto">
                أنتشار خدماتنا
              </h3>
              <div className="flex flex-col gap-1.5 text-[rgba(249,249,249,0.65)] text-[11px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                <p dir="auto">المملكة العربية السعودية</p>
              </div>
            </div>

            {/* عن S&F */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#f9f9f9] text-[14px] font-bold mb-1 font-['Cairo:Bold',_sans-serif]" dir="auto">
                عن S&F
              </h3>
              <div className="flex flex-col gap-1.5 text-[rgba(249,249,249,0.65)] text-[11px] font-semibold font-['Cairo:SemiBold',_sans-serif]">
                <Link to="/about" className="hover:text-[#5dba47] transition-colors" dir="auto">حول التطبيق</Link>
                <Link to="/" className="hover:text-[#5dba47] transition-colors" dir="auto">الصفحة الرئيسية</Link>
                <button onClick={handleDownloadApp} className="hover:text-[#5dba47] transition-colors text-right cursor-pointer" dir="auto">تحميل التطبيق</button>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <Facebook />
            </div>
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <Insta />
            </div>
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <X />
            </div>
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <Whatsapp />
            </div>
            <div className="hover:opacity-80 transition-opacity cursor-pointer">
              <Tiktok />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p className="text-[rgba(249,249,249,0.65)] text-[10px] font-semibold font-['Cairo:SemiBold',_sans-serif]" dir="auto">
              سياسة الخصوصية | الشروط والأحكام
            </p>
            <p className="text-[rgba(249,249,249,0.65)] text-[10px] font-semibold font-['Cairo:SemiBold',_sans-serif]" dir="auto">
              2025 جميع الحقوق محفوظة - Smart & Fast Shopping
            </p>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;