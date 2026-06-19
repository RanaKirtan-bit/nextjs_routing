import Link from "next/link";

export default async function ModalPhoto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-4xl">
            🖼️
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Modal Photo {id}</h2>

          <p className="text-center text-gray-500">
            This is an intercepted route rendering as a modal overlay.
          </p>

          <Link
            href="/feed"
            className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}
