// stock is an embedded property

// one object
let product = {
    id: '1',
    name: 'Pen',
    model: 'PX',
    stock: {
        'st': 1,
        'wa': 1
    }
};


console.log(product);
console.log(product.stock)

product.stock.wa = 5;
console.log(product.stock.wa)

// Object destruction
// Declares new variables "id, name..." with a scope
// different than those same named keys from product
// and assigns their values from product's keys
let { id, name, model, stock } = product;

// 1 Pen PX { st: 1, wa: 5 }
console.log(id, name, model, stock)


// multiple objects
let products = [
    {
        id: '1',
        name: 'Pen',
        model: 'PX',
        stock: {
            'st': 1,
            'wa': 1
        }
    }, 
    {
        id: '2',
        name: 'Mouse',
        model: 'Vertical',
        stock: {
            'st': 10,
            'wa': 20
        }
    },
    {
        id: '3',
        name: 'Keyboard',
        model: 'KB',
        stock: {
            'st': 10,
            'wa': 10
        }
    }
];


for ( p of products) {
    console.log (p)
}