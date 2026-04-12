import { productInterface } from './../../../interfaces/product.interface';

export interface CartRes {

    status: string,
    message: string,
    numOfCartItems: number,
    cartId: string,
    data: {
        _id: string,
        cartOwner: string,
        products:ProductType [],
        totalCartPrice: number
    }

}

export interface ProductType{
    product : productInterface,
    count :number,
    price:number,
    _id:string
}