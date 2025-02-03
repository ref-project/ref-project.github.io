const params = new URLSearchParams(window.location.search);

if (params.has("refsu")) {
  const configs = {
    'title': 'Refsu core',
    'button': 'Zagraj',
    'info': '2 ver. images/videos are available forever.',
    'videos': ['https://files.catbox.moe/wgni3l.mp4', 'https://files.catbox.moe/t414zy.mp4', 'https://files.catbox.moe/7qqxgr.mp4', 'https://files.catbox.moe/6wdagr.mp4', 'https://files.catbox.moe/n607dy.mp4', 'https://files.catbox.moe/djiz11.mp4'],
    'brwhen': false
  }
  setup(configs)
} else if (params.has("obs")) {
  const configs = {
    'title': 'OBS Jumpscares',
    'button': 'LOUDY SHAKI',
    'info': 'warning loud voices',
    'videos': ['https://files.catbox.moe/tuqbn4.mp4', 'https://files.catbox.moe/ilv94h.mp4', 'https://files.catbox.moe/etoh9l.mp4', 'https://files.catbox.moe/tnezjh.mp4'],
    'brwhen': '3'
  }
  setup(configs)
} else {
  window.location.href = 'https://linktr.ee/refproject#header-437047852'
}

function setup(configs) {
  // Title
  document.title = configs.title
  // Button & Info
  document.body.innerHTML = `<button>` + configs.button + `</button><i class="fas fa-info-circle" onclick="alert('` + configs.info + `')"></i><br><br>`
  // Videos
  configs.videos.forEach((src, index) => {
    const video = document.createElement('video');
    video.src = src;
    video.loop = true
    document.body.appendChild(video);
    if (configs.brwhen == false) {return}
    if ((index + 1) % configs.brwhen === 0) {
        container.appendChild(document.createElement('br'));
    }
  });
  // Last
  document.querySelector('button').addEventListener('click', () => {document.querySelectorAll('video').forEach(video => video.play());});
  document.querySelectorAll('video').forEach(video => {video.addEventListener('contextmenu', (event) => {event.preventDefault();});});
}
