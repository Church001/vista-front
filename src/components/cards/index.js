import { CSRCard } from './csr';
import { ExploreCard } from './explore';
import { ProductCard } from './product';
import { ServiceCard } from './service';

export * from './csr';
export * from './explore';
export * from './product';
export * from './service';

export const Card = {
  CSR: CSRCard,
  Explore: ExploreCard,
  Product: ProductCard,
  Service: ServiceCard
};
