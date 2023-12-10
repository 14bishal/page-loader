const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const cirlce = document.getElementsByClassName('circle');
const placeholder = document.getElementsByClassName('horizontal-loader');

startButton.addEventListener('click', function () {
  cirlce[0].classList.add('animate');
  placeholder[0].classList.add('skeleton');
});

stopButton.addEventListener('click', function () {
  cirlce[0].classList.remove('animate');
  placeholder[0].classList.remove('skeleton');
});
