const endPoint = "http://127.0.0.1:3000/api/v1/headphones"

document.addEventListener('DOMContentLoaded', () => {
    getHeadphones()

    const createHeadphoneForm = document.querySelector("#create-headphone-form")

    createHeadphoneForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getHeadphones() {
    fetch(endPoint)
      .then(res => res.json())
      .then(headphones => {
        headphones.data.forEach(headphone => {
          render(headphone)
      })
      //.catch(err => console.log(err))
    })
}

function render(headphone) {
    const headphoneMarkup = `
            <div data-id=${headphone.id}>
            <h3>${headphone.attributes.brand}</h3>
            <p>${headphone.attributes.model}</p>
            <p>${headphone.attributes.description}</p>
            <p>$${headphone.attributes.price}</p>
            <p>${headphone.attributes.category.name}</p>
            <button data-id=${headphone.id}>Edit</button>
            </div>
          <br><br>`;

          document.querySelector('#headphone-container').innerHTML += headphoneMarkup
}

function createFormHandler(e) {
    e.preventDefault()
    const brandInput = document.querySelector('#input-brand').value
    const modelInput = document.querySelector('#input-model').value
    const descriptionInput = document.querySelector('#input-description').value
    const priceInput = document.querySelector('#input-price').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(brandInput, modelInput, descriptionInput, priceInput, categoryId)
}

function postFetch (brand, model, description, price, category_id) {
    const bodyData = {brand, model, description, price, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(headphone => {
        console.log(headphone)
        const headphoneData = headphone.data
        render(headphoneData)
    })
}




