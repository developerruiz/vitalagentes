const bookElement = document.getElementById("book");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");

const totalPages = document.querySelectorAll(".page").length;

const pageFlip = new St.PageFlip(bookElement, {
  width: 540,
  height: 700,
  size: "stretch",
  minWidth: 315,
  maxWidth: 540,
  minHeight: 440,
  maxHeight: 700,
  maxShadowOpacity: 0.38,
  showCover: true,
  mobileScrollSupport: false,
  flippingTime: 850,
  usePortrait: true,
  startZIndex: 1,
  drawShadow: true
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

function updateIndicator() {
  const page = pageFlip.getCurrentPageIndex() + 1;
  pageIndicator.textContent = `Página ${page} / ${totalPages}`;
}

prevBtn.addEventListener("click", () => pageFlip.flipPrev());
nextBtn.addEventListener("click", () => pageFlip.flipNext());

pageFlip.on("flip", updateIndicator);
pageFlip.on("changeOrientation", updateIndicator);
pageFlip.on("changeState", updateIndicator);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") pageFlip.flipPrev();
  if (event.key === "ArrowRight") pageFlip.flipNext();
});

updateIndicator();
