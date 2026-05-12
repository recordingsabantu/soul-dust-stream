{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #0b0b0b;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    z-index: 999;
    background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent);
}

.logo {
    color: #e50914;
    font-size: 2rem;
    font-weight: 700;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    transition: 0.3s;
}

nav a:hover {
    color: #e50914;
}

.hero {
    height: 90vh;
    background: url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop') center/cover;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 70px;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0b0b0b, rgba(0,0,0,0.3));
}

.hero-content {
    position: relative;
    max-width: 600px;
    z-index: 2;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    color: #ddd;
}

.hero-btn {
    background: #e50914;
    border: none;
    color: white;
    padding: 14px 28px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
}

.hero-btn:hover {
    background: #ff1f29;
    transform: scale(1.05);
}

.live-tv,
.movies {
    padding: 40px 60px;
}

.section-header {
    margin-bottom: 20px;
}

.section-header h2 {
    font-size: 1.8rem;
}

.channels {
    display: flex;
    gap: 15px;
}
