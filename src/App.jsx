import Hero from './components/Hero';
// ❌ BORRÁ o comentá esta línea:
// import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="relative">
      <Hero />
      {/* ❌ Comentá o eliminá esta línea también: */}
      {/* <VideoGallery /> */}
    </div>
  );
}

export default App;
