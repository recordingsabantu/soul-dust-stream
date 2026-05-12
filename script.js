// Sample Data
const movies = [
    { title: "Inception", img: "https://via.placeholder.com/200x300?text=Inception", url: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { title: "Interstellar", img: "https://via.placeholder.com/200x300?text=Interstellar", url: "https://www.youtube.com/embed/zSWdZVtXT7E" },
    { title: "The Matrix", img: "https://via.placeholder.com/200x300?text=Matrix", url: "https://www.youtube.com/embed/vKQi3bBA1y8" }
];

// 1. Scroll Function
function scrollToMovies() {
    document.getElementById('movies').scrollIntoView();
}

// 2. Load Movies
const movieDisplay = document.getElementById('movie-display');
movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <p style="padding:10px">${movie.title}</p>
    `;
    card.onclick = () => playLive(movie.title, movie.url);
    movieDisplay.appendChild(card);
});

// 3. Play Function
function playLive(name, url) {
    const wrapper = document.getElementById('video-wrapper');
    wrapper.innerHTML = `
        <h3 style="margin-bottom:15px">Now Playing: ${name}</h3>
        <iframe src="${url}" frameborder="0" allowfullscreen></iframe>
    `;
    document.getElementById('player-zone').scrollIntoView();
}
