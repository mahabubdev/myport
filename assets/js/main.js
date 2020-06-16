(function ($) {
    "use strict";

    /**-------------------
     * Mouse Cursor Effect
     -------------------*/
    const cursor = document.querySelector('.cursor-eff');

    document.addEventListener('mousemove', (e) => {
        cursor.setAttribute('style', 'top: ' + e.pageY + "px; left: " + e.pageX + "px;");
    });

})(jQuery);