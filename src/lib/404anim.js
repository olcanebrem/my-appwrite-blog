// public/scripts/animation.js

document.addEventListener('DOMContentLoaded', () => {
  const $copyContainer = document.querySelector(".copy-container");
  const $replayIcon = document.querySelector('#cb-replay');
  const $copyWidth = document.querySelector('.copy-container').querySelector('p').offsetWidth;

  const mySplitText = new SplitText($copyContainer, { type: "words" });
  const splitTextTimeline = new TimelineMax();
  const handleTL = new TimelineMax();

  const tl = new TimelineMax();
  tl.add(() => {
    animateCopy();
    blinkHandle();
  }, 0.2);

  function animateCopy() {
    mySplitText.split({ type: "chars, words" });
    splitTextTimeline.staggerFrom(mySplitText.chars, 0.001, {
      autoAlpha: 0,
      ease: Back.easeInOut.config(1.7),
      onComplete: function () {
        animateHandle();
      }
    }, 0.05);
  }

  function blinkHandle() {
    handleTL.fromTo('.handle', 0.4, { autoAlpha: 0 }, { autoAlpha: 1, repeat: -1, yoyo: true }, 0);
  }

  function animateHandle() {
    handleTL.to('.handle', 0.7, { x: $copyWidth, ease: SteppedEase.config(12) }, 0.05);
  }

  $replayIcon.addEventListener('click', function () {
    splitTextTimeline.restart();
    handleTL.restart();
  });
});
