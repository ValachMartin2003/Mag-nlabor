//DARK MODE ------
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIndicator = document.querySelector('.dark-mode-indicator');

        
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            darkModeToggle.checked = currentTheme === 'dark-mode';
            updateDarkModeIndicator();
        }

        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });

        function enableDarkMode() {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateDarkModeIndicator();
        }

        function disableDarkMode() {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            updateDarkModeIndicator();
        }

        function updateDarkModeIndicator() {
            const label = darkModeToggle.nextElementSibling;
            label.textContent = darkModeToggle.checked ? '🌙' : '☀️';
        }
    });
//--------------
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
//--------------
