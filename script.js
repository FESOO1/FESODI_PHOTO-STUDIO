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