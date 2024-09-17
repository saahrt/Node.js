//"Determinar a Maioridade de uma Pessoa com Base na Idade"
// >18 menor de idade; =<18 maior de idade
function verIdade(num){
    if(num >= 18 ){
        console.log(`${num} você é MAIOR de idade`);
    }else{
        console.log(`${num} você é MENOR de idade`);
    }
}

verIdade(18);
verIdade(17);
verIdade(19);