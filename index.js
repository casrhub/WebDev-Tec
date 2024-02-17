function miFuncion(){
    const endpoint = "https://en.wikipedia.org/w/rest.php/v1/search/title?q=ball&limit=5"
    fetch(endpoint).then(
        function(response){
            // pelamos la mandarina (procesamos JSON)
            return response.json();
        }
    ).then (
        // Entregamos la mandarina pelada 
        function (j){
            console.log(j)
            
        }

    )
}