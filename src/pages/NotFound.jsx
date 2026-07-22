import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <main className="pageShell">
      <Reveal as="section" className="notFound">
        <p className="eyebrow">404</p>
        <h1>That page could not be found.</h1>
        <p>The link may be outdated or the page may have moved.</p>

        <Link className="primaryButton" to="/">
          Return home
        </Link>
      </Reveal>
    </main>
  );
}