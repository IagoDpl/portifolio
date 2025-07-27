import type { Route } from "./+types/home";
import Middle from "../components/middle/middle";
import TopBar from "~/components/topBar/topBar";
import LeftSide from "~/components/leftSide/leftSide";
import Projects from "~/components/projects/projects"; // Import the new Projects component

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meu Portifolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="main-content-area"> {/* Add a wrapper for layout */}
        <LeftSide />
        <Middle />
      </div>
      <Projects /> {/* Add the Projects component */}
    </div>
  );
}