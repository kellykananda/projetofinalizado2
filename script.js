const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1primeira",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmação: "conectado com a alternativa 1 da pergunta 1",
            },
            {
                texto: "Alternativa 2",
                afirmação: "conectado com a alternativa 2 da pergunta 1",
            }
       
            
        ]
    },
    {
        enunciado: "Pergunta 2aqui",
        alternativas: [
            {
                texto: "Alternativa 2.1",
                afirmação: "conectado com a alternativa 2.1 da pergunta 2"
            },
            {
                texto: "Alternativa 2.2",
                afirmação: "conectado com a alternativa 2.2 da pergunta 2"
            }
          
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}



mostraPergunta();