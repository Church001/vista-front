import { CSRCard } from './csr';
import { ExploreCard } from './explore';
import { ProductCard } from './product';
import { ServiceCard } from './service';
import { LocationCard } from './location';

export * from './csr';
export * from './explore';
export * from './product';
export * from './service';
export * from './location';

export const Card = {
  CSR: CSRCard,
  Explore: ExploreCard,
  Product: ProductCard,
  Service: ServiceCard,
  Location: LocationCard
};
