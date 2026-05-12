// Function to scroll down to movies
function scrollToMovies() {
    document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
}

// Function to handle the video player
function playLive(name, url) {
    const wrapper = document.getElementById('video-wrapper');
    const playerZone = document.getElementById('player-zone');

    // Update the player area with an iframe
    wrapper.innerHTML = `
        <h3 style="margin-bottom:20px; color: #e50914;">Now Playing: ${name}</h3>
        <div class="video-responsive">
            <iframe src="${url}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <p style="margin-top:10px; font-size: 12px; color: #888;">
            Note: If the video doesn't load, the provider may have blocked embedding.
        </p>
    `;
    
    // Smooth scroll to the player
    playerZone.scrollIntoView({ behavior: 'smooth' });
}

// Movie Data
const sampleMovies = [
    { title: "Trending Now", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
    { title: "Action Hits", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
    { title: "South African Cinema", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400" },
    { title: "Documentaries", img: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?w=400" }
];

// Populate Movie Grid
const movieDisplay = document.getElementById('movie-display');

sampleMovies.forEach(movie => {
    const card = document.createElement('div');
    card.className = "movie-card"; // Using a class instead of inline styles
    card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
            <p>${movie.title}</p>
        </div>
    `;
    movieDisplay.appendChild(card);
});
