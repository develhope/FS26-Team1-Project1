function scrollFw4() {
  const button = document.querySelector(".btn-next");
  button.addEventListener("click", function () {
    const container = document.querySelector(".cards-scroller");
    let scrollAmount = (container.scrollLeft += 1340);
    container.scrollLeft = scrollAmount;
  });
  const button2 = document.querySelector(".btn-next2");
  button2.addEventListener("click", function () {
    const container = document.querySelector(".cards-scroller2");
    let scrollAmount = (container.scrollLeft += 1580);
    container.scrollLeft = scrollAmount;
  });
}

scrollFw4();

function scrollBw4() {
  const button = document.querySelector(".btn-prev");
  button.addEventListener("click", function () {
    const container = document.querySelector(".cards-scroller");
    let scrollAmount = (container.scrollLeft -= 1340);
    container.scrollLeft = scrollAmount;
  });
  const button2 = document.querySelector(".btn-prev2");
  button2.addEventListener("click", function () {
    const container = document.querySelector(".cards-scroller2");
    let scrollAmount = (container.scrollLeft -= 1580);
    container.scrollLeft = scrollAmount;
  });
}

scrollBw4();

function updateButtonVisibility() {
  const btnNxt = document.getElementsByClassName("btn-next");
  const btnPrev = document.getElementsByClassName("btn-prev");
  btnPrev.style.hidden = container.scrollLeft > 0 ? "block" : "none";
  btnNxt.style.hidden =
    container.scrollLeft < container.scrollWidth - container.clientWidth
      ? "block"
      : "none";
}

updateButtonVisibility();
