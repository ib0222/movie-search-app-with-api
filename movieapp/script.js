
let movies = [];
let movieName = "";

document.querySelector(".search-input").addEventListener("input", function (e) {
  let value = e.target.value;
  movieName = value;
});
document.querySelector(".search-btn").addEventListener("click", () => {
  getData();
});
let result = document.querySelector(".right-container");

let poster = document.querySelector(".poster");

function getData() {
  fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=a6dc394`)
    .then((res) => res.json())
    .then((data) => {
      if(data.Response === "True"){
        poster.src = data.Poster;
        result.innerHTML = `<div class="right-container">
      <h1>${data.Title}</h1>
  
      <div class="rating">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/380/214/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
          alt=""
        />
        <p>${data.imdbRating}</p>
      </div>
      <div class="genre">${data.Genre}</div>
      <div class="plot">
        <p>Plot:</p>
        <p class="plot-text">
          ${data.Plot}
        </p>
      </div>
      <div class="cast">
        <p>Cast:</p>
        <p class="cast-text">
          ${data.Actors}            
        </p>
      </div>
    </div>`;
      }
      else{
        result.innerHTML = '<p style="font-size:20px">Bele kino movcud deyil</p>'
      }

    })
;
}
