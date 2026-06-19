import Link from "next/link";
import PageLayout from "../../_components/PageLayout";

export default async function Photo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageLayout title={`Photo ${id}`} description="Viewing a single photo">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-6xl">
          🖼️
        </div>

        <p className="text-gray-600">
          This is the photo page for ID: <strong>{id}</strong>
        </p>

        <Link
          href="/feed"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ← Back to Feed
        </Link>
      </div>
    </PageLayout>
  );
}
