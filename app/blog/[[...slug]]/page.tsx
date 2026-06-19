import Link from "next/link";
import PageLayout from "../../_components/PageLayout";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  return (
    <PageLayout
      title={slug ? `Blog / ${slug.join(" / ")}` : "Blog"}
      description={
        slug
          ? `Viewing blog category: ${slug.join(" > ")}`
          : "Optional catch-all route demo"
      }
    >
      <div className="space-y-4">
        {slug ? (
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Blog Path Segments
            </p>
            <ul className="space-y-1">
              {slug.map((segment, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-600">
                    {i + 1}
                  </span>
                  <code className="rounded bg-gray-200 px-2 py-0.5 text-sm">
                    {segment}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-600">
              This is an optional catch-all route. Try visiting:
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                /blog
              </Link>
              <Link
                href="/blog/nextjs"
                className="rounded-lg bg-purple-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-purple-700"
              >
                /blog/nextjs
              </Link>
              <Link
                href="/blog/nextjs/routing"
                className="rounded-lg bg-pink-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-pink-700"
              >
                /blog/nextjs/routing
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
