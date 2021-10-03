import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-4 py-5 max-w-full lg:px-8 bg-gray-100">
      <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Home"
              title="Home"
              className="text-lg font-medium tracking-wide transition-colors duration-200 hover:text-red-accent-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="News"
              title="News"
              className="text-lg font-medium tracking-wide transition-colors duration-200 hover:text-red-accent-400"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Sports"
              title="Sports"
              className="text-lg font-medium tracking-wide transition-colors duration-200 hover:text-red-accent-400"
            >
              Sports
            </a>
          </li>
        </ul>
        <span className="text-left text-xl lg:text-center lg:text-3xl font-bold">
          Viafoura Times
        </span>
        <ul className="hidden ml-auto space-x-8 lg:flex">
          <li>
            <div className="viafoura">
              <vf-tray-trigger></vf-tray-trigger>
            </div>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Viafoura"
                      title="Viafoura"
                      className="inline-flex"
                    >
                      <span className="text-xl font-bold text-gray-800">
                        Viafoura Times
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="News"
                        title="News"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Sports"
                        title="Sports"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-accent-400"
                      >
                        Sports
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
