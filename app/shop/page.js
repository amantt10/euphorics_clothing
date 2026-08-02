import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata = {
  title: 'Shop — Euphorics',
  description: 'Browse the full Euphorics archive of hoodies, tees, outerwear and accessories.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="wrap empty-state">Loading archive…</div>}>
      <ShopClient />
    </Suspense>
  );
}
