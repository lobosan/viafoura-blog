import Alert from "../components/alert";

export default function Footer(preview) {
  return (
    <footer className="text-gray-300 text-center py-6 bg-gray-50 mt-14 border-t border-gray-300">
      <Alert preview={preview} />
      <span className="mt-3">Viafoura - Copyright © 2021</span>
    </footer>
  );
}
