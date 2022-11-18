export type SearchPizzaParams = {
    order: string,
    sortBy: string,
    category: string, 
    search: string, 
    currentPage: string
}

export type Pizza = {
    id: string,
    title: string,
    price: number,
    imageUrl: string, 
    sizes: number[], 
    types: number[]
}
  
export enum Status {
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}
  
interface IPizzasSlice {
    items: Pizza[];
    status: Status
}