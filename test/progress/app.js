let progressSection = document.querySelector(".progress-section");
let progressBar = document.querySelector(".progress-bar");
let progressNum = document.querySelector(".progress-num");

let x, y;

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});
function updateProgressBar() {
  progressSection.style.transform = `translate(${x}px,${y}px)`;
  progressBar.style.height = `${getScrollPercentage()}%`;
  //   console.log(getScrollPercentage());
  progressNum.innerText = `${getScrollPercentage()}%`;
  requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  return Math.ceil(
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}

updateProgressBar();
