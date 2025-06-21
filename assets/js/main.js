const data = new Date();
const h1 = document.querySelector('.container h1');

function adicionarDiaSemana(diaSemana) {
    let diaSemanaText;
    switch (diaSemana) {
        case 0:
            diaSemanaText = "Domingo"
            break
        case 1:
            diaSemanaText = "Segunda-feira"
            break
        case 2:
            diaSemanaText = "Terça-feira"
            break
        case 3:
            diaSemanaText = "Quarta-feira"
            break
        case 4:
            diaSemanaText = "Quinta-feira"
            break
        case 5:
            diaSemanaText = "Sexta-feira"
            break
        case 6:
            diaSemanaText = "Sábado"
            break
        default:
            diaSemanaText = ""
    };
    return diaSemanaText;
};

function adicionarMes(mes) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    return meses[mes];
};


function adicionarZeroAEsquerda(valor) {
    if (valor < 10) {
        return `0${valor}`;
    } else {
        return `${valor}`
    }
};

function criaData(data) {
    const diaSemanaText = adicionarDiaSemana(data.getDay());
    const dia = data.getDate();
    const mes = adicionarMes(data.getMonth());
    const ano = data.getFullYear();
    const hora = adicionarZeroAEsquerda(data.getHours());
    const minutos = adicionarZeroAEsquerda(data.getMinutes());

    return `${diaSemanaText}, ${dia} de ${mes} de ${ano}, ${hora}:${minutos}`;
};

h1.innerHTML = criaData(data);
