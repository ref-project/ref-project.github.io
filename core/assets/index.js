document.querySelector('button').addEventListener('click', () => {document.querySelectorAll('video').forEach(video => video.play());});
document.querySelectorAll('video').forEach(video => {video.addEventListener('contextmenu', (event) => {event.preventDefault();});});
