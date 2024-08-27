// ALL THE VARIABLES
const cursor = document.querySelector('.cursor');
const cursorText = document.getElementById('cursorText');
const closeText = document.getElementById('closeText');
const randomCursorVanished = document.querySelectorAll('.random-cursor-vanished');
const navbarInvisibleMenu = document.querySelector('.navbar-invisible-navbar-menu');
const navbarInvisibleMenuBottom = document.querySelector('.navbar-invisible-navbar-bottom');
const galleryContainer = document.querySelector('.gallery');
const zoomedInContainer = document.querySelector('.zoom-image-container');
const imageZoomedIn = document.getElementById('imageZoomedIn');
const body = document.querySelector('body');
const pagesLinks = document.querySelectorAll('.page-link');
const pagesThemselves = document.querySelectorAll('.pages');

// MENU - INVISIBLE NAVBAR

navbarInvisibleMenu.addEventListener('click', () => {
    navbarInvisibleMenu.classList.toggle('invisible-navbar-menu-js');
    navbarInvisibleMenuBottom.classList.toggle('invisible-navbar-menu-bottom-js');
    body.classList.toggle('invisible-body-js-hidden');
});

// CUSTOM CURSOR

window.addEventListener('mousemove', e => {
    let topY = e.clientY - 20;
    let leftX = e.clientX - 20;

    cursor.style.transform = `translateX(${leftX}px) translateY(${topY}px)`;
});

for (let cursorVanished = 0; cursorVanished < randomCursorVanished.length; cursorVanished++) {
    randomCursorVanished[cursorVanished].addEventListener('mouseenter', () => {
        cursor.style.opacity = '0';
    });
    randomCursorVanished[cursorVanished].addEventListener('mouseleave', () => {
        cursor.style.opacity = '1';
    });
};

// JUMPING FROM PAGE TO PAGE

for (let i = 0; i < pagesLinks.length; i++) {
    pagesLinks[i].addEventListener('click', e => {

        e.preventDefault();

        // REMOVING THE CLASS THAT HAS INDICATOR DESIGN FROM ALL THE LINKS

        for (const links of pagesLinks) {
            links.classList.remove('active-page');
        };

        // ADDING THE CLASS THAT HAS INDICATOR DESIGN TO CLICKED LINK

        pagesLinks[i].classList.add('active-page');



        // PAGES THEMSELVES 

        for (const pages of pagesThemselves) {
            pages.classList.remove('active-page-itself');
        };


        pagesThemselves[i].classList.add('active-page-itself');
        
    });
};

// USING UNSPLASH API TO ACCESS PHOTOS

document.addEventListener('DOMContentLoaded', gallery)


async function gallery() {
    for (let picture = 0; picture < 9; picture++) {

        // ACCESSING THE JSON FILE THAT CONTAINS ALL THE PICTURES AND CONTENT
        const response = await fetch('./picture-data.json');
        const jsonData = await response.json();

        // USING THE JSON FILE
        const newPicture = document.createElement('div');
        newPicture.classList.add('image-container');
        newPicture.innerHTML = `
        <img src="${jsonData[picture].picture}" alt="${jsonData[picture].headerText}" class="image">
        <div class="image-innner-info">
            <h2 class="image-innner-info-header">${jsonData[picture].headerText}</h2>
            <p class="image-innner-info-paragraph">${jsonData[picture].paragraph}</p>
        </div>
        `;
    
        galleryContainer.appendChild(newPicture);

        newPicture.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-over-image');
            cursorText.style.display = 'unset';
        });
        newPicture.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-over-image');
            cursorText.style.display = 'none';
        });


        // ZOOM IN FUNCTION

        newPicture.addEventListener('click', () => {
            imageZoomedIn.src = jsonData[picture].picture;
            zoomedInContainer.style.display = 'flex';
            body.style.overflow = 'hidden';
            cursor.classList.add('close-button');
            cursorText.style.display = 'none';

            closeText.style.display = 'unset';
        });

        zoomedInContainer.addEventListener('click', () => {
            zoomedInContainer.style.display = 'none';
            body.style.overflow = 'unset';
            cursor.classList.remove('close-button');
            
            closeText.style.display = 'none';
        });
    };
};