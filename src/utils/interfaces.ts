export interface Product {
    name: string,
    brand: string,
    color: string
}

export interface ProductNewFeatures extends Product {
    speed?: "100km/h" 
}

export interface ICart {
    title: string;
    description: string;
    image?: string;
    link?: string;
  }