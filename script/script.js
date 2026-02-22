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

// Track which tab is active
let currentTab = "all";
allFilter.addEventListener("click", function () {
  currentTab = "all";
  filterObj(allList);
});

interviewFilter.addEventListener("click", function () {
  currentTab = "interview";
  filterObj(interviewList);
});

rejectedFilter.addEventListener("click", function () {
  currentTab = "rejected";
  filterObj(rejectedList);
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
function showAllCards(list) {
  const allFilteredElemet = document.getElementById("allFilteredElemet");
  allFilteredElemet.innerHTML = "";

  for (const card of list) {
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
              <button class="statuss px-3 py-2 rounded-[5px] uppercase ${
                card.statuss === "Interview"
                  ? "bg-green-200 text-green-700"
                  : card.statuss === "Rejected"
                    ? "bg-red-200 text-red-700"
                    : "bg-white/70"
              }">
                ${card.statuss}
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

    // Select two button and add event listener
    const interviewBtn = div.querySelector(".interviewBtn");
    const rejectedBtn = div.querySelector(".rejectedBtn");
    interviewBtn.addEventListener("click", function () {
      moveToInterview(card.id);
    });
    rejectedBtn.addEventListener("click", function () {
      moveToRejected(card.id);
    });
  }
}
showAllCards(allList);

// Refress function
function refreshCurrentTab() {
  if (currentTab === "all") {
    showAllCards(allList);
  } else if (currentTab === "interview") {
    showAllCards(interviewList);
    if (interviewList.length === 0) {
      filterObj(interviewList);
    }
  } else if (currentTab === "rejected") {
    showAllCards(rejectedList);
    if (rejectedList.length === 0) {
      filterObj(rejectedList);
    }
  }
}

// Move element
function moveToInterview(id) {
  const item = allList.find((item) => item.id === id);

  if (!interviewList.find((item) => item.id === id)) {
    item.statuss = "Interview";
    interviewList.push(item);
  }

  rejectedList = rejectedList.filter((item) => item.id !== id);

  updateAll();
  refreshCurrentTab();
}
function moveToRejected(id) {
  const item = allList.find((item) => item.id === id);

  if (!rejectedList.find((item) => item.id === id)) {
    item.statuss = "Rejected";
    rejectedList.push(item);
  }

  interviewList = interviewList.filter((item) => item.id !== id);

  updateAll();
  refreshCurrentTab();
}

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
  const allFilteredElemetHide = document.getElementById("allFilteredElemet");
  const noJob = document.getElementById("noJob");

  if (obj.length == 0) {
    allFilteredElemetHide.classList.add("hidden");
    noJob.classList.remove("hidden");
  } else {
    allFilteredElemetHide.classList.remove("hidden");
    noJob.classList.add("hidden");
    showAllCards(obj);
  }
}
