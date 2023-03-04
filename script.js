let nav = document.querySelector('header nav');
let popup = document.querySelector('.popup-image');
let header = document.querySelector('header');
let body = document.querySelector('body');


function showMenu() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './menu.png'
    } else {
        nav.classList.add('open');
        document.querySelector('.menu-btn img').src = './close.png'
    }
}


function closeMenu() {
    let a = document.querySelectorAll('.underline-hover a')
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './assets/img/menu.png'
    }
}

//insert description    

document.onmouseover = function (element) {
    let description = document.querySelector('.element-description')
    let titleElement = document.querySelector('.skill-element-title');
    if (element.target.classList.contains('html')) {
        titleElement.textContent = "HTML";
        description.textContent = "HTML (HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.";
    }
    else if (element.target.classList.contains('css')) {
        titleElement.textContent = "CSS";
        description.textContent = "CSS é uma linguagem de estilo, também conhecida como folhas de estilo em cascata. É usada para personalização visual de um site. Ou seja, elas servem para otimizar o conteúdo das páginas e permitir uma apresentação mais amigável para o usuário";
    }

    else if (element.target.classList.contains('js')) {
        titleElement.textContent = "JAVASCRIPT";
        description.textContent = "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web. Toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.Você pode apostar que o JavaScript provavelmente está envolvido.";
    }

    else if (element.target.classList.contains('git')) {
        titleElement.textContent = "GIT";
        description.textContent = "Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.";
    }

    else if (element.target.classList.contains('github')) {
        titleElement.textContent = "GITHUB";
        description.textContent = "O GitHub é o maior repositório de dados compartilhado do mundo, com 28 milhões de usuários atualmente. É uma plataforma majoritariamente usada por desenvolvedores, pois permite uma hospedagem prática de código-fonte e arquivos em nuvem. Esses arquivos ficam disponíveis para quem receber permissão, em qualquer lugar do mundo, o que é essencial agora em que o trabalho remoto é o mais comum. ";
    }

    
    else {
        titleElement.textContent = "";
        description.textContent = "*passe o cursor do mouse por cima do card para visualizar a descrição*";
    }
}

//open popup image

document.querySelectorAll('.certified-img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        openModal();
    }
});

function openModal() {
    if (popup.style.display == 'block') {
        header.style.display = 'none';
        body.style.overflow = 'hidden';
    }
    return;
}

function closePopup() {
    document.querySelector('.popup-image').style.display = 'none';
    body.style.overflow = 'auto';
    header.style.display = 'block';
    header.style.display = 'flex';
}