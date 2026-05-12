// REPLACE 'your_api_key_here' with your real TMDB API Key
const API_KEY = 'b50c94712e233654a22d62f77f7384b3'; 
const BASE_URL = 'https://www.themoviedb.org/settings/api';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieDisplay = document.getElementById('movie-display');

// 1. Function to Fetch Trending Movies Automatically
async function fetchMovies() {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// 2. Function to Create Posters on your Website
function displayMovies(movies) {
    movieDisplay.innerHTML = ''; // Clear existing placeholders

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "movie-card";
        
        // We use the TMDB ID to find a stream link later
        card.innerHTML = `
            <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <p>${movie.title}</p>
            </div>
        `;

        // When clicked, it plays a trailer or tries to find a stream
        card.onclick = () => playVideo(movie.title, movie.id);
        
        movieDisplay.appendChild(card);
    });
}

// 3. Updated Play Function (Auto-finds trailers)
async function playVideo(title, id) {
    const playerSection = document.getElementById('player-zone');
    const wrapper = document.getElementById('video-wrapper');
    const titleHeader = document.getElementById('now-playing-title');

    playerSection.classList.remove('hidden');
    titleHeader.innerText = "Watching Trailer: " + title;

    // Fetch the official trailer from TMDB
    const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    const videoData = await res.json();
    const trailer = videoData.results.find(vid => vid.type === 'Trailer');

    if (trailer) {
        wrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        wrapper.innerHTML = `<p style="padding:50px;">Sorry, no trailer found for this title.</p>`;
    }

    playerSection.scrollIntoView({ behavior: 'smooth' });
}

// Start the auto-update
fetchMovies();
