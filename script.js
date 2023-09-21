document.addEventListener("DOMContentLoaded", function () {
  var orientacaoInput = document.getElementById("orientacao");
  var tipoOS = document.getElementById("tipoos");
  var relatoInput = document.getElementById("relato");

  // Função para preencher os campos de orientação e relato com base no tipo de O.S.
  function preencherCampos() {
    var fraseOrientacao = "";
    var relato = "";

    switch (tipoOS.value) {
      case "manutencao":
        fraseOrientacao = "Verificar a integridade do equipamento e dos cabos, fazer todos os testes possíveis junto ao cliente para estar tirando qualquer dúvida que ele venha ter";
        relato = "Cliente sem conexão. Foi verificado que o equipamento está com LOS em alerta.";
        break;
      case "suporte":
      case "suporteint":
        fraseOrientacao = "Verificar a integridade do equipamento, Verificar a integridade dos conectores. Caso necessário EFETUAR A TROCA DO EQUIPAMENTO. Efetuar todos os testes de velocidade junto ao cliente.";
        if (tipoOS.value === "suporte") {
          relato = "Cliente informa estar sem conexão. Foi verificado que o mesmo teve diversas quedas de conexão. Mesmo após as configurações remotas, sua conexão não retornou.";
        } else {
          relato = "Cliente informa lentidão em sua conexão. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, sua conexão não normalizou.";
        }
        break;
      default:
        orientacaoInput.value = "";
        relatoInput.value = "";
        return; // Sai da função se o tipo de O.S. não for manutencao, suporte ou suporteint
    }

    orientacaoInput.value = fraseOrientacao;
    relatoInput.value = relato;
  }

  // Adiciona um ouvinte de evento para o campo "tipoos"
  tipoOS.addEventListener("change", preencherCampos);

  // Função para verificar se um checkbox está marcado
  function isChecked(checkboxId) {
    return document.getElementById(checkboxId).checked;
  }

  // Função para exibir ou ocultar campos com base nas opções marcadas nos checkboxes
  function toggleCampos(checkboxId, campoId) {
    var campo = document.getElementById(campoId);
    campo.style.display = isChecked(checkboxId) ? "block" : "none";
  }

  // Defina uma lista de checkboxes e seus campos correspondentes
  var checkboxes = [
    { checkboxId: "chkPotenciaOnu", campoId: "campoPotenciaOnu" },
    { checkboxId: "chkGpon", campoId: "campoGpon" },
    { checkboxId: "chkPPPoE", campoId: "campoPPPoE" },
    { checkboxId: "chkPotenciaOlt", campoId: "campoPotenciaOlt" },
    { checkboxId: "chkAlarmes", campoId: "campoAlarmes" },
    { checkboxId: "chkocorre", campoId: "campoOcorre" },
    { checkboxId: "chkTemperatura", campoId: "campoTemp" },
    { checkboxId: "chkModelo", campoId: "campoModelo" },
    { checkboxId: "chkOutros", campoId: "campoOutros" },
  ];

  // Adiciona ouvintes de evento para cada checkbox
  checkboxes.forEach(function (checkbox) {
    var checkboxElement = document.getElementById(checkbox.checkboxId);
    checkboxElement.addEventListener("change", function () {
      toggleCampos(checkbox.checkboxId, checkbox.campoId);
    });
  });
});
  
  
  // Adiciona um listener para o evento "submit" do formulário
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos do formulário
    var tipoOS = document.getElementById("tipoos").value;
    var potenciaONU = document.getElementById("potencia-onu").value;
    var alarmesEquipamento = document.getElementById("alarmes-equipamento").value;
    var dispositivosSemInternet = document.getElementById("dispositivos-sem-internet").value;
  
    var prioridade = document.getElementById("prioridade").value;
    var responsavel = document.getElementById("responsavel").value;
    var telefone = document.getElementById("telefone").value;
    var horarioElement = document.getElementById("horario");
    var horario = horarioElement.options[horarioElement.selectedIndex].text;
    var relato = document.getElementById("relato").value;
    var causa = document.getElementById("causa").value;
    var orientacao = document.getElementById("orientacao").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;
    var logradouro = document.getElementById("logradouro").value;
    var complemento = document.getElementById("complemento").value;
    var localizacao = document.getElementById("localizacao").value;
    var modelo = document.getElementById("modelo").value;
    var gpon = document.getElementById("gpon").value;
    var pppoe = document.getElementById("pppoe").value;
    var Temp = document.getElementById("Temp").value;
    var polt = document.getElementById("potenciaOlt").value;
    var Outros = document.getElementById("Outros").value;
    var validador = document.getElementById("validador").value;
  
    // Definindo variáveis do tipo checkbox
    var checkboxPotenciaONU = document.getElementById("chkPotenciaOnu");
    var checkboxGPON = document.getElementById("chkGpon");
    var checkboxPPPoE = document.getElementById("chkPPPoE");
    var checkboxPotenciaOLT = document.getElementById("chkPotenciaOlt");
    var checkboxAlarmesEquipamento = document.getElementById("chkAlarmes");
    var checkboxDispositivosSemInternet = document.getElementById("chkocorre");
    var checkboxTemperatura = document.getElementById("chkTemperatura");
    var checkboxModeloEquipamento = document.getElementById("chkModelo");
    var checkboxOutros = document.getElementById("chkOutros");
  
    // Obtém referência ao botão "Concluir"
    var btnConcluir = document.getElementById("btnConcluir");
  
    // Adiciona um listener para o evento de clique no botão "Concluir"
    btnConcluir.addEventListener("click", function() {
      // Monta o conteúdo a ser exibido na janela modal
      var conteudoExibido = "PRIORIDADE: " + prioridade + "\n\n" +
        "RESPONSÁVEL QUE RECEBERÁ A EQUIPE: " + responsavel + "\n\n" +
        "TELEFONE: " + telefone + "\n\n" +
        "MELHOR HORÁRIO PARA ATENDIMENTO: " + horario + "\n\n" +
        "RELATO: " + relato + "\n\n" +
        "POSSÍVEL CAUSA: " + causa + "\n\n" +
        "ORIENTAÇÃO PARA OS TÉCNICOS: " + orientacao + "\n\n";
      // Verifica se o campo cidade foi preenchido
      if (cidade.trim() !== "") {
        conteudoExibido += "Cidade: " + cidade + "\n";
      }
  
      // Verifica se o campo bairro foi preenchido
      if (bairro.trim() !== "") {
        conteudoExibido += "Bairro: " + bairro + "\n";
      }
  
      // Verifica se o campo logradouro foi preenchido
      if (logradouro.trim() !== "") {
        conteudoExibido += "Logradouro: " + logradouro + "\n";
      }
  
      // Verifica se o campo complemento foi preenchido
      if (complemento.trim() !== "") {
        conteudoExibido += "Complemento: " + complemento + "\n\n";
      }
      conteudoExibido +=
        "Localização e cto: " + localizacao + "\n\n";
  
  
      // Verifica se os checkboxes estão marcados
      if (checkboxPotenciaONU.checked) {
        conteudoExibido += "POTÊNCIA ONU: " + potenciaONU + "\n";
      }
      if (checkboxDispositivosSemInternet.checked) {
        conteudoExibido += "DISPOSITIVOS EM QUE OCORRE: " + dispositivosSemInternet + "\n";
      }
      if (checkboxModeloEquipamento.checked) {
        conteudoExibido += "MODELO DO EQUIPAMENTO: " + modelo + "\n";
      }
      if (checkboxGPON.checked) {
        conteudoExibido += "GPON: " + gpon + "\n";
      }
      if (checkboxPPPoE.checked) {
        conteudoExibido += "PPPoE: " + pppoe + "\n";
      }
      if (checkboxPotenciaOLT.checked) {
        conteudoExibido += "POTÊNCIA OLT: " + polt + "\n";
      }
  
      if (checkboxAlarmesEquipamento.checked) {
        conteudoExibido += "ALARMES DO EQUIPAMENTO: " + alarmesEquipamento + "\n";
      }
      if (checkboxTemperatura.checked) {
        conteudoExibido += "Temperatura: " + Temp + "\n";
      }
      if (checkboxOutros.checked) {
        conteudoExibido += "Outros: " + Outros + "\n";
      }
      if (validador.trim() !== "") {
        conteudoExibido += "VALIDADOR: " + validador + "\n";
      }
  
  
      // Exibe a janela modal
      var modal = document.getElementById("modal");
      modal.style.display = "block";
  
      // Exibe o conteúdo preenchido na janela modal
      var textoExibido = document.getElementById("textoExibido");
      textoExibido.value = conteudoExibido;
  
      // Adiciona um listener para o botão Copiar
      document.getElementById("btnCopiar").addEventListener("click", function() {
        textoExibido.select();
        document.execCommand("copy");
      });
    });
  
  
    // Fecha a janela modal ao clicar no botão Fechar
    document.getElementById("btnFecharModal").addEventListener("click", function() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
  
      // Recarrega a página automaticamente
      location.reload();
    });
  });