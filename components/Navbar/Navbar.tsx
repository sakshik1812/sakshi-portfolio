import Container from "../ui/Container";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 py-8">
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium tracking-tight">
            Sakshi
          </p>

          <div className="flex items-center gap-12 text-lg">
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  );
}