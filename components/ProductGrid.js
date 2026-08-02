import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <div className="empty-state">Nothing matches that search — try another term.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
