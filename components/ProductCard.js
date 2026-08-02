import Link from 'next/link';
import { iconFor } from './GarmentIcons';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {
  const Icon = iconFor(product.icon);
  const isSoldOut = product.tag === 'SOLD OUT';
  const firstColor = product.colors && product.colors[0];
  const images = (firstColor && firstColor.images) || [];
  const primary = images[0];
  const secondary = images[1];

  return (
    <article id={product.slug} className="product-card chrome-frame">
      <Link href={`/shop/${product.slug}`} className="product-card-link">
        <div className="product-media">
          {product.tag && (
            <span className={`product-tag${isSoldOut ? ' sold' : ''}`}>{product.tag}</span>
          )}
          {primary ? (
            <>
              <img src={primary} alt={product.name} className="product-photo product-photo-front" />
              {secondary && (
                <img src={secondary} alt="" aria-hidden="true" className="product-photo product-photo-back" />
              )}
            </>
          ) : (
            <Icon />
          )}
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-meta">
          <span>{product.blurb}</span>
        </div>
      </Link>
      <div className="product-meta product-meta-bottom">
        <span className="product-price">${product.price}</span>
        <AddToCartButton product={product} disabled={isSoldOut} />
      </div>
    </article>
  );
}
