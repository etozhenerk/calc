let total = 5000,
  blocks = 500,
  time = 1,
  hourRate;

const land = 5000,
  corp = 12000,
  cms = 4000,
  changes = 1000,
  pages = 2500,
  tabLeft = document.querySelector(".tab-left"),
  tabRight = document.querySelector(".tab-right"),
  blocksBlock = document.querySelector("#blocks-block"),
  pagesBlock = document.querySelector("#pages-block"),
  counterBlock = document.querySelector("#counter-block"),
  counterPages = document.querySelector("#counter-pages"),
  counterHours = document.querySelector("#counter-hours"),
  counterRate = document.querySelector("#counter-rate"),
  changesCheck = document.querySelector("#changes-check"),
  cmsCheck = document.querySelector("#changes-cms"),
  totalValue = document.querySelector(".total-count"),
  input = document.querySelectorAll("input");

window.addEventListener("DOMContentLoaded", () => {
  tabLeft.addEventListener("click", () => {
    input.forEach(item => {
      item.value = "";
    });

    blocksBlock.style.display = "flex";
    pagesBlock.style.display = "none";

    tabLeft.classList.add("active");
    tabRight.classList.remove("active");

    if (changesCheck.checked) {
      changesCheck.checked = false;
    }
    if (cmsCheck.checked) {
      cmsCheck.checked = false;
    }

    total = land;
    totalValue.value = total;
  });

  tabRight.addEventListener("click", () => {
    input.forEach(item => {
      item.value = "";
    });

    blocksBlock.style.display = "none";
    pagesBlock.style.display = "flex";

    tabRight.classList.add("active");
    tabLeft.classList.remove("active");

    if (changesCheck.checked) {
      changesCheck.checked = false;
    }
    if (cmsCheck.checked) {
      cmsCheck.checked = false;
    }

    total = corp;
    totalValue.value = total;
  });

  counterBlock.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";

    total = counterBlock.value * blocks;
    totalValue.value = total;
  });

  counterPages.addEventListener("change", () => {
    counterHours.value = "";
    counterRate.value = "";

    total = counterPages.value * pages;
    totalValue.value = total;
  });

  counterHours.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";

    total = 0;
    time = counterHours.value;
    hourRate = time * counterRate.value;
    total = hourRate;
    totalValue.value = hourRate;
  });

  counterRate.addEventListener("change", () => {
    counterBlock.value = "";
    counterPages.value = "";

    total = 0;
    hourRate = time * counterRate.value;
    total = hourRate;
    totalValue.value = hourRate;
  });

  changesCheck.addEventListener("change", () => {
    if (changesCheck.checked) {
      total += changes;
      totalValue.value = total;
    } else{
      total -= changes;
      totalValue.value = total;
    }
  });

  cmsCheck.addEventListener("change", () => {
    if (cmsCheck.checked) {
      total += cms;
      totalValue.value = total;
    } else{
      total -= cms;
      totalValue.value = total;
    }
  });
});
