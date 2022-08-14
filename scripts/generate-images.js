const isAdmin = document.location.href.includes('admin');
const src = (isAdmin ? '../' : './');
const articles = [
    {
        title: 'Parque Estadual da Cachoeira da Fumaça',
        images: [
            {
                source: src + 'images/cachoeira_03.jpg',
                title: 'Cachoeira da Fumaça',
                description: 'Entrada Franca'
            },
            {
                source: src + 'images/cachoeira_02.jpg',
            },
            {
                source: src + 'images/cachoeira_01.jpg',
            },
        ],
        informations: [
            'O Parque Estadual da Cachoeira da Fumaça foi criado através do Decreto nº 2.791-ES (24 de agosto de 1984) e complementado através do Decreto nº 4.568-E (21 de setembro de 1990), quando então o Governo do Estado, atendendo uma demanda dos moradores dos municípios de Alegre, Guaçuí e Castelo e de outros Estados da Federação, desapropriou uma área de 27 ha, coberta basicamente de pastagem, mas que continha em seu interior a cachoeira do rio Braço Norte Direito ou Cachoeira da Fumaça, que atraía milhares de visitantes devido à sua grande beleza cênica.',
            'A sua cobertura original é do tipo Floresta Estacional Semidecidual, que, ao longo dos anos, foi sendo recomposta, com plantios de essências nativas/frutíferas. Apesar de suas dimensões implicarem em uma fauna reduzida, observou-se, com o replantio, o retorno de aves e pássaros como siriema, beija-flor, rolinha, bem-te-vi, gavião, jurutí, dentre outros.',
            'O rio Braço Norte Direito além de contribuir com a beleza cênica do local, através da Cachoeira da Fumaça com seus 140 metros de queda, é um afluente do rio Itapemirim, abastecendo vários centros urbanos.',
        ],
        moreInformationsUrl: 'https://iema.es.gov.br/PECF',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29871.639012075284!2d-41.604323!3d-20.630696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd25574c4bf747e27!2sCachoeira%20da%20Fuma%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1660430455402!5m2!1spt-BR!2sbr'
    },
    {
        title: 'Igreja Matriz Nossa Senhora da Penha',
        images: [
            {
                source: src + 'images/igreja_01.jpg',
            },
            {
                source: src + 'images/igreja_02.jpg'
            },
            {
                source: src + 'images/igreja_03.jpg'
            },
        ],
        informations: [
            'A capela Mor de Alegre começou a ser construída em barro e madeira no ano de 1851, por iniciativa dos primeiros exploradores da região. Oficialmente, as terras do patrimônio de Alegre ficaram sobre responsabilidade da igreja com a condição de que esta doaria as terras à Nossa Senhora da Penha. Em 1868 o corpo da igreja foi edificado e a Capela Mor reparada.',
            'Novas ampliações foram realizadas entre 1914 e 1916 e também entre 1953 e 1968. Todas essas reformas resultaram num estilo barroco-gótico. A igreja de Nossa Senhora da Penha possui ainda magníficos vitrais retratando a vida de cristo e pinturas do Indiano Diwali.'
        ],
        moreInformationsUrl: 'https://pt-br.facebook.com/senhoradapenha/',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29845.498917091347!2d-41.532584!3d-20.763462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1df82cb843e47b5f!2sPar%C3%B3quia%20Nossa%20Senhora%20da%20Penha!5e0!3m2!1spt-BR!2sbr!4v1660430659700!5m2!1spt-BR!2sbr'
    },
    {
        title: 'ARIE - Laerth Paiva Gama',
        images: [
            {
                source: src + 'images/arie_01.jpg',
            },
            {
                source: src + 'images/arie_02.jpg'
            },
            {
                source: src + 'images/arie_03.jpg'
            },
        ],
        informations: [
            'Possui um bosque reflorestado e várias nascentes, proporcionando um agradável contato com a natureza.',
            'É um local destinado ao estudo e preservação do meio ambiente, no qual é desenvolvido educação ambiental, produção de mudas nativas, exóticas e muito usado em estudos pelos universitários.'
        ],
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.2912800579024!2d-41.549226!3d-20.767707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda9260208aabe9e1!2sHorto%20Florestal!5e0!3m2!1spt-BR!2sbr!4v1660430988762!5m2!1spt-BR!2sbr'
    },
    {
        title: 'Antiga Estação Ferroviária',
        images: [
            {
                source: src + 'images/estacao_01.jpg',
            },
            {
                source: src + 'images/estacao_02.jpg'
            },
            {
                source: src + 'images/estacao_03.jpg'
            },
        ],
        informations: [
            'A edificação faz parte da história da estrada de ferro que cortava o município de Alegre, transportando passageiros e cargas. Era local de embarque e desembarque, além de ser ponto de encontro de moradores locais.',
            'Traz a inscrição ALEGRE em sua lateral e a cobertura frontal é sustentada por estrutura de ferro, original da construção em torno da década de 1920.'
        ],
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.3235990813469!2d-41.530669!3d-20.765089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90b07e17107a4361!2zRXN0YcOnw6NvIEZlcnJvdmnDoXJpYSBkZSBBbGVncmU!5e0!3m2!1spt-BR!2sbr!4v1660431143460!5m2!1spt-BR!2sbr'
    },
    {
        title: 'IFES',
        images: [
            {
                source: src + 'images/ifes_01.jpg',
            },
            {
                source: src + 'images/ifes_02.jpg'
            },
            {
                source: src + 'images/ifes_03.jpg'
            },
        ],
        informations: [
            'Há programação cultural diversificada e encontro de ex-alunos da época da EAFA, hoje conhecida IFES, que é a união de quatro antigas instituições federais de educação: o Centro Federal de Educação Tecnológica do Espírito Santo (Cefetes), a Escola Agrotécnica Federal de Alegre, a Escola Agrotécnica Federal de Colatina e a Escola Agrotécnica Federal de Santa Teresa.'
        ],
        moreInformationsUrl: 'https://alegre.ifes.edu.br/',
        mapaSource: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14923.008355151642!2d-41.457049000000005!3d-20.76084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f6d50411da14cb2!2sInstituto%20Federal%20do%20Esp%C3%ADrito%20Santo%20-%20Campus%20de%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1660431326377!5m2!1spt-BR!2sbr'
    }
];


const element = document.getElementById('conteudo');
articles.forEach((article, index) => {
    const lugar = document.createElement('article');
    lugar.classList.add('lugar');

    if(index ==0){lugar.classList.add('mt-navbar');}

    const title = document.createElement('h2');
    title.appendChild(document.createTextNode(article.title));
    lugar.appendChild(title);

    const slideShow = document.createElement('div');
    slideShow.classList.add('w3-content');
    slideShow.style.maxWidth = '800px';
    article.images.forEach((image, j) => {
        const slide = document.createElement('div');
        slide.classList.add('w3-display-container');
        slide.classList.add('mySlides-' + (index+1));
        slide.style.display = j==0 ? 'block' : 'none';
        
        const imagem = document.createElement('img');
        imagem.src = image.source;
        slide.appendChild(imagem);
        
        if(!!image.title) {
            const divTitle = document.createElement('div');
            divTitle.classList.add('w3-display-middle');
            divTitle.classList.add('w3-large');
            divTitle.classList.add('img-title');
            divTitle.appendChild(document.createTextNode(image.title));
            slide.appendChild(divTitle);
        }

        if(!!image.description) {
            const divDescription = document.createElement('div');
            divDescription.classList.add('w3-display-bottommiddle');
            divDescription.classList.add('w3-container');
            divDescription.classList.add('w3-medium');
            divDescription.classList.add('img-description');
            divDescription.appendChild(document.createTextNode(image.description));
            slide.appendChild(divDescription);
        }

        slideShow.appendChild(slide);
    });
    lugar.appendChild(slideShow);

    const slideControl = document.createElement('div');
    slideControl.classList.add('w3-center');
    const slidePrev = document.createElement('span');
    slidePrev.classList.add('w3-left');
    slidePrev.onclick = function() { plusDivs('mySlides-'+(index+1),'dots-'+(index+1), -1 );};
    slidePrev.appendChild(document.createTextNode('❮'));
    slideControl.appendChild(slidePrev);

    article.images.forEach((imagem, j) => {
        const dot = document.createElement('span');
        dot.classList.add('w3-badge');
        dot.classList.add('w3-border');
        dot.classList.add('dots-'+(index+1));
        if(j==0) {dot.classList.add('w3-red');}
        dot.onclick = function() {currentDiv('mySlides-'+(index+1), 'dots-'+(index+1), (j+1))};
        slideControl.appendChild(dot);
    });

    const slideNext = document.createElement('span');
    slideNext.classList.add('w3-right');
    slideNext.onclick = function() { plusDivs('mySlides-'+(index+1),'dots-'+(index+1), 1 );};
    slideNext.appendChild(document.createTextNode('❯'));
    slideControl.appendChild(slideNext);
    lugar.appendChild(slideControl);

    const grupoBotoes = document.createElement('div');
    grupoBotoes.classList.add('w3-center');
    grupoBotoes.classList.add('w3-bar');
    const maisInformacoesBotao = document.createElement('button');
    maisInformacoesBotao.classList.add('w3-button');
    maisInformacoesBotao.classList.add('w3-aqua');
    maisInformacoesBotao.classList.add('w3-border');
    maisInformacoesBotao.classList.add('w3-round-large');
    maisInformacoesBotao.onclick = function() {displayModalById('maisSobreLocal'+(index+1), true);}
    maisInformacoesBotao.appendChild(document.createTextNode('Mais sobre este local'));
    grupoBotoes.appendChild(maisInformacoesBotao);

    const localizacaoBotao = document.createElement('button');
    localizacaoBotao.classList.add('w3-button');
    localizacaoBotao.classList.add('w3-aqua');
    localizacaoBotao.classList.add('w3-border');
    localizacaoBotao.classList.add('w3-round-large');
    localizacaoBotao.onclick = function() {displayModalById('modalLocalizacao'+(index+1), true);}
    localizacaoBotao.appendChild(document.createTextNode('Localização'));
    grupoBotoes.appendChild(localizacaoBotao);

    lugar.appendChild(grupoBotoes);
    const modais = document.createElement('div');
    modais.id = 'modaisLocal' + (index+1);

    const maisInformacoesModal = document.createElement('div');
    maisInformacoesModal.id = 'maisSobreLocal' + (index+1);
    maisInformacoesModal.classList.add('w3-modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content');
    
    const modalHeader = document.createElement('header');
    modalHeader.classList.add('w3-container');
    modalHeader.classList.add('w3-teal');
    
    const modalCloseButton = document.createElement('span');
    modalCloseButton.classList.add('w3-button');
    modalCloseButton.classList.add('w3-display-topright');
    modalCloseButton.onclick = function() {displayModalById(maisInformacoesModal.id, false);}
    modalCloseButton.appendChild(document.createTextNode('X'));
    modalHeader.appendChild(modalCloseButton);
    const modalTitle = document.createElement('h2');
    modalTitle.appendChild(document.createTextNode(article.title));
    modalHeader.appendChild(modalTitle);
    modalContent.appendChild(modalHeader);

    const modalBody = document.createElement('div');
    modalBody.classList.add('w3-container');
    article.informations.forEach( (info) => {
        const infoElement = document.createElement('p');
        infoElement.appendChild(document.createTextNode(info));
        modalBody.appendChild(infoElement);
    } );

    if(!!article.moreInformationsUrl) {
        const moreInformationsUrl = document.createElement('p');
        const infoUrl = document.createElement('a');
        infoUrl.href = article.moreInformationsUrl;
        infoUrl.appendChild(document.createTextNode('Mais informações aqui.'));
        moreInformationsUrl.appendChild(infoUrl);
        modalBody.appendChild(moreInformationsUrl);
    }
    
    modalContent.appendChild(modalBody);

    const modalFooter = document.createElement('footer');
    modalFooter.classList.add('w3-container');
    modalFooter.classList.add('w3-teal');
    modalFooter.classList.add('w3-center');
    modalFooter.classList.add('w3-padding');
    modalFooter.classList.add('w3-button');
    modalFooter.classList.add('w3-block');
    modalFooter.onclick = function() {displayModalById(maisInformacoesModal.id, false);}
    modalFooter.appendChild(document.createTextNode('Ok'));
    modalContent.appendChild(modalFooter);

    maisInformacoesModal.appendChild(modalContent);
    modais.appendChild(maisInformacoesModal);

    const modalLocalizacao = document.createElement('div');
    modalLocalizacao.id = 'modalLocalizacao' + (index+1);
    modalLocalizacao.classList.add('w3-modal');

    const modalLocalizacaoContent = document.createElement('div');
    modalLocalizacaoContent.classList.add('w3-modal-content');

    const modalLocalizacaoHeader = document.createElement('header');
    modalLocalizacaoHeader.classList.add('w3-container');
    modalLocalizacaoHeader.classList.add('w3-teal');

    const modalLocalizacaoClose = document.createElement('span');
    modalLocalizacaoClose.classList.add('w3-button');
    modalLocalizacaoClose.classList.add('w3-display-topright');
    modalLocalizacaoClose.onclick = function() {displayModalById(modalLocalizacao.id, false);}
    modalLocalizacaoClose.appendChild(document.createTextNode('X'));
    modalLocalizacaoHeader.appendChild(modalLocalizacaoClose);
    const modalLocalizacaoTitle = document.createElement('h2');
    modalLocalizacaoTitle.appendChild(document.createTextNode(article.title));
    modalLocalizacaoHeader.appendChild(modalLocalizacaoTitle);
    modalLocalizacaoContent.appendChild(modalLocalizacaoHeader);

    const modalLocalizacaoBoddy = document.createElement('div');
    modalLocalizacaoBoddy.classList.add('w3-container');
    const modalLocalizacaoMapa = document.createElement('iframe');
    modalLocalizacaoMapa.classList.add( 'mapa' );
    modalLocalizacaoMapa.src = article.mapaSource;
    modalLocalizacaoMapa.style.border = '0';
    modalLocalizacaoMapa.setAttribute('loading', 'lazy');
    modalLocalizacaoMapa.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    modalLocalizacaoBoddy.appendChild(modalLocalizacaoMapa);
    modalLocalizacaoContent.appendChild(modalLocalizacaoBoddy);

    const modalLocalizacaoFooter = document.createElement('footer');
    modalLocalizacaoFooter.classList.add('w3-container');
    modalLocalizacaoFooter.classList.add('w3-teal');
    modalLocalizacaoFooter.classList.add('w3-center');
    modalLocalizacaoFooter.classList.add('w3-padding');
    modalLocalizacaoFooter.classList.add('w3-button');
    modalLocalizacaoFooter.classList.add('w3-block');
    modalLocalizacaoFooter.onclick = function() {displayModalById(modalLocalizacao.id, false);}
    modalLocalizacaoFooter.appendChild(document.createTextNode('Ok'));
    modalLocalizacaoContent.appendChild(modalLocalizacaoFooter);

    modalLocalizacao.appendChild(modalLocalizacaoContent);
    modais.appendChild(modalLocalizacao);

    lugar.appendChild(modais);
    element.appendChild(lugar);
});




var slideIndex = 1;
// showDivs(slideIndex);
function plusDivs(slidesName, dotsName, n) {
  showDivs(slidesName, dotsName, slideIndex += n);
}

function currentDiv(slidesName, dotsName, n) {
  showDivs(slidesName, dotsName, slideIndex = n);
}

function showDivs( slidesName, dotsName, n) {
  var i;
  var x = document.getElementsByClassName(slidesName);
  var dots = document.getElementsByClassName(dotsName);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}

function displayModalById(modalId, display) {
    var modal = document.getElementById(modalId);
    modal.style.display = display ? "block" : 'none';
}