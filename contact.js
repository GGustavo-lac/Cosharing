// Função para lidar com o envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Captura os dados do formulário
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Validação simples
      if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
      // Por exemplo, usando fetch ou XMLHttpRequest para enviar os dados via POST
  
      // Exibe uma mensagem de confirmação
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      
      // Limpa o formulário
      form.reset();
    });
  });
  