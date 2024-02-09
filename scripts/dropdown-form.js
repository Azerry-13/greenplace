function selectOption(option) {
    document.getElementById('form-1').value = option;
    document.getElementById('dropdown-content').style.display = 'none';
  }

  document.getElementById('form-1').addEventListener('click', function() {
    let dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  window.addEventListener('click', function(event) {
    let dropdown = document.getElementById('dropdown-content');
    let input = document.getElementById('form-1');
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  function selectOption2(option2) {
    document.getElementById('form-2').value = option2;
    document.getElementById('dropdown-content2').style.display = 'none';
  }

  document.getElementById('form-2').addEventListener('click', function() {
    let dropdown = document.getElementById('dropdown-content2');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  window.addEventListener('click', function(event) {
    let dropdown = document.getElementById('dropdown-content2');
    let input = document.getElementById('form-2');
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  function selectOption3(option3) {
    document.getElementById('form-3').value = option3;
    document.getElementById('dropdown-content3').style.display = 'none';
  }

  document.getElementById('form-3').addEventListener('click', function() {
    let dropdown = document.getElementById('dropdown-content3');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  window.addEventListener('click', function(event) {
    let dropdown = document.getElementById('dropdown-content3');
    let input = document.getElementById('form-3');
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });