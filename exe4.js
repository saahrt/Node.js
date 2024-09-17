//"Classificar a Temperatura do Dia como Fria, Agradável ou Quente"
// Fria: Temperaturas geralmente abaixo de 10°C (50°F).
// Agradável: Temperaturas entre 10°C e 25°C (50°F a 77°F).
// Quente: Temperaturas acima de 25°C (77°F).

function verTemp(Celsius){
    if(Celsius < 10){
        console.log(`${Celsius} A temperatura está Fria.`);
    }else if(Celsius >= 10 && Celsius <= 24){
    console.log(`${Celsius} A temperatura está Agradável.`);
    }else if(Celsius > 25){
    console.log(`${Celsius} A temperatura está Quente.`);
}
}
verTemp(9);
verTemp(10);
verTemp(25);
verTemp(26);