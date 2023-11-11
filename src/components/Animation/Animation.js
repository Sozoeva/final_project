export const animation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },

  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const rigthAnimation = {
  hidden: {
    x: 1000,
    opacity: 0,
  },

  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
