// Each product needs a real `shopifyVariantId` before checkout will work —
// see the comment at the top of lib/shopify.js for where to find it in your
// Shopify admin. The placeholders below are NOT real IDs.

export const products = [
  {
    slug: 'contrast-stitch-hoodie',
    name: 'CONTRAST STITCH HOODIE',
    price: 128,
    category: 'hoodie',
    tag: 'NEW',
    icon: 'hoodie',
    blurb: 'Heavyweight fleece with raised contrast-stitch seams.',
    description:
      'A heavyweight fleece hoodie built around raised contrast-stitch seaming across the chest and sleeves, finished with the script Euphorics chest print. Boxy, dropped-shoulder fit with a garment-washed feel.',
    material: '80% cotton, 20% polyester fleece',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000001',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/contrast-stitch-hoodie/black-front.webp',
          '/products/contrast-stitch-hoodie/black-back.webp',
        ],
      },
      {
        name: 'Grey',
        swatch: '#8a8d91',
        images: [
          '/products/contrast-stitch-hoodie/grey-front.webp',
          '/products/contrast-stitch-hoodie/grey-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'contrast-stitch-shirt',
    name: 'CONTRAST STITCH SHIRT',
    price: 58,
    category: 'tee',
    tag: 'NEW',
    icon: 'tee',
    blurb: 'Contrast-stitch tee with a distressed script print.',
    description:
      'Garment-dyed heavyweight cotton tee with raised contrast-stitch seaming and a distressed script logo across the chest. Boxy fit, dropped shoulder, raw-finished collar.',
    material: '100% heavyweight cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000002',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/contrast-stitch-shirt/black-front.webp',
          '/products/contrast-stitch-shirt/black-back.webp',
        ],
      },
      {
        name: 'White',
        swatch: '#f2f2f2',
        images: [
          '/products/contrast-stitch-shirt/white-front.webp',
          '/products/contrast-stitch-shirt/white-back.webp',
        ],
      },
      {
        name: 'Apricot',
        swatch: '#e8a87c',
        images: [
          '/products/contrast-stitch-shirt/apricot-front.webp',
          '/products/contrast-stitch-shirt/apricot-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'raw-edge-long-sleeve',
    name: 'RAW EDGE LONG SLEEVE',
    price: 74,
    category: 'tee',
    tag: 'LIMITED',
    icon: 'tee',
    blurb: 'Raw-cut hems and cuffs on heavyweight cotton.',
    description:
      'Long sleeve tee finished with deliberately raw-cut hems and cuffs on heavyweight cotton. Relaxed fit through the body with a dropped shoulder for an oversized layering look.',
    material: '100% heavyweight cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000003',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/raw-edge-long-sleeve/black-front.webp',
          '/products/raw-edge-long-sleeve/black-back.webp',
        ],
      },
      {
        name: 'White',
        swatch: '#f2f2f2',
        images: [
          '/products/raw-edge-long-sleeve/white-front.webp',
          '/products/raw-edge-long-sleeve/white-back.webp',
        ],
      },
      {
        name: 'Navy',
        swatch: '#2b3350',
        images: [
          '/products/raw-edge-long-sleeve/navy-front.webp',
          '/products/raw-edge-long-sleeve/navy-back.webp',
        ],
      },
      {
        name: 'Apricot',
        swatch: '#e8a87c',
        images: [
          '/products/raw-edge-long-sleeve/apricot-front.webp',
          '/products/raw-edge-long-sleeve/apricot-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'washed-stitched-shirt',
    name: 'WASHED STITCHED SHIRT',
    price: 62,
    category: 'tee',
    tag: '',
    icon: 'tee',
    blurb: 'Acid-washed cotton with visible topstitch detailing.',
    description:
      'Acid-washed heavyweight cotton tee with visible topstitch detailing at the seams for a worn-in, faded look straight out of the bag. Boxy fit — runs roomy.',
    material: '100% cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000004',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/washed-stitched-shirt/black-front.webp',
          '/products/washed-stitched-shirt/black-back.webp',
        ],
      },
      {
        name: 'Grey',
        swatch: '#8a8d91',
        images: [
          '/products/washed-stitched-shirt/grey-front.webp',
          '/products/washed-stitched-shirt/grey-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'wockhardt-hoodie',
    name: 'WOCKHARDT HOODIE',
    price: 134,
    category: 'hoodie',
    tag: 'LIMITED',
    icon: 'hoodie',
    blurb: 'Garment-washed fleece with a full graphic back print.',
    description:
      'Garment-washed heavyweight fleece hoodie with a full graphic label print across the back and matching sleeve hit. Cropped, boxy silhouette across a wide colorway range.',
    material: '80% cotton, 20% polyester fleece',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000005',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/wockhardt-hoodie/black-front.webp',
          '/products/wockhardt-hoodie/black-back.webp',
        ],
      },
      {
        name: 'Grey-Blue',
        swatch: '#6b7688',
        images: ['/products/wockhardt-hoodie/grey-blue-back.webp'],
      },
      {
        name: 'Grey-Blue Light',
        swatch: '#9aa5b5',
        images: ['/products/wockhardt-hoodie/grey-blue-light-back.webp'],
      },
      {
        name: 'Grey',
        swatch: '#8a8d91',
        images: ['/products/wockhardt-hoodie/grey-back.webp'],
      },
      {
        name: 'Grey Alt',
        swatch: '#75787c',
        images: ['/products/wockhardt-hoodie/grey-alt-back.webp'],
      },
      {
        name: 'Green',
        swatch: '#3f5b45',
        images: ['/products/wockhardt-hoodie/green-front.webp'],
      },
      {
        name: 'Jade',
        swatch: '#4a7a6d',
        images: ['/products/wockhardt-hoodie/jade-front.webp'],
      },
      {
        name: 'Jade-Blue',
        swatch: '#3f6b73',
        images: ['/products/wockhardt-hoodie/jade-blue-front.webp'],
      },
      {
        name: 'Pink',
        swatch: '#d98ba0',
        images: [
          '/products/wockhardt-hoodie/pink-front.webp',
          '/products/wockhardt-hoodie/pink-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'xanbar-hoodie',
    name: 'XANBAR HOODIE',
    price: 128,
    category: 'hoodie',
    tag: 'NEW',
    icon: 'hoodie',
    blurb: 'Sun-faded fleece with a debossed tile-logo hit.',
    description:
      'Sun-faded, sprayed heavyweight fleece hoodie with a debossed tile-style Euphorics logo across the chest. Cropped, boxy fit with a blown-out hood.',
    material: '80% cotton, 20% polyester fleece',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000006',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/xanbar-hoodie/black-front.webp',
          '/products/xanbar-hoodie/black-back.webp',
        ],
      },
      {
        name: 'Grey',
        swatch: '#8a8d91',
        images: [
          '/products/xanbar-hoodie/grey-front.webp',
          '/products/xanbar-hoodie/grey-back.webp',
        ],
      },
    ],
  },
  {
    slug: 'xanbar-shirt',
    name: 'XANBAR SHIRT',
    price: 58,
    category: 'tee',
    tag: '',
    icon: 'tee',
    blurb: 'Heavyweight tee with a debossed tile-logo hit.',
    description:
      'Heavyweight cotton tee with a debossed tile-style Euphorics logo across the chest. Boxy fit, dropped shoulder, raw-finished collar.',
    material: '100% heavyweight cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shopifyVariantId: '00000000000007',
    colors: [
      {
        name: 'Black',
        swatch: '#1a1a1a',
        images: [
          '/products/xanbar-shirt/black-front.png',
          '/products/xanbar-shirt/black-back.webp',
        ],
      },
    ],
  },
];
