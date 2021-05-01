class Headphone {
    constructor (headphone, headphoneAttributes){
       this.id = headphone.id
       this.brand = headphoneAttributes.brand
       this.model = headphoneAttributes.model
       this.description = headphoneAttributes.description
       this.price = headphoneAttributes.price
       this.category = headphoneAttributes.category
       Headphone.all.push(this)
    }

    renderHeadphoneCard() {
         return `
            <div data-id=${this.id}>
                <h3>${this.brand}</h3>
                <p>${this.model}</p>
                <p>${this.description}</p>
                <p>$${this.price}</p>
                <p>${this.category.name}</p>
                <button data-id=${this.id}>Edit</button>
            </div>
            <br><br>`;
    }
    

}

Headphone.all = [];