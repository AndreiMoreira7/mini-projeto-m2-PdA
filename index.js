// Classe Consulta
class consulta {
  constructor(nome, nascimento, especialidade,documento, descricao) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.especialidade = especialidade;
    this.documento = documento;
    this.descricao = descricao;
  }
}

class ConsultaController {
  constructor() {
    this.consultas = [];
    this.consultaListElement = document.getElementById("consulta-list");
    this.consultaForm = document.getElementById("consulta-form");

    this.consultaForm.addEventListener("submit", (event) =>
      this.adicionarConsulta(event)
    );

    this.inicializarAutocomplete();
  }


  adicionarConsulta(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("nascimento").value;
    const especialidade = document.getElementById("especialidade").value;
    const documento = document.getElementById("documento").value;
    const descricao = document.getElementById("descricao").value;

    const novaEmpresa = new Empresa(nome, nascimento, especialidade, documento, descricao);
    this.empresas.push(novaEmpresa);

    this.atualizarLista();
    this.consultaForm.reset();
  }

  atualizarLista() {
    this.consultaListElement.innerHTML = "";

    this.consultas.forEach((consulta, index) => {
      const li = document.createElement("li");
      li.classList.add("consulta-item");

      li.innerHTML = `
                <div class="consulta-details">
                    <strong>${consulta.nome}</strong>
                    <p>nascimento: ${consulta.nascimento}</p>
                    <p>especialidade: ${consulta.especialidade}</p>
                    <p>documento: ${consulta.documento}</p>
                    <p>${consulta.descricao}</p>
                </div>
                <div class="consulta-actions">
                    <button class="edit" onclick="consultaController.editarconsulta(${index})">Editar</button>
                    <button class="delete" onclick="consultaController.deletarconsulta(${index})">Excluir</button>
                </div>
            `;

      this.consultaListElement.appendChild(li);
    });
  }

  editarConsulta(index) {
    const consulta = this.consultas[index];
    document.getElementById("nome").value = consulta.nome;
    document.getElementById("nascimento").value = consulta.nascimento;
    document.getElementById("especialidade").value = consulta.especialidade;
    document.getElementById("documento").value = consulta.documento;
    document.getElementById("descricao").value = consulta.descricao;

    this.consultas.splice(index, 1);
    this.atualizarLista();
  }

  deletarConsulta(index) {
    this.consultas.splice(index, 1);
    this.atualizarLista();
  }
}
 

    