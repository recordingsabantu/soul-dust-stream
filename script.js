// Sample Data
const movies = [
    { id: 1, title: "Blood & Water", img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Kings of Joburg", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", video: "#" },
    { id: 3, title: "Savage Beauty", img: "https://images.unsplash.com/photo-1594908947096-3e4b7aba1fd6?w=400", video: "#" },
    { id: 4, title: "Soul Dust Original", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400", video: "#" }
];

// Display Movies
const movieGrid = document.getElementById('movie-display');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `<img src="${movie.img}" alt="${movie.title}">`;
    card.onclick = () => playVideo(movie.title, movie.video, true);
    movieGrid.appendChild(card);
});

// Play Video Function
function playVideo(title, url, isMovie) {
    const section = document.getElementById('player-zone');
    const wrapper = document.getElementById('video-wrapper');
    const titleElement = document.getElementById('now-playing-title');
    const dlBtn = document.getElementById('download-btn');

    section.classList.remove('hidden');
    titleElement.innerText = title;
    
    // For Demo: If YouTube, use iframe. If MP4, use video tag.
    if (url.includes('youtube')) {
        wrapper.innerHTML = `<div class="video-responsive"><iframe src="${url}" frameborder="0" allowfullscreen></iframe></div>`;
        dlBtn.style.display = 'none'; // Can't download direct YT links easily
    } else {
        wrapper.innerHTML = `
            <video controls autoplay class="video-responsive">
                <source src="${url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
        dlBtn.style.display = 'inline-block';
        dlBtn.onclick = () => downloadFile(url, title);
    }

    section.scrollIntoView({ behavior: 'smooth' });
}

// Download Function
function downloadFile(url, filename) {
    // In a real app, this would be a direct link to the server file
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Starting download for: " + filename);
}

function closePlayer() {
    document.getElementById('player-zone').classList.add('hidden');
    document.getElementById('video-wrapper').innerHTML = '';
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.style.background = '#000';
    else nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)';
});
