import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PastProjects from "@/components/pastprojects";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar/>
      <main className="">
        <Hero/>
        <PastProjects/>
      </main>
    </div>
  );
}
