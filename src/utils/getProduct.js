import productData from "../data/products.json"
export function getProduct(id){

    if(productData){
        const product = productData.find((ele)=>{
            return ele.id.toString() === id;
        })
        return product;
    }else{
        return {}
    }

}

