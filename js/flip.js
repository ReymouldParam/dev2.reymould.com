function flipCarousel() {
    setTimeout(() => {
      document.getElementById("page1").style.transform = "rotateY(-180deg)";
      document.getElementById("page1").style.zIndex = "1";

    }, flipTime*1);

    setTimeout(() => {
      document.getElementById("page2").style.transform = "rotateY(-180deg)";
      document.getElementById("page2").style.zIndex = "2";

    }, flipTime*2);

    setTimeout(() => {
      document.getElementById("page3").style.transform = "rotateY(-180deg)";
      document.getElementById("page3").style.zIndex = "3";
    }, flipTime*3);

    setTimeout(() => {
      document.getElementById("page4").style.transform = "rotateY(-180deg)";
      document.getElementById("page4").style.zIndex = "4";
    }, flipTime*4);

    setTimeout(() => {
        document.getElementById("page5").style.transform = "rotateY(-180deg)";
        document.getElementById("page5").style.zIndex = "5";
    }, flipTime*5);
      
    setTimeout(() => {
        document.getElementById("page6").style.transform = "rotateY(-180deg)";
        document.getElementById("page6").style.zIndex = "6";
    }, flipTime*6);

    setTimeout(() => {
      document.getElementById("page1").style.transform = "rotateY(0deg)";
      document.getElementById("page2").style.transform = "rotateY(0deg)";
      document.getElementById("page3").style.transform = "rotateY(0deg)";
      document.getElementById("page4").style.transform = "rotateY(0deg)";
      document.getElementById("page5").style.transform = "rotateY(0deg)";
      document.getElementById("page6").style.transform = "rotateY(0deg)";

      document.getElementById("page1").style.zIndex = "7";
      document.getElementById("page2").style.zIndex = "6";
      document.getElementById("page3").style.zIndex = "5";
      document.getElementById("page4").style.zIndex = "4";
      document.getElementById("page5").style.zIndex = "3";
      document.getElementById("page6").style.zIndex = "2";

    }, flipTime*7);
  }

const flipTime = 3000;

flipCarousel();
setInterval(flipCarousel, flipTime*7);