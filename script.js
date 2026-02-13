// declare
const bgAudio = new Audio("src/song.mp3");
const popOut = document.querySelector(".pop-out");
const clickMe = document.querySelector(".btn-bro");
const paper = document.querySelector(".paper");
const loveYou = new Audio("src/mwa.mp3")
const btnCat = document.getElementById("cat");
//particles
function createParticles() {
  const container = document.getElementById("heart");

  const heartImages = ["src/heart.PNG"];

  setInterval(() => {
    let particle = document.createElement("img");

    particle.src = heartImages[Math.floor(Math.random() * heartImages.length)];

    particle.style.position = "absolute";
    particle.style.left = Math.random() * window.innerWidth + "px";

    let size = Math.random() * 20 + 100 + "px";
    particle.style.width = size;
    particle.style.height = "auto";

    particle.style.animationDuration = Math.random() * 3 + 3 + "s";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 6000);
  }, 200);
}

createParticles();

// click button
clickMe.addEventListener("click", () => {
  bgAudio.play();
  bgAudio.loop = true;
  bgAudio.volume = 0.3;

  clickMe.style.transition = "opacity 0.4s ease";
  clickMe.style.opacity = "0";

  //add slide out effect to paper
  paper.classList.add("slideOut");

  // Wait for the slide-out animation to finish before showing popOut
  // ADJUST SLIDE-UP TIMING: change the outer timeout (currently 20ms) to control WHEN the pop-out starts appearing
  setTimeout(() => {
    // Now display the popOut and apply fade-in effect
    popOut.style.display = "flex"; // Show popOut
    // ADJUST SLIDE-UP TIMING: change the inner timeout (currently 50ms) to control the delay before the fade-in starts
    setTimeout(() => {
      clickMe.style.opacity = 0;
      popOut.style.opacity = 1; // Fade in popOut
      // ADJUST SLIDE-UP TIMING: change "1s" below to control HOW FAST the slide-up animation plays (e.g. 2s = slower, 0.5s = faster)
      popOut.style.transition = "opacity 1.6s ease, transform 1.6s ease"; // Slide in + fade in
      popOut.style.transform = "translateY(0)"; // Move to final position
    }, 50);
  }, 30);
});


// typing effect
const textAnimator = {
  typeEffect: function (element, speed, onComplete) {
    let text = element.textContent;
    let i = 0;
    element.textContent = ""; // Clear the text before applying text effect or else it will show double
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
      } else {
        clearInterval(typing);
        // Call the callback when typing is done
        if (onComplete) onComplete();
      }
    }, speed);
  },
};

const textElement2 = document.getElementById("textt");
const bordDiv = document.querySelector(".bord");

// Start typing effect, and show .bord div after it finishes
textAnimator.typeEffect(textElement2, 60, () => {
  // Typing is done! Now show the bord div with a smooth fade-in
  bordDiv.style.opacity = "0";
  bordDiv.style.display = "flex";
  // ADJUST BORD TIMING: change "0.8s" to control how fast the fade-in is (e.g. 1.5s = slower, 0.3s = faster)
  bordDiv.style.transition = "opacity 0.4s ease";
  setTimeout(() => {
    bordDiv.style.opacity = "1";
  }, 50); // small delay so the transition actually triggers
});

// Cat click -> play audio
btnCat.addEventListener("click", () => {
  loveYou.currentTime = 0; // restart audio if clicked again
  loveYou.play();
});
