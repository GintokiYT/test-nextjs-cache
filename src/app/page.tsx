const getData = async () => {
  const response = await fetch('https://geor.pro/products/list', { cache: 'no-cache' });
  const data = await response.json();
  return data;
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <h1>Hello</h1>
      <p>{ JSON.stringify(data) }</p>
    </div>
  )
}