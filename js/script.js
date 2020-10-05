/*Alastair Odhiambo*/

window.onload = function () {
  const carouselElement = document.querySelectorAll(".carousel-element");

  //Project Cards:
  const projectCards = [
    {
      name: "Clothing Web Store",
      image: "/img/oasis.webp",
      imageMobile: "/img/oasis-mobile.jpeg",
      alt: "oasis",
      technology: ["JavaScript", "HTML", "CSS"],
      summary: "A mock web store using strictly HTML, CSS and VanillaJS.",
      summaryMobile: "A mock clothing web store.",
      video: "",
      link: "https://www.alastairodhiambo.com/Web_Store/",
      linkText: "Visit Site"
    },
    {
      name: "Parking App",
      image: "/img/parking-app.webp",
      imageMobile: "/img/parking-app-mobile.png",
      alt: "parking-app",
      technology: ["C++"],
      summary:
        "This project simulates a parking complex, allowing vehicles to enter and exit the building. There are a limited amount of parking spots and the program acts accordingly.",
      summaryMobile:
        "This project simulates a parking complex, allowing vehicles to enter and exit the building.",
      video: "",
      link: "https://repl.it/@alastairo/ParkingApp",
      linkText: "Test it"
    },
    {
      name: "Database Interaction App",
      image: "/img/database-interaction-app.webp",
      imageMobile: "/img/database-mobile.png",
      alt: "database-interaction-app",
      technology: ["C++", "Oracle SQL"],
      summary:
        "A console program that accesses a database in Oracle. It takes input from the user and it creates/updates the respective attributes in the table.",
      summaryMobile: "A console program that accesses a database in Oracle.",
      video:
        "<iframe id='youtube' title='Database Interaction App' src='https://www.youtube.com/embed/hOwn9FdO_i0?controls=0?' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;' allowfullscreen></iframe>",
      link: "https://github.com/alastairodhiambo/database_interaction_app",
      linkText: "GitHub"
    },
  ];

  for (let i in projectCards) {
    let card = projectCards[i];

    let cardImage = document.createElement("img");
    if (window.matchMedia("(max-width: 600px)").matches) {
      cardImage.src = card.imageMobile;
    } else {
      cardImage.src = card.image;
    }
    cardImage.alt = card.alt;
    carouselElement[i].appendChild(cardImage);

    let container = document.createElement("div");
    container.className = "container";
    carouselElement[i].appendChild(container);

    let video = document.createElement("div");
    video.className = "image";

    if (window.matchMedia("(max-width: 600px)").matches) {
      video.innerHTML = "";
    } else {
      video.innerHTML = card.video;
    }

    container.appendChild(video);

    let description = document.createElement("div");
    description.className = "description";
    container.appendChild(description);

    let technology = document.createElement("div");
    technology.className = "technology";
    description.appendChild(technology);
    const tech = document.querySelectorAll(".technology");
    let skill = card.technology;
    for (let x in skill) {
      let span = document.createElement("span");
      span.innerText = skill[x];
      tech[i].appendChild(span);
      if (skill[x] === "C++" || skill[x] === "JavaScript") {
        span.className = "language";
      } else if (skill[x] === "Oracle SQL" || skill[x] === "SQL") {
        span.className = "database";
      }
    }

    let summary = document.createElement("div");
    summary.className = "summary";
    if (window.matchMedia("(max-width: 600px)").matches) {
      summary.innerText = card.summaryMobile;
    } else {
      summary.innerText = card.summary;
    }
    description.appendChild(summary);

    let containerLink = document.createElement("a");
    containerLink.className = "container-link";
    containerLink.href = card.link;
    containerLink.target = "_blank"
    containerLink.innerText = card.linkText;
    carouselElement[i].appendChild(containerLink);
  }

  //Carousel Function:

  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-button--left");
  const nextBtn = document.querySelector(".carousel-button--right");
  const dotsNav = document.querySelector(".carousel-nav");
  const dots = Array.from(dotsNav.children);

  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  }

  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) =>
  {
    track.style.transform = "translateX(-" + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  }

  const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  }

  const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
      prevBtn.classList.add("is-hidden");
      nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1){
      prevBtn.classList.remove("is-hidden");
      nextBtn.classList.add("is-hidden");
    } else {
      prevBtn.classList.remove('is-hidden');
      nextBtn.classList.remove('is-hidden');
    }
  }

  prevBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
  })

  nextBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
  })

  dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest("button");

    if(!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
  })
};
