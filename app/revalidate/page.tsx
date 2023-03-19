const URL = "http://localhost:3000/api/time";

export default async function TestPage() {
  const data1 = await (await fetch(URL, { next: { revalidate: 10 } })).json();
  const data2 = await (await fetch(URL, { next: { revalidate: 30 } })).json();

  return (
    <div>
      <h1>Test Page</h1>

      <p>data1: {data1.time}</p>
      <p>data2: {data2.time}</p>
    </div>
  );
}
