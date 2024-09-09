let pessoas = [
    {nome:"vinicius", idade:40, altura: 1,90},
    {nome:"joao", idade:20, altura: 1,80},
    {nome:"gabriel", idade:10, altura: 1,70},
];

let adultos = pessoas.filter(function (teste){
    return teste.idade > 18;
});

let adultos = pessoas.filter(function (teste){
    return teste.idade < 18;
});

console.log (adultos);