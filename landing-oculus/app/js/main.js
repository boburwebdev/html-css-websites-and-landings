const featuresTabHeaders = document.querySelectorAll(".features__tabs-headings-item");
const featuresTabBodyItems = document.querySelectorAll(".features__tabs-body-item");

featuresTabHeaders.forEach((headerItem, idx) => {
  headerItem.addEventListener("click", e => {
    featuresTabHeaders.forEach(item => item.classList.remove("active"));
    featuresTabBodyItems.forEach(item => item.classList.remove("active"));

    e.currentTarget.classList.add("active");
    featuresTabBodyItems[idx].classList.add("active");
  });
})