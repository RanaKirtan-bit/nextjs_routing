import PageLayout from "../../_components/PageLayout";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <PageLayout title="Documentation" description="Catch-all route demo">
      <div className="space-y-4">
        <p className="text-gray-600">
          This catch-all route captures all path segments after{" "}
          <code>/docs/</code>:
        </p>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">Path Segments</p>

          <ul className="space-y-1">
            {slug.map((segment, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  {i + 1}
                </span>
                <code className="rounded bg-gray-200 px-2 py-0.5 text-sm">
                  {segment}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
