const url = "https://pokeapi.co/api/v2/pokemon/ditto"

async function getPokemon(url) {
    const response = await fetch(url);
    if(response.ok){
        console.log(response); 
        const data = await response.json();
        
        console.log(data.name);
        console.log('first');
    }
    else {
        alert('Error', response)
    }
}

getPokemon(url);

console.log('second');