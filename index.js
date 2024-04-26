function navbar() {
  const bar = document.getElementById("bar");
  const navbar = document.getElementById("navbar");
  bar.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
navbar();

function accordian() {
  const accordian = document.querySelectorAll(".accordian-div");

  accordian.forEach((e) => {
    const qution = e.querySelector(".qutions");
    const ans = e.querySelector(".answer");
    const btn = e.querySelector("#arrow");
    qution.addEventListener("click", () => {
      ans.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
}
accordian();