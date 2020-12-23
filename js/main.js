"use strict";

let delay = 3000;

let timeoutId = setTimeout(() => {
    $('.preload').css('display', 'none');
    $('#main-section').css('display','block');
}, delay);