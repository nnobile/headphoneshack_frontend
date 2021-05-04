class CategoryApi{
    static endPoint = "http://127.0.0.1:3000/api/v1/headphones"
    static getCategories(){
        fetch(CategoryApi.endPoint)
        .then(res => res.json())
        .then(json => {
            const categories = new Set()
          json.data.forEach(headphone => {
              const cat = headphone.attributes.category
              const c = JSON.stringify({id: cat.id, name: cat.name})
              categories.add(c)
              //debugger
              //let newHeadphone = new Headphone(headphone, headphone.attributes)
  
              //document.querySelector('#headphone-container').innerHTML += 
              //newHeadphone.renderHeadphoneCard()
        })
        const dropdown = document.querySelector("#categories")
        categories.forEach(cat => {
            const c = JSON.parse(cat)
            dropdown.innerHTML += `<option value="${c.id}">${c.name}</option>`
        })
        //.catch(err => console.log(err))
      })
    }

}
