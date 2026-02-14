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
const selectValue = document.querySelector("[data-select-value]");
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

  // ✅ MOBILE BACK BUTTON HANDLER - Close modal instead of closing site
  let modalOpenedViaButton = false;

  // Track when modal is opened
  const openModal = () => {
    modalOpenedViaButton = true;
    // Push a state to the history stack so back button works
    history.pushState({ modalOpen: true }, null);
  };

  // Handle back button
  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.modalOpen) {
      // Close modal instead of going back
      modal.classList.remove("active");
      modalOpenedViaButton = false;
      event.preventDefault();
    } else if (modal.classList.contains("active")) {
      // If modal is open and user presses back, close it
      modal.classList.remove("active");
      // Push state again so next back goes to previous page
      history.pushState(null, null);
    }
  });

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
      "./assets/images/img6 (2).jpg",
      "./assets/images/img6 (1).jpg",
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
      "./assets/images/img12 (9).jpg",
      "./assets/images/img12 (10).jpg",
      "./assets/images/img12 (11).jpg",
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
    "AERTSSEN FACTORY, ABU-DHABI": [
      "./assets/images/img22 (1).jpg",
      "./assets/images/img22 (2).jpg",
      "./assets/images/img22 (3).jpg",
      "./assets/images/img22 (4).jpg",
      "./assets/images/img22 (5).jpg",
      "./assets/images/img22 (6).jpg",
      "./assets/images/img22 (7).jpg",
      "./assets/images/img22 (8).jpg",
      "./assets/images/img22 (9).jpg",
      "./assets/images/img22 (10).jpg",
      "./assets/images/img22 (11).jpg",
    ],
    "DUCAST FACTORY, ABU-DHABI": [
      "./assets/images/img23 (1).jpg",
      "./assets/images/img23 (2).jpg",
      "./assets/images/img23 (3).jpg",
      "./assets/images/img23 (4).jpg",
      "./assets/images/img23 (5).jpg",
      "./assets/images/img23 (6).jpg",
      "./assets/images/img23 (7).jpg",
      "./assets/images/img23 (8).jpg",
      "./assets/images/img23 (9).jpg",
      "./assets/images/img23 (10).jpg",
      "./assets/images/img23 (11).jpg",
    ],
    "INTERIOR WORKS": ["./assets/images/img.png"],
    "BISCONNI FOOD FACTORY, ABU-DHABI": [
      "./assets/images/img24 (24).jpg",
      "./assets/images/img24 (25).jpg",
      "./assets/images/img24 (26).jpg",
      "./assets/images/img24 (27).jpg",
      "./assets/images/img24 (28).jpg",
      "./assets/images/img24 (29).jpg",
      "./assets/images/img24 (30).jpg",
      "./assets/images/img24 (2).jpg",
      "./assets/images/img24 (1).jpg",
      "./assets/images/img24 (3).jpg",
      "./assets/images/img24 (4).jpg",
      "./assets/images/img24 (5).jpg",
      "./assets/images/img24 (6).jpg",
      "./assets/images/img24 (7).jpg",
      "./assets/images/img24 (8).jpg",
      "./assets/images/img24 (9).jpg",
      "./assets/images/img24 (10).jpg",
      "./assets/images/img24 (11).jpg",
      "./assets/images/img24 (12).jpg",
      "./assets/images/img24 (13).jpg",
      "./assets/images/img24 (14).jpg",
      "./assets/images/img24 (15).jpg",
      "./assets/images/img24 (16).jpg",
      "./assets/images/img24 (17).jpg",
      "./assets/images/img24 (18).jpg",
      "./assets/images/img24 (19).jpg",
      "./assets/images/img24 (20).jpg",
      "./assets/images/img24 (21).jpg",
      "./assets/images/img24 (22).jpg",
      "./assets/images/img24 (23).jpg",
    ],
    "AL-AIN FARM HOUSE": [
      "./assets/images/img25 (1).jpg",
      "./assets/images/img25 (2).jpg",
      "./assets/images/img25 (3).jpg",
      "./assets/images/img25 (4).jpg",
      "./assets/images/img25 (5).jpg",
      "./assets/images/img25 (6).jpg",
      "./assets/images/img25 (7).jpg",
      "./assets/images/img25 (8).jpg",
      "./assets/images/img25 (9).jpg",
      "./assets/images/img25 (10).jpg",
      "./assets/images/img25 (11).jpg",
      "./assets/images/img25 (12).jpg",
      "./assets/images/img25 (13).jpg",
      "./assets/images/img25 (14).jpg",
      "./assets/images/img25 (17).jpg",
      "./assets/images/img25 (18).jpg",
      "./assets/images/img25 (19).jpg",
      "./assets/images/img25 (20).jpg",
      "./assets/images/img25 (23).jpg",
      "./assets/images/img25 (24).jpg",
      "./assets/images/img25 (25).jpg",
      "./assets/images/img25 (26).jpg",
      "./assets/images/img25 (27).jpg",
      "./assets/images/img25 (28).jpg",
      "./assets/images/img25 (29).jpg",
      "./assets/images/img25 (30).jpg",
      "./assets/images/img25 (31).jpg",
      "./assets/images/img25 (32).jpg",
      "./assets/images/img25 (33).jpg",
      "./assets/images/img25 (34).jpg",
      "./assets/images/img25 (36).jpg",
      "./assets/images/img25 (37).jpg",
      "./assets/images/img25 (38).jpg",
      "./assets/images/img25 (39).jpg",
      "./assets/images/img25 (40).jpg",
      "./assets/images/img25 (41).jpg",
      "./assets/images/img25 (42).jpg",
      "./assets/images/img25 (43).jpg",
      "./assets/images/img25 (44).jpg",
      "./assets/images/img25 (45).jpg",
      "./assets/images/img25 (46).jpg",
      "./assets/images/img25 (47).jpg",
      "./assets/images/img25 (48).jpg",
      "./assets/images/img25 (49).jpg",
      "./assets/images/img25 (50).jpg",
      "./assets/images/img25 (51).jpg",
      "./assets/images/img25 (52).jpg",
      "./assets/images/img25 (53).jpg",
    ],
    "SAFEEN DRY ROCKS, ABU-DHABI": [
      "./assets/images/img26 (1).jpg",
      "./assets/images/img26 (2).jpg",
      "./assets/images/img26 (3).jpg",
      "./assets/images/img26 (4).jpg",
      "./assets/images/img26 (5).jpg",
      "./assets/images/img26 (6).jpg",
      "./assets/images/img26 (7).jpg",
      "./assets/images/img26 (8).jpg",   
    ],
    "ADNOC LABOUR ACCOMODATION, AL OMAIRAH ISLAND": [
      "./assets/images/img27 (1).jpg",
      "./assets/images/img27 (2).jpg",
      "./assets/images/img27 (3).jpg",
      "./assets/images/img27 (4).jpg",
      "./assets/images/img27 (5).jpg",
      "./assets/images/img27 (6).jpg",
      "./assets/images/img27 (7).jpg",
    ],
    "DESIGN OF INDUSTRIAL HANGARS PHASE 13A -ABU DHABI": [
      "./assets/images/img28 (1).jpg",
      "./assets/images/img28 (2).jpg",
      "./assets/images/img28 (3).jpg",
      "./assets/images/img28 (4).jpg",
      "./assets/images/img28 (5).jpg",
      "./assets/images/img28 (6).jpg",
      "./assets/images/img28 (7).jpg",
      "./assets/images/img28 (8).jpg",
      "./assets/images/img28 (9).jpg",
    ],
    "CAPITAL MILLS, ABU-DHABI": [
      "./assets/images/img29 (1).jpg",
      "./assets/images/img29 (2).jpg",
      "./assets/images/img29 (3).jpg",
    ],
    "ALFA LAVAL, ABU-DHABI": {
      exterior: [
        "./assets/images/img30 (1).jpg",
        "./assets/images/img30 (2).jpg",
        "./assets/images/img30 (3).jpg",
        "./assets/images/img30 (4).jpg",
        "./assets/images/img30 (5).jpg",
        "./assets/images/img30 (6).jpg",
        "./assets/images/img30 (7).jpg",
        "./assets/images/img30 (8).jpg",
      ],
      interior: [
      "./assets/images/img30 (9).jpg",
      "./assets/images/img30 (10).jpg",
      "./assets/images/img30 (11).jpg",
      "./assets/images/img30 (12).jpg",
      "./assets/images/img30 (13).jpg",
      "./assets/images/img30 (14).jpg",
      "./assets/images/img30 (17).jpg",
      "./assets/images/img30 (18).jpg",
      "./assets/images/img30 (19).jpg",
      "./assets/images/img30 (20).jpg",
      "./assets/images/img30 (23).jpg",
      "./assets/images/img30 (24).jpg",
      "./assets/images/img30 (25).jpg",
      "./assets/images/img30 (26).jpg",
      ],
    },
    "BAPS HINDU MANDIR, ABU DHABI": [
      "./assets/images/img31 (1).jpg",
      "./assets/images/img31 (2).jpg",
      "./assets/images/img31 (3).jpg",
      "./assets/images/img31 (4).jpg",
      "./assets/images/img31 (5).jpg",
      "./assets/images/img31 (6).jpg",
      "./assets/images/img31 (7).jpg",
      "./assets/images/img31 (8).jpg",
      "./assets/images/img31 (9).jpg",
      "./assets/images/img31 (10).jpg",
      "./assets/images/img31 (11).jpg",
      "./assets/images/img31 (12).jpg",
      "./assets/images/img31 (13).jpg",
    ],
    "CAPITAL SURVEY, ABU DHABI": [
      "./assets/images/img32 (1).jpg",
      "./assets/images/img32 (2).jpg",
      "./assets/images/img32 (3).jpg",
      "./assets/images/img32 (4).jpg",
      "./assets/images/img32 (10).png",
      "./assets/images/img32 (5).jpg",
      "./assets/images/img32 (6).jpg",
      "./assets/images/img32 (7).jpg",
      "./assets/images/img32 (8).jpg",
      "./assets/images/img32 (9).jpg",
    ],
  };

  // ✅ Newspaper clippings dictionary
  const newspaperClippings = {
    "BISCONNI FOOD FACTORY, ABU-DHABI": [
      "./assets/images/article1.jpg",
    ],
  };

  // ✅ Helper function to check if a project has sections
  const hasProjectSections = (projectTitle) => {
    return (
      typeof projectImages[projectTitle] === "object" &&
      projectImages[projectTitle] !== null &&
      !Array.isArray(projectImages[projectTitle]) &&
      (projectImages[projectTitle].interior || projectImages[projectTitle].exterior)
    );
  };

  // ✅ Helper function to get all images from a project
  const getProjectImages = (projectTitle) => {
    const project = projectImages[projectTitle];
    if (Array.isArray(project)) {
      return project;
    } else if (project && project.interior && project.exterior) {
      return { interior: project.interior, exterior: project.exterior };
    }
    return [];
  };

  // ✅ Open modal when clicking a project
  projectItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const projectTitle = this.querySelector(".project-title").innerText;
      console.log("🖼️ Clicked Project:", projectTitle);

      if (projectImages[projectTitle]) {
        modalImages.innerHTML = ""; // Clear previous images
        
        // ✅ Add newspaper clippings section if available
        if (newspaperClippings[projectTitle]) {
          const divider = document.createElement("div");
          divider.innerHTML = "<h3>📰 Newspaper Clipping</h3>";
          divider.className = "clippings-divider";
          modalImages.appendChild(divider);

          newspaperClippings[projectTitle].forEach((clippingSrc) => {
            const clippingImg = document.createElement("img");
            clippingImg.src = clippingSrc;
            clippingImg.alt = "Newspaper Clipping";
            clippingImg.className = "clipping-image";
            modalImages.appendChild(clippingImg);
          });
        }

        // ✅ Check if project has interior/exterior sections
        if (hasProjectSections(projectTitle)) {
          const sections = getProjectImages(projectTitle);

          // Add interior Section
          if (sections.interior && sections.interior.length > 0) {
            const interiorDivider = document.createElement("div");
            interiorDivider.innerHTML = "<h3>🏢 interior</h3>";
            interiorDivider.className = "section-divider interior-divider";
            modalImages.appendChild(interiorDivider);

            sections.interior.forEach((imgSrc) => {
              const img = document.createElement("img");
              img.src = imgSrc;
              img.alt = "interior View";
              img.className = "project-image";
              modalImages.appendChild(img);
            });
          }

          // Add exterior Section
          if (sections.exterior && sections.exterior.length > 0) {
            const exteriorDivider = document.createElement("div");
            exteriorDivider.innerHTML = "<h3>🏗️ exterior</h3>";
            exteriorDivider.className = "section-divider exterior-divider";
            modalImages.appendChild(exteriorDivider);

            sections.exterior.forEach((imgSrc) => {
              const img = document.createElement("img");
              img.src = imgSrc;
              img.alt = "exterior View";
              img.className = "project-image";
              modalImages.appendChild(img);
            });
          }
        } else {
          // ✅ For projects without sections, add images normally
          const images = getProjectImages(projectTitle);
          images.forEach((imgSrc) => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Project Image";
            img.className = "project-image";
            modalImages.appendChild(img);
          });
        }

        modal.classList.add("active");
        // ✅ Trigger back button handler when modal opens
        openModal();
      }
    });
  });

  // ✅ Close modal when clicking the X button
  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modalOpenedViaButton = false;
    // Go back in history to remove the pushed state
    history.back();
  });

  // ✅ Close modal when clicking outside (on the dark background)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalOpenedViaButton = false;
      // Go back in history to remove the pushed state
      history.back();
    }
  });
});