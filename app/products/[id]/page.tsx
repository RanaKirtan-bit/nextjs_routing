import Link from "next/link";
import PageLayout from "../../_components/PageLayout";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageLayout
      title={`Product #${id}`}
      description="Dynamic route product detail"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-6xl">
          📦
        </div>

        <p className="text-gray-600">
          This is a dynamic route page for product ID:{" "}
          <strong className="text-gray-900">{id}</strong>
        </p>

        <Link
          href="/products"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ← Back to Products
        </Link>
      </div>
    </PageLayout>
  );
}
