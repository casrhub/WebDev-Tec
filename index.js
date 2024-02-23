// function miFuncion(){
//     const OpenAiEndpoint = "https://api.openai.com/v1/chat/completions";
//     const opciones = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json','Authorization': 'Bearer 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' },
//         body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: [{"role": "user", "content": "Say two in spanish!"}] })
//     };
//     fetch(OpenAiEndpoint,opciones).then(
//         function(response){
//             // pelamos la mandarina (procesamos JSON)
//             return response.json();
//         }
//     ).then (
//         // Entregamos la mandarina pelada 
//         function (j){
//             console.log(j.choices[0].message.content)
//         }
//     )
// }
 



function useSpaceXandOpenAI(){
    const rocketId = document.getElementById('rocketIdInput').value;
    const apiUrl = `https://api.spacexdata.com/v4/rockets/${rocketId}`;
    axios.get(apiUrl)
  .then(response => {
    // Process the data received from the SpaceX API
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

}




