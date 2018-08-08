fetch("https://pokeapi.co/api/v2/pokemon/59/") 
    .then(function(response) {
    const json = response.json();
    return json;
})
// .then(printJson);
    .then(function(myJson) {
    const pokemonName = (myJson.name);
    const div = document.createElement('div');
    document.body.appendChild(div);
    const text = document.createTextNode(pokemonName);
    div.appendChild(text);
   
});

fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
.then(function(response){
    const json = response.json();
    return json;
})
// .then(printJson);
    .then(function(myJson) {
    const quote = (myJson.ID);
    const div = document.createElement('div');
    document.body.appendChild(div);
    const text = document.createTextNode(quote);
    div.appendChild(text);
    console.log(`once the response comes back, global email is ${quote}`);
    });