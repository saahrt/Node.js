//13. "Calcular o IMC (Índice de Massa Corporal)"
// Abaixo do peso: IMC < 18.5
// Peso normal: 18.5 ≤ IMC < 24.9
// Sobrepeso: 25 ≤ IMC < 29.9
// Obesidade: IMC ≥ 30
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);// cálculo do imc
    return imc; // retorna o imc
}
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}
const peso = 51; // em kg
const altura = 1.70; // em metros
const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);