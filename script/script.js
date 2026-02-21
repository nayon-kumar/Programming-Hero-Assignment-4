const allFilter = document.getElementById("allFilter");
const interviewFilter = document.getElementById("interviewFilter");
const rejectedFilter = document.getElementById("rejectedFilter");

// Toggle button design
allFilter.addEventListener("click", function () {
  interviewFilter.classList.remove("btn-primary");
  rejectedFilter.classList.remove("btn-primary");

  allFilter.classList.add("btn-primary");
});
interviewFilter.addEventListener("click", function () {
  allFilter.classList.remove("btn-primary");
  rejectedFilter.classList.remove("btn-primary");

  interviewFilter.classList.add("btn-primary");
});
rejectedFilter.addEventListener("click", function () {
  allFilter.classList.remove("btn-primary");
  interviewFilter.classList.remove("btn-primary");

  rejectedFilter.classList.add("btn-primary");
});
