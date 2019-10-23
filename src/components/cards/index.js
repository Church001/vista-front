import { CSRCard, CSRCardLoading } from './csr';
import { ExploreCard, ExploreCardLoading } from './explore';
import { ProductCard, ProductCardLoading } from './product';
import { ServiceCard, ServiceCardLoading } from './service';
import { LocationCard, LocationCardLoading } from './location';

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
  Location: LocationCard,

  // Loading versions of Cards
  ProductLoading: ProductCardLoading,
  ServiceLoading: ServiceCardLoading,
  CSRCardLoading: CSRCardLoading,
  LocationLoading: LocationCardLoading,
  ExploreLoading: ExploreCardLoading
};
