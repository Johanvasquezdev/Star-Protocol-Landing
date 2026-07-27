export function Footer({ t }: { t: Record<string, string | string[]> }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 Johan Gabriel Vasquez. {String(t.footer)}</p>
        <div className="flex gap-4">
          <a href="mailto:johanvasquezdev@gmail.com" className="hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
            Email
          </a>
          <a href="https://github.com/Johanvasquezdev" target="_blank" rel="noreferrer" className="hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312" target="_blank" rel="noreferrer" className="hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
