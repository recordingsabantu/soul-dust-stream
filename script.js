const TMDB_KEY = 'b50c94712e233654a22d62f77f7384b3';

async function getTrending() {
    try {

        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_KEY}`
        );

        const data = await response.json();

        const display = document.getElementById('movie-display');

        display.innerHTML = data.results.map(movie => `
            <div class="movie-card" onclick="streamMovie('${movie.id}')">

                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">

                <div class="card-info">
                    <h4>${movie.title}</h4>

                    <p>
                        ${movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
                    </p>
                </div>

            </div>
        `).join('');

    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

function streamMovie(id) {

    const playerContainer = document.getElementById('player-zone');

    playerContainer.innerHTML = `
        <div class="video-wrapper">

            <button onclick="closePlayer()" class="close-btn">
                X CLOSE
            </button>

            <iframe 
                src="https://vidsrc.to/embed/movie/${id}" 
                allowfullscreen>
            </iframe>

        </div>
    `;

    playerContainer.style.display = 'flex';
}

function playLive(channel) {

    let streamUrl = "";

    if(channel === 'sabc1')
        streamUrl = "https://sabc-plus.com/live/320/SABC-1";

    if(channel === 'sabc2')
        streamUrl = "https://sabc-plus.com/live/321/SABC-2";

    if(channel === 'sabc3')
        streamUrl = "https://sabc-plus.com/live/322/S3";

    if(channel === 'e.tv')
        streamUrl = "https://watch.evod.co.za/live-tv/etv/live_533134591782";

    const playerContainer = document.getElementById('player-zone');

    playerContainer.innerHTML = `
        <div class="video-wrapper">

            <button onclick="closePlayer()" class="close-btn">
                X CLOSE
            </button>

            <iframe 
                src="${streamUrl}" 
                allowfullscreen>
            </iframe>

        </div>
    `;

    playerContainer.style.display = 'flex';
}

function closePlayer() {
    document.getElementById('player-zone').style.display = 'none';
    document.getElementById('player-zone').innerHTML = '';
}

window.onload = getTrending;
