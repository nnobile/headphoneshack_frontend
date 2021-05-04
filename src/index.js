document.addEventListener('DOMContentLoaded', () => {
    getCategories()
    getHeadphones()

    const createHeadphoneForm = document.querySelector("#create-headphone-form")

    createHeadphoneForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getHeadphones() {
    HeadphoneApi.getHeadphones()
}

function getCategories() {
    CategoryApi.getCategories()
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
        let newHeadphone = new Headphone(headphoneData, headphoneData.attributes)

            document.querySelector('#headphone-container').innerHTML += 
            newHeadphone.renderHeadphoneCard()
    })
}




