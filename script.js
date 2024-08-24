const pagesLinks = document.querySelectorAll('.page-link');

for (let i = 0; i < pagesLinks.length; i++) {
    pagesLinks[i].addEventListener('click', e => {

        // REMOVING THE CLASS THAT HAS INDICATOR DESIGN FROM ALL THE LINKS

        for (const links of pagesLinks) {
            links.classList.remove('active-page');
        };

        // ADDING THE CLASS THAT HAS INDICATOR DESIGN TO CLICKED LINK

        e.preventDefault();
        pagesLinks[i].classList.add('active-page');
    });
};

// USING UNSPLASH API TO ACCESS PHOTOS

const galleryContainer = document.querySelector('.gallery');

window.addEventListener('DOMContentLoaded', gallery)

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
    }
]

function gallery() {
    for (let picture = 0; picture < 5; picture++) {
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
    };
};