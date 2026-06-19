import PageLayout from "../_components/PageLayout";

export default function About() {
  return (
    <PageLayout title="About" description="Learn more about this project">
      <p className="text-gray-600 leading-relaxed">
        This is a demo application showcasing Next.js routing features including
        static routes, dynamic routes, catch-all routes, route groups, parallel
        routes, and intercepting routes.
      </p>
    </PageLayout>
  );
}
