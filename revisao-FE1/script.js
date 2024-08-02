const depoimento = document.querySelector('.testemunhos-container > p');
const autor = document.querySelector('.testemunhos-container > h4');

const depoimentos = [
    {
        depoimento: 'O acampamento é muito legal!',
        autor: 'Juca'
    },
    {
        depoimento: 'Gostei muito da comida!',
        autor: 'Maria'
    },
    {
        depoimento: 'Tinha muito mosquito!',
        autor: 'Carlos'
    }
]

const imagens = [
    {
        caminho: './img/acampamento1.jpg',
        descricao: 'Acampamento 1'
    },
    {
        caminho: './img/acampamento2.jpg',
        descricao: 'Acampamento 2'
    },
    {
        caminho: './img/acampamento3.jpg',
        descricao: 'Acampamento 4'
    },
    {
        caminho: './img/acampamento4.jpg',
        descricao: 'Acampamento 4'
    },
    {
        caminho: './img/acampamento5.jpg',
        descricao: 'Acampamento 5'
    },
    {
        caminho: './img/acampamento6.jpg',
        descricao: 'Acampamento 6'
    },
    {
        caminho: './img/acampamento7.jpg',
        descricao: 'Acampamento 7'
    },
    {
        caminho: './img/acampamento8.jpg',
        descricao: 'Acampamento 8'
    },
    {
        caminho: './img/acampamento9.jpg',
        descricao: 'Acampamento 9'
    },
    {
        caminho: './img/acampamento10.jpg',
        descricao: 'Acampamento 10'
    },
    {
        caminho: './img/acampamento11.jpg',
        descricao: 'Acampamento 11'
    },
    {
        caminho: './img/acampamento12.jpg',
        descricao: 'Acampamento 12'
    }
]

let index = 0;

atualizarDepoimentos();

function atualizarDepoimentos() {
    depoimento.innerText = depoimentos[index].depoimento;
    autor.innerText = depoimentos[index].autor;
}

const setaEsquerda = document.querySelector('#seta-esquerda');
const setaDireita = document.querySelector('#seta-direita');

setaEsquerda.onclick = (event) => {
    event.preventDefault();
    index = (index + 1) % depoimentos.length;
    atualizarDepoimentos();
};

setaDireita.addEventListener('click', (event) => {
    event.preventDefault();
    index = (index - 1 + depoimentos.length) % depoimentos.length;
    atualizarDepoimentos();
});

// setInterval(atualizarDepoimentos, 20000);

const galeria = document.querySelector('.galeria');

galeria.innerHTML = '<h3>Galeria</h3>';

const containerImages = document.createElement('div');
containerImages.classList.add('container-imagens');
galeria.append(containerImages);

function carregaImagens() {

    for (let i = 0; i < imagens.length; i++) {

        const imagem = document.createElement('img');
        imagem.alt = imagens[i].descricao;
        imagem.src = imagens[i].caminho;
        imagem.classList.add('galeria-imagem');

        imagem.addEventListener('mouseover', (event) =>
            event.target.classList.add('galeria-imagem-acesa')
        );
        imagem.addEventListener('mouseleave', event => {
            event.target.classList.remove('galeria-imagem-acesa');
        })

        containerImages.append(imagem);
    }
}

carregaImagens();

const campos = document.querySelectorAll('.contato-formulario-campo');

campos.forEach(campo => {
    campo.addEventListener('blur', event => {
        localStorage.setItem(event.target.id, event.target.value);
    });
});

campos.forEach(campo => {
    campo.value = localStorage.getItem(campo.id);
})