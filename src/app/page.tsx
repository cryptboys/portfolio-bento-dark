import Background from "@/components/Background";
import BentoCard from "@/components/BentoCard";
import ContactCta from "@/components/ContactCta";
import ProfileCard from "@/components/ProfileCard";
import HeroCard from "@/components/HeroCard";
import AboutCard from "@/components/AboutCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsCard from "@/components/SkillsCard";
import StatsCard from "@/components/StatsCard";
import TechStackCard from "@/components/TechStackCard";
import Footer from "@/components/Footer";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { AiAvatarMotion } from "@/components/AiAvatarMotion";
import { RagPipeline } from "@/components/RagPipeline";
import { SolPriceCard } from "@/components/SolPriceCard";
import { VoiceCard } from "@/components/VoiceCard";
import { RagChatCard } from "@/components/RagChatCard";
import { CommandPalette } from "@/components/CommandPalette";
import { SmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/data/resume";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <main className="relative min-h-screen bg-background">
      <Background />
      <MouseSpotlight />
      <CommandPalette />
      <SmoothScroll />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 auto-rows-[minmax(120px,auto)]">
          {/* Row 1: Hero (2x) + Profile + Availability */}
          <BentoCard className="lg:col-span-6 row-span-2">
            <HeroCard />
          </BentoCard>
          <BentoCard delay={0.05} className="lg:col-span-3">
            <ProfileCard />
          </BentoCard>
          <BentoCard delay={0.1} className="lg:col-span-3">
            <AboutCard />
          </BentoCard>

          {/* Row 2: Featured projects */}
          <BentoCard delay={0.15} className="lg:col-span-12">
            <p className="mono-label mb-4">Featured Projects</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.title}
                  className={idx === 0 ? "lg:col-span-7" : "lg:col-span-5"}
                >
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    {idx === 0 ? (
                      <div className="flex flex-col gap-3">
                        <AiAvatarMotion />
                        <p className="text-sm leading-relaxed text-zinc-400">{project.blurb}</p>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed text-zinc-400">{project.blurb}</p>
                    )}
                    {project.links && (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.08] transition-colors"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Row 3: TechStack + Experience + DeFi Live */}
          <BentoCard delay={0.3} className="lg:col-span-5">
            <TechStackCard />
          </BentoCard>
          <BentoCard delay={0.35} className="lg:col-span-4">
            <ExperienceCard />
          </BentoCard>
          <BentoCard delay={0.38} className="lg:col-span-3">
            <SolPriceCard />
          </BentoCard>

          {/* Row 4: Interactive playgrounds */}
          <BentoCard delay={0.4} className="lg:col-span-6">
            <RagChatCard />
          </BentoCard>
          <BentoCard delay={0.45} className="lg:col-span-6">
            <VoiceCard />
          </BentoCard>

          {/* Row 5: Remaining projects & Stats */}
          <BentoCard delay={0.48} className="lg:col-span-8">
            <p className="mono-label mb-4">More Projects</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col gap-3 rounded-2xl border border-[#1E1E1E] bg-[#121212] p-5"
                >
                  <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                  {project.title === "RAG SaaS — Multi-tenant Document Q&A" ? (
                    <RagPipeline />
                  ) : (
                    <p className="text-xs leading-relaxed text-zinc-400 line-clamp-3">
                      {project.blurb}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.links && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/[0.08] transition-colors"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </BentoCard>
          <BentoCard delay={0.5} className="lg:col-span-4">
            <StatsCard />
          </BentoCard>

          {/* Row 6: Skills + Contact */}
          <BentoCard delay={0.55} className="lg:col-span-6">
            <SkillsCard />
          </BentoCard>
          <BentoCard delay={0.6} className="lg:col-span-6">
            <ContactCta />
          </BentoCard>
        </div>

        <Footer />
      </div>
    </main>
  );
}