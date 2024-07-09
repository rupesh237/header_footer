const dynamicText = document.querySelector('.dynamic-text');

function animateText() {
  let texts = ['Founder', 'Chief Executive Officer'];
  let currentIndex = 0;
  let index = 0;
  let isForward = true;

  setInterval(() => {
    let text = texts[currentIndex];
    dynamicText.textContent = text.slice(0, index);

    if (isForward) {
      index++;
      if (index > text.length) {
        currentIndex = (currentIndex + 1) % texts.length; // Switch to the next text
        isForward = false;
        index = text.length;
      }
    } else {
      index--;
      if (index < 0) {
        isForward = true;
        index = 0;
      }
    }
  }, 150); // Reduced the interval to 100ms for smoother animation
}

animateText();
