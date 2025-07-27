import AOS from 'aos';
import 'aos/dist/aos.css';

// Initial AOS.init() is called here. If you rely heavily on dynamic content
// loaded via data-include, consider moving the main AOS.init() call
// entirely inside the Promise.all. For now, it's fine as a default
// and the refresh ensures dynamically added elements are picked up.
AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;

            if (href.startsWith('#')) {
                // Internal page anchor link
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (href.includes('#')) {
                // External page with anchor link
                e.preventDefault();
                const [page, hash] = href.split('#');
                window.location.href = page + '#' + hash;
                // Use a short delay to allow the new page to load before attempting to scroll
                setTimeout(() => {
                    const targetElement = document.getElementById(hash);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 500); // 500ms should be enough for most page loads
            }
        });
    });

    // Load all external HTML fragments dynamically
    const includes = document.querySelectorAll('[data-include]');
    const promises = Array.from(includes).map(el => {
        const file = el.getAttribute('data-include');
        if (!file) return Promise.resolve();

        return fetch(file)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load ${file}: ${res.statusText}`);
                return res.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                el.innerHTML = doc.body.innerHTML;
                el.removeAttribute('data-include'); // Clean up the attribute
            })
            .catch(err => {
                console.error('Include error for', file, err);
                el.innerHTML = `<p style="color:red;">Failed to load ${file}</p>`;
                return Promise.resolve(); // Resolve to let Promise.all complete even if one fails
            });
    });

    Promise.all(promises).then(() => {
        // Initialize or refresh AOS
        if (typeof AOS !== 'undefined') {
            if (!window.AOSInitialized) {
                AOS.init({
                    duration: 1000,
                    once: false, // Set to true if you want animations to play only once
                    disable: 'mobile', // Consider 'phone' or 'tablet' for more granular control
                    offset: 120,
                    throttleDelay: 100
                });
                window.AOSInitialized = true;
            }
            // Force refresh animations after dynamic content is loaded
            AOS.refresh();
            // Also refresh hard if elements are removed/added dynamically after initial refresh
            AOS.refreshHard();
        }

        // Initialize other features *after* dynamic content is loaded
        initializeCountdown();
        initializeImageReplacement();
        setupNavigationActiveState();
        setupCartButton();

        // Add to Cart button click listener by id="cart"
        const addToCartDiv = document.getElementById('cart');
        if (addToCartDiv) {
            addToCartDiv.addEventListener('click', function () {
                console.log('Add to Cart clicked by id "cart"!');
                // Your add-to-cart logic here
            });
        } else {
            console.error('Add to Cart button with id="cart" not found.');
        }
    });

    // The rest of your functions remain unchanged...

    function setupNavigationActiveState() {
        const navLinks = document.querySelectorAll('nav a');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Check if the link's href matches the current path (for exact page matches)
            if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
                link.classList.add('active');
            }

            link.addEventListener('click', () => {
                // Remove 'active' from all links first
                navLinks.forEach(l => l.classList.remove('active'));
                // Add 'active' to the clicked link
                link.classList.add('active');

                const clickedHref = link.getAttribute('href');
                if (clickedHref && clickedHref.includes('#')) {
                    const hash = clickedHref.split('#')[1];
                    if (hash) {
                        const target = document.getElementById(hash);
                        if (target) {
                            // Smooth scroll to the target section on the same page
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            });
        });
    }

    /**
     * Corrected setupDropdown function for toggle behavior and click outside close.
     * Requires specific HTML structure and CSS classes.
     */


    function setupCartButton() {
        const cartBtn = document.getElementById('cartBtn');
        if (!cartBtn) {
            console.warn('Cart button with ID "cartBtn" not found.');
            return;
        }

        cartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    function initializeImageReplacement() {
        const svgIcon = document.querySelector('.col-lg-2 .box22 .svgbg a');
        if (!svgIcon) {
            console.log('SVG icon for image replacement not found.');
            return;
        }

        svgIcon.addEventListener('click', e => {
            e.preventDefault();
            console.log('SVG icon clicked.');

            const images = document.querySelectorAll('.icon-wrap img.slide-animation');
            images.forEach((image) => {
                const currentSrc = image.src;
                const newSrc = image.getAttribute('data-new-src');

                if (newSrc && currentSrc !== newSrc) {
                    const container = image.closest('.icon-wrap');
                    if (!container) return;

                    // Create a temporary image for the "slide out" effect
                    const tempImage = document.createElement('img');
                    tempImage.src = currentSrc;
                    tempImage.style.position = 'absolute';
                    tempImage.style.top = '0';
                    tempImage.style.left = '0';
                    tempImage.style.width = '100%';
                    tempImage.style.height = '100%';
                    tempImage.style.zIndex = '1'; // Ensure it's above the new image temporarily
                    tempImage.style.objectFit = 'cover';
                    tempImage.classList.add('slide-out'); // Add a class for CSS transition

                    container.appendChild(tempImage);

                    // Immediately change the source of the main image
                    image.src = newSrc;
                    image.classList.add('slide-in'); // Add class for "slide in" effect

                    // Remove the temporary image and slide-in class after transitions
                    setTimeout(() => {
                        tempImage.remove();
                        image.classList.remove('slide-in');
                    }, 1000); // Adjust this timeout to match your CSS transition duration
                }
            });
        });
    }

    function initializeCountdown() {
        const dayEl = document.getElementById('day');
        const hourEl = document.getElementById('hour');
        const minuteEl = document.getElementById('minute');

        if (!dayEl || !hourEl || !minuteEl) {
            console.log('Countdown elements not found');
            return;
        }

        // The total duration for the countdown (2 days, 23 hours, 55 minutes)
        const totalDuration =
            (2 * 24 * 60 * 60 * 1000) + // Days in milliseconds
            (23 * 60 * 60 * 1000) +  // Hours in milliseconds
            (55 * 60 * 1000);       // Minutes in milliseconds

        // Calculate the end time based on the current time + total duration
        const endTime = Date.now() + totalDuration;

        function updateCountdown() {
            const now = Date.now();
            const distance = endTime - now; // Time remaining

            if (distance <= 0) {
                // If countdown is finished
                dayEl.textContent = '00';
                hourEl.textContent = '00';
                minuteEl.textContent = '00';
                clearInterval(timer); // Stop the interval
                return;
            }

            // Calculate days, hours, and minutes from remaining distance
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            // Update text content, ensuring two digits (e.g., "05" instead of "5")
            dayEl.textContent = days.toString().padStart(2, '0');
            hourEl.textContent = hours.toString().padStart(2, '0');
            minuteEl.textContent = minutes.toString().padStart(2, '0');
        }

        // Call immediately to avoid initial flicker, then set interval
        updateCountdown();
        const timer = setInterval(updateCountdown, 1000); // Update every second
    }
});


