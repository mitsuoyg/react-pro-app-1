import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  product: Product,
  counter: number,
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element,
  Image: (Props: ProductImageProps) => JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element,
}