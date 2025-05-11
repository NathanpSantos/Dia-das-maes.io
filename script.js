function mostrarSurpresa() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('conteudo').style.display = 'block';
  document.body.classList.remove('inicial');
  document.body.classList.add('conteudo');
}
  
  function mostrarMensagem(msg) {
    alert(msg);
  }

  function responderQuiz(botao, correta) {
    if (correta) {
      alert("Isso mesmo! Você é incrível, mãe! 🥰");
    } else {
      alert("Hmm... quase! Mas valeu tentar! 😅");
    }
  
    // Desabilita os botões da mesma pergunta
    const grupo = botao.parentElement;
    const botoes = grupo.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);
  }
  