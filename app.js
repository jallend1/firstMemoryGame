const cardArray = [
    {
        name: 'diamondking',
        image: 'images/diamondking.png'
    },
    {
        name: 'diamondking',
        image: 'images/diamondking.png'
    },
    {
        name: 'diamondqueen',
        image: 'images/diamondqueen.png'
    },
    {
        name: 'diamondqueen',
        image: 'images/diamondqueen.png'
    },
    {
        name: 'heartking',
        image: 'images/heartking.png'
    },
    {
        name: 'heartking',
        image: 'images/heartking.png'
    },
    {
        name: 'heartqueen',
        image: 'images/heartqueen.png'
    },
    {
        name: 'heartqueen',
        image: 'images/heartqueen.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const cardsChosen = [];
const cardsChosenId = [];
const cardsWon = [];
const resultDisplay = document.querySelector('#result');

function checkForMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        console.log('Match!');
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', 'images/back.png');
        cards[optionTwoId].setAttribute('src', 'images/back.png');
    }
    cardsChosen.length = 0;
    cardsChosenId.length = 0;
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2){
        resultDisplay.textContent = 'Nailed it!';
    }
}

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/back.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();