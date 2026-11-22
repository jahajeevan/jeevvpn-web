import { Download, Chrome, BookOpen, AlertTriangle, CheckCircle, Package } from 'lucide-react';

const browsers = [
  {
    name: 'Google Chrome',
    icon: Chrome,
    steps: [
      'Download the ZIP file below and unzip it to a permanent folder on your computer.',
      'Open Chrome and navigate to chrome://extensions/',
      'Enable "Developer mode" using the toggle in the top-right corner.',
      'Click "Load unpacked" and select the unzipped extension folder.',
      'JeevVPN will appear in your extensions bar — click the icon to connect.',
    ],
  },
  {
    name: 'Microsoft Edge',
    icon: Chrome,
    steps: [
      'Download and unzip the extension ZIP to a permanent folder.',
      'Open Edge and navigate to edge://extensions/',
      'Enable "Developer mode" in the left sidebar.',
      'Click "Load unpacked" and select the unzipped extension folder.',
      'Pin JeevVPN from the extensions menu for quick access.',
    ],
  },
  {
    name: 'Brave Browser',
    icon: Chrome,
    steps: [
      'Download and unzip the extension ZIP to a permanent folder.',
      'Open Brave and navigate to brave://extensions/',
      'Enable "Developer mode" in the top-right corner.',
      'Click "Load unpacked" and select the unzipped folder.',
      'Allow the extension when prompted, then click the shield icon to use JeevVPN.',
    ],
  },
];

export default function DownloadsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      {/* Aurora */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,196,107,0.13) 0%, transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Package size={13} className="text-green-main" />
            <span className="text-white/60 text-xs font-medium">Browser Extension · v1.0</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Download JeevVPN
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Get the browser extension for Chrome, Edge or Brave. Manual installation takes under a minute.
          </p>
        </div>

        {/* Download card */}
        <div
          className="glass rounded-3xl p-8 mb-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,196,107,0.09) 0%, rgba(18,217,168,0.04) 100%)',
            borderColor: 'rgba(0,196,107,0.18)',
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: 'linear-gradient(135deg, #7BFFC4, #00C46B)', boxShadow: '0 6px 24px rgba(0,196,107,0.4)' }}
          >
            <Download size={30} className="text-ink" strokeWidth={2.2} />
          </div>
          <h2 className="font-display font-bold text-xl text-white mb-2">JeevVPN Extension</h2>
          <p className="text-white/45 text-sm mb-6">Chrome Extension · Chromium compatible · Developer build</p>

          {/* Placeholder download button */}
          <div className="inline-flex flex-col items-center gap-2">
            <span
              className="inline-flex items-center gap-2 px-10 py-3.5 rounded-2xl text-base font-bold cursor-not-allowed select-none"
              style={{
                background: 'linear-gradient(135deg, #00E27A, #00C46B)',
                color: '#0A0F1A',
                opacity: 0.5,
                boxShadow: '0 4px 20px rgba(0,196,107,0.3)',
              }}
            >
              <Download size={18} strokeWidth={2.5} />
              Download ZIP
            </span>
            <span className="text-white/35 text-xs flex items-center gap-1.5">
              <AlertTriangle size={12} />
              Extension package coming soon — check back shortly.
            </span>
          </div>
        </div>

        {/* Important note */}
        <div
          className="glass rounded-2xl p-5 mb-12 flex gap-4 items-start"
          style={{ borderColor: 'rgba(234,162,59,0.2)', background: 'rgba(234,162,59,0.05)' }}
        >
          <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" strokeWidth={2} />
          <div>
            <p className="text-white/80 text-sm font-medium mb-1">Manual installation required</p>
            <p className="text-white/45 text-sm leading-relaxed">
              JeevVPN is not listed on the Chrome Web Store. You&apos;ll install it as an unpacked extension using Developer Mode — this is safe and normal for self-hosted tools. Follow the steps below for your browser.
            </p>
          </div>
        </div>

        {/* Browser install guides */}
        <h2 className="font-display font-bold text-2xl text-white mb-6">Installation instructions</h2>
        <div className="flex flex-col gap-6">
          {browsers.map(({ name, icon: Icon, steps }) => (
            <div key={name} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,196,107,0.12)' }}
                >
                  <Icon size={20} style={{ color: '#00E27A' }} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg">{name}</h3>
              </div>
              <ol className="flex flex-col gap-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(0,196,107,0.14)', color: '#00C46B' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* After install note */}
        <div
          className="glass rounded-2xl p-5 mt-10 flex gap-4 items-start"
          style={{ borderColor: 'rgba(0,196,107,0.15)', background: 'rgba(0,196,107,0.04)' }}
        >
          <CheckCircle size={18} className="text-green-main shrink-0 mt-0.5" strokeWidth={2} />
          <div>
            <p className="text-white/80 text-sm font-medium mb-1">After installation</p>
            <p className="text-white/45 text-sm leading-relaxed">
              Click the JeevVPN icon in your browser toolbar to open the extension. You&apos;ll need valid credentials to connect. Contact the administrator if you don&apos;t have an account.
            </p>
          </div>
        </div>

        {/* Docs link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/jahajeevan/JeevVPN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
          >
            <BookOpen size={14} />
            View project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
