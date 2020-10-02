window.onload = function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselElement = document.querySelectorAll(".carousel-element");

  //Buttons
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  //Counter
  let counter = 1;
  const size = carouselElement[0].clientWidth;

  carouselSlide.style.transform = "translateX(" + -size * counter + "px";

  //Button Listeners

  nextBtn.addEventListener("click", () => {
    if (counter >= carouselElement.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px";
  });

  carouselSlide.addEventListener("transitionend", () => {
    if (carouselElement[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselElement.length - 2;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px";
    }
    if (carouselElement[counter].id === "firstClone") {
      carouselSlide.style.transition = "none";
      counter = carouselElement.length - counter;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px";
    }
  });

  //Project Cards:

  const projectCards = [
    {
      name: "Database Interaction App",
      technology: ["C++"],
      summary:
        "A console program that accesses a database in Oracle. It takes input from the user and it creates/updates the respective attributes in the table. It also has an option to display all the rows in such table.",
      summaryMobile:
        "A console program that accesses a database in Oracle.",
      video: "",
    },
    {
      name: "Clothing Web Store",
      technology: ["JavaScript", "HTML", "CSS", "GSAP"],
      summary: "A mock web store using strictly HTML, CSS and VanillaJS.",
      summaryMobile: "A mock clothing web store.",
      video: "",
    },
    {
      name: "Parking App",
      technology: ["C++"],
      summary:
        "This project simulates a parking complex, allowing vehicles to enter and exit the building. There are a limited amount of parking spots and the program acts accordingly. The car owners are also able to decide if they want a car wash.",
      summaryMobile:
        "This project simulates a parking complex, allowing vehicles to enter and exit the building.",
      video: "",
    },
    {
      name: "Database Interaction App",
      technology: ["C++","Oracle SQL"],
      summary:
        "A console program that accesses a database in Oracle. It takes input from the user and it creates/updates the respective attributes in the table. It also has an option to display all the rows in such table.",
      summaryMobile:
        "A console program that accesses a database in Oracle.",
      video:
        "<iframe title='Database Interaction App' src='https://www.youtube.com/embed/hOwn9FdO_i0?controls=0?' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;' allowfullscreen></iframe>",
    },
    {
      name: "Clothing Web Store",
      technology: ["JavaScript", "HTML", "CSS", "GSAP"],
      summary: "A mock web store using strictly HTML, CSS and VanillaJS.",
      summaryMobile: "A mock clothing web store.",
      video: "",
    },
  ];

  for (let i in projectCards) {
    let container = document.createElement("div");
    container.className = "container";
    carouselElement[i].appendChild(container);

    let image = document.createElement("div");
    image.className = "image";

    if (window.matchMedia("(max-width: 600px)").matches) {
      image.innerHTML = "";
    } else {
      image.innerHTML = projectCards[i].video;
    }

    container.appendChild(image);

    let description = document.createElement("div");
    description.className = "description";
    container.appendChild(description);

    let technology = document.createElement("div");
    technology.className = "technology";
    description.appendChild(technology);
    const tech = document.querySelectorAll(".technology");
    let skill = projectCards[i].technology;
    for(let x in skill){
      let span = document.createElement("span");
      span.innerText = skill[x];
      tech[i].appendChild(span);
      if(skill[x] === 'C++' || skill[x] === 'JavaScript'){
        span.className = 'language';
      }else if(skill[x] === 'Oracle SQL' || skill[x] === 'SQL'){
        span.className = 'database';
      }
    }

    let summary = document.createElement("div");
    summary.className = "summary";
    if (window.matchMedia("(max-width: 600px)").matches) {
      summary.innerText = projectCards[i].summaryMobile;
    } else {
      summary.innerText = projectCards[i].summary;
    }
    description.appendChild(summary);
  }
};
