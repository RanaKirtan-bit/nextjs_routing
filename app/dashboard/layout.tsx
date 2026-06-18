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
    <>
      <h1>Dashboard Layout</h1>

      <div>{children}</div>

      <hr />

      <div>{analytics}</div>

      <hr />

      <div>{team}</div>
    </>
  );
}