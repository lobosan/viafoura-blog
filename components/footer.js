import Container from "./container";

import Alert from "../components/alert";

export default function Footer(preview) {
  return (
    <footer className="bg-gray-50 mt-14 border-t border-accent-2">
      <Container>
        <div className="text-sm text-center py-6">
          <div>Viafoura - Copyright © 2021</div>
          <Alert preview={preview} />
        </div>
      </Container>
    </footer>
  );
}
