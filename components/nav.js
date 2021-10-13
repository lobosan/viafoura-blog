import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 max-w-full h-16 px-4 py-3 bg-red-700">
      <div className="grid grid-cols-3 items-center">
        <div className="text-left">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 transition duration-200 rounded"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="text-white w-5" viewBox="0 0 24 24">
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
            <div className="absolute top-3 left-3 w-72">
              <div className="px-4 py-3 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl ml-2 font-bold hover:text-red-700">
                    <a href="/" aria-label="Viafoura" title="Viafoura">
                      Viafoura
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-800" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <div>
                    <a
                      className="block font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                      href="/posts/mistakes-tourists-make-on-their-first-trip-abroad"
                      aria-label="LiveComments"
                      title="LiveComments"
                    >
                      LiveComments
                    </a>
                    <a
                      className="block font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                      href="/posts/spicy-jalapeno-bacon"
                      aria-label="LiveStories"
                      title="LiveStories"
                    >
                      LiveStories
                    </a>
                    <a
                      className="block font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                      href="/posts/unforgettable-trip-to-the-great-wall-in-china"
                      aria-label="LiveChat"
                      title="LiveChat"
                    >
                      LiveChat
                    </a>
                    <a
                      className="block font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                      href="/"
                      aria-label="LiveChat"
                      title="LiveChat"
                    >
                      ConversationStarter
                    </a>
                    <a
                      className="block font-medium px-3 py-2 rounded tracking-wide text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                      href="/"
                      aria-label="LiveChat"
                      title="LiveChat"
                    >
                      SocialWall
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div>
          <a href="/" aria-label="Viafoura" title="Viafoura">
            <img
              className="mx-auto h-8"
              src="/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <div className="viafoura h-10 flex justify-end">
          <vf-tray-trigger />
        </div>
      </div>
    </nav>
  );
}
