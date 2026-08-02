import { notFound } from 'next/navigation';
import { products } from '../../../lib/products';
import ProductDetailClient from './ProductDetailClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Euphorics`,
    description: product.blurb,
  };
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
