import { notif } from "./noti.js";
const signin_form = document.getElementById("signin_form");
// console.log(signin_form);
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    notif("Không được bỏ trống", false);
  } else if (localStorage.users) {
    let users = JSON.parse(localStorage.users);
    for (let user of users) {
      if (phone == user.phone) {
        notif("Đăng nhập thành công", true);
        setTimeout(() => {
          location = "./index.html";
        }, 2500);
        return;
      } else {
        notif("sai số điện thoại", false);
        return;
      }
    }
  } else {
    notif("số điện thoại chưa đăng ký", false);
  }
});
