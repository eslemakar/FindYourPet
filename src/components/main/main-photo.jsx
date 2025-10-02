const MainPhoto = () => {
  return (
    <div className="relative w-400 h-200  max-w-screen max-h-screen object-cover overflow-hidden">
      <img src="public/photo.jpg" alt="" />

      <span
        className="absolute top-10 left-10 text-7xl font-bold text-[rgb(129,176,252)]
                   drop-shadow-[4px_4px_2px_rgba(0,0,0,0.7)] 
                   shadow-pink-500/70"
      >
        Where's Fluffy?
      </span>
      <h1
        className="font-bold absolute top-[115px] left-60 text-4xl text-gray-900 font-sans drop-shadow-[4px_4px_2px_rgba(0,0,0,0.1)] "
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        FIND YOUR BEST BUDDY
      </h1>
    </div>
  );
};

export default MainPhoto;
