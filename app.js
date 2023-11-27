let favoriteNumber = 5;
let baseURL = "http://numbersapi.com";


$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data=>{ console.log(data)});
;


const favNumbers = [4,10,77];
let data = await $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data)});
 
 
 
    Promise.all(
        Array.from({ length: 4 }, () => {
          return $.getJSON(`${baseURL}/${favNumber}?json`);
        })
      ).then(facts => {
        facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
      });
      