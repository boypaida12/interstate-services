import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PastProjects from "@/components/pastprojects";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar/>
      <main className="">
        <Hero/>
        <PastProjects/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}
