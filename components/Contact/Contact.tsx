"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8F5F1] py-24 lg:py-40"
    >
      <Container>
        <div className="border-t border-[#DDD6CC] pt-12 lg:pt-16">
          {/* Label */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.35em] text-[#4E315B]"
          >
            LET&apos;S CONNECT
          </motion.p>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 max-w-5xl text-5xl font-medium leading-[1.05] text-[#161616] lg:mt-10 lg:text-7xl"
          >
            Let&apos;s build something
            <br />
            meaningful together.
          </motion.h2>

          {/* Body */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5A3E2B] lg:mt-10 lg:text-xl"
          >
            Whether you&apos;re building a new brand, refreshing an existing
            one, or simply looking to connect, I&apos;d love to hear your story.
          </motion.p>

          {/* Email */}

          <motion.a
            href="mailto:srkatargamwala@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group mt-16 inline-flex max-w-full items-center gap-3 border-b border-transparent pb-2 text-[24px] font-medium leading-tight text-[#4E315B] transition-all duration-300 hover:border-[#4E315B] hover:text-[#6A4A78] sm:text-[28px] lg:mt-24 lg:text-4xl"
            style={{
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            <span>srkatargamwala@gmail.com</span>

            <span className="shrink-0 text-[#4E315B] transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-[#6A4A78]">
              ↗
            </span>
          </motion.a>

          {/* Socials */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-[#DDD6CC] pt-8 lg:mt-20 lg:gap-12 lg:pt-10"
          >
            <a
              href="https://www.behance.net/sakshikatarga"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xl text-[#2D211B] transition-colors hover:text-[#A67C52] lg:text-2xl"
            >
              Behance

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi1812/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xl text-[#2D211B] transition-colors hover:text-[#A67C52] lg:text-2xl"
            >
              LinkedIn

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}