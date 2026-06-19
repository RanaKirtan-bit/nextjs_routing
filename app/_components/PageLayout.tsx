import NavBar from "./NavBar";

export default function PageLayout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="mx-auto max-w-4xl px-4 py-10">
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            {description && (
              <p className="mt-1 text-gray-500">{description}</p>
            )}
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
