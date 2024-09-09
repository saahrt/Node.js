let dia = 3;
let nomeDia;

switch (dia){
    case 1:
        nomeDia = 'DOMINGO';
        break;
    case 2:
        nomeDia = 'SEGUNDA-FEIRA';
        break;
    case 3:
        nomeDia = 'TERÇA-FEIRA';
        break;
    case 4:
        nomeDia = 'QUARTA-FEIRA';
        break;
    case 5:
        nomeDia = 'QUINTA-FEIRA';
        break;
    case 6:
        nomeDia = 'SEXTA-FEIRA';
        break;
    case 7:
        nomdeDia = 'SÁBADO';
        break;
    default:
        nomeDia = 'DIA INVÁLIDO';
}
console.log(`O dia correspondente ao número ${dia} é ${nomeDoDia}.`);
