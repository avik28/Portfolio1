document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll('.grid-item');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  // Apply staggered appearance for grid items
  gridItems.forEach((item, index) => {
      item.style.opacity = "0";  // Initially hidden
      item.style.transform = "translateY(20px)";  // Start slightly lower
      setTimeout(() => {
          item.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
      }, index * 200); // Delay each item by 200ms
  });

  // Open modal function
  gridItems.forEach(item => {
      item.addEventListener('click', function () {
          const modalId = this.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.classList.add('show');
          }
      });
  });

  // Close modal when clicking close button
  closeButtons.forEach(button => {
      button.addEventListener('click', function () {
          this.parentElement.parentElement.classList.remove('show');
      });
  });

  // Close modal when clicking outside modal content
  modals.forEach(modal => {
      modal.addEventListener('click', function (e) {
          if (e.target === this) {
              this.classList.remove('show');
          }
      });
  });
});
