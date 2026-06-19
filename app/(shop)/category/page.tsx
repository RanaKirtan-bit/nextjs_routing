import PageLayout from "../../_components/PageLayout";

export default function Category() {
  return (
    <PageLayout title="Shop Category" description="Browse products by category">
      <p className="text-gray-600">
        This page is inside a route group <code>(shop)</code> — the URL is{" "}
        <strong>/category</strong> with no <code>/shop</code> prefix.
      </p>
    </PageLayout>
  );
}
