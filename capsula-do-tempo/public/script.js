const form = document.querySelector("#form-capsula");
const lista = document.querySelector("#lista");
const aviso = document.querySelector("#aviso");

let capsulas = [
    {
        id: 1,
        autor: "childah",
        titulo: "para mim em 2030",
        mensagem: "espero ser veterinária",
        abre_Em: "2030-01-01t00:00:00Z",
    },
    {
        id: 2,
        autor: "aluno",
        titulo: "bem-vindos!",
        mensagem: "esta capsula ja foi aberta",
        abre_Em: "2020-01-01t00:00:00Z",
    }
]

function calcularContagem(datafutura) {
    const diferenca = new Date(datafutura) - new Date();
    if (diferenca <= 0) {
        return null;
    }
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    return `${dias} d, ${horas} h, ${minutos} min`;
}
















