var searchBtn = document.getElementById('searchBtn');
var lyrics = document.getElementById('lyrics');
var formInput = document.querySelector(".formInput");

// call function that will keep input via localstorage on page upon refresh
renderInput();

// function for pulling input from localstorage and inputing into value
function renderInput() {
  var song = localStorage.getItem("song");
  var artist = localStorage.getItem("artist");
  // formInput.children("#song").val(song);
  // formInput.children("#artist").val(artist);
  if (!song || !artist) {
    return;
  }
}

// new code for localStorage
searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var button = $(this);
  var song = button.siblings('#song').val();
  var artist = button.siblings("#artist").val();
  localStorage.setItem("song", song);
  localStorage.setItem("artist", artist);
  renderInput();
})

function getLyricsApi() {
  var song = encodeURIComponent(localStorage.getItem("song"));
  var artist = encodeURIComponent(localStorage.getItem("artist"));
  var requestUrl = "https://api.lyrics.ovh/v1/" + artist + "/" + song;
  fetch(requestUrl)
    .then(function (response) {
      return response.json(); 
    })
    .then(function (data) {
      document.getElementById('lyrics').innerText = data.lyrics;
    })
}

searchBtn.addEventListener('click', getLyricsApi);