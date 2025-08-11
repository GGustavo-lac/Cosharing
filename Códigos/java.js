// Inicializar ícones
feather.replace();

// Animação simples para contadores
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = parseInt(counter.textContent, 10); // Certifique-se de que é um número
  const count = function () {
    const currentValue = parseInt(counter.textContent, 10); // Certifique-se de que é um número
    const increment = target / 25;
    if (currentValue < target) {
      counter.textContent = Math.ceil(currentValue + increment); // Atualiza o valor
      setTimeout(count, 40);
    } else {
      counter.textContent = target; // Garante que o valor final seja o alvo
    }
  };
  count();
});
// Animação de entrada suave para a seção de missão e valores
document.addEventListener('DOMContentLoaded', function() {
  const missionSection = document.querySelector('.mission-values');
  missionSection.style.opacity = 0;
  missionSection.style.transform = 'translateY(20px)';

  setTimeout(() => {
    missionSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    missionSection.style.opacity = 1;
    missionSection.style.transform = 'translateY(0)';
  }, 100);
});
