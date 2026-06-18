
export default async function ModalPhoto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div
      style={{
        padding: 20,
        border: "2px solid black",
      }}
    >
      Modal Photo {id}
    </div>
  );
}