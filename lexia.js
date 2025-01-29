/* JS */
const body = document.querySelector('body');

function exibirIntroducao() {
    const introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');

    const textoIntro = document.createElement('p');
    textoIntro.textContent = 'Para a pessoa mais especial da minha vida ❤';
    textoIntro.classList.add('texto-intro');
    introContainer.appendChild(textoIntro);

    const fotoIntro = document.createElement('img');
    fotoIntro.src = 'sua-foto.jpg';
    fotoIntro.classList.add('foto-intro');
    introContainer.appendChild(fotoIntro);

    body.appendChild(introContainer);

    introContainer.addEventListener('click', criarCoracao);

    setTimeout(() => {
        introContainer.classList.add('fade-out');
        setTimeout(() => {
            introContainer.remove();
            iniciarQuiz();
        }, 1000);
    }, 5000);
}

function criarCoracao(e) {
    const coracao = document.createElement('span');
    coracao.classList.add('coracao');
    coracao.textContent = '❤';
    coracao.style.left = `${e.clientX}px`;
    coracao.style.top = `${e.clientY}px`;
    body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 2000);
}

function criarQuiz() {
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz');

    const perguntas = [
        {
            pergunta: 'Qual é a nossa música favorita?',
            resposta: 'Perfect'
        },
        {
            pergunta: 'Onde nos conhecemos?',
            resposta: 'Praia'
        },
        {
            pergunta: 'Qual é a minha cor favorita?',
            resposta: 'Azul'
        }
    ];

    perguntas.forEach((item, index) => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');

        const perguntaTexto = document.createElement('p');
        perguntaTexto.textContent = item.pergunta;
        perguntaDiv.appendChild(perguntaTexto);

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Digite sua resposta';
        input.dataset.index = index;
        perguntaDiv.appendChild(input);

        const botao = document.createElement('button');
        botao.textContent = 'Responder';
        botao.addEventListener('click', () => verificarResposta(input, item.resposta));
        perguntaDiv.appendChild(botao);

        quizContainer.appendChild(perguntaDiv);
    });

    body.appendChild(quizContainer);
}

function verificarResposta(input, respostaCerta) {
    const mensagem = document.createElement('p');
    mensagem.classList.add('mensagem');

    if (input.value.trim().toLowerCase() === respostaCerta.toLowerCase()) {
        mensagem.textContent = 'Você acertou! ❤';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Tente novamente!';
        mensagem.style.color = 'red';
    }

    input.parentNode.appendChild(mensagem);
    setTimeout(() => mensagem.remove(), 2000);
}

window.onload = () => {
    exibirIntroducao();
};

function iniciarQuiz() {
    criarQuiz();
}
