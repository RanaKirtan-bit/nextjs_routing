import Link from "next/link";
import PageLayout from "../_components/PageLayout";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$79.99" },
  { id: 2, name: "Smart Watch", price: "$199.99" },
  { id: 3, name: "USB-C Hub", price: "$34.99" },
  { id: 4, name: "Mechanical Keyboard", price: "$129.99" },
];

export default function Products() {
  return (
    <PageLayout title="Products" description="Browse our product catalog">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-500 hover:shadow-md"
          >
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-blue-600 font-medium">
              {product.price}
            </p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
