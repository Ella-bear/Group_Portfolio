// Function to handle menu switching
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const sections = document.querySelectorAll(".section");

  // Add click event listeners to menu buttons
  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and sections
      menuButtons.forEach((btn) => btn.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to the clicked button and corresponding section
      button.classList.add("active");
      const targetSection = document.querySelector(button.dataset.target);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  // Add buttons dynamically to the sidebar under the "Blog" section
  const blogSidebar = document.querySelector("#blog-sidebar");
  if (blogSidebar) {
    const newButtons = ["Post 1", "Post 2", "Post 3"];
    newButtons.forEach((buttonText) => {
      const button = document.createElement("button");
      button.textContent = buttonText;
      button.classList.add("sidebar-button");
      blogSidebar.appendChild(button);
    });
  }
});