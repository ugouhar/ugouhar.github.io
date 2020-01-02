var modal = document.getElementsByClassName("modal")[0];
var modalBox = document.getElementsByClassName("modal-box")[0];
var closeIcon = document.getElementById("closeIcon");
var closeBtn = document.getElementById("closeBtn");
var projectImg = document.getElementsByClassName("image");

var pTitle = document.getElementById("project-title");
var pDesp = document.getElementById("project-desp");
var pTools = document.getElementById("project-tools");

var description = [
  {
    title: "Tile Game",

    description:
      "Tiles of different colors and shape come from the top\
      Player has to clear tiles by placing atleast 3 tiles\
      continuously either horizontally, vertically and/or \
      diagonally of same colour.",

    tools: "HTML, CSS and Javascript"
  },
  {
    title: "Buy N Sell",
    description:
      "An E-commerce website for colleges\
      where students can buy and sell\
      products. The sellers put up goods for sale. \
      The buyer can find the best price for a particular item.",

    tools: "HTML, CSS, Javascript, Bootstrap, NodeJs and Stripe"
  },
  {
    title: "Contact List",
    description:
      "A simple Web App used to Create, Read\
      Update and Delete contacts.",

    tools: "HTML, CSS, Javascript, LocalStorage and JSON"
  },
  {
    title: "Book List App",
    description:
      "This app lets you manage your list of books.\
      Yo can add book name with its author\
    and isbn number. You can add and delete books.",
    tools: "HTML, CSS, Bootstrap, Javascript, LocalStorage and JSON"
  },
  {
    title: "To Do App",
    description: "A simple to-do app to add and delete items temporarily.",
    tools: "HTML, CSS and Javascript"
  }
];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalBox.style.display = "none";
  }
};
closeIcon.onclick = () => {
  modalBox.style.display = "none";
  modal.style.display = "none";
};
closeBtn.onclick = () => {
  modalBox.style.display = "none";
  modal.style.display = "none";
};

for (let i = 0; i < projectImg.length; i++) {
  projectImg[i].onclick = () => {
    //showing modal box
    modal.style.display = "block";
    modalBox.style.display = "block";

    //adding project details
    pTitle.innerText = description[i].title;
    pDesp.innerText = description[i].description;
    pTools.innerText = "Tools : " + description[i].tools;
  };
}
