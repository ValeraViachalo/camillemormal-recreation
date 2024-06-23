import { delay } from "framer-motion";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

const transition = {
  duration: 0.4,
  ease: [0.17, 0.67, 0.29, 1.01],
};

export const PageAnim = {
  presencePage: {
    initial: {
      opacity: 0,
      transition,
    },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.45,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ...transition,
      },
    },
  },
  block: {
    initial: {
      opacity: 0,
      scale: 1.2,
      transition,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.72, 0.1, 0.99],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 1,
      scale: 1,
      transition: {
        ...transition,
      },
    },
  },
  list: {
    initial: {
      opacity: 0,
      transition,
    },
    animate: (i) => ({
      opacity: 1,
      transition: {
        ...transition,
        delay: i[0],
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        ...transition,
      },
    },
  },
};

export const WorksAnim = {
  hero: {
    initial: {
      y: "150%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: (i) => ({
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.3,
        delay: (i + 0.05) * 0.2 + 0.12,
      },
    }),
    exit: {
      y: "-100%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
  },
};

const transitionLayer = {
  ease: [0.08, 0.99, 0.37, 1],
  duration: 1.5,
};

export const SliderAnim = {
  layer: {
    enter: (direction) => {
      return {
        left: direction > 0 ? "100%" : "0%",
        width: "0vw",
        transition: transitionLayer,
      };
    },
    center: {
      width: "100vw",
      left: 0,
      transition: transitionLayer,
    },
    exit: (direction) => {
      return {
        width: "0vw",
        left: direction < 0 ? "100%" : "0%",
        transition: transitionLayer,
      };
    },
  },
  button: {
    initial: {
      rotate: "0deg",
      transition: transitionLayer,
    },
    animate: {
      rotate: "90deg",
      transition: transitionLayer,
    },
    exit: {
      rotate: "0deg",
      transition: transitionLayer,
    },
  },
  text: {
    initial: {
      y: "50%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
        delay: 0.3,
      },
    },
    exit: {
      y: "-50%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
  },
  id: {
    initial: {
      y: "50%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
        delay: 0.3,
      },
    },
    exit: {
      y: "-50%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
  },
};
