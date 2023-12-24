const dayInput = document.querySelector(".day_input");
const monthInput = document.querySelector(".month_input");
const yearInput = document.querySelector(".year_input");
const totalYear = document.querySelector(".year_span");
const totalMonth = document.querySelector(".month_span");
const totalDay = document.querySelector(".day_span");
const calcBtn = document.querySelector(".calc_age");
const labels = document.querySelectorAll("label");

const validation = function () {
  const nowFun = new Date();
  if (
    dayInput.value <= 31 &&
    monthInput.value <= 12 &&
    yearInput.value <= nowFun.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
};

const checkEmpty = function () {
  if (
    dayInput.value !== "" &&
    monthInput.value !== "" &&
    yearInput.value !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

const removeError = function () {
  labels.forEach((label) => label.classList.remove("error"));
};

calcBtn.addEventListener("click", function () {
  const now = new Date();
  const dayValue = dayInput.value;
  const monthValue = monthInput.value;
  const yearValue = yearInput.value;
  removeError();
  if (validation() && checkEmpty()) {
    totalYear.textContent = `${Math.abs(now.getFullYear() - yearValue)}`;
    totalMonth.textContent = `${Math.abs(now.getMonth() + 1 - monthValue)}`;
    totalDay.textContent = `${Math.abs(now.getDate() - dayValue)}`;
  } else {
    labels.forEach((label) => label.classList.add("error"));
  }
});
