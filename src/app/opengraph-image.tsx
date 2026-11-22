import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'JeevVPN — Private Browsing, Your Infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAF9F5',
          backgroundImage:
            'radial-gradient(circle at 90% 15%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(11, 100, 58, 0.06) 0%, transparent 50%)',
          padding: '56px 68px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Brand Wordmark & Shield */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#0B643A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px -4px rgba(11, 100, 58, 0.35)',
              }}
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2L21 6V14C21 20 16.5 24.5 12 26C7.5 24.5 3 20 3 14V6L12 2Z"
                  fill="#FAF9F5"
                />
                <circle cx="12" cy="13" r="3.5" fill="#0B643A" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#12151A',
                  letterSpacing: '-0.02em',
                }}
              >
                Jeev<span style={{ color: '#0B643A' }}>VPN</span>
              </span>
            </div>
            <div
              style={{
                marginLeft: '12px',
                backgroundColor: 'rgba(11, 100, 58, 0.08)',
                border: '1px solid rgba(11, 100, 58, 0.18)',
                padding: '4px 12px',
                borderRadius: '9999px',
                color: '#0B643A',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              V1.0
            </div>
          </div>

          {/* Node Status Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              padding: '8px 18px',
              borderRadius: '9999px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#10B981',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                letterSpacing: '0.01em',
              }}
            >
              Single-Tenant Cloud Node · Active
            </span>
          </div>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '20px',
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '720px',
            }}
          >
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#12151A',
                letterSpacing: '-0.035em',
                margin: 0,
              }}
            >
              Private browsing.
              <br />
              <span style={{ color: '#0B643A' }}>Your infrastructure.</span>
            </h1>

            <p
              style={{
                fontSize: '22px',
                lineHeight: 1.45,
                color: '#4B5563',
                marginTop: '22px',
                marginBottom: 0,
                maxWidth: '650px',
              }}
            >
              A self-hosted browsing project, built with a Chromium extension and private cloud infrastructure.
            </p>
          </div>

          {/* Right Geometric Shield Visual */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '240px',
              height: '240px',
              position: 'relative',
            }}
          >
            <svg width="220" height="240" viewBox="0 0 200 220" fill="none">
              {/* Outer soft ambient glow */}
              <path
                d="M100 16 L174 46 C174 116 142 172 100 202 C58 172 26 116 26 46 Z"
                fill="#0B643A"
                opacity="0.08"
                transform="scale(1.08) translate(-8, -6)"
              />
              {/* Primary Ceramic/Forest Shield */}
              <path
                d="M100 16 L174 46 C174 116 142 172 100 202 C58 172 26 116 26 46 Z"
                fill="#073C23"
              />
              {/* Inner Facet Emerald Shield */}
              <path
                d="M100 28 L160 54 C160 110 134 156 100 184 C66 156 40 110 40 54 Z"
                fill="#0B643A"
              />
              {/* Specular Highlight Line */}
              <path
                d="M100 36 L150 58 C150 102 128 142 100 166"
                stroke="rgba(255, 255, 255, 0.28)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Center Minimalist Emblem */}
              <circle cx="100" cy="106" r="14" fill="#FAF9F5" />
              <circle cx="100" cy="106" r="6" fill="#0B643A" />
            </svg>
          </div>
        </div>

        {/* Bottom Platform & Browser Compatibility Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #E5E7EB',
            paddingTop: '24px',
            width: '100%',
          }}
        >
          {/* Supported Browsers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Supported Browsers
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                padding: '6px 14px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#1F2937' }}>
                Chrome · Edge · Brave
              </span>
            </div>
          </div>

          {/* Core Feature Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                backgroundColor: '#F3F4F6',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#4B5563',
              }}
            >
              Manifest V3
            </div>
            <div
              style={{
                backgroundColor: '#F3F4F6',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#4B5563',
              }}
            >
              TLS 1.3
            </div>
            <div
              style={{
                backgroundColor: '#0B643A',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              jeevvpn-web.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
