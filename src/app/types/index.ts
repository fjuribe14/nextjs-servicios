export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  clientId: string;
  client: Client;
  images: Image[];
};

export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Image = {
  id: string;
  url: string;
  productId: string;
};
