"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5F1]/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-[#F8F5F1]/50 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <a
              href="#top"
              className="text-[34px] font-medium tracking-[-0.03em] text-[#4E315B]"
            >
              Sakshi
            </a>

            {/* Desktop */}

            <div className="hidden items-center gap-12 text-[17px] font-medium lg:flex">
              <a
                href="#work"
                className="relative transition-colors duration-300 hover:text-[#4E315B] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#4E315B] after:transition-all after:duration-300 hover:after:w-full"
              >
                Work
              </a>

              <a
                href="#about"
                className="relative transition-colors duration-300 hover:text-[#4E315B] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#4E315B] after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>

              <a
                href="#contact"
                className="relative transition-colors duration-300 hover:text-[#4E315B] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#4E315B] after:transition-all after:duration-300 hover:after:w-full"
              >
                Connect
              </a>
            </div>

            {/* Mobile */}

            <button
  onClick={() => setMenuOpen(true)}
  className="text-3xl leading-none text-[#2D211B] transition-transform duration-300 hover:scale-110 lg:hidden"
  aria-label="Open navigation menu"
>
  ☰
</button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F8F5F1]">
          <Container>
            <div className="flex h-20 items-center justify-between border-b border-[#DDD6CC]">
              <p className="text-[34px] font-medium text-[#4E315B]">
                Sakshi
              </p>

              <button
                onClick={closeMenu}
                className="text-lg font-medium"
              >
                Close
              </button>
            </div>

            <div className="mt-24 flex flex-col gap-10 text-5xl font-medium">
              <a href="#work" onClick={closeMenu}>
                Work
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#contact" onClick={closeMenu}>
                Connect
              </a>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}