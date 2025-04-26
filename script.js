// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Typed.js for the typewriter effect in the hero section
    const typedElement = document.querySelector('#typed');
    if (typedElement) {
        const typed = new Typed('#typed', {
            strings: [
                "Systems Architect.", 
                "Networking Specialist.", 
                "Cloud Enthusiast.", 
                "Founder @ Serververse.",
                "Digital Strategist.",
                "Cybersecurity Learner."
            ],
            typeSpeed: 60, /* Slightly faster */
            backSpeed: 40,
            backDelay: 1200,
            loop: true,
            smartBackspace: true /* Improves backspacing */
        });
    }

    // Initialize VanillaTilt for project cards - More subtle effect
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        VanillaTilt.init(projectCards, {
            max: 3, /* Reduced max tilt */
            speed: 300,
            glare: true,
            'max-glare': 0.1, /* Reduced glare */
            scale: 1.02, /* Reduced scale */
            perspective: 1500, /* Increased perspective for subtlety */
            transition: true,
            gyroscope: false /* Disable gyroscope */
        });
    }

    // Subtle tilt for other selected cards - Keep very minimal or remove if desired
    const otherTiltCards = document.querySelectorAll('.highlight-card, .skill-group, .future-card, .contribution-card, .serververse-card');
    if (otherTiltCards.length > 0) {
        VanillaTilt.init(otherTiltCards, {
            max: 2, /* Very subtle tilt */
            speed: 400,
            glare: false, /* No glare */
            scale: 1.01, /* Barely noticeable scale */
            perspective: 2000,
            transition: true,
            gyroscope: false
        });
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;
    
    if (menuToggle && navLinks && menuIcon) {
        // Add close icon to toggle button if not present
        if (!menuToggle.querySelector('.ri-close-line')) {
            const closeIcon = document.createElement('i');
            closeIcon.className = 'ri-close-line';
            menuToggle.appendChild(closeIcon);
        }

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Toggle body class to prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll', navLinks.classList.contains('active'));
        });
    }

    // Close mobile menu when clicking a nav link
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Close mobile menu if clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Theme switcher functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const sunIconClass = 'ri-sun-line';
    const moonIconClass = 'ri-moon-line';
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function applyTheme(theme) {
        body.classList.remove('light-theme', 'dark-theme');
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if (themeIcon) themeIcon.className = sunIconClass; /* Show sun icon in dark mode */
        } else {
            body.classList.add('light-theme');
            if (themeIcon) themeIcon.className = moonIconClass; /* Show moon icon in light mode */
        }
    }
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', function() {
            currentTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('#navbar');
    let lastScrollTop = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Optional: Hide navbar on scroll down, show on scroll up
        /*
        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight){
            // Scroll Down
            navbar.style.top = `-${navbar.offsetHeight}px`; 
        } else {
            // Scroll Up
            navbar.style.top = "0";
        }
        */
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);

    // Smooth scrolling adjustment for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#home') { // Special case for home/top
                 window.scrollTo({ top: 0, behavior: 'smooth' });
                 // Close mobile menu if open
                 if (navLinks && navLinks.classList.contains('active')) {
                     menuToggle.classList.remove('active');
                     navLinks.classList.remove('active');
                     document.body.classList.remove('no-scroll');
                 }
                 return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar ? navbar.offsetHeight : 80; // Estimate height
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20; // Add extra space

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });

    // Remove Interactive Code Block Background Effect
    /*
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 180, 197, 0.08), transparent 300px)`;
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.backgroundImage = 'none';
        });
    });
    */
    
    // Remove Scroll-based water ripple variable update
    /*
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        document.body.style.setProperty('--scroll-position', scrollPosition + 'px');
    });
    */
});
