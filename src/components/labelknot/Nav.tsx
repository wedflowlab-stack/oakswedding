import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const LOGO_LIGHT = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785162989/oaks_n1szuc.png";
const LOGO_DARK = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785162989/oaks_n1szuc.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = scrolled || open;

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          inverted ? "bg-[var(--sand)]/90 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{ color: inverted ? "var(--everest)" : "var(--milk)" }}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Fourfold Pictures" className="flex items-center">
            <img
              src={inverted ? LOGO_DARK : LOGO_LIGHT}
              alt="Fourfold Pictures"
              className="h-[30px] md:h-[39px] w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col items-center justify-center gap-[6px] p-2 -mr-2 group"
          >
            <span
              className={`block h-[3px] w-8 rounded-full transition-all duration-300 ${
                open ? "translate-y-[9px] rotate-45" : ""
              }`}
              style={{ background: "currentColor" }}
            />
            <span
              className={`block h-[3px] w-8 rounded-full transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
              style={{ background: "currentColor" }}
            />
            <span
              className={`block h-[3px] w-8 rounded-full transition-all duration-300 ${
                open ? "-translate-y-[9px] -rotate-45" : ""
              }`}
              style={{ background: "currentColor" }}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "var(--sand)", color: "var(--everest)" }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-8 px-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="masthead text-3xl md:text-5xl hover:opacity-60 transition-opacity"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="masthead text-3xl md:text-5xl hover:opacity-60 transition-opacity"
          >
            Services
          </Link>
          <a
            href="/#gallery"
            onClick={() => setOpen(false)}
            className="masthead text-3xl md:text-5xl hover:opacity-60 transition-opacity"
          >
            Work
          </a>
          <a
            href="/#philosophy"
            onClick={() => setOpen(false)}
            className="masthead text-3xl md:text-5xl hover:opacity-60 transition-opacity"
          >
            Philosophy
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="masthead text-3xl md:text-5xl hover:opacity-60 transition-opacity"
          >
            Book
          </Link>
        </div>
      </div>
    </>
  );
}
