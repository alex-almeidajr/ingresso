function comprar(){
  let tipoIngresso = document.getElementById('tipo-ingresso');
  let ingressoSelecionado = tipoIngresso.options[tipoIngresso.selectedIndex].value;
  let quantidade = parseInt(document.getElementById('qtd').value);
  let qtdPista = document.getElementById('qtd-pista').textContent;
  let qtdInferior = document.getElementById('qtd-inferior').textContent;
  let qtdSuperior = document.getElementById('qtd-superior').textContent;
  let disponibilidade = document.getElementById('disponibilidade');

  if (ingressoSelecionado == 'pista'){
    if (parseInt(qtdPista) < quantidade){
      disponibilidade.textContent = "Quantidade indisponível";
    }else {
      disponibilidade.textContent = "Quantidade disponível";
      let totalIngresso = parseInt(qtdPista) - quantidade;
      document.getElementById('qtd-pista').textContent = totalIngresso;
      }
  }
  if(ingressoSelecionado == 'inferior'){
    if (quantidade > parseInt(qtdInferior)){
      disponibilidade.textContent = 'Quantidade indisponível';
    }else {
      disponibilidade.textContent = "Quantidade disponível";
      let totalIngresso = parseInt(qtdInferior) - quantidade;
      document.getElementById('qtd-inferior').textContent = totalIngresso;
      }
  }
  
  if(ingressoSelecionado == 'superior'){
    if (parseInt(qtdSuperior) < quantidade){
      disponibilidade.textContent = 'Quantidade indisponível';
    }else {
      disponibilidade.textContent = "Quantidade disponível";
      let totalIngresso = parseInt(qtdSuperior) - quantidade;
      document.getElementById('qtd-superior').textContent = totalIngresso;
      }
  }
}