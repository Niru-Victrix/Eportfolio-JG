        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', currentTheme);
        updateThemeButton(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeButton(newTheme);
        });

        function updateThemeButton(theme) {
            if (theme === 'dark') {
                themeToggle.innerHTML = 'Light Mode';
            } else {
                themeToggle.innerHTML = 'Dark Mode';
            }
        }

        // Navigation Functionality
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Show corresponding section
                const sectionId = link.getAttribute('data-section');
                document.getElementById(sectionId).classList.add('active');
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Hamburger Menu Toggle
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Download CV Functionality
        const downloadButtons = document.querySelectorAll('#downloadCV, #downloadCV2');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Create a simple text CV content
                const cvContent = `
MY RESUME / CV
=====================================

PERSONAL INFORMATION
Name: Jhonil Garcia
Email: jhonil.garcia1601@gmail.com
Phone: +63 956-165-3046

PROFESSIONAL SUMMARY
Dedicated professional with extensive experience in software development,
passionate about creating innovative solutions and making a positive impact
through technology.

WORK EXPERIENCE

App/Cloud Support Associate (2024 - Present)
*Accenture*
- Implementing best practices in software development

IT Desktop Engineer Intern (2023 - 2024)
- Developed and maintained multiple web applications

EDUCATION
Bachelor's in Science in Information Technology,
Quezon City University, 2020-2014

TECHNICAL SKILLS
Frontend: HTML5, CSS3, JavaScript,
Backend: Python, PHP,
Database: MySQL, 
Tools: Git, VS Code, Figma

ACHIEVEMENTS
- Google Cloud Platform Digital Leader Certified
                `;
                
                // Create blob and download
                const blob = new Blob([cvContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'My_Resume_CV.txt';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
                alert('Your CV has been downloaded! (This is a sample CV - customize it with your actual information)');
            });
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this to a server
            alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
       