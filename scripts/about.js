function changeImageByScreenSize() {
    let imageElement = document.getElementById('responsive-image-about-1');
    let imageElement2 = document.getElementById('responsive-image-about-2');
    if (window.innerWidth < 361) {
      imageElement.src = 'src/about-image-1-mobile.png';
    } else {
      imageElement.src = 'src/about-image-1.png';
    }

    if (window.innerWidth < 361) {
        imageElement2.src = 'src/about-image-2-mobile.png';
      } else {
        imageElement2.src = 'src/about-image-2.png';
      }
    }
  
  changeImageByScreenSize();
    window.addEventListener('resize', changeImageByScreenSize);