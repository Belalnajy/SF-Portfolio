import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadAppModal({ isOpen, onClose }: DownloadAppModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[20px] p-6 md:p-8 lg:p-10 max-w-md w-full relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                {/* Title */}
                <h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c4653] mb-2"
                  dir="auto"
                >
                  حمّل تطبيق <span className="text-[#5dba47]">S&F</span> الآن
                </h2>

                {/* QR Code Container */}
                <div className="my-6 md:my-8 p-4 bg-white border-2 border-[#5dba47] rounded-[15px] shadow-lg">
                  <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-gray-100 flex items-center justify-center rounded-[10px]">
                    {/* Placeholder for QR Code - Replace with actual QR code */}
                    <div className="text-center">
                      <div className="w-full h-full bg-white p-2">
                        {/* You can use a QR code library like 'qrcode.react' or place an image */}
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="white" />
                          {/* Simple QR-like pattern - replace with actual QR code */}
                          <rect x="10" y="10" width="20" height="20" fill="black" />
                          <rect x="70" y="10" width="20" height="20" fill="black" />
                          <rect x="10" y="70" width="20" height="20" fill="black" />
                          <rect x="40" y="40" width="20" height="20" fill="black" />
                          <rect x="15" y="15" width="10" height="10" fill="white" />
                          <rect x="75" y="15" width="10" height="10" fill="white" />
                          <rect x="15" y="75" width="10" height="10" fill="white" />
                          {/* Add more rectangles to create QR pattern */}
                          <rect x="50" y="20" width="5" height="5" fill="black" />
                          <rect x="60" y="20" width="5" height="5" fill="black" />
                          <rect x="50" y="30" width="5" height="5" fill="black" />
                          <rect x="20" y="50" width="5" height="5" fill="black" />
                          <rect x="30" y="50" width="5" height="5" fill="black" />
                          <rect x="50" y="60" width="5" height="5" fill="black" />
                          <rect x="60" y="60" width="5" height="5" fill="black" />
                          <rect x="70" y="60" width="5" height="5" fill="black" />
                          <rect x="50" y="70" width="5" height="5" fill="black" />
                          <rect x="60" y="70" width="5" height="5" fill="black" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm md:text-base text-[rgba(44,70,83,0.8)] leading-relaxed mb-4"
                  dir="auto"
                >
                  امسح رمز الـ QR بهاتفك وحمّل التطبيق الآن لتمتع بتجربة تسوّق ذكية وسريعة !
                </p>

                {/* Store Badges (Optional) */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px]">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px]">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
