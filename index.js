
function openAICall(rocketDescription, rocketCost, rocketName, successRate, rocketHeight, rocketMass, rocketInWikipedia) {
    const OpenAiEndpoint = "https://api.openai.com/v1/chat/completions";
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' //use your key :(
        },
        body: JSON.stringify({ 
            model: 'gpt-3.5-turbo', 
            messages: [{"role": "user", "content": `Your role is to provide insightful information 
            for rocket launches at SpaceX. Please provide concise information with the given rocket description: 
            ${rocketDescription}, rocket name: ${rocketName}, rocket cost: ${rocketCost}, rocket height: ${rocketHeight},
            rocket mass: ${rocketMass}, finally make a reflection on the success rate: ${successRate} and provide the link to 
            the Wikipedia article: ${rocketInWikipedia}
            `}] 
        })
    };
    fetch(OpenAiEndpoint, opciones).then(
        function(response) {
            return response.json(); // Parse the JSON from the response
        }
    ).then(
        function(data) {
            
            const content = data.choices[0].message.content; 
            document.getElementById('yourElementId').innerHTML = content; 
        }
    ).catch(
        function(error) {
            console.error('Error:', error);
        }
    );
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
