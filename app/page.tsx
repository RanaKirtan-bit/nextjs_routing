import Link from "next/link";

export default function Home() {
  const routes = [
    { name: "Static Route", href: "/about" },
    { name: "Dynamic Route", href: "/products/101" },
    { name: "Catch-All Route", href: "/docs/Kirtan/Rana" },
    { name: "Optional Catch-All", href: "/blog" },
    { name: "Optional Catch-All with Param", href: "/blog/nextjs" },
    { name: "Nested Route", href: "/dashboard" },
    { name: "Route Group", href: "/category" },
    { name: "Intercepting Route Demo", href: "/feed" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Next.js Routing Demo
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Explore all major routing features in Next.js App Router
        </p>

        <div className="grid gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="block rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">
                  {route.name}
                </span>

                <span className="text-blue-500 text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}