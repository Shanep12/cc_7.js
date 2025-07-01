const ctaInput = document.getElementById("cta-input");
const ctaButton = document.getElementById("cta-button");
const ctaHeadline = document.getElementById("cta-headline");

ctaButton.addEventListener("click", () => {
  const newText = ctaInput.value.trim();
  if (newText) {
    ctaHeadline.textContent = newText;
  }
});
