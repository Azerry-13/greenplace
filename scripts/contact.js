function changeImageByScreenSize() {
    let imageElement = document.getElementById('responsive-image-contact');
    if (window.innerWidth < 550) {
      imageElement.src = 'src/map-mobile.png';
    } else {
      imageElement.src = 'src/map.png';
    }
  }

  changeImageByScreenSize();
    window.addEventListener('resize', changeImageByScreenSize);