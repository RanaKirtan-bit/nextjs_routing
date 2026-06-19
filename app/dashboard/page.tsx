import Link from "next/link";
import PageLayout from "../_components/PageLayout";

export default function Dashboard() {
  return (
    <PageLayout title="Dashboard" description="Welcome to your dashboard">
      <div className="space-y-4">
        <p className="text-gray-600">
          This page demonstrates parallel routes. The Analytics and Team slots
          are rendered alongside the main content.
        </p>

        <Link
          href="/dashboard/settings"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go to Settings →
        </Link>
      </div>
    </PageLayout>
  );
}
