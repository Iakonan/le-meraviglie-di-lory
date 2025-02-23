export default function Footer() {
    return (
      <footer className="text-gray-800 py-6 px-4 text-center">
        <nav className="space-x-4 mb-2">
          <a href="#privacy" className="hover:text-teal-600">Privacy</a>
          <a href="#instagram" className="hover:text-teal-600">Instagram</a>
          <a href="#contatti" className="hover:text-teal-600">Contatti</a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Le Meraviglie di Lory. HidingLines.
        </p>
      </footer>
    );
  }
  