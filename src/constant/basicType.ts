export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: [string];
  reviews: [
    {
      rating: number;
      comment: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
}
