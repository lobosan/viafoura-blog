import Container from "./container";

import Alert from "../components/alert";

export default function Footer(preview) {
  return (
    <footer className="bg-gray-50 mt-14 border-t border-accent-2">
      <Container>
        <div className="py-6 text-center">
          <h3>Viafoura - Copyright © 2021</h3>
          <Alert preview={preview} />
        </div>
      </Container>
    </footer>
  );
}
