import React, { useState } from 'react';
import { MessageCircle, X, Mail, Phone, Send } from 'lucide-react';

export const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Contact Button - Fixed Bottom Left */}
      <div className="fixed bottom-8 left-8 z-50">
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

        {/* Contact Options Panel */}
        {isOpen && (
          <div className="contact-panel">
            <h3 className="panel-title">تواصل معنا</h3>
            <p className="panel-subtitle">اختر طريقة التواصل المفضلة</p>

            <div className="contact-options">
              <a
                href="mailto:info@gardenia-consulting.com"
                className="contact-option"
              >
                <div className="option-icon">
                  <Mail size={20} />
                </div>
                <div className="option-content">
                  <span className="option-title">البريد الإلكتروني</span>
                  <span className="option-subtitle">info@gardenia.com</span>
                </div>
              </a>

              <a
                href="tel:+201234567890"
                className="contact-option"
              >
                <div className="option-icon">
                  <Phone size={20} />
                </div>
                <div className="option-content">
                  <span className="option-title">الهاتف</span>
                  <span className="option-subtitle">+20 123 456 7890</span>
                </div>
              </a>

              <a
                href="#contact-form"
                className="contact-option"
                onClick={() => setIsOpen(false)}
              >
                <div className="option-icon">
                  <Send size={20} />
                </div>
                <div className="option-content">
                  <span className="option-title">نموذج التواصل</span>
                  <span className="option-subtitle">أرسل رسالة سريعة</span>
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

        /* Contact Panel */
        .contact-panel {
          position: absolute;
          bottom: 80px;
          left: 0;
          width: 320px;
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.1),
            0 20px 80px rgba(0, 0, 0, 0.08);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(170, 213, 70, 0.1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .panel-title {
          font-size: 20px;
          font-weight: 700;
          color: #81a32a;
          margin: 0 0 4px 0;
          text-align: right;
        }

        .panel-subtitle {
          font-size: 14px;
          color: #6b7280;
          margin: 0 0 20px 0;
          text-align: right;
        }

        /* Contact Options */
        .contact-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: #f9fafb;
          border: 2px solid transparent;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-option:hover {
          background: #f5f9ec;
          border-color: #aad546;
          transform: translateX(-4px);
        }

        .option-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #aad546, #96bc38);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(170, 213, 70, 0.2);
        }

        .contact-option:hover .option-icon {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(170, 213, 70, 0.3);
        }

        .option-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: right;
          flex: 1;
        }

        .option-title {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .option-subtitle {
          font-size: 13px;
          color: #6b7280;
          direction: ltr;
          text-align: right;
        }

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
            width: calc(100vw - 64px);
            max-width: 320px;
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
