function openAICall( rocketDescription, rocketCost, rocketName, succsesRate, rocketHeight, rocketMass, rocketInWikipedia ){
    const OpenAiEndpoint = "https://api.openai.com/v1/chat/completions";
    const opciones = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': 'Bearer  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' },
        body: JSON.stringify({ 
            model: 'gpt-3.5-turbo', 
            messages: [{"role": "user", "content": `Your roll is to provide insightful infromation 
            for rocket launches at SpaceX please provide concise infromation with the given rocket description: 
            ${rocketDescription}, rocket name: ${rocketName}, rocketCost: ${rocketCost}, rocketHeight: ${rocketHeight},
            rocketMass: ${rocketMass}, finally make a refelection on the succses rate: ${succsesRate} and provide the link to 
            the wikipedia article: ${rocketInWikipedia}
            `}] })
    };
    fetch(OpenAiEndpoint,opciones).then(
        function(response){
            // pelamos la mandarina (procesamos JSON)
            return response.json();
        }
    ).then (
        // Entregamos la mandarina pelada 
        function (j){
            console.log(j.choices[0].message.content)
            document.getElementById('yourElementId').innerHTML = content;
        }
    )
}

 



async function useSpaceXandOpenAI(){
    const rocketId = document.getElementById('rocketIdInput').value;
    const apiUrl = `https://api.spacexdata.com/v4/rockets/${rocketId}`;
    axios.get(apiUrl)
  .then(response => {
    // Process the data received from the SpaceX API
    console.log(response.data)
    const rocketDescription = response.data.description
    const rocketCost = response.data.cost_per_launch
    const rocketName = response.data.rocketName
    const succsesRate = response.data.success_rate_pct
    const rocketHeight = response.data.height.meters
    const rocketMass = response.data.mass.kg
    const rocketInWikipedia = response.data.wikipedia
    console.log(openAICall(rocketDescription, rocketCost, rocketName, succsesRate, rocketHeight, rocketMass,rocketInWikipedia))
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

}


  



