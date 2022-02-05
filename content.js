chrome.runtime.onMessage.addListener((value) => {
  const video = document.querySelector("video");

  video.playbackRate = value;
});
