"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReveal } from "../animations/useReveal";

export default function AurraHero() {
  // amount lowered from 0.3, and the hook caps the requirement against the
  // viewport so a 90vh section can always qualify.
  const { ref, inView } = useReveal<HTMLElement>({ amount: 0.2 });

  return (
    <>
      {/* ---------------- Desktop ---------------- */}

      <motion.section
        ref={ref}
        data-reveal
        className="mt-12 hidden lg:block"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{
          clipPath: inView ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link href="/work/aurra">
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group relative h-[90vh] overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Image */}

            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.03 },
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full"
            >
              <Image
                src="/images/aurra/hero.png"
                alt="Aurra Brand Identity"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Overlay */}

            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-[#3A2F28]/45 backdrop-blur-[2px]"
            />

            {/* Text */}

            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  y: 20,
                },
                hover: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.35,
              }}
              className="absolute inset-0 flex items-end justify-between p-10"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                  Brand Identity
                </p>

                <h3 className="mt-3 text-5xl font-medium text-white">
                  Explore the Story
                </h3>
              </div>

              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: {
                    x: 8,
                    rotate: -8,
                  },
                }}
                className="text-6xl text-white"
              >
                ↗
              </motion.div>
            </motion.div>
          </motion.div>
        </Link>
      </motion.section>

      {/* ---------------- Mobile ---------------- */}

      <section className="mt-8 block lg:hidden">
        <Link href="/work/aurra">
          <div className="group relative overflow-hidden rounded-3xl">
            <Image
              src="/images/aurra/hero.png"
              alt="Aurra Brand Identity"
              width={1200}
              height={800}
              className="h-[340px] w-full object-cover transition-transform duration-500 active:scale-[0.98]"
            />

            {/* Explore Pill */}

            <div className="absolute bottom-5 right-5 rounded-full bg-[#F8F6F2]/95 px-5 py-2 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#2D211B]">
                  View Case Study
                </span>

                <span className="text-sm text-[#2D211B]">↗</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
