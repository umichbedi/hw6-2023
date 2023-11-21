var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplayer is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play the Video");
	if (video.paused) {
        video.play();
        console.log("Video is playing");
    } else {
        console.log("Video is already playing");
    }

	var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = (video.volume * 100) + "%";

});


document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause the Video");
    if (!video.paused) {
        video.pause();
        console.log("The Video is paused");
    } else {
        console.log("The Video is already paused");
    }
});


document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down");
		video.playbackRate -= 0.1;
		console.log("The reduced speed is: " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    if (video.playbackRate < 2) {
        video.playbackRate += 0.1;
        console.log("The increased speed is: " + video.playbackRate);
    } else {
        console.log("Maximum speed reached");
    }
});


document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current time of the video: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute button clicked");
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").textContent = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").textContent = "Unmute";
    }
});

var slider = document.getElementById("slider");
var volumeSpan = document.getElementById("volume");

slider.addEventListener("input", function() {
	console.log("Volume slider moved");
    video.volume = slider.value / 100;
    volumeSpan.textContent = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School filter applied");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old School filter removed");
    video.classList.remove("oldSchool");
});