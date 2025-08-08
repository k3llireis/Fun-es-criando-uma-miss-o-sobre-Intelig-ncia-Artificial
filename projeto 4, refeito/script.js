const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que há um objeto amaldiçoado escondido em sua escola Jujutsu. O que decide fazer?",
        alternativas: [
            {
                texto: "Avisar seus professores imediatamente.",
                afirmacao: "Mostrou responsabilidade e evitou que a maldição causasse problemas maiores. "
            },
            {
                texto: "Investigar sozinho para provar seu valor.",
                afirmacao: "Demonstrou coragem, mas se colocou em risco ao enfrentar o desconhecido. "
            }
        ]
    },
    {
        enunciado: "Durante o treinamento, Satoru Gojo oferece ensinar uma técnica amaldiçoada poderosa. Ela exige grande esforço. Qual sua escolha?",
        alternativas: [
            {
                texto: "Aceita e se esforça para dominar a técnica.",
                afirmacao: "Sua ambição de se tornar um grande feiticeiro brilha com força. "
            },
            {
                texto: "Prefere aprimorar suas habilidades atuais.",
                afirmacao: "Mostrou maturidade e sabedoria ao respeitar seu próprio ritmo de evolução. "
            }
        ]
    },
    {
        enunciado: "Em uma missão, precisa escolher entre salvar um amigo ou capturar uma maldição de grau especial. O que faz?",
        alternativas: [
            {
                texto: "Salva o amigo, mesmo correndo risco.",
                afirmacao: "Valoriza os laços afetivos acima das conquistas individuais. "
            },
            {
                texto: "Captura a maldição para evitar que cause destruição.",
                afirmacao: "Tomou uma decisão estratégica para o bem maior, mesmo com um sacrifício pessoal. "
            }
        ]
    },
    {
        enunciado: "Yuji Itadori quer saber sua opinião: você acredita que maldições merecem redenção?",
        alternativas: [
            {
                texto: "Sim, todos merecem uma segunda chance.",
                afirmacao: "Acredita na humanidade por trás da escuridão e luta por reabilitação. "
            },
            {
                texto: "Não, algumas são irreversíveis.",
                afirmacao: "Enxerga com firmeza os riscos e acredita na justiça firme contra ameaças. "
            }
        ]
    },
    {
        enunciado: "Megumi te convida para lutar com Panda em uma exibição de habilidades. Qual é sua resposta?",
        alternativas: [
            {
                texto: "Aceita o desafio com entusiasmo.",
                afirmacao: "Está pronto para testar seus limites e mostrar seu potencial. "
            },
            {
                texto: "Recusa educadamente para se preparar melhor.",
                afirmacao: "Prefere evoluir com estratégia e evitar imprudência. "
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu caminho como feiticeiro de Jujutsu:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

