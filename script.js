const toggleBtn = document.getElementById('toggleMode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');

  if (document.body.classList.contains('night')) {
    toggleBtn.textContent = '☀️ Day Mode';
  } else {
    toggleBtn.textContent = '🌙 Night Mode';
  }
});

// Pet Tip Box Feature
const petTips = [
  "Always provide fresh water for your pet.",
  "Regular vet checkups keep your pet healthy.",
  "Brush your pet’s fur to reduce shedding.",
  "Keep your pet’s vaccinations up to date.",
  "Give your pet plenty of exercise and playtime.",
  "Never leave your pet in a hot car.",
  "Feed your pet a balanced diet suitable for their age.",
  "Provide a safe and comfortable sleeping area.",
  "Train your pet with positive reinforcement.",
  "Check your pet for fleas and ticks regularly."
];

function showRandomTip() {
  const tip = petTips[Math.floor(Math.random() * petTips.length)];
  document.getElementById('petTipText').textContent = tip;
}

window.addEventListener('DOMContentLoaded', showRandomTip);

// Scroll to top button (if you have a button with id="scroll-button" and jQuery is loaded)
if (window.jQuery) {
  $('#scroll-button').click(function() {
    $('html, body').animate({scrollTop : 0}, 500);
  });
}