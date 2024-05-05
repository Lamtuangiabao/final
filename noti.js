export function notif(message, succ) {
  const noti = document.getElementById("noti");

  if (succ) {
    noti.classList.add("green");
    noti.classList.remove("red");
  } else {
    noti.classList.add("red");
    noti.classList.remove("green");
  }
  noti.innerText = message;
  noti.classList.add("show");
  setTimeout(() => {
    noti.classList.remove("show");
  }, 2000);
}
