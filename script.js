const channels = {
    sabc1: "https://DURBAN_SERVER_OR_M3U8_LINK_HERE.m3u8",
    sabc2: "https://SABC2_STREAM_LINK.m3u8",
    sabc3: "https://SABC3_STREAM_LINK.m3u8"
};

function playLive(channelKey) {
    const video = document.getElementById('video-player');
    const streamUrl = channels[channelKey];

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari/iOS support
        video.src = streamUrl;
    }
}
