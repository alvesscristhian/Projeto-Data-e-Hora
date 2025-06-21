# 🗓️ Exibidor de Data e Hora com JavaScript
Este projeto é uma aplicação simples feita com JavaScript puro (Vanilla JS) que exibe a data e hora atuais no formato completo e por extenso, incluindo o dia da semana e o mês em português.

## 🛠️ Tecnologias Utilizadas
HTML5

CSS3 (mínimo, apenas estrutura)

JavaScript (ES6)

## 📁 Estrutura do Projeto

/projeto-data-hora
│
├── index.html
├── style.css
└── script.js
O código JavaScript está diretamente responsável por capturar e formatar a data/hora em tempo real do sistema do usuário.

## 📜 Funcionalidades
Capta a data e hora atual do sistema

Exibe:

Dia da semana (por extenso)

Dia do mês com zero à esquerda (se necessário)

Nome do mês (por extenso)

Ano

Horas e minutos (ambos com zero à esquerda)

## 💡 Como funciona
O JavaScript coleta as informações da data através do objeto Date() e, com o auxílio de funções auxiliares, transforma a data em uma string formatada:

Funções principais:
adicionarDiaSemana(): Converte o número do dia da semana (0–6) para o nome correspondente em português.

adicionarMes(): Transforma o número do mês (0–11) no nome por extenso.

adicionarZeroAEsquerda(): Adiciona um zero à esquerda de valores menores que 10 (como 9 → 09).

criaData(): Junta tudo e retorna uma string com a data formatada.

## 🚀 Como Executar
Clone este repositório:

git clone https://github.com/seu-usuario/projeto-data-hora.git
Abra o arquivo index.html em seu navegador.

Nenhuma dependência ou instalação adicional é necessária!
