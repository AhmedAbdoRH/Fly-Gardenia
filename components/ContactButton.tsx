import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Mail, Phone, Send, ChevronDown } from 'lucide-react';
import { CONTENT } from '../constants';

export const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (e.target instanceof Node && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const contact = CONTENT['ar'].contact as any;
  const phone = contact?.phoneNumbers?.[0] ?? '';
  const phoneDigits = phone.replace(/[^+0-9]/g, '');
  const email = contact?.emails?.[0] ?? '';

  return (
    <>
      {/* Main Contact Button - Fixed Bottom Left */}
      <div className="fixed bottom-8 left-8 z-50" ref={ref}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="contact-button group"
          aria-label="تواصل معنا"
        >
          {/* Pulse Animation Ring */}
          <span className="pulse-ring"></span>

          {/* Button Content */}
          <div className="button-content">
            {isOpen ? (
              <X className="icon" size={24} />
            ) : (
              <MessageCircle className="icon" size={24} />
            )}
          </div>

          {/* Tooltip */}
          <span className="tooltip">تواصل معنا</span>
        </button>

        {/* Contact Options Panel - Same as Hero dropdown */}
        {isOpen && (
          <div className={`absolute bottom-full left-0 mb-4 w-80 bg-black/40 backdrop-blur-3xl rounded-3xl shadow-3xl z-50 overflow-hidden border border-white/20 animate-fade-in-down transition-all duration-500 ease-out`} style={{boxShadow:'0 20px 40px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-brand-green/30 rounded-full blur-3xl opacity-70 pointer-events-none" style={{filter:'blur(32px)'}}></div>
            <div className="p-4 divide-y divide-white/15">
              <a href={`tel:${phoneDigits}`} className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-brand-green/20 hover:scale-[1.03] transition-all group/item">
                <div className="w-12 h-12 rounded-xl bg-brand-green/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-green/50 transition-colors group-hover/item:scale-110">
                  <Phone size={22} className="text-brand-green" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-white text-base group-hover/item:text-brand-green transition-colors">اتصال مباشر</div>
                  <div className="text-xs text-gray-200/60">اتصل بنا مباشرة</div>
                </div>
              </a>
              <a href={`https://wa.me/${phoneDigits.replace(/\+/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-green-900/30 hover:scale-[1.03] transition-all group/item">
                <div className="w-12 h-12 rounded-xl bg-green-800/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-700/60 transition-colors group-hover/item:scale-110">
                  <MessageCircle size={22} className="text-green-300" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-white text-base group-hover/item:text-green-300 transition-colors">تواصل من خلال واتساب</div>
                  <div className="text-xs text-gray-200/60">رسالة فورية</div>
                </div>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-blue-900/30 hover:scale-[1.03] transition-all group/item">
                <div className="w-12 h-12 rounded-xl bg-blue-800/40 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-700/60 transition-colors group-hover/item:scale-110">
                  <Mail size={22} className="text-blue-300" strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-white text-base group-hover/item:text-blue-300 transition-colors">مراسلة من خلال الايميل</div>
                  <div className="text-xs text-gray-200/60">أرسل لنا بريداً إلكترونياً</div>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        /* Main Contact Button */
        .contact-button {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #aad546 0%, #96bc38 50%, #81a32a 100%);
          border: none;
          cursor: pointer;
          box-shadow: 
            0 4px 20px rgba(170, 213, 70, 0.3),
            0 8px 40px rgba(170, 213, 70, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
        }

        .contact-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 8px 30px rgba(170, 213, 70, 0.4),
            0 12px 50px rgba(170, 213, 70, 0.3);
        }

        .contact-button:active {
          transform: translateY(-2px) scale(1.02);
        }

        /* Pulse Animation Ring */
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 3px solid #aad546;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          opacity: 0;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.8);
            opacity: 0;
          }
        }

        /* Button Content */
        .button-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .icon {
          color: white;
          transition: transform 0.3s ease;
        }

        .contact-button:hover .icon {
          transform: scale(1.1) rotate(5deg);
        }

        /* Tooltip */
        .tooltip {
          position: absolute;
          left: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .tooltip::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-right-color: rgba(0, 0, 0, 0.9);
        }

        .contact-button:hover .tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(4px);
        }

        /* Contact Panel - Removed (using Tailwind) */

        /* Responsive */
        @media (max-width: 768px) {
          .contact-button {
            width: 56px;
            height: 56px;
          }

          .icon {
            width: 20px;
            height: 20px;
          }

          .contact-panel {
            /* Removed - using Tailwind */
          }

          .tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default ContactButton;
