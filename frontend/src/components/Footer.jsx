export default function Footer() {
    return (
      <footer className="text-black py-6 px-4 text-center">
        <nav className="space-x-4 mb-2">
          <a href="#privacy" className="hover:text-secondary-500 text-lg md:text-2xl">Privacy</a>
          <a href="#instagram" className="hover:text-secondary-500 text-lg md:text-2xl">Instagram</a>
          <a href="#contatti" className="hover:text-secondary-500 text-lg md:text-2xl">Contatti</a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Le Meraviglie di Lory. HidingLines.
        </p>
      </footer>
    );
  }
  