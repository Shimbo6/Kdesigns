// Reviews Data for manipulation
const reviews = [
  {
    author: "Mark Collins",
    job: "Amazing Design!",
    text: "Absolutely thrilled with our new kitchen from KDesigns! The sleek, modern design exceeded our expectations. The attention to detail and quality craftsmanship is evident in every corner. It's become the heart of our home, where we create delicious meals and cherished memories. Thank you, KDesigns, for turning our vision into reality!",
    img: "images/kisspng-computer-icons-user-profile-avatar-jain-icon-5b332c5b28b8b7.9167826815300803471668.png",
  },
  {
    author: "Jassi Sheoran",
    job: "In Love!",
    text: "We couldn't be happier with our stunning new kitchen from KDesigns! The team's expertise and creativity transformed our space into a functional work of art. The seamless integration of top-notch appliances and thoughtful layout has made cooking a joy. Thank you, KDesigns, for making our dream kitchen a reality!",
    img: "images/kisspng-computer-icons-user-profile-avatar-female-profile-5ab915f7b12a63.4743374115220792237257.png",
  },
  {
    author: "Roy Williams",
    job: "Life Changing",
    text: "KDesigns truly exceeded our expectations with our new kitchen. The minimalist design perfectly suits our style, creating a calm and inviting space. The attention to detail and quality of workmanship is outstanding. Our family now enjoys every moment spent in this beautifully designed kitchen. Thank you, KDesigns, for making our vision come to life!",
    img: "images/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6c8c133.5629676315226654468223.png",
  },
  {
    author: "Ishan Sharma",
    job: "Amazing work",
    text: "Choosing KDesigns was the best decision we made for our kitchen remodel. The rustic elegance they brought to our space is simply breathtaking. From the handcrafted cabinetry to the exquisite stone countertops, every element was meticulously selected and expertly installed. It's now a space that truly feels like home. Thank you, KDesigns, for creating our dream kitchen!",
    img: "images/kisspng-avatar-scalable-vector-graphics-user-profile-icon-wearing-a-striped-shirt-boys-5aa11b779eb744.7012608915205077676501.png",
  },
];

// Creating variables to get elements from our DOM.
const mainImage = document.getElementById("img");
const myAuthor = document.getElementById("author");
const myJob = document.getElementById("job");
const myText = document.getElementById("text");
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const random = document.getElementById("randomBtn");

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener("click", function () {
  indexNum++;
  if (indexNum > length - 1) {
    indexNum = 0;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// Code for listening previous button event
prev.addEventListener("click", function () {
  indexNum--;
  if (indexNum < 0) {
    indexNum = 3;
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    mainImage.src = reviews[indexNum].img;
    myAuthor.innerHTML = reviews[indexNum].author;
    myJob.innerHTML = reviews[indexNum].job;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// Code for listening random button event
random.addEventListener("click", function () {
  let num = Math.floor(3 * Math.random());

  mainImage.src = reviews[num].img;
  myAuthor.innerHTML = reviews[num].author;
  myJob.innerHTML = reviews[num].job;
  myText.innerHTML = reviews[num].text;
});
