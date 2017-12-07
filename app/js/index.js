(function() {
    'use strict';

    baguetteBox.run('.gallery');

    closeMenuWhenLinkIsClicked();

    function closeMenuWhenLinkIsClicked() {
        var checkbox = document.querySelector('.landing-nav-mobile-button-checkbox');
        var menu = document.querySelector('.landing-nav-content');
        if(!checkbox || !menu) {
            return;
        }
        menu.addEventListener('click', function() {
            checkbox.checked = false;
        });
    }



})();
