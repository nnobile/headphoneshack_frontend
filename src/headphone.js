class Headphone {
    static all = []
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
                <h3>Brand: ${this.brand}</h3>
                <p>Model: ${this.model}</p>
                <p>Description: ${this.description}</p>
                <p>Price: $${this.price}</p>
                <p>Category: ${this.category.name}</p>
            </div>
            `;
    }
    

}

