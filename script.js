const toggleBtn = document.getElementById('toggleMode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggleBtn.textContent = '☀️ Day Mode';
  } else {
    toggleBtn.textContent = '🌙 Night Mode';
  }
});
$('#scroll-button').click(function() {
    $('html, body').animate({scrolltop : 0}, 500);
});