const productsCart = [
    {
        id: 1,
        name: "Uva Crismon",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

function carrinhoDeCompras(array) {



    let body = document.querySelector('body');



    let main = document.createElement('main');

    let h2 = document.createElement('h2');
    h2.innerText = 'Virtual Market';

    let divCabecalho = document.createElement('div');
    divCabecalho.classList.add('cabecalho');

    main.appendChild(h2);
    main.appendChild(divCabecalho);
    body.appendChild(main)

    let pItem = document.createElement('p');
    pItem.innerText = 'Item';

    let pPreco = document.createElement('p');
    pPreco.innerText = 'Preço';

    divCabecalho.appendChild(pItem);
    divCabecalho.appendChild(pPreco);

    let ulItens = document.createElement('ul')
    main.appendChild(ulItens);

    for (i = 0; i < productsCart.length; i++) {
        let liItens = document.createElement('li');
        let item = array[i];


        let pNome = document.createElement('p');
        pNome.innerText = item.name;
        pNome.classList.add('titulo');
        liItens.appendChild(pNome);

        let pPrice = document.createElement('p');
        pPrice.innerText = item.price;
        pPrice.classList.add('preco');
        liItens.appendChild(pPrice);
        


        ulItens.appendChild(liItens);
    }


    let secaoSoma = document.createElement('section');
    secaoSoma.classList.add('final');

    let divSoma = document.createElement('div')
    divSoma.classList.add('total');

    let pTotal = document.createElement('p');
    pTotal.innerText = 'Total'

    
    let soma = 0;
    
    for (i = 0; i<productsCart.length; i++){
        let item = array[i];
        let preco = item.price;

         soma += preco
    
    }
    
    let pValorTotal = document.createElement('p');
    pValorTotal.innerText = `R$ ${soma}`

   divSoma.appendChild(pTotal);
   divSoma.appendChild(pValorTotal);
   secaoSoma.appendChild(divSoma);
   main.appendChild(secaoSoma);


   let botao = document.createElement('button');
   botao.classList.add('botao');
   botao.innerText = 'Finalizar compra';
   secaoSoma.appendChild(botao);

}

carrinhoDeCompras(productsCart);