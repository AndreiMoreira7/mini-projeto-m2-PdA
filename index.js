
function salvarDados(dados) {
    const dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];
    dadosSalvos.push(dados);
    localStorage.setItem('dados', JSON.stringify(dadosSalvos));
  }
  
  
  function carregarDados() {
    const dadosSalvos = JSON.parse(localStorage.getItem('dados')) || [];
    const lista = document.getElementById('lista-dados');
    lista.innerHTML = ''; 
  
    dadosSalvos.forEach((dado) => {
      const li = document.createElement('li');
      li.textContent = `${dado.nome} - ${dado.idade}`;
      lista.appendChild(li);
    });
  }
  
  function mostrarFormulario(modo, dado = null) {
  }
  
  document.getElementById('btn-cadastrar').addEventListener('click', () => {
    mostrarFormulario('cadastrar');
  });
  
  document.getElementById('form-cadastro').addEventListener('submit', (event) => {
    event.preventDefault();
    const dados = {
      nome: document.getElementById('nome').value,
      idade: document.getElementById('idade').value,
    };
  
    if (!validarDados(dados)) {
      return;
    }
  
    salvarDados(dados);
    carregarDados();
    mostrarFormulario('cadastrar'); 
  });
  
  function validarDados(dados) {
    return true; 
  }

  function mostrarMensagem(mensagem, tipo) {
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;
  
    if (tipo === 'sucesso') {
      mensagemDiv.classList.add('mensagem-sucesso');
    } else {
      mensagemDiv.classList.add('mensagem-erro');
    }
  
    setTimeout(() => {
      mensagemDiv.textContent = '';
      mensagemDiv.classList.remove('mensagem-sucesso', 'mensagem-erro');
    }, 3000);
  }
  
  if (salvarDados(dados)) {
    mostrarMensagem('Dados salvos com sucesso!', 'sucesso');
  } else {
    mostrarMensagem('Erro ao salvar os dados.', 'erro');
  }