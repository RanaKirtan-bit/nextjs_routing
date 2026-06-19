import NavBar from "../_components/NavBar";

export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="mt-1 text-gray-500">
            Parallel routes — slots rendered side by side
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {children}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {analytics}
          {team}
        </div>
      </main>
    </div>
  );
}
