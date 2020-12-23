"use strict";

// 3 second SetTimeout for the preloading page
let delay = 3000;

let timeoutId = setTimeout(() => {
    $('#loading-msg').css('display', 'none');
    $('.fa-snowflake').css('display', 'none');
    $('#loading-container').css('display', 'none');
    $('#main-section').css('display','block');
    stopSnowFlakes();
}, delay);


//setInterval to create snowflakes every 100 milliseconds
let snowFlakeInterval = setInterval(createSnowFlake, 100);

//Creating Snowflakes
function createSnowFlake() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('fas');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; //for random placement of snowflakes
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's' //between 2 - 5 seconds
    snowflake.style.opacity = Math.random(); //number 0 - 1
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; //for random px size for snowflakes
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 2000);
}

//Stopping Snowflakes from being created
function stopSnowFlakes() {
    clearInterval(snowFlakeInterval);
}