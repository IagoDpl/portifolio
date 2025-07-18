import type { Route } from "./+types/home";
import  Middle from "../components/middle/middle";
import TopBar from "~/components/topBar/topBar";
import LeftSide from "~/components/leftSide/leftSide";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meu Portifolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return ( 
  <div>
    <TopBar/>
    <Middle />
    <LeftSide/>
  </div> 
  );
};
