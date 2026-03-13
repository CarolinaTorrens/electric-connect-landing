import { ArrowRight, Shield, Truck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-new.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Suministros eléctricos industriales" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Líderes en suministros eléctricos
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Energía y <span className="text-glow text-primary">soluciones</span> para tu industria
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Suministros eléctricos, automatización industrial e iluminación profesional. 
            Más de 15 años equipando proyectos con calidad y confianza.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contacto">
                Solicitar cotización <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#productos">Ver catálogo</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">Garantía certificada</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">Envío a todo el país</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">Soporte técnico 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
