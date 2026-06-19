import Link from "next/link";
import PageLayout from "../_components/PageLayout";

export default function Feed() {
  return (
    <PageLayout title="Feed" description="Browse your photo feed">
      <div className="space-y-4">
        <p className="text-gray-600">Click a photo to view it:</p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[1, 2, 3, 4].map((id) => (
            <Link
              key={id}
              href={`/photo/${id}`}
              className="block rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
            >
              <span className="text-lg font-medium text-gray-800">
                Photo {id}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
