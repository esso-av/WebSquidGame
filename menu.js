var menuToggle = document.querySelector('.toggle');
var navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}