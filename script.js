document.getElementById('no-btn').addEventListener('mousemove', function (event) {
    var buttonRect = this.getBoundingClientRect();
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var buttonX = buttonRect.left + buttonRect.width / 2;
    var buttonY = buttonRect.top + buttonRect.height / 2;

    var deltaX = mouseX - buttonX;
    var deltaY = mouseY - buttonY;

    var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 100) {
        var newX = buttonRect.left + (Math.random() * 200 - 100);
        var newY = buttonRect.top + (Math.random() * 200 - 100);

        if (newX >= 0 && newX + buttonRect.width <= window.innerWidth &&
            newY >= 0 && newY + buttonRect.height <= window.innerHeight) {
            this.style.position = 'absolute';
            this.style.left = newX + 'px';
            this.style.top = newY + 'px';

            var gif = document.createElement('img');
            gif.src = 'nervous.gif';
            gif.style.position = 'fixed';
            gif.style.top = '4rem';
            gif.style.left = '27rem';
            gif.style.zIndex = '9999';
            gif.style.width = '55px';
            gif.style.pointerEvents = 'none';
            document.body.appendChild(gif);

            var gif2 = document.createElement('img');
            gif2.src = 'nervous.gif';
            gif2.style.position = 'fixed';
            gif2.style.top = '20rem';
            gif2.style.right = '25rem';
            gif2.style.zIndex = '9999';
            gif2.style.width = '55px';
            gif2.style.pointerEvents = 'none';
            document.body.appendChild(gif2);

            var gif = document.createElement('img');
            gif.src = 'nervous.gif';
            gif.style.position = 'fixed';
            gif.style.top = '14rem';
            gif.style.left = '22rem';
            gif.style.zIndex = '9999';
            gif.style.width = '55px';
            gif.style.pointerEvents = 'none';
            document.body.appendChild(gif);

            var gif2 = document.createElement('img');
            gif2.src = 'nervous.gif';
            gif2.style.position = 'fixed';
            gif2.style.top = '10rem';
            gif2.style.right = '25rem';
            gif2.style.zIndex = '9999';
            gif2.style.width = '55px';
            gif2.style.pointerEvents = 'none';
            document.body.appendChild(gif2);
        }
    }
});

document.getElementById('no-btn').addEventListener('mouseleave', function () {
    var gif = document.querySelector('img[src="gif.gif"]');
    if (gif) {
        gif.remove();
    }
});

document.getElementById('yes-btn').addEventListener('click', function() {
    // Remove nervous.gif images
    var gifs = document.querySelectorAll('img[src="nervous.gif"]');
    gifs.forEach(function(gif) {
      gif.remove();
    });
  
    // Remove no-btn
    var noBtn = document.getElementById('no-btn');
    if (noBtn) {
      noBtn.remove();
    }

    var noBtn = document.getElementById('wrapper-final');
    if (noBtn) {
      noBtn.remove();
    }
  
    // Remove default image
    var defaultImage = document.querySelector('.default-image-final');
    if (defaultImage) {
      defaultImage.style.display = 'none';
    }
  
    // Show yes-image
    var yesImage = document.querySelector('.yes-image');
    if (yesImage) {
        yesImage.style.display = 'inline-flex';
    }

    var yesImage = document.querySelector('.yes-image.right');
    if (yesImage) {
        yesImage.style.display = 'inline-flex';
    }

    var yesCoupleImage = document.querySelector('.yes-couple-image');
    if (yesCoupleImage) {
      yesCoupleImage.style.display = 'inline-flex';
    }
  
    // Add onclick class to body
    document.body.classList.add('onclick');

    // Add yes-image class
    yesImage.classList.add('yes-image');
  
    // Create fireworks
    var fireworks = document.createElement('div');
    fireworks.classList.add('firework');
    document.getElementById('fireworks').appendChild(fireworks);
  
    setTimeout(function() {
      fireworks.remove();
    }, 3000);
});

