export const smoothScroll = (coordinate) => {
  window.scrollTo({
    top: coordinate,
    behavior: "smooth",
  });
};
