import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-inkline bg-inksoft px-6 py-16 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl leading-tight sm:text-6xl">
          LET&apos;S MAKE
          <br />
          <span className="text-pink">SOMETHING PEOPLE</span>
          <br />
          ACTUALLY SHARE.
        </h2>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:hello@nirmitsinh.com"
            className="flex items-center gap-2 font-mono text-sm tracking-widest text-paper transition hover:text-yellow"
          >
            <Mail size={16} /> HELLO@NIRMITSINH.COM
          </a>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-inkline text-paperdim transition hover:border-pink hover:text-pink"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-inkline text-paperdim transition hover:border-teal hover:text-teal"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-paperdim">
          © {new Date().getFullYear()} NIRMITSINH — DIGITAL MARKETER
        </p>
      </div>
    </footer>
  );
}
