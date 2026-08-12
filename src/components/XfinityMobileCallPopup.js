'use client';

export default function XfinityMobileCallPopup() {
  return (
    <div className="xfinity-call-popup">
      <a
        href="tel:+18889087350"
        className="xfinity-call-link"
        aria-label="Call (888) 908-7350"
      >
        <div className="xfinity-call-header">
          Call Now (888) 908-7350
          <span className="xfinity-fake-close">✖</span>
        </div>

        <div className="xfinity-call-body">
          <div>
            <div className="xfinity-call-main-text">
              24×7 Helpline
            </div>
            <div className="xfinity-call-sub-text">
              Call Us Now
            </div>
          </div>
        </div>

        <div className="xfinity-call-footer">
          Need Help? Call Now
        </div>
      </a>

      <style jsx>{`
        .xfinity-call-popup {
          display: none;
        }

        @media (max-width: 768px) {
          .xfinity-call-popup {
            display: block;
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            z-index: 999999;
            font-family: Arial, sans-serif;
          }

          .xfinity-call-link {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: inherit;
          }

          .xfinity-call-header {
            position: relative;
            background: #0b1c3d;
            color: #ffffff;
            padding: 14px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
          }

          .xfinity-fake-close {
            position: absolute;
            right: 15px;
            top: 10px;
            border: 0;
            background: transparent;
            color: #ffffff;
            font-size: 20px;
            line-height: 1;
            padding: 4px;
            cursor: pointer;
          }

          .xfinity-call-body {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #000000;
            padding: 20px;
          }

          .xfinity-call-main-text {
            font-size: 26px;
            font-weight: 700;
          }

          .xfinity-call-sub-text {
            margin-top: 8px;
            font-size: 22px;
          }

          .xfinity-call-footer {
            background: #0b1c3d;
            color: #ffffff;
            text-align: center;
            padding: 16px;
            font-size: 18px;
            font-weight: 600;
          }
        }
      `}</style>
    </div>
  );
}
