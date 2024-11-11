export const Header = () => {
  return <div className="flex items-center justify-center sticky top-3 z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a className="nav-item" href="#" id="home">Home</a>
      <a className="nav-item" href="#" id="projects">Projects</a>
      <a className="nav-item" href="#" id="about">About</a>
      <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#" id="contact">Contact</a>
    </nav>
  </div>;
};
