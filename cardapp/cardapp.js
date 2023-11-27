let baseURL = 'https://deckofcardsapi.com/api/deck';

async function part1() {
    $.getJSON(`${baseURL}/new/draw/`).then(data=> {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
    
  }


    $.getJSON(`${baseURL}/new/draw/`).then(data => {firstCard = data.cards[0];
     return $.getJSON(`${baseURL}/${data.deck_id}/draw/`);
    }).then(data=> {
      let secondCard= data.cards[0];
      [firstCard, secondCard].forEach(function(card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });

    let deckId = null;
    let butn =document.querySelector('#cardbutton');
    let cardArea = document.querySelector('#card-area')
  
    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
      deckId = data.deck_id;
      butn.show();
    });
  
    butn.addEventListener('click', async function () {
      $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`)
      .then(data=> {
        let cardSrc = data.cards[0].image;
        let card = document.createElement("img");
        card.src = cardSrc;
        cardArea.appendChild(card);
        if (data.remaining === 0) butn.remove();
      });

    })
  