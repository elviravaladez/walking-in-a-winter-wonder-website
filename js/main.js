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


//setInterval to create snowflakes every 100 milliseconds
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

//Getting data from modal and adding new song to card deck
const addNewSong = $('#save-btn').click(function () {
    let songTitle = $('#songModal #new-song-title').val();
    let songArtist = $('#songModal #new-song-artist').val();
    let songUrl = $('#songModal #new-song-url').val();

    let newSongMedia = "";
    if($("#new-song-url").length && $("#new-song-url").val().length){
        newSongMedia = `<iframe class="card-img-top" width="200" height="200" src="${songUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }   else{
        newSongMedia = `<img class="card-img-top" width="100" height="300" src="img/music-placeholder.png" alt="Music Image Placeholder">`;
    }

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