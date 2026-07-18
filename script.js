document.addEventListener('DOMContentLoaded', function () {
  const noseButton = document.getElementById('nose-button');
  const revealContainer = document.getElementById('nose-reveal');
  const placeholderOptions = [
    'Ow! My nose! You touched my nose! Ouch!',
    'I said not to touch my nose! That\'s my nose!',
    'Please don\'t touch my nose again, or I may or may not say something different!',
    'Hey, I use that to smell and to sneeze...',
    'I said. NOT. To touch my nose. You cannot read. For shame.'
  ];
  let hideTimer = null;

  if (noseButton && revealContainer) {
    noseButton.addEventListener('click', function (event) {
      event.preventDefault();
      const randomIndex = Math.floor(Math.random() * placeholderOptions.length);
      revealContainer.textContent = placeholderOptions[randomIndex];
      revealContainer.style.display = 'block';

      if (hideTimer) {
        clearTimeout(hideTimer);
      }

      hideTimer = setTimeout(function () {
        revealContainer.style.display = 'none';
      }, 3000);
    });
  }
});
