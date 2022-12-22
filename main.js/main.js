function openRightNav() {
  document.querySelector("#right-nav").style.transition = "all 0.5s";
  document.querySelector("#right-nav").style.right = "0";
  document.querySelector("#right-nav").style.boxShadow =
    "-10px 0 10px rgba(0,0,0,0.3)";
}

function closeRightNav() {
  document.querySelector("#right-nav").style.transition = "all 0.5s";
  document.querySelector("#right-nav").style.right = "-350px";
  document.querySelector("#right-nav").style.boxShadow = "none";
}

function WhoWeAre() {
  document.querySelector(".WhoWeAre").style.backgroundColor = "#155BD5";
  document.querySelector(".WhoWeAre").style.color = "white";
  document.querySelector("#Who-We-Are").style.opacity = "1";

  document.querySelector(".OurVision").style.backgroundColor = " white";
  document.querySelector(".OurVision").style.color = "#155BD5";

  document.querySelector(".OurHistory").style.backgroundColor = " white";
  document.querySelector(".OurHistory").style.color = "#155BD5";

  document.querySelector("#Who-We-Are").style.display = "block";
  document.querySelector("#Our-Vision").style.display = "none";
  document.querySelector("#Our-history").style.display = "none";
}

function OurVision() {
  document.querySelector(".OurVision").style.backgroundColor = "#155BD5";
  document.querySelector(".OurVision").style.color = "white";
  document.querySelector("#Our-Vision").style.opacity = "1";

  document.querySelector(".WhoWeAre").style.backgroundColor = " white";
  document.querySelector(".WhoWeAre").style.color = "#155BD5";

  document.querySelector(".OurHistory").style.backgroundColor = " white";
  document.querySelector(".OurHistory").style.color = "#155BD5";

  document.querySelector("#Who-We-Are").style.display = "none";
  document.querySelector("#Our-Vision").style.display = "block";
  document.querySelector("#Our-history").style.display = "none";
}

function OurHistory() {
  document.querySelector(".OurHistory").style.backgroundColor = "#155BD5";
  document.querySelector(".OurHistory").style.color = "white";
  document.querySelector("#Our-history").style.opacity = "1";

  document.querySelector(".OurVision").style.backgroundColor = " white";
  document.querySelector(".OurVision").style.color = "#155BD5";
  document.querySelector(".WhoWeAre").style.backgroundColor = " white";
  document.querySelector(".WhoWeAre").style.color = "#155BD5";

  document.querySelector("#Who-We-Are").style.display = "none";
  document.querySelector("#Our-Vision").style.display = "none";
  document.querySelector("#Our-history").style.display = "block";
}
