
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <>
      <h1>Docs Page</h1>
      <p>{JSON.stringify(slug)}</p>
    </>
  );
}