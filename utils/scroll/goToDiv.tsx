export const goToDiv = (dest: string) => {
  const element = document.getElementById(dest);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
