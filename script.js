
    function toggleOverlay(icon) {
      const card = icon.closest('.card');
      const overlay = card.querySelector('.overlay');
      overlay.classList.toggle('show');
    }


    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked one
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
      });
    });