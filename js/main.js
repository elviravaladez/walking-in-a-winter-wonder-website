"use strict";

// 3 second setTimeout for the preloading page
const delay = 3000;

const timeoutId = setTimeout(() => {
    $('#loading-msg').css('display', 'none');
    $('.fa-snowflake').css('display', 'none');
    $('#loading-container').css('display', 'none');
    $('#main-section').css('display','block');
    $('#footer').css('display','block');
    stopSnowFlakes();
}, delay);

//setInterval to create snowflakes every 50 milliseconds
const snowFlakeInterval = setInterval(createSnowFlake, 50);

//Creating snowflakes
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

//Stopping snowflakes from being created
function stopSnowFlakes() {
    clearInterval(snowFlakeInterval);
}

//Capitalizing first letter of each word of a string
function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

//Getting data from modal and adding new song to card deck
const addNewSong = $('#save-btn').click(function () {
    let songTitle = titleCase($('#songModal #new-song-title').val());
    let songArtist = titleCase($('#songModal #new-song-artist').val());
    let songUrl = $('#songModal #new-song-url').val();
    let songUrlEqualSign = songUrl.search('=');
    let songUrlID = songUrl.slice(songUrlEqualSign);

    //Checking to see if user left url blank.
    // If they did not, the YouTube video will be displayed within the new music card
    // If they did leave the url area blank, a default music placeholder image will be displayed within the new song card
    let newSongMedia = "";
    if($("#new-song-url").length && $("#new-song-url").val().length){
        newSongMedia = `<iframe class="card-img-top" width="200" height="200" src="https://www.youtube.com/embed/${songUrlID}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }   else{
        newSongMedia = `<img class="card-img-top" width="100" height="300" src="img/music-placeholder.png" alt="Music Image Placeholder">`;
    }

    //Building out the new song card, then appending it to the page to display
    let newSong = '';
    newSong +=
        `<div class="card text-center">
            ${newSongMedia}
            <div class="card-body text-center">
                <h5 class="card-title"><em>"${songTitle}"</em></h5>
            </div>
            <div class="card-footer text-muted">
                ${songArtist}
            </div>
        </div>`;
    $('.card-deck').append(newSong);
});