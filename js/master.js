let linksHeader = document.querySelectorAll(".navbar-nav .nav-link");
activeClass(linksHeader);

let linksPortfolio = document.querySelectorAll(".portfolio ul li");
activeClass(linksPortfolio);

function activeClass(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", () => {
      element.forEach((e) => {
        e.classList.remove("active");
      });
      ele.classList.add("active");
    });
  });
}

let rowElement = document.querySelector(".portfolio .row");
for (let i = 1; i <= 8; i++) {
  let mainDiv = document.createElement("div");
  mainDiv.className = "col-sm-6 col-md-4 col-lg-3 all";
  if (i === 2) {
    mainDiv.classList.add("design");
  }
  if (i === 6) {
    mainDiv.classList.add("design");
  }
  if (i === 5) {
    mainDiv.classList.add("code");
  }
  if (i === 7) {
    mainDiv.classList.add("code");
  }
  if (i === 1) {
    mainDiv.classList.add("photo");
  }
  if (i === 4) {
    mainDiv.classList.add("photo");
  }
  if (i === 3) {
    mainDiv.classList.add("app");
  }
  if (i === 8) {
    mainDiv.classList.add("app");
  }
  let box = document.createElement("div");
  box.className = "box mb-3 bg-white p-2 overflow-hidden";
  mainDiv.appendChild(box);
  let image = document.createElement("img");
  image.className = "img-fluid";
  image.setAttribute("src", `imgs/work-0${i}.png`);
  box.appendChild(image);
  rowElement.appendChild(mainDiv);
}

let allImageContainer = document.querySelectorAll(".portfolio .row .all");
linksPortfolio.forEach(function (li) {
  li.addEventListener("click", function () {
    allImageContainer.forEach((img) => {
      img.style.cssText = "display: none;";
    });
    document.querySelectorAll(li.dataset.image).forEach((e) => {
      e.style.cssText = "display: block;";
    });
  });
});

window.onscroll = () => {
  if (window.scrollY >= 600) {
    document.querySelector(".scroll-button").style.cssText = "display: flex;";
  } else {
    document.querySelector(".scroll-button").style.cssText = "display: none;";
  }
};
document.querySelector(".scroll-button").addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
