import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section 
      className="relative -mt-[86px] pt-[86px] h-[600px] flex items-center bg-cover bg-center bg-[url('/assets/banner-hero.png')]"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-pink to-accent-teal">
            THE PLATFORM FOR EMERGING DAOS
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Create, buy, and explore DAO raises with real-time insights and beautiful dashboards.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#highlights">
              <Button className="bg-gradient-to-r from-accent-purple to-accent-pink text-white font-bold px-8 py-6 rounded-lg">
                DISCOVER NOW
              </Button>
            </a>
            <a href="#all-projects">
              <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-text-primary font-bold px-8 py-6 rounded-lg">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};