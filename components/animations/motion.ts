export const ease = [0.22, 1, 0.36, 1] as const;

export const durations = {
  fast: 0.35,
  normal: 0.6,
  slow: 0.9,
  hero: 1.2,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease,
    },
  },
};

export const imageReveal = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.08,
  },

  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: durations.hero,
      ease,
    },
  },
};

export const hoverImage = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.03,
    transition: {
      duration: durations.slow,
      ease,
    },
  },
};