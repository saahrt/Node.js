//20. "Atualizar o Saldo de Contas Bancárias após Transações"
function atualizarSaldos(contas) {
    for (let i = 0; i < contas.length; i++) {// percorre através de cada conta
        const conta = contas[i];
        let saldoAtual = conta.saldo;// inicializa o saldo da conta
        for (let j = 0; j < conta.transacoes.length; j++) {// percorre cada transação
            saldoAtual += conta.transacoes[j]; // atualiza o saldo a cada transação
        }
        conta.saldo = saldoAtual;// atualiza o saldo
    }
}
const contas = [
    { numero: "001", saldo: 1000, transacoes: [200, -50, -150] },
    { numero: "002", saldo: 1500, transacoes: [-300, 100, 200] },
    { numero: "003", saldo: 800, transacoes: [50, -25, -100] }
];
atualizarSaldos(contas);
console.log("Saldos atualizados:");// exibe os saldos atualizados
contas.forEach(conta => {
    console.log(`Conta ${conta.numero}: R$ ${conta.saldo.toFixed(2)}`);
});