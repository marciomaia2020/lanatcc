//Script para os botoes de navegação do slide
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");



var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");


}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});

/*
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
      // Exemplo de validação simples
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;

      if (nome === "" || email === "") {
          alert("Por favor, preencha todos os campos.");
          event.preventDefault();
      }
  });
});*/



/*VALIDAÇÃO AUTOMÁTICA DO FORM*/
document.getElementById('formulario').addEventListener('submit', function(event) {
  // Evitar o envio do formulário até que todas as validações sejam bem-sucedidas
  event.preventDefault();

  // Limpar erros anteriores
  let isValid = true;
  document.getElementById('nomeError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('comentarioError').textContent = '';

  // Obter os valores dos campos
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('comentario').value.trim();

  // Validação do nome
  if (name === '') {
      document.getElementById('nomeError').textContent = 'Nome é obrigatório.';
      isValid = false;
  }

  // Validação do e-mail
  if (email === '') {
      document.getElementById('emailError').textContent = 'Email é obrigatório.';
      isValid = false;
  } else if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Email inválido.';
      isValid = false;
  }

  // Validação da idade
  if (age === '') {
      document.getElementById('comentarioError').textContent = 'Idade é obrigatória.';
      isValid = false;
  } else if (age <= 0) {
      document.getElementById('comentarioError').textContent = 'Idade deve ser um número positivo.';
      isValid = false;
  }

  // Se todos os campos estiverem válidos, enviar o formulário
  if (isValid) {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode enviar o formulário usando `form.submit()` ou uma requisição AJAX
      // document.getElementById('myForm').submit();
  }
});

// Função para validar o formato do e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


function showAlert() {
    alert('Esta é uma mensagem de alerta!');
}


