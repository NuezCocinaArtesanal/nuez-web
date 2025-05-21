function App() {
  return (
    <div className="h-screen bg-amber-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-semibold text-stone-800 tracking-tight">
        Brownie del Día
      </h1>
      <p className="mt-4 text-stone-600 text-lg sm:text-xl max-w-md">
        Horneamos una sola tanda por día.<br />Cuando se venden todos, cerramos Nuez por hoy.
      </p>
      <button className="mt-8 px-6 py-3 bg-stone-800 text-white rounded-2xl text-lg shadow-md hover:bg-stone-700 transition">
        Pedir ahora
      </button>
    </div>
  );
}

export default App;
