import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 h-16 z-40 px-4 py-3 max-w-full bg-red-700">
      <div className="relative grid items-center grid-cols-3">
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
            <div className="absolute top-0 left-0 w-72">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold hover:text-red-700">
                    <a href="/" aria-label="Viafoura" title="Viafoura">
                      Viafoura
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200"
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
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/posts/mistakes-tourists-make-on-their-first-trip-abroad"
                        aria-label="LiveComments"
                        title="LiveComments"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-red-700"
                      >
                        LiveComments
                      </a>
                    </li>
                    <li>
                      <a
                        href="/posts/spicy-jalapeno-bacon"
                        aria-label="LiveStories"
                        title="LiveStories"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-red-700"
                      >
                        LiveStories
                      </a>
                    </li>
                    <li>
                      <a
                        href="/posts/unforgettable-trip-to-the-great-wall-in-china"
                        aria-label="LiveChat"
                        title="LiveChat"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-red-700"
                      >
                        LiveChat
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="LiveChat"
                        title="LiveChat"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-red-700"
                      >
                        ConversationStarter
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="LiveChat"
                        title="LiveChat"
                        className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-red-700"
                      >
                        SocialWall
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="text-left text-xl lg:text-center lg:text-3xl font-bold hover:text-red-700">
          <a href="/" aria-label="Viafoura" title="Viafoura">
            <img
              className="mx-auto"
              width="176"
              height="35"
              src="/static/images/white-logo.svg"
              alt="Viafoura"
            />
          </a>
        </div>
        <ul className="text-white ml-auto space-x-8 lg:flex">
          <li>
            <div className="viafoura">
              <vf-tray-trigger></vf-tray-trigger>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
