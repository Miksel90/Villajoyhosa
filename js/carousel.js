document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { src: "/images/view.jpeg", caption: "Utsikt" },
    { src: "/images/view2.jpeg", caption: "Utsikt" },
    { src: "/images/view3.jpeg", caption: "Utsikt" },
    { src: "/images/masterBath.jpg", caption: "Bad 1" },
    { src: "/images/Master.jpg", caption: "soverom 1" },
    { src: "/images/kitchen.jpeg", caption: "Kjøkken" },
    { src: "/images/diningTable.jpg", caption: "Spisebord" },
    { src: "/images/livingroom2.jpg", caption: "Stue" },
    { src: "/images/bathroom2.jpg", caption: "Baderom 2" },
    { src: "/images/bedroom2.jpeg", caption: "soverom 2" },
    { src: "/images/entrance.jpeg", caption: "Inngangen" },
    { src: "/images/BalconyTwo.webp", caption: "Utsikt" },
    { src: "/images/BeachDay.webp", caption: "Stranden" },
    { src: "/images/beachWalkDayTwo.webp", caption: "StrandPromenaden" },
    { src: "/images/NarrowHouse.webp", caption: "Hus utenfor" },
    { src: "/images/NarrowStreet.webp", caption: "Gaten utenfor" },
    { src: "/images/viewNight.webp", caption: "Kveldsutsikt" },
  ];

  const indicatorsContainer = document.getElementById("carousel-indicators");
  const innerContainer = document.getElementById("carousel-inner");

  images.forEach((image, index) => {
    // Create indicator button
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#carouselExampleCaptions";
    indicator.dataset.bsSlideTo = index;
    indicator.ariaLabel = `Slide ${index + 1}`;
    if (index === 0) {
      indicator.classList.add("active");
      indicator.ariaCurrent = "true";
    }
    indicatorsContainer.appendChild(indicator);

    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = image.src;
    img.classList.add("d-block", "w-100");
    img.alt = `Slide ${index + 1}`;

    const caption = document.createElement("div");
    caption.classList.add("carousel-caption", "d-none", "d-md-block");

    const captionText = document.createElement("h2");
    captionText.classList.add("text", "custom-text");
    captionText.textContent = image.caption;

    caption.appendChild(captionText);
    carouselItem.appendChild(img);
    carouselItem.appendChild(caption);
    innerContainer.appendChild(carouselItem);
  });
});
