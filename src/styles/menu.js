export const menuVariants = {
    closed: {
      transform: 'translateX(-11em)',
    },
    open: {
      transform: 'translateX(0)',
      transition: {
        staggerChildren: 1, // Justera fördröjningen här
      },
    },
};

export const linkVariants = {
    closed: {
      opacity: 0,
      x: -30,
    },
    open: {
      opacity: 1,
      x: 0,
    },
};

export const transition = {
    duration: 0.3,
};

export const linkAnimationDelay = 0.3;