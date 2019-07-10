console.log(' Request da api github usando o AXIOS');
axios.get('http://api.github.com/users/davidweezing')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });