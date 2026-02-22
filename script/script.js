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

// List and list calculation
let allList = [];
let interviewList = [];
let rejectedList = [];

function updateAll() {
  document.getElementById("total").innerText = allList.length;
  document.getElementById("interview").innerText = interviewList.length;
  document.getElementById("rejected").innerText = rejectedList.length;
}

// Select all cards
const allCards = document.querySelectorAll(".cardContainer");
allCards.forEach((card, index) => {
  const companyName = card.querySelector(".companyName").innerText;
  const position = card.querySelector(".position").innerText;
  const location = card.querySelector(".location").innerText;
  const type = card.querySelector(".type").innerText;
  const salary = card.querySelector(".salary").innerText;
  const description = card.querySelector(".description").innerText;
  const statuss = card.querySelector(".statuss").innerText;

  const cardObj = {
    id: index,
    companyName,
    position,
    location,
    type,
    salary,
    description,
    statuss,
  };
  allList.push(cardObj);
});

updateAll();

// Show all card
function showAllCards() {
  const allFilteredElemet = document.getElementById("allFilteredElemet");

  for (const card of allList) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
            class="cardContainer flex justify-between bg-base-300 p-5 rounded-2xl"
          >
            <div class="space-y-3">
              <h3 class="companyName text-xl">${card.companyName}</h3>
              <p class="position text-[#64748B]">${card.position}</p>
              <div class="flex flex-wrap gap-1 text-[#64748B]">
                <p class="location">${card.location}</p>
                <p class="type">${card.type}</p>
                <p class="salary">${card.salary}</p>
              </div>
              <button
                class="statuss bg-white/70 px-3 py-2 rounded-[5px] uppercase"
              >
                Not Applied
              </button>
              <p class="description text-[#323B49]">
                ${card.description}
              </p>
              <div>
                <button
                  class="interviewBtn uppercase btn btn-outline btn-success"
                >
                  Interview
                </button>
                <button class="rejectedBtn uppercase btn btn-outline btn-error">
                  Rejected
                </button>
              </div>
            </div>
            <div>
              <button class="btn px-3 py-2 rounded-full">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
    `;
    allFilteredElemet.appendChild(div);
  }
}
showAllCards();

// Passing all list
allFilter.addEventListener("click", function () {
  filterObj(allList);
});
interviewFilter.addEventListener("click", function () {
  filterObj(interviewList);
});
rejectedFilter.addEventListener("click", function () {
  filterObj(rejectedList);
});

// Filter object function
function filterObj(obj) {
  if (obj.length == 0) {
    const allFilteredElemetHide = document.getElementById("allFilteredElemet");
    allFilteredElemetHide.classList.add("hidden");
    const noJob = document.getElementById("noJob");
    noJob.classList.remove("hidden");
  } else {
    const allFilteredElemetHide = document.getElementById("allFilteredElemet");
    allFilteredElemetHide.classList.remove("hidden");
    const noJob = document.getElementById("noJob");
    noJob.classList.add("hidden");
  }
}
