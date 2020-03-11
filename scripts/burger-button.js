(() => {
    const burgerContainer = document.getElementById('burger-container');
    const burgerButton = document.getElementById('burger-button');
    const headerNavigation = document.querySelector('.header__nav');
    const navList = document.querySelectorAll('.nav__list-item:not(.nav__list-item--logo)');
    
    let toCloseBurger = () => {
        burgerContainer.classList.remove('header__burger-container--active');
        burgerButton.classList.remove('header__burger-button--active');

        headerNavigation.style.paddingTop = '56px';

        navList.forEach((it) => {
            it.style.display = 'none';
        });

        burgerContainer.addEventListener('click', toActivateBurger);
    }

    let toActivateBurger = () => {
        burgerContainer.classList.add('header__burger-container--active');
        burgerButton.classList.add('header__burger-button--active');
        headerNavigation.style.padding = '0px';

        navList.forEach((it) => {
            it.style.display = 'block';
        });

        burgerContainer.removeEventListener('click', toActivateBurger);
        burgerContainer.addEventListener('click', toCloseBurger);
    }

    burgerContainer.addEventListener('click', toActivateBurger);
}) ()