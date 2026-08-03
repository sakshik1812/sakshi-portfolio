"use client";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F1] pb-10">
      <Container>
        <div className="border-t border-[#DDD6CC] pt-8">
          <div className="flex flex-col gap-4 text-[#5A3E2B] md:flex-row md:items-center md:justify-between">
            <p className="text-sm tracking-wide">
              © {new Date().getFullYear()} Sakshi. All rights reserved.
            </p>

            <p className="text-sm tracking-wide">
              Designed & developed with care.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}