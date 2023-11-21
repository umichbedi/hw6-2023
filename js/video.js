
// javascript code below
var video;


// code done during class
// Page load
// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplayer is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});


// Play Button
// Play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play the Video");
	if (video.paused) {
        video.play();
        console.log("Video is playing");
    } else {
        console.log("Video is already playing");
    }

// update the volume information
	var volumeSpan = document.getElementById("volume");
    volumeSpan.textContent = (video.volume * 100) + "%";
});


// Pause Button
// Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause the Video");
    if (!video.paused) {
        video.pause();
        console.log("The Video is paused");
    } else {
        console.log("The Video is already paused");
    }
});


// Slow Down
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down");
		video.playbackRate -= 0.1;
		console.log("The reduced speed is: " + video.playbackRate);
});


// Speed Up
// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

// added an upper cap to the speed up button
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    if (video.playbackRate < 2) {
        video.playbackRate += 0.1;
        console.log("The increased speed is: " + video.playbackRate);
    } else {
        console.log("Maximum speed reached");
    }
});


// Skip Ahead
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current time of the video: " + video.currentTime);
});


// Mute
// Mute/unmute the video and update the text in the button.
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


// Volume Slider
// Change the volume based on the slider
// update the volume information.
var slider = document.getElementById("slider");
var volumeSpan = document.getElementById("volume");

slider.addEventListener("input", function() {
	console.log("Volume slider moved");
    video.volume = slider.value / 100;
    volumeSpan.textContent = slider.value + "%";
});


// Styled
// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School filter applied");
    video.classList.add("oldSchool");
});


// Original
// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old School filter removed");
    video.classList.remove("oldSchool");
});


// the end of code