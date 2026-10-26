export function HelloWorld({ name = 'World' }) {
  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Sovellus pyörii Renderissä.</p>
    </>
  );
}
