// ==============================================
// FOR PICNICS GALLERY
// ==============================================

const images = [...document.querySelectorAll(".image")];

// popup
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `../../editable-media/events-gallery/picnics/${i + 1}.jpeg`;
  let imageNumber = `${i + 1}.jpeg`;
  largeImage.src = path;
  imageName.innerHTML = imageNumber;
  imageIndex.innerHTML = `${i + 1}`;
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    updateImage(index - 1);
  }
});

rightArrow.addEventListener("click", () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});

// ==============================================
// FOR APL GALLERY
// ==============================================

const images2 = [...document.querySelectorAll(".image2")];

// popup

const popup2 = document.querySelector(".popup2");
const closeBtn2 = document.querySelector(".close-btn2");
const imageName2 = document.querySelector(".image-name2");
const largeImage2 = document.querySelector(".large-image2");
const imageIndex2 = document.querySelector(".index2");
const leftArrow2 = document.querySelector(".left-arrow2");
const rightArrow2 = document.querySelector(".right-arrow2");

let index2 = 0; // will track our current image;

images2.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage2(i);
    popup2.classList.toggle("active");
  });
});

const updateImage2 = (i) => {
  let path2 = `../../editable-media/events-gallery/academy-premier-league/${
    i + 100 + 1
  }.jpeg`;
  let imageNumber2 = `${i + 100 + 1}.jpeg`;
  largeImage2.src = path2;
  imageName2.innerHTML = imageNumber2;
  imageIndex2.innerHTML = `${i + 1}`;
  index2 = i;
};

closeBtn2.addEventListener("click", () => {
  popup2.classList.toggle("active");
});

leftArrow2.addEventListener("click", () => {
  if (index2 > 0) {
    updateImage2(index2 - 1);
  }
});

rightArrow2.addEventListener("click", () => {
  if (index2 < images2.length - 1) {
    updateImage2(index2 + 1);
  }
});

// ==============================================
// FOR FAREWELL CELEBRATIONS GALLERY
// ==============================================

const images3 = [...document.querySelectorAll(".image3")];

// popup

const popup3 = document.querySelector(".popup3");
const closeBtn3 = document.querySelector(".close-btn3");
const imageName3 = document.querySelector(".image-name3");
const largeImage3 = document.querySelector(".large-image3");
const imageIndex3 = document.querySelector(".index3");
const leftArrow3 = document.querySelector(".left-arrow3");
const rightArrow3 = document.querySelector(".right-arrow3");

let index3 = 0; // will track our current image;

images3.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage3(i);
    popup3.classList.toggle("active");
  });
});

const updateImage3 = (i) => {
  let path3 = `../../editable-media/events-gallery/farewell-celebrations/${
    i + 200 + 1
  }.jpeg`;
  let imageNumber3 = `${i + 200 + 1}.jpeg`;
  largeImage3.src = path3;
  imageName3.innerHTML = imageNumber3;
  imageIndex3.innerHTML = `${i + 1}`;
  index3 = i;
};

closeBtn3.addEventListener("click", () => {
  popup3.classList.toggle("active");
});

leftArrow3.addEventListener("click", () => {
  if (index3 > 0) {
    updateImage3(index3 - 1);
  }
});

rightArrow3.addEventListener("click", () => {
  if (index3 < images3.length - 1) {
    updateImage3(index3 + 1);
  }
});

// ==============================================
// FOR BIRTHDAYS GALLERY
// ==============================================

const images4 = [...document.querySelectorAll(".image4")];

// popup

const popup4 = document.querySelector(".popup4");
const closeBtn4 = document.querySelector(".close-btn4");
const imageName4 = document.querySelector(".image-name4");
const largeImage4 = document.querySelector(".large-image4");
const imageIndex4 = document.querySelector(".index4");
const leftArrow4 = document.querySelector(".left-arrow4");
const rightArrow4 = document.querySelector(".right-arrow4");

let index4 = 0; // will track our current image;

images4.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage4(i);
    popup4.classList.toggle("active");
  });
});

const updateImage4 = (i) => {
  let path4 = `../../editable-media/events-gallery/birthdays/${
    i + 300 + 1
  }.jpeg`;
  let imageNumber4 = `${i + 300 + 1}.jpeg`;
  largeImage4.src = path4;
  imageName4.innerHTML = imageNumber4;
  imageIndex4.innerHTML = `${i + 1}`;
  index4 = i;
};

closeBtn4.addEventListener("click", () => {
  popup4.classList.toggle("active");
});

leftArrow4.addEventListener("click", () => {
  if (index4 > 0) {
    updateImage4(index4 - 1);
  }
});

rightArrow4.addEventListener("click", () => {
  if (index4 < images4.length - 1) {
    updateImage4(index4 + 1);
  }
});

// ==============================================
// FOR FESTIVALS GALLERY
// ==============================================

const images5 = [...document.querySelectorAll(".image5")];

// popup

const popup5 = document.querySelector(".popup5");
const closeBtn5 = document.querySelector(".close-btn5");
const imageName5 = document.querySelector(".image-name5");
const largeImage5 = document.querySelector(".large-image5");
const imageIndex5 = document.querySelector(".index5");
const leftArrow5 = document.querySelector(".left-arrow5");
const rightArrow5 = document.querySelector(".right-arrow5");

let index5 = 0; // will track our current image;

images5.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage5(i);
    popup5.classList.toggle("active");
  });
});

const updateImage5 = (i) => {
  let path5 = `../../editable-media/events-gallery/festivals/${
    i + 400 + 1
  }.jpeg`;
  let imageNumber5 = `${i + 400 + 1}.jpeg`;
  largeImage5.src = path5;
  imageName5.innerHTML = imageNumber5;
  imageIndex5.innerHTML = `${i + 1}`;
  index5 = i;
};

closeBtn5.addEventListener("click", () => {
  popup5.classList.toggle("active");
});

leftArrow5.addEventListener("click", () => {
  if (index5 > 0) {
    updateImage5(index5 - 1);
  }
});

rightArrow5.addEventListener("click", () => {
  if (index5 < images5.length - 1) {
    updateImage5(index5 + 1);
  }
});
