document.addEventListener('DOMContentLoaded', () => {
    CategoryApi.getCategories()
    HeadphoneApi.getHeadphones()

    const createHeadphoneForm = document.querySelector("#create-headphone-form")
    const filterDropdown = document.querySelector("#filtered-category")
    filterDropdown.addEventListener("change", HeadphoneApi.getHeadphones)

    createHeadphoneForm.addEventListener("submit", createFormHandler)

})

function createFormHandler(event) {
    event.preventDefault()
    const brandInput = document.querySelector('#input-brand').value
    const modelInput = document.querySelector('#input-model').value
    const descriptionInput = document.querySelector('#input-description').value
    const priceInput = document.querySelector('#input-price').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    
    HeadphoneApi.postFetch(brandInput, modelInput, descriptionInput, priceInput, categoryId)
    document.querySelector('#input-brand').value = "";
    document.querySelector('#input-model').value = "";
    document.querySelector('#input-description').value = "";
    document.querySelector('#input-price').value = "";
}






