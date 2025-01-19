const btnNo = document.getElementById('btnNo');

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
const btnYes = document.getElementById('btnYes');
btnYes.addEventListener('click', () => {
  // link de comemoração
  window.location.href = 'https://youtu.be/D7-r0bxVitk?si=CJtkMoC8QSUevS5h'; 
});