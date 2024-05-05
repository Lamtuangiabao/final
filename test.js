// console.log("concac");
///////////////////////////////////////
// carousel

const but = document.getElementById("button");
// but.addEventListener("click", ad(1));
// but.onclick = function () {
//   ad(1);
// };

let n = 0;
function ad(i) {
  //   n += n;
  n += i;
  //   n = n + i;
  console.log(n);
}

const im = document.getElementsByClassName("im");
for (let i = 0; i < im.length; i++) {
  im[i].style.display = "none";
}
// im[0].style.display = "block";
console.log(im.length);
/////////////////////////////////////////////
