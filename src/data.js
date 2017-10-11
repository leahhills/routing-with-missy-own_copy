//this is because we arent working with backend or reachin out to api... normally not do this.

const products =[
    {
        id:1,
        name:"Horse",
        price:'1000.00'
    },
    {
        id:2,
        name:"Cat",
        price:'1.00'
    },
    {
        id:3,
        name:"Dog",
        price:'50.00'
    },{
        id:4,
        name:"Cow",
        price:'200.00'
    },{
        id:5,
        name:"Pig",
        price:'10.00'
    }
]

export function getProducts(){
    return products;
}
//make function that will return all this stuff

export function getOne(id){
    // return the object from the array of products that mathches the id parameter
    //filter, foreach, for loop
    
let product = products.filter( e=>{
        return e.id === +id
    })
    return product[0]
}


