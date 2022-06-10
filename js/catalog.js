const btnOpenCatalog = document.querySelector(".catalog"),
  catalog = document.querySelector(".modal__catalog"),
  catalogTransition = document.querySelector(".catalog__background");
let items = document.querySelectorAll(".item-link-dropdown");

btnOpenCatalog.onclick = () => {
  catalogTransition.classList.toggle("active");
  catalog.classList.toggle("active");
  document.querySelector(".catalog__img").classList.toggle("change");
};
// кнопка еще
const still = document.querySelector(".main__btn");
still.onclick = () => {
	btnOpenCatalog.onclick();
}
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      catalogTransition.classList.contains("active") &&
      catalog.classList.contains("active")
    ) {
      catalogTransition.classList.remove("active");
      catalog.classList.remove("active");
      document.querySelector(".catalog__img").classList.remove("change");
    }
  });
});
window.onclick = function (event) {
  if (event.target !== btnOpenCatalog && !event.target.closest(".modal__catalog") && event.target !== still) {
    if (
      catalogTransition.classList.contains("active") &&
      catalog.classList.contains("active")
    ) {
      catalogTransition.classList.remove("active");
      catalog.classList.remove("active");
      document.querySelector(".catalog__img").classList.remove("change");
    }
  }
};
// перключение пунктов в каталоге
const link1 = document.querySelector(".link-1"),
  link2 = document.querySelector(".link-2"),
  link3 = document.querySelector(".link-3"),
  link4 = document.querySelector(".link-4"),
  link5 = document.querySelector(".link-5"),
  link6 = document.querySelector(".link-6"),
  link7 = document.querySelector(".link-7"),
  link8 = document.querySelector(".link-8"),
  link9 = document.querySelector(".link-9"),
  link10 = document.querySelector(".link-10"),
  link11 = document.querySelector(".link-11"),
  link12 = document.querySelector(".link-12"),
  link13 = document.querySelector(".link-13"),
  link14 = document.querySelector(".link-14");
let mainCategories = document.querySelectorAll(".main-categories");

link1.addEventListener("mouseover", () => {
  link1.classList.add("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.add("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link2.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.add("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.add("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link3.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.add("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.add("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link4.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.add("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.add("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link5.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.add("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.add("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link6.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.add("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.add("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link7.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.add("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.add("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link8.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.add("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.add("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link9.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.add("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.add("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link10.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.add("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.add("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link11.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.add("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.add("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link12.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.add("active");
  link13.classList.remove("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.add("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link13.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.add("active");
  link14.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.add("active");
  document.querySelector(".categories-link-14").classList.remove("active");
});
link14.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.add("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.add("active");
});