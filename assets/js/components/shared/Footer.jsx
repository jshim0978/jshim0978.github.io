import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      {/* Contact CTA */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-8 sm:p-10 text-center">
          <p className="font-mono text-xs text-muted-foreground mb-3">// get in touch</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-3">
            Let's collaborate
          </h2>
          <p className="text-sm sm:text-[15px] text-muted-foreground max-w-lg mx-auto leading-relaxed mb-6">
            I'm always open to discussing AI research, potential collaborations, or interesting projects. Feel free to reach out.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:right_rain@etri.re.kr"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/jungwoo-shim-073100240/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href="https://buymeacoffee.com/jshim0978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-sm font-medium text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c.16-.07.293-.168.456-.217.509-.155 1.069-.221 1.6-.285a25.12 25.12 0 013.596-.112c.783.04 1.552.12 2.286.339.218.065.432.143.631.248.07.036.148.098.127.182-.007.027-.027.052-.047.074-.28.278-.726.376-1.073.352-.742-.047-1.498-.112-2.242-.13-1.287-.031-2.563.054-3.827.29-.17.032-.341.065-.492.16-.076.047-.151.11-.175.197-.028.098.01.183.083.25.117.109.284.157.438.168.34.024.683.01 1.02-.007.986-.055 1.97-.137 2.957-.11.41.01.82.036 1.229.074.11.01.22.025.332.041-.327.083-.688.12-1.039.135-1.125.039-2.254-.04-3.376-.112a37.152 37.152 0 01-.95-.092c-.108-.013-.208-.033-.303.028-.149.093-.194.3-.098.442.074.108.19.156.316.17.352.038.706.058 1.06.08.98.056 1.963.09 2.946.076.487-.007.973-.036 1.458-.078.108.346.097.736-.015 1.077-.084.254-.247.5-.513.526a26.288 26.288 0 01-3.214.1 22.926 22.926 0 01-2.138-.155c-.104-.013-.22-.022-.305.048-.135.108-.148.327-.038.46.078.093.19.132.302.148 1.165.17 2.345.212 3.518.164.67-.028 1.342-.083 2.006-.169.102-.013.208-.028.286-.098.137-.122.166-.342.097-.512-.076-.188-.226-.328-.376-.44.055-.12.097-.247.124-.38.07-.34.02-.688-.078-1.018-.054-.182-.142-.36-.26-.516.1-.043.195-.097.273-.168.203-.18.325-.46.383-.742.059-.284.056-.576.042-.864-.013-.264-.042-.529-.092-.79z"/><path d="M7.5 17.5h9v2.5c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5-1.12-2.5-2.5v-2.5z"/><path d="M3 8h18v5c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8z"/></svg>
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground">jshim</span>
            <div className="flex items-center gap-2">
              {[
                { label: 'GitHub', href: 'https://github.com/jshim0978', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jungwoo-shim-073100240/', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: 'Email', href: 'mailto:right_rain@etri.re.kr', icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/jshim0978', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 8h18v5c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8z"/><path d="M7.5 17.5h9v2.5c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5-1.12-2.5-2.5v-2.5z"/></svg> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-150"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground font-mono">
            {currentYear} / react + tailwind
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
