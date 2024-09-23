//16. "Verificar o Status de Entrega de Pedidos"
function verifSttsEntrega(pedidos, idPedido) {
    const pedido = pedidos.find(p => p.id === idPedido);// encontra o pedido pelo ID
    if (pedido) {
        return `O status do pedido ${idPedido} é: ${pedido.status}`;
    } else {
        return `Pedido ${idPedido} não encontrado.`;
    }
}
const pedidos = [
    { id: 1, status: "Em processamento" },
    { id: 2, status: "Enviado" },
    { id: 3, status: "Entregue" },
    { id: 4, status: "Cancelado" }
];
const idPedido = 2;// status de um pedido específico
const resultado = verifSttsEntrega(pedidos, idPedido);
console.log(resultado);