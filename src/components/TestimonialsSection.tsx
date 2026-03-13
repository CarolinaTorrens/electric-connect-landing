import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones, Industrial MX",
    text: "SPRECI ELECTRIC ha sido nuestro proveedor de confianza durante 8 años. La calidad de sus productos y el soporte técnico son excepcionales.",
  },
  {
    name: "Laura Figueroa",
    role: "Directora de Proyectos, Constructora Atlas",
    text: "Siempre encuentro todo lo que necesito para mis proyectos. El servicio de entrega es rápido y los precios son muy competitivos.",
  },
  {
    name: "Roberto Sánchez",
    role: "Ingeniero Eléctrico, AutoTech",
    text: "La asesoría técnica que ofrecen marca la diferencia. Nos ayudaron a optimizar nuestro sistema de automatización y reducir costos significativamente.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonios</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
