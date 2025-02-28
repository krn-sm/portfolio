"use strict";

// ✅ Utility function to toggle active class
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// ✅ Sidebar toggle for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// ✅ Project Filtering
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // Fixed typo
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Open filter dropdown
select?.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Filter items based on selection
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  filterItems.forEach((item) => {
    item.classList.toggle(
      "active",
      selectedValue === "all" || selectedValue === item.dataset.category
    );
  });
};

// Update filter selection
selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Apply filter for large screens
let lastClickedBtn = filterBtn[0];
filterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// ✅ Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/Disable submit button based on form validation
formInputs.forEach((input) => {
  input.addEventListener("input", function () {
    formBtn.disabled = !form.checkValidity();
  });
});

// ✅ Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Handle navigation clicks
navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    // Remove 'active' from all links
    navigationLinks.forEach((link) => link.classList.remove("active"));

    // Remove 'active' from all pages
    pages.forEach((page) => page.classList.remove("active"));

    // Add 'active' to clicked link and corresponding page
    this.classList.add("active");
    document
      .querySelector(`[data-page="${this.innerHTML.toLowerCase()}"]`)
      ?.classList.add("active");

    // Scroll to top
    window.scrollTo(0, 0);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JavaScript Loaded");

  const projectItems = document.querySelectorAll(".project-item");
  const modal = document.getElementById("projectModal");
  const modalImages = document.getElementById("modalImages");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // ✅ Image dictionary for each project
  const projectImages = {
    "TRICHY VILLA PROJECT": [
      "./assets/images/img1 (1).jpg",
      "./assets/images/img1 (2).jpg",
      "./assets/images/img1 (3).jpg",
      "./assets/images/img1 (4).jpg",
    ],
    "PACE HIGHER SECONDARY SCHOOL, DUBAI": [
      "./assets/images/img2 (1).jpg",
      "./assets/images/img2 (2).jpg",
      "./assets/images/img2 (3).jpg",
    ],
    "GAMING STATION, OMAN": [
      "./assets/images/img3 (1).jpg",
      "./assets/images/img3 (2).jpg",
      "./assets/images/img3 (3).jpg",
      "./assets/images/img3 (4).jpg",
      "./assets/images/img3 (5).jpg",
    ],
    "GLASS TECHNOLOGY, RAZ AL- KHIMAH": [
      "./assets/images/img4 (1).jpg",
      "./assets/images/img4 (2).jpg",
      "./assets/images/img4 (3).jpg",
      "./assets/images/img4 (4).jpg",
      "./assets/images/img4 (5).jpg",
    ],
    "DECENT ALUMINIUM AND GLASS INDUSTRIES LLC, RAZ AL- KHIMAH": [
      "./assets/images/img5 (1).jpg",
      "./assets/images/img5 (2).jpg",
      "./assets/images/img5 (3).jpg",
    ],
    "TASNEE METAL COMPANY, OMAN": [
      "./assets/images/img6 (1).jpg",
      "./assets/images/img6 (2).jpg",
    ],
    "EV NEXUS SHOWROOM, CHENNAI": [
      "./assets/images/img7 (1).jpg",
      "./assets/images/img7 (2).jpg",
      "./assets/images/img7 (3).jpg",
      "./assets/images/img7 (4).jpg",
      "./assets/images/img7 (5).jpg",
      "./assets/images/img7 (6).jpg",
      "./assets/images/img7 (7).jpg",
      "./assets/images/img7 (8).jpg",
    ],
    "TAMIL NADU HOUSING BOARD, ERODE": [
      "./assets/images/img8 (1).jpg",
      "./assets/images/img8 (2).jpg",
      "./assets/images/img8 (3).jpg",
      "./assets/images/img8 (4).jpg",
      "./assets/images/img8 (5).jpg",
      "./assets/images/img8 (6).jpg",
      "./assets/images/img8 (7).jpg",
      "./assets/images/img8 (8).jpg",
    ],
    "KOLATHUR LAKE FRONT PROJECT, CHENNAI": [
      "./assets/images/img9 (1).jpg",
      "./assets/images/img9 (2).jpg",
      "./assets/images/img9 (3).jpg",
      "./assets/images/img9 (4).jpg",
      "./assets/images/img9 (5).jpg",
      "./assets/images/img9 (6).jpg",
      "./assets/images/img9 (7).jpg",
      "./assets/images/img9 (8).jpg",
      "./assets/images/img9 (9).jpg",
      "./assets/images/img9 (10).jpg",
      "./assets/images/img9 (11).jpg",
      "./assets/images/img9 (12).jpg",
      "./assets/images/img9 (13).jpg",
      "./assets/images/img9 (14).jpg",
      "./assets/images/img9 (15).jpg",
    ],
    "CHINDADRIPET RESIDENCE, CHENNAI": [
      "./assets/images/img10 (1).jpg",
      "./assets/images/img10 (2).jpg",
      "./assets/images/img10 (3).jpg",
      "./assets/images/img10 (4).jpg",
    ],
    "TOPIARY GARDEN, YERCAUD": [
      "./assets/images/img11 (1).jpg",
      "./assets/images/img11 (2).jpg",
      "./assets/images/img11 (3).jpg",
      "./assets/images/img11 (4).jpg",
      "./assets/images/img11 (5).jpg",
      "./assets/images/img11 (6).jpg",
      "./assets/images/img11 (7).jpg",
      "./assets/images/img11 (8).jpg",
      "./assets/images/img11 (9).jpg",
      "./assets/images/img11 (10).jpg",
      "./assets/images/img11 (11).jpg",
      "./assets/images/img11 (12).jpg",
    ],
    "METTALICA FACTORY, ABU-DHABI": [
      "./assets/images/img12 (1).jpg",
      "./assets/images/img12 (2).jpg",
      "./assets/images/img12 (3).jpg",
      "./assets/images/img12 (4).jpg",
      "./assets/images/img12 (5).jpg",
      "./assets/images/img12 (6).jpg",
      "./assets/images/img12 (7).jpg",
      "./assets/images/img12 (8).jpg",
    ],
    "ALTARAD, ABU-DHABI": [
      "./assets/images/img13 (1).jpg",
      "./assets/images/img13 (2).jpg",
      "./assets/images/img13 (3).jpg",
      "./assets/images/img13 (4).jpg",
    ],
    "TIP-HIU PHASE 10, ABU-DHABI": [
      "./assets/images/img14 (1).jpg",
      "./assets/images/img14 (2).jpg",
      "./assets/images/img14 (3).jpg",
      "./assets/images/img14 (4).jpg",
      "./assets/images/img14 (5).jpg",
      "./assets/images/img14 (6).jpg",
    ],
    "AJMAL STEEL PIPES, DUBAI": [
      "./assets/images/img15 (1).jpg",
      "./assets/images/img15 (2).jpg",
      "./assets/images/img15 (3).jpg",
      "./assets/images/img15 (4).jpg",
      "./assets/images/img15 (5).jpg",
      "./assets/images/img15 (6).jpg",
      "./assets/images/img15 (7).jpg",
    ],
    "TIP CALITUS, ABU-DHABI": [
      "./assets/images/img16 (1).jpg",
      "./assets/images/img16 (2).jpg",
      "./assets/images/img16 (3).jpg",
      "./assets/images/img16 (4).jpg",
    ],
    "COMMERCIAL BANK OF ETHIOPIA- DATA CENTER, ABU-DHABI": [
      "./assets/images/img17 (1).jpg",
      "./assets/images/img17 (2).jpg",
      "./assets/images/img17 (3).jpg",
      "./assets/images/img17 (4).jpg",
      "./assets/images/img17 (5).jpg",
    ],
    "DOLPHIN ENERGY, ABU-DHABI": [
      "./assets/images/img18 (1).jpg",
      "./assets/images/img18 (2).jpg",
      "./assets/images/img18 (3).jpg",
      "./assets/images/img18 (4).jpg",
      "./assets/images/img18 (5).jpg",
      "./assets/images/img18 (6).jpg",
    ],
    "DISABLED TOILET": ["./assets/images/img19.jpg"],
    "INFRATECH, SHARJAH": [
      "./assets/images/img20 (1).jpg",
      "./assets/images/img20 (2).jpg",
    ],
    "DE ROYAL TOBACCO FACTORY, UAQ": [
      "./assets/images/img21 (1).jpg",
      "./assets/images/img21 (2).jpg",
      "./assets/images/img21 (3).jpg",
      "./assets/images/img21 (4).jpg",
      "./assets/images/img21 (5).jpg",
      "./assets/images/img21 (6).jpg",
      "./assets/images/img21 (7).jpg",
      "./assets/images/img21 (8).jpg",
      "./assets/images/img21 (9).jpg",
      "./assets/images/img21 (10).jpg",
      "./assets/images/img21 (11).jpg",
      "./assets/images/img21 (12).jpg",
      "./assets/images/img21 (13).jpg",
      "./assets/images/img21 (14).jpg",
      "./assets/images/img21 (15).jpg",
      "./assets/images/img21 (16).jpg",
    ],
  };

  // ✅ Open modal when clicking a project
  projectItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const projectTitle = this.querySelector(".project-title").innerText;
      console.log("🖼️ Clicked Project:", projectTitle);

      if (projectImages[projectTitle]) {
        modalImages.innerHTML = ""; // Clear previous images
        projectImages[projectTitle].forEach((imgSrc) => {
          const img = document.createElement("img");
          img.src = imgSrc;
          img.alt = "Project Image";
          modalImages.appendChild(img);
        });

        modal.classList.add("active");
      }
    });
  });

  // ✅ Close modal when clicking the X button
  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});
