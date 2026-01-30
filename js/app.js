let allMovies = [];

const movieContainer = document.getElementById("movieContainer");
const genreFilter = document.getElementById("genreFilter");

fetch("./js/data/movies.json")
  .then((res) => res.json())
  .then((data) => {
    allMovies = data.movies;

    renderMovies(allMovies);
    populateGenres(allMovies);
  })
  .catch((error) => console.error("Error loading movies:", error));

function renderMovies(movies) {
  movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />

      <div class="card-text">
        <p class="title">${movie.title}</p>

        <span class="title-container">
          <p class="release-year">Release Year: ${movie.releaseYear}</p>
          <p class="genre">Genre: ${movie.genre}</p>
        </span>

        <p class="description">${movie.description}</p>
      </div>
    `;

    movieContainer.appendChild(card);
  });
}

function populateGenres(movies) {
  const genres = new Set();

  movies.forEach((movie) => {
    genres.add(movie.genre);
  });

  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;

    genreFilter.appendChild(option);
  });
}

genreFilter.addEventListener("change", () => {
  const selectedGenre = genreFilter.value;

  if (selectedGenre === "") {
    renderMovies(allMovies);
    return;
  }

  const filteredMovies = allMovies.filter(
    (movie) => movie.genre === selectedGenre,
  );

  renderMovies(filteredMovies);
});
