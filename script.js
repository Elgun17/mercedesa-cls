// INTRO HIDE
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
}, 3000);

// PANELS
document.querySelectorAll("[data-panel]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.panel).classList.add("active");
  };
});

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  };
});