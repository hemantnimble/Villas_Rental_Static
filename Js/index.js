const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {



        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});


document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');

    if (window.scrollY > 350) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


ScrollReveal({
    reset: false,
    distance: '10px',
    duration: '1000',
    delay: '200'
});

ScrollReveal().reveal('.about-main', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about-discription', { delay: 200, distance: '20px', origin: 'left' });
ScrollReveal().reveal('.about-dis img', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about-dis p', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.lonavala-right-side', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.book-icons', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.book-icons p', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.book-head h1', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.card', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.midsection', { delay: 200, origin: 'left' });

var loader = document.getElementById("loader-main");

window.addEventListener("load", function () {
    loader.style.display = "none";
})

//GOOGLE SHEET API

const spreadsheetId = '1AZ5YSK29pQa5pNNXtm2TgRsod0pcS6st06_iOVUNz98';
const range = 'Sheet1!A:Z';
const apiKey = 'AIzaSyCMRdod9AS4x-g4LJu5VN9VAhP8QVVNQd8';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {

        const heramb = document.getElementById('heramb');
        heramb.textContent = data.values[1][1];

        const anjum = document.getElementById('anjum');
        anjum.textContent = data.values[2][1];

        const jannat = document.getElementById('jannat');
        jannat.textContent = data.values[3][1];
    })
    .catch(error => console.error('Error fetching data:', error));

