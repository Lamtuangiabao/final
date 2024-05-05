import { notif } from "./noti.js";

const regist_form = document.getElementById("regist_form");
// console.log(regist_form);
regist_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phone = document.getElementById("phone").value;
  //   console.log(phone);
  if (phone.length != 10) {
    notif("sai số lượng số điện thoại cho phép, hãy nhập lại nhé !", false);
    return;
  } else if (localStorage.users) {
    let users = JSON.parse(localStorage.users);
    for (let user of users) {
      if (phone == user.phone) {
        notif("Số điện thoại đã tồn tại, hãy nhập lại số khác nhé !", false);
        return;
      } else {
        users.push({
          phone: phone,
        });
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  } else {
    let users = [];
    users.push({
      phone: phone,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
  notif("Đăng ký thành công", true);
  setTimeout(() => {
    location = "./index.html";
  }, 2500);
});
