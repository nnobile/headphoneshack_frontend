const endPoint = "http://127.0.0.1:3000/api/v1/headphones"

document.addEventListener('DOMContentLoaded', () => {
    getHeadphones()
    })

    function getHeadphones(){
        fetch (endPoint)
        .then(response => response.json())
        .then(headphones => {
        console.log(headphones);
        
    })
  }   