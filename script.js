// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const upgradeButton = document.querySelector(".upgrade-button");
  const viewButtons = document.querySelectorAll(".view-button");

  // Toggle sidebar visibility
  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
  });

  // Handle upgrade button click
  upgradeButton.addEventListener("click", () => {
    alert("Upgrade feature coming soon!");
  });

  // Handle view button clicks
  viewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const projectTitle = event.target
        .closest(".project-card")
        .querySelector("h3").textContent;
      alert(`Viewing project: ${projectTitle}`);
    });
  });
});
