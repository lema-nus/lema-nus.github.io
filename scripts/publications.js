document.querySelectorAll(".publication-list[data-visible-count]").forEach((list) => {
  const visibleCount = Number.parseInt(list.dataset.visibleCount, 10);
  if (!Number.isInteger(visibleCount) || visibleCount < 1) return;

  const cards = Array.from(list.children)
    .filter((child) => child.classList.contains("publication-card"))
    .slice(0, visibleCount);
  if (!cards.length) return;

  // Measure complete cards so the preview stays consistent as text wraps.
  const updateHeight = () => {
    const gap = Number.parseFloat(getComputedStyle(list).rowGap) || 0;
    const height = cards.reduce((total, card) => total + card.getBoundingClientRect().height, 0)
      + gap * (cards.length - 1);
    const value = `${Math.ceil(height)}px`;
    if (list.style.getPropertyValue("--publication-preview-height") !== value) {
      list.style.setProperty("--publication-preview-height", value);
    }
  };

  updateHeight();
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(updateHeight);
    cards.forEach((card) => observer.observe(card));
  } else {
    window.addEventListener("resize", updateHeight);
  }
  if (document.fonts) document.fonts.ready.then(updateHeight);
});
