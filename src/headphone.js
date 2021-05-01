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
}

Headphone.all = [];