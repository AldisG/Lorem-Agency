export const textContent = {
  start: {
    y: -100,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
export const footerPagesContent = {
  start: {
    x: -100,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};
export const footerStatisticsContent = {
  start: {
    x: 100,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};
export const imageContent = {
  start: {
    scale: 1.2,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: .5,
      transition: 'ease-in'
    },
  },
};
export default {}