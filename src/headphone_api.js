class HeadphoneApi{
    static endPoint = "http://127.0.0.1:3000/api/v1/headphones"
    static getHeadphones(){
        fetch(HeadphoneApi.endPoint)
        .then(res => res.json())
        .then(headphones => {
          headphones.data.forEach(headphone => {
              //debugger
              let newHeadphone = new Headphone(headphone, headphone.attributes)
  
              document.querySelector('#headphone-container').innerHTML += 
              newHeadphone.renderHeadphoneCard()
        })
        //.catch(err => console.log(err))
      })
    }

}