import React from "react";
import svgPaths from "../imports/svg-x8okmw8j48";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DownloadAppModal from "./DownloadAppModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm z-[10000]" ref={menuRef}>
        <div className="container mx-auto flex items-center justify-between px-[40px] py-[37px]">
          <Logo />
          <Actions 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen}
            setShowDownloadModal={setShowDownloadModal}
          />
        </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-3">
            <MobileNavigation setMobileMenuOpen={setMobileMenuOpen} />
            <div className="border-t border-gray-200 pt-3 mt-3 flex items-center gap-[20px]" dir="rtl">
              <LanguageButton />
              {/* <ContactButton /> */}
              
              <InvestButton />
            </div>
          </div>
        </div>
      )}
      </header>
      
      {/* Download App Modal */}
      <DownloadAppModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
    </>
  );
}

function Logo() {
  return (
    <Link to="/" className="relative h-[55px] w-[152px] shrink-0 block">
      <div className="absolute bottom-0 left-0 right-[-57.24%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 55">
          <g id="logo">
            <g id="letters">
              <path d={svgPaths.p1023cef0} fill="#2C4653" />
              <path clipRule="evenodd" d={svgPaths.p3ce77300} fill="#2C4653" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2ee0f8f0} fill="#2C4653" fillRule="evenodd" />
              <path d={svgPaths.p191ba380} fill="#5DBA47" />
            </g>
            <g id="Vector">
              <path d={svgPaths.p1ada67f0} fill="#2C4653" />
              <path d={svgPaths.p2c13fef2} fill="#2C4653" />
              <path d={svgPaths.p362df6c0} fill="#2C4653" />
              <path d={svgPaths.p1d9bcdf2} fill="#2C4653" />
              <path d={svgPaths.p379ceb00} fill="#2C4653" />
              <path d={svgPaths.p16672080} fill="#2C4653" />
              <path d={svgPaths.p2a2c9c80} fill="#2C4653" />
              <path d={svgPaths.p27ccf500} fill="#2C4653" />
              <path d={svgPaths.p18cf2f00} fill="#2C4653" />
              <path d={svgPaths.p199380b0} fill="#5DBA47" />
              <path d={svgPaths.p295b100} fill="#5DBA47" />
              <path d={svgPaths.p2eb50600} fill="#5DBA47" />
              <path d={svgPaths.p5f88300} fill="#5DBA47" />
              <path d={svgPaths.pb9d0770} fill="#5DBA47" />
              <path d={svgPaths.pa127d80} fill="#5DBA47" />
              <path d={svgPaths.p25404af0} fill="#5DBA47" />
              <path d={svgPaths.ped9ca80} fill="#5DBA47" />
              <path d={svgPaths.p65dc9c0} fill="#5DBA47" />
              <path d={svgPaths.p3c4c9500} fill="#5DBA47" />
              <path d={svgPaths.p1434c00} fill="#5DBA47" />
              <path d={svgPaths.p34f1cac0} fill="#5DBA47" />
              <path d={svgPaths.p34e5800} fill="#5DBA47" />
            </g>
          </g>
        </svg>
      </div>
    </Link>
  );
}

function Actions({ mobileMenuOpen, setMobileMenuOpen, setShowDownloadModal }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void; setShowDownloadModal: (show: boolean) => void }) {
  return (
    <div className="flex items-center gap-[60px] shrink-0">
      <Navigation />
      <div className="hidden lg:flex items-center gap-[20px]">
        <LanguageButton />
        {/* <ContactButton /> */}
        <DownloadAppButton setShowDownloadModal={setShowDownloadModal} />
        <InvestButton />
      </div>
      <MenuButton mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  );
}

function LanguageButton() {
  const toggleLanguage = () => {
    // TODO: Implement language switching logic
    console.log("Language toggle clicked");
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-[5px] h-[50px] px-[15px] py-[5px] rounded-[20px] bg-[rgba(44,70,83,0.05)] hover:bg-[rgba(44,70,83,0.1)] transition-colors"
    >
      <span className="text-[#2c4653] text-[18px] font-semibold whitespace-nowrap">العربية</span>
      <div className="size-[20px]">
        <svg className="block size-full" fill="none" viewBox="0 0 19 19">
          <path d={svgPaths.p8be7b80} stroke="#1F84FF" strokeWidth="1.5" />
          <path d={svgPaths.p5be4a00} stroke="#1F84FF" strokeWidth="1.5" />
          <path d="M1.00083 9.33375H17.6675" stroke="#1F84FF" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
      </div>
    </button>
  );
}

// function ContactButton() {
//   return (
//     <Link 
//       to="/store-form"
//       className="flex items-center justify-center gap-[5px] h-[50px] px-[20px] py-[5px] rounded-[20px] hover:bg-[rgba(44,70,83,0.05)] transition-colors"
//     >
//       <span className="text-[#2c4653] text-[18px] font-bold whitespace-nowrap">تواصل معنا</span>
//     </Link>
//   );
// }

function DownloadAppButton({ setShowDownloadModal }: { setShowDownloadModal: (show: boolean) => void }) {
  return (
    <button 
      onClick={() => setShowDownloadModal(true)}
      className="flex items-center justify-center gap-[5px] h-[50px] px-[20px] py-[5px] rounded-[20px] bg-[rgba(44,70,83,0.05)] hover:bg-[rgba(44,70,83,0.1)] transition-colors"
    >
      <span className="text-[#5DBA47] text-[18px] font-bold whitespace-nowrap">حمّل التطبيق</span>
    </button>
  );
}

function InvestButton() {
  const navigate = useNavigate();
  const handleInvest = () => {
    navigate("/invest-main");
  };

  return (
    <button 
      onClick={handleInvest}
      className="flex items-center justify-center gap-[5px] h-[50px] px-[20px] py-[5px] rounded-[20px] bg-[#5dba47] hover:bg-[#4da93a] transition-colors"
    >
      <span className="text-white text-[18px] font-bold whitespace-nowrap">إستثمر معنا</span>
    </button>
  );
}

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المتاجر", path: "/store" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/store-form" }
  ];

  return (
    <nav className="hidden lg:flex items-center gap-[30px] z-[100000000]" dir="rtl" >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-[18px] font-medium transition-colors hover:text-[#5dba47] ${
            location.pathname === item.path 
              ? "text-[#5dba47] border-b-2 border-[#5dba47] pb-1" 
              : "text-[#2c4653]"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

function MobileNavigation({ setMobileMenuOpen }: { setMobileMenuOpen: (open: boolean) => void }) {
  const location = useLocation();
  
  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المتاجر", path: "/store" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/store-form" }
  ];

  return (
    <nav className="flex flex-col gap-2" dir="rtl">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setMobileMenuOpen(false)}
          className={`text-[16px] font-medium py-2 px-3 rounded-lg transition-colors hover:bg-[rgba(44,70,83,0.05)] ${
            location.pathname === item.path 
              ? "text-[#5dba47] bg-[rgba(93,186,71,0.1)]" 
              : "text-[#2c4653]"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

function MenuButton({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <button 
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden p-2 hover:bg-[rgba(44,70,83,0.05)] rounded-lg transition-colors"
      aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
    >
      {mobileMenuOpen ? (
        <X className="w-[30px] h-[22px] text-[#2C4653]" />
      ) : (
        <Menu className="w-[30px] h-[22px] text-[#2C4653]" />
      )}
    </button>
  );
}
