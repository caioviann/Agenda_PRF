const inputBusca = document.getElementById('input-busca');
const tabelaAgenda = document.getElementById('tabela-agenda');

inputBusca.addEventListener('keyup', () => {
    let expressao = inputBusca.value.toLowerCase();
    let linhas = tabelaAgenda.getElementsByTagName('tr');

    console.log(linhas)
    for(let posicao in linhas){
        if(true === isNaN(posicao)){
            continue;
        }
        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if(true === conteudoDaLinha.includes(expressao)){
            linhas[posicao].style.display = '';
        }else{
            linhas[posicao].style.display = 'none';
        }
    }
});