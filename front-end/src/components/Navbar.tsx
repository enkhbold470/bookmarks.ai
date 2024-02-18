import "@fortawesome/fontawesome-free/css/all.css";
export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center h-16 bg-white shadow-lg">
      <h1 className="text-2xl">Bookmarks.ai</h1>
      <form className="search-container">
        <div className="relative">
          <input
            type="text"
            id="search-bar"
            placeholder="Search"
            className="pl-10"
          />
          <span className="absolute left-0 top-0 flex h-full w-10 pl-2">
            <i className="fas fa-search my-auto"></i>
          </span>
        </div>
      </form>
    </div>
  );
}
