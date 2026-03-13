import { Zap, Lightbulb, Cpu, Wrench, Cable, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Material Eléctrico",
    description: "Cables, interruptores, enchufes, cuadros eléctricos y todo lo necesario para instalaciones eléctricas.",
  },
  {
    icon: Lightbulb,
    title: "Iluminación",
    description: "LED, luminarias industriales y residenciales, lámparas de alta eficiencia y sistemas de iluminación inteligente.",
  },
  {
    icon: Cpu,
    title: "Automatización",
    description: "PLCs, variadores de frecuencia, sensores, HMIs y soluciones de control industrial avanzado.",
  },
  {
    icon: Cable,
    title: "Cableado Estructurado",
    description: "Infraestructura de red, fibra óptica, racks y accesorios para telecomunicaciones.",
  },
  {
    icon: Wrench,
    title: "Asesoría Técnica",
    description: "Soporte especializado para seleccionar los materiales adecuados para cada proyecto.",
  },
  {
    icon: BarChart3,
    title: "Proyectos a Medida",
    description: "Diseño y planificación de sistemas eléctricos completos para industria y construcción.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestros servicios</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Soluciones eléctricas <span className="text-primary">integrales</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Todo lo que necesitas para tus proyectos eléctricos en un solo lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/40 hover:border-glow"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
