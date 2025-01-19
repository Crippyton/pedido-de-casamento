const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const duckSound = document.getElementById('duckSound');

// Botão "Não" se move ao passar o mouse
btnNo.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});

btnNo.addEventListener('click', () => {
  alert('Ops! Parece que você está brincando comigo!');
});

// Botão "Sim" redireciona para outro link
btnYes.addEventListener('click', () => {
  window.location.href = 'https://youtu.be/D7-r0bxVitk?si=CJtkMoC8QSUevS5h';
});

// Tocar som de pato ao passar o mouse no botão "Sim"
btnYes.addEventListener('mouseover', () => {
  duckSound.currentTime = 0; // Reinicia o som, caso já esteja tocando
  duckSound.play();
});
