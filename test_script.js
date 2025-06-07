// Simple image toggle on hover
document.querySelectorAll(".property-card").forEach((card) => {
  const images = card.querySelectorAll("img");
  card.addEventListener("mouseenter", () => {
    images.forEach((img) => img.classList.toggle("active"));
    images.forEach((img) => img.classList.toggle("hidden"));
  });
  card.addEventListener("mouseleave", () => {
    images.forEach((img) => img.classList.toggle("active"));
    images.forEach((img) => img.classList.toggle("hidden"));
  });
});
