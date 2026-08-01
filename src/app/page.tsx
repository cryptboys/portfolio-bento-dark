import Background from "@/components/Background";
import BentoCard from "@/components/BentoCard";
import ContactCta from "@/components/ContactCta";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import AboutCard from "@/components/AboutCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsCard from "@/components/SkillsCard";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080A]">
      <Background />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Row 1: Hero + Profile */}
          <BentoCard className="lg:col-span-8">
            <Hero />
          </BentoCard>
          <BentoCard delay={0.05} className="lg:col-span-4">
            <ProfileCard />
          </BentoCard>

          {/* Row 2: About + Skills + Activity */}
          <BentoCard delay={0.1} className="lg:col-span-4">
            <AboutCard />
          </BentoCard>
          <BentoCard delay={0.15} className="lg:col-span-4">
            <SkillsCard />
          </BentoCard>
          <BentoCard delay={0.2} className="lg:col-span-4">
            <ActivityCard />
          </BentoCard>

          {/* Row 3: Experience */}
          <BentoCard delay={0.25} className="lg:col-span-12">
            <ExperienceCard />
          </BentoCard>
        </div>

        {/* Projects section */}
        <div className="mt-4 lg:mt-6">
          <ProjectsGrid />
        </div>

        {/* Contact CTA */}
        <div className="mt-4 lg:mt-6">
          <ContactCta />
        </div>

        <Footer />
      </div>
    </main>
  );
}
