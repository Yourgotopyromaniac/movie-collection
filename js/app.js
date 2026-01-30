fetch("./js/data/movies.json")
  .then((res) => res.json())
  .then((data) => {
    const movieContainer = document.getElementById("movieContainer");

    data.movies.forEach((movie) => {
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
  })
  .catch((error) => console.error("Error loading movies:", error));
