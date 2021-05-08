class HeadphoneApi{
    static endPoint = "http://127.0.0.1:3000/api/v1/headphones"
    static getHeadphones(){
        fetch(HeadphoneApi.endPoint)
        .then(res => res.json())
        .then(headphones => {
          headphones.data.forEach(headphone => {
              let newHeadphone = new Headphone(headphone, headphone.attributes)
              const headphoneCard = document.createElement('div');
              headphoneCard.innerHTML= newHeadphone.renderHeadphoneCard()
              document.querySelector('#headphone-container').prepend(headphoneCard)
        })
      })
    }

}