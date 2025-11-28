const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const videoList = document.getElementById("videoList");
const videoLoop = document.getElementById("videoLoop");
const search = window.location.search;
let videos;
let currentVideoIndex = 0;
function populateVideoList() {
  videos.forEach((video, index) => {
    const option = document.createElement("option");
    option.value = video.url;
    option.textContent = video.name;
    videoList.appendChild(option);
  });
  videoSource.src = videoList.value;
  videoPlayer.load();
}
function changeVideo() {
  videoSource.src = videoList.value;
  videoPlayer.load();
  videoPlayer.play();
  currentVideoIndex = videoList.selectedIndex;
}
        
videoPlayer.addEventListener('ended', () => {
  if (!videoPlayer.loop && currentVideoIndex !== (videos.length - 1)) {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoSource.src = videos[currentVideoIndex].url;
    videoPlayer.load();
    videoPlayer.play();
    videoList.selectedIndex = currentVideoIndex;
  }
});
videoPlayer.addEventListener('contextmenu', () => {
  event.preventDefault();
});
videoLoop.addEventListener('change', () => {
  if (!videoPlayer.loop) {
    videoPlayer.loop = true;
  } else {
    videoPlayer.loop = false;
  }
});
videoList.addEventListener('change', changeVideo);
        
if (search.includes("?1")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/bobt3p.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/mra6el.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/gkuolr.mp4" },
    { name: "Part 4", url: "https://files.catbox.moe/g1budd.mp4" }
  ];
} else if (search.includes("?2")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/n0ofsk.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/o50zbj.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/cx2v6h.mp4" }
  ];
} else if (search.includes("?3")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/u7crxe.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/1rxdz4.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/4dv1q5.mp4" }
  ];
// } else if (search.includes("?42")) {
//  videos = [
//    { name: "Part 1", url: "https://files.catbox.moe/eaptbz.mp4" },
//    { name: "Part 2", url: "https://files.catbox.moe/o3obrw.mp4" },
//    { name: "Part 3", url: "https://files.catbox.moe/c7y32c.mp4" }
//  ];
} else if (search.includes("?4")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/rsa2oo.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/p9aiye.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/so0zbn.mp4" },
    { name: "Part 4", url: "https://files.catbox.moe/eaptbz.mp4" },
    { name: "Part 5", url: "https://files.catbox.moe/o3obrw.mp4" },
    { name: "Part 6", url: "https://files.catbox.moe/c7y32c.mp4" }
  ];
} else if (search.includes("?5")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/j0s4ig.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/y6ltfg.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/dcbs19.mp4" },
    { name: "Part 4", url: "https://files.catbox.moe/dp8o65.mp4" }
  ];
} else if (search.includes("?6")) {
  videos = [
    { name: "Part 1", url: "https://files.catbox.moe/7p4q4i.mp4" },
    { name: "Part 2", url: "https://files.catbox.moe/k00zxy.mp4" },
    { name: "Part 3", url: "https://files.catbox.moe/x1j51x.mp4" },
    { name: "Part 4", url: "https://files.catbox.moe/2x27pk.mp4" },
    { name: "Part 5", url: "https://files.catbox.moe/fva7gn.mp4" },
    { name: "Part 6", url: "https://files.catbox.moe/erigtz.mp4" }
  ];
} else {
  window.location.href = '/granny';
}
populateVideoList();