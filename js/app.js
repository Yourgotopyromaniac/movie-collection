let allMovies = [];

const movieContainer = document.getElementById("movieContainer");
const genreFilter = document.getElementById("genreFilter");
const searchInput = document.getElementById("searchInput");

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

  if (movies.length === 0) {
    movieContainer.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="poster-wrapper">
      <img src="${movie.poster}" class="poster" alt="${movie.title}" />
    </div>
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

function applyFilters() {
  const selectedGenre = genreFilter.value;
  const searchText = searchInput.value.toLowerCase();

  let filteredMovies = allMovies;

  if (selectedGenre !== "") {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.genre === selectedGenre,
    );
  }

  if (searchText !== "") {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText),
    );
  }

  renderMovies(filteredMovies);
}

genreFilter.addEventListener("change", applyFilters);

searchInput.addEventListener("input", applyFilters);
