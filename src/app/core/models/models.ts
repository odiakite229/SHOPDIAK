export interface Category{
    id : string
    name : string
    description : string
    totalProduct : number
    children : Category[]
    products : Product[]
}

export interface Promo{
    percent : number
    start_date : Date
    end_date : Date
}


export interface Product{
    id : string
    name: string
    quantity : number
    unitPrice :number
    description : string
    defaultImage : Ressource
    images : Ressource[]
    promo : Promo
    category : Category
}

export interface Ressource{
    id : string
    img : string,
    default : boolean
}

export interface Response<T>{
    totalCount : number;
    results : T[]
}