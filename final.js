let u = 0;
function showslide() {
  const im = document.getElementsByClassName("im");

  // for(let u=0;u<im.length;u++){
  //không hoạt động vì trước khi u <im.length thì u == im.length thì ngay trong vòng lặp vượt điều kiện
  // thì sẽ thoát vòng lặp và không còn display "block " nữa
  for (let i = 0; i < im.length; i++) {
    im[i].style.display = "none";
  }
  // let u = 0;
  // im[u].style.display = "block";
  ++u;
  console.log(im.length);
  console.log(`u=${u}`);
  if (u > im.length || u == im.length) {
    u = 0;
  }
  console.log(`u=${u}`);
  // im[0].style.width = "500px";
  im[u].style.display = "block";
  setTimeout(() => {
    showslide();
  }, 1000);
  // }
}

showslide();
