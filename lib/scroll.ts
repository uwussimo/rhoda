export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 80; // Account for fixed header if needed
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
