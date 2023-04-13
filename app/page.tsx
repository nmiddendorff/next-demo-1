export default async function Home() {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=America/Chicago"
  );
  const data = await res.json();
  return (
    <div>
      <h1>My page</h1>
      <pre>{JSON.stringify(data.dateTime)}</pre>
    </div>
  );
}
// export const revalidate = 0;
