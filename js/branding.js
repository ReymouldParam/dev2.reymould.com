function removeAll(){
  document.getElementById("content1").style.display="none";
  document.getElementById("content2").style.display="none";
  document.getElementById("content3").style.display="none";
  document.getElementById("content4").style.display="none";
  document.getElementById("tab1").classList.add("border-light");
  document.getElementById("tab2").classList.add("border-light");
  document.getElementById("tab3").classList.add("border-light");
  document.getElementById("tab4").classList.add("border-light");
  document.getElementById("tab1").classList.remove("border-highlighted");
  document.getElementById("tab2").classList.remove("border-highlighted");
  document.getElementById("tab3").classList.remove("border-highlighted");
  document.getElementById("tab4").classList.remove("border-highlighted");
}

document.getElementById("tab1").addEventListener("click", function(e){
  var content1 = document.getElementById("content1");
  var computedStyle = window.getComputedStyle(content1);
  var dis = computedStyle.getPropertyValue('display');

  if(dis==="none"){
    removeAll();
    document.getElementById("tab1").classList.remove("border-light");
    document.getElementById("tab1").classList.add("border-highlighted");
    document.getElementById("content1").classList.remove("move-out-up");
    document.getElementById("content1").style.display="block";
    document.getElementById("content1").classList.add("move-in-down");

  }else{
    document.getElementById("tab1").classList.add("border-light");
    document.getElementById("tab1").classList.remove("border-highlighted");
    document.getElementById("content1").classList.remove("move-in-down");
    document.getElementById("content1").classList.add("move-out-up");
    setTimeout(function(){
      document.getElementById("content1").style.display="none";
    },500);
  }
});

document.getElementById("tab2").addEventListener("click", function(e){
  var content2 = document.getElementById("content2");
  var computedStyle = window.getComputedStyle(content2);
  var dis = computedStyle.getPropertyValue('display');

  if(dis==="none"){
    removeAll();
    document.getElementById("tab2").classList.remove("border-light");
    document.getElementById("tab2").classList.add("border-highlighted");
    document.getElementById("content2").classList.remove("move-out-up");
    document.getElementById("content2").style.display="flex";
    document.getElementById("content2").classList.add("move-in-down");

  }else{
    document.getElementById("tab2").classList.add("border-light");
    document.getElementById("tab2").classList.remove("border-highlighted");
    document.getElementById("content2").classList.remove("move-in-down");
    document.getElementById("content2").classList.add("move-out-up");
    setTimeout(function(){
      document.getElementById("content2").style.display="none";
    },500);
  }
});

document.getElementById("tab3").addEventListener("click", function(e){
  var content3 = document.getElementById("content3");
  var computedStyle = window.getComputedStyle(content3);
  var dis = computedStyle.getPropertyValue('display');

  if(dis==="none"){
    removeAll();
    document.getElementById("tab3").classList.remove("border-light");
    document.getElementById("tab3").classList.add("border-highlighted");
    document.getElementById("content3").classList.remove("move-out-up");
    document.getElementById("content3").style.display="flex";
    document.getElementById("content3").classList.add("move-in-down");

  }else{
    document.getElementById("tab3").classList.add("border-light");
    document.getElementById("tab3").classList.remove("border-highlighted");
    document.getElementById("content3").classList.remove("move-in-down");
    document.getElementById("content3").classList.add("move-out-up");
    setTimeout(function(){
      document.getElementById("content3").style.display="none";
    },500);
  }
});

document.getElementById("tab4").addEventListener("click", function(e){
  var content4 = document.getElementById("content4");
  var computedStyle = window.getComputedStyle(content4);
  var dis = computedStyle.getPropertyValue('display');

  if(dis==="none"){
    removeAll();
    document.getElementById("tab4").classList.remove("border-light");
    document.getElementById("tab4").classList.add("border-highlighted");
    document.getElementById("content4").classList.remove("move-out-up");
    document.getElementById("content4").style.display="flex";
    document.getElementById("content4").classList.add("move-in-down");

  }else{
    document.getElementById("tab4").classList.add("border-light");
    document.getElementById("tab4").classList.remove("border-highlighted");
    document.getElementById("content4").classList.remove("move-in-down");
    document.getElementById("content4").classList.add("move-out-up");
    setTimeout(function(){
      document.getElementById("content4").style.display="none";
    },500);
  }
});


const carousel = document.querySelectorAll('.carousel');
const images = carousel[0].querySelectorAll('img');
const images1 = carousel[1].querySelectorAll('img');
const images2 = carousel[2].querySelectorAll('img');
const interval = 4000;
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });

  images1.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });

  images2.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function slideNext() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  if (currentIndex >= images1.length) {
    currentIndex = 0;
  }
  if (currentIndex >= images2.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(slideNext, interval);

// Optionally, you can pause the animation on hover
const scrollingContainer = document.querySelector('.scrolling-container');
scrollingContainer.addEventListener('mouseover', () => {
  document.querySelector('.scrolling-content').style.animationPlayState = 'paused';
});
scrollingContainer.addEventListener('mouseleave', () => {
  document.querySelector('.scrolling-content').style.animationPlayState = 'running';
});

function scrollUp() {
  const carousel = document.querySelector('.clients-carousal');
  const firstItem = carousel.firstElementChild;
  const itemHeight = firstItem.offsetHeight;

  // Scroll the first item out of view smoothly
  firstItem.style.transition = 'transform 0.5s ease-in-out';
  firstItem.style.transform = `translateY(-${itemHeight}px)`;

  // After the transition ends, reset the position and remove the transition
  firstItem.addEventListener('transitionend', function() {
    carousel.appendChild(firstItem);
    firstItem.style.transition = '';
    firstItem.style.transform = '';
  });
}
setInterval(scrollUp, 3000);


// disable scroll

// var brandingContent = document.querySelectorAll(".branding-content-1");

// for(var i=0; i<brandingContent.length; i++){
//   brandingContent[i].addEventListener("mouseover", function(){
//     document.body.style.overflow = 'hidden';
//   });

//   brandingContent[i].addEventListener("mouseout", function(){
//     document.body.style.overflow = 'auto';
//   });
// }
