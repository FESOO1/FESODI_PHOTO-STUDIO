// ALL THE VARIABLES
const cursor = document.querySelector('.cursor');
const cursorText = document.getElementById('cursorText');
const closeText = document.getElementById('closeText');
const randomCursorVanished = document.querySelectorAll('.random-cursor-vanished');
const navbarInvisibleMenu = document.querySelector('.navbar-invisible-navbar-menu');

// MENU - INVISIBLE NAVBAR

navbarInvisibleMenu.addEventListener('click', () => {
    navbarInvisibleMenu.classList.toggle('invisible-navbar-menu-js');
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
        randomCursorVanished[cursorVanished].addEventListener('mouseleave', () => {
            cursor.style.opacity = '1';
        });
    });
};

// JUMPING FROM PAGE TO PAGE

const pagesLinks = document.querySelectorAll('.page-link');
const pagesThemselves = document.querySelectorAll('.pages');

for (let i = 0; i < pagesLinks.length; i++) {
    pagesLinks[i].addEventListener('click', e => {

        // REMOVING THE CLASS THAT HAS INDICATOR DESIGN FROM ALL THE LINKS

        for (const links of pagesLinks) {
            links.classList.remove('active-page');
        };

        // ADDING THE CLASS THAT HAS INDICATOR DESIGN TO CLICKED LINK

        e.preventDefault();
        pagesLinks[i].classList.add('active-page');



        // PAGES THEMSELVES 

        for (const pages of pagesThemselves) {
            pages.classList.remove('active-page-itself');
        };


        pagesThemselves[i].classList.add('active-page-itself');
        
    });
};

// USING UNSPLASH API TO ACCESS PHOTOS

const galleryContainer = document.querySelector('.gallery');
const zoomedInContainer = document.querySelector('.zoom-image-container');
const imageZoomedIn = document.getElementById('imageZoomedIn');
const body = document.querySelector('body');
let morePictures = 9;

document.addEventListener('DOMContentLoaded', gallery)

const picData = [
    {
        picture: 'https://images.unsplash.com/photo-1555099331-3e4ba49f26be?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1601189226514-c54bd62d946a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1525638331105-b12e8e317283?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1561009192-54e2c151fb0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1723527256102-59bc79eb4d8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    },
    {
        picture: 'https://images.unsplash.com/photo-1532592333381-a141e3f197c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        headerText: 'Majestic Mountain',
        paragraph: 'The mountain boasts towering peaks and stunning vistas, offering a serene escape into nature’s beauty. Explore its rugged trails and enjoy breathtaking views.'
    }
]

function gallery() {
    for (let picture = 0; picture < morePictures; picture++) {
        const newPicture = document.createElement('div');
        newPicture.classList.add('image-container');
        newPicture.innerHTML = `
        <img src="${picData[picture].picture}" alt="${picData[[picture]].headerText}" class="image">
        <div class="image-innner-info">
            <h2 class="image-innner-info-header">${picData[[picture]].headerText}</h2>
            <p class="image-innner-info-paragraph">${picData[[picture]].paragraph}</p>
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
            imageZoomedIn.src = picData[picture].picture;
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

// MORE BUTTON

/* moreButton.addEventListener('click', () => {
    morePictures += 3;
}); */