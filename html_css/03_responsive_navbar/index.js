const toggler = () => {
  const menu = document.getElementById('menu');
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    document.getElementById('burger').classList.remove("cross");
  } else {
    menu.style.display = "flex"
    document.getElementById('burger').classList.add("cross");
  }
}
