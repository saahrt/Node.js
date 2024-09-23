//5. "Verificar se um Ano é Bissexto"
function verBis(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 ===0)){
        console.log(`${ano} É um ano bissexto.`);
    }else{
        console.log(`${ano} Não é um ano bissexto.`);
    }
}
verBis(2024);
verBis(2023);