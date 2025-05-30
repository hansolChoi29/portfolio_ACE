import Footer from "@/components/footer/page";
import HoverSections from "@/components/sections/HoverSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        <div className="-mx-4 md:-mx-8 lg:-mx-16">
          <HoverSections />
        </div>
        <SkillSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
