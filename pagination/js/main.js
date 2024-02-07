let urlCarApi = 'https://api.api-ninjas.com/v1/cars?limit=2&model=camry'

fetch(urlCarApi,{
    headers: {'X-Api-Key': 'xYAt2SDZaIARMuafXHlDNQ==5PM9GDXOTMSqt6pS'},
})
    .then(res => res.json())
    .then(data => console.log(data))
