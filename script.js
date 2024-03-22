document.addEventListener('DOMContentLoaded', function() {
  const minusBtns = document.querySelectorAll('.minus-btn');
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  const plusBtns = document.querySelectorAll('.plus-btn');
  const container = document.querySelector('.container');

  // Toggle dropdown menu visibility
  const dropdownBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });
 
  // Event listeners for minus buttons
  minusBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetDiv = document.getElementById(targetId);
      targetDiv.style.display = 'none';
    });
  });

  // Event listeners for dropdown buttons
  dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetDiv = document.getElementById(targetId);
      targetDiv.style.display = 'block';
    });
  });

  // Event listeners for plus buttons
  plusBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const modal = document.getElementById('modal-' + targetId);
      modal.style.display = 'block';
    });
  });

  // Event listeners for close buttons
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const modal = document.getElementById('modal-' + targetId);
      modal.style.display = 'none';
    });
  });
});



window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}