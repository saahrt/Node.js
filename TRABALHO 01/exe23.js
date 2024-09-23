//23. Determinar o Funcionário com Mais Horas Trabalhadas em uma Semana"
function buscarFuncioMH(funcionarios) {
    let funcioMH = null; // inicializa a variável para o funcionário
    for (let i = 0; i < funcionarios.length; i++) {// percorre através de cada funcionário
        const funcio = funcionarios[i];
        // verifica se é o primeiro funcionário ou se o atual trabalhou mais horas
        if (!funcioMH || funcio.horasTrab > funcioMH.horasTrab) {
            funcioMH = funcio; // atualiza o funcionário com mais horas
        }
    }
    return funcioMH; // retorna o funcionário com mais horas
}

const funcionarios = [
    { nome: "Carlos", horasTrab: 40 },
    { nome: "Ana", horasTrab: 45 },
    { nome: "Bruno", horasTrab: 38 },
    { nome: "Maria", horasTrab: 50 }
];
const funcionarioPopular = buscarFuncioMH(funcionarios);
console.log(`O funcionário com mais horas trabalhadas é: ${funcionarioPopular.nome} com ${funcionarioPopular.horasTrab} horas.`);