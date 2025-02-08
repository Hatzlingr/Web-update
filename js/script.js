let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').classList.add('show');
    } else {
        document.querySelector('.navbar').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section');
const navLinksA = document.querySelectorAll('.nav-links a');
function setActiveLink() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');

        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinksA.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', setActiveLink);

// Home
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// for Typewriter effect

const texts = [
    "Student",
    "Programmer",
    "Designer"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1)
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;



//skill progress bar
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-progress');

    const isInViewPort = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateSkillBars = () => {
        skillBars.forEach((skillBar) => { 
            if (isInViewPort(skillBar)) {
                const percent = skillBar.getAttribute("data-percent");
                skillBar.style.setProperty("--percent", `${percent}%`);
                skillBar.classList.add("animate");
                setTimeout(() => {
                    skillBar.style.width = `${percent}%`; 
                }, 1000);
            }
        });
    };
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
});



  
