class CategoryApi{
    static endPoint = "http://127.0.0.1:3000/api/v1/categories"
    static getCategories(){
        fetch(CategoryApi.endPoint)
        .then(res => res.json())
        .then(json => {
            const filterDropdown = document.querySelector("#filtered-category")
            filterDropdown.innerHTML += `<option value="none" selected>No filter</option>`
          json.data.forEach(category => {
              const catName = category.attributes.name
              const catID = category.id
              const dropdown = document.querySelector("#categories")
              dropdown.innerHTML += `<option value="${catID}">${catName}</option>`
              filterDropdown.innerHTML += `<option value="${catID}">${catName}</option>`
        })
    })
    .catch(err => console.log(err))
    }

}
