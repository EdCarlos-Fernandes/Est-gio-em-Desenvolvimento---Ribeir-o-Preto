function showContent(id) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.remove('d-none');
      } else {
        section.classList.add('d-none');
      }
    });
  }
  
  // Código para Resposta 1
  function isFibonacci(num) {
    let a = 0, b = 1, next;
    
    while (b < num) {
      next = a + b;
      a = b;
      b = next;
    }
    
    return b === num || num === 0;
  }
  
  function verificarFibonacci() {
    const num = parseInt(document.getElementById('numero').value);
    if (isNaN(num)) {
      document.getElementById('resultado1').textContent = "Por favor, insira um número válido.";
      return;
    }
    const resultado = isFibonacci(num) ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`;
    document.getElementById('resultado1').textContent = resultado;
  }
  
  // Código para Resposta 2
  function contarA(string) {
    const regex = /a/gi;
    const ocorrencias = string.match(regex);
    return ocorrencias ? ocorrencias.length : 0;
  }
  
  function contarOcorrencias() {
    const texto = document.getElementById('texto').value;
    const resultado = texto.length === 0 ? "Por favor, insira um texto válido." : `A letra 'a' aparece ${contarA(texto)} vezes.`;
    document.getElementById('resultado2').textContent = resultado;
  }
  