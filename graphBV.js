var intervalo = 15;
var papel = "BIDI4";
axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTR
ADAY&symbol=${papel}.SA&interval=${intervalo}min&outputsize=full&apikey=F78PRTVOJJAGR0DU`)

.then(function(response){
    console.log(response.data[`Time Series (${intervalo}min)`]["2019-05-31 09:00:00"]);
})
.catch(function(error){
    console.warn('Erro '+error);
})