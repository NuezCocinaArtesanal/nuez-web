function VideoGallery() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-neutral-100">
      {[1, 2, 3].map((n) => (
        <video
          key={n}
          src={`/videos/${n}.mp4`}
          className="w-full h-[320px] object-cover rounded-xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      ))}
    </section>
  );
}

export default VideoGallery;
