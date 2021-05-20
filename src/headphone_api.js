class HeadphoneApi{
    static endPoint = "http://127.0.0.1:3000/api/v1/headphones"
    static getHeadphones(event){
        fetch(HeadphoneApi.endPoint)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          var headphones;
          if(!event || event.target.value === "none"){
            headphones = json.data
          }
          else{
            headphones = json.data.filter(h => h.attributes.category_id === Number(event.target.value))
          }
          console.log("filtered", headphones)
          headphones.forEach(headphone => {
              let newHeadphone = new Headphone(headphone, headphone.attributes)
              const headphoneCard = document.createElement('div');
              headphoneCard.innerHTML= newHeadphone.renderHeadphoneCard()
              document.querySelector('#headphone-container').prepend(headphoneCard)
        })
      })
    }

    static postFetch (brand, model, description, price, category_id) {
      const bodyData = {brand, model, description, price, category_id}
      fetch(HeadphoneApi.endPoint, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
      })
      .then(response => response.json())
      .then(headphone => {
          const headphoneData = headphone.data
          const newHeadphone = new Headphone(headphoneData, headphoneData.attributes)
          const headphoneCard = document.createElement('div');
          headphoneCard.innerHTML= newHeadphone.renderHeadphoneCard()
          document.querySelector('#headphone-container').prepend(headphoneCard)            
      })
      .catch(error => console.log(error))
  }

}