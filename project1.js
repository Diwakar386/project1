document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("videoPlayer");
  const videoSource = document.getElementById("videoSource");
  const qualitySelector = document.getElementById("qualitySelector");

  qualitySelector.addEventListener("change", function () {
      const currentTime = video.currentTime;  
      const isPlaying = !video.paused;

      videoSource.src = this.value;
      video.load();
      
      video.currentTime = currentTime;
      if (isPlaying) {
          video.play();
      }
  });
});
