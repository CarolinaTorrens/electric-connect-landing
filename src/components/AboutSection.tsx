import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "5,000+", label: "Clientes satisfechos" },
  { value: "10,000+", label: "Productos disponibles" },
  { value: "98%", label: "Satisfacción del cliente" },
];

const values = [
  "Distribuidores autorizados de marcas líderes",
  "Stock permanente de productos esenciales",
  "Precios competitivos para mayoristas",
  "Logística eficiente con cobertura nacional",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre nosotros</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
              Tu socio en <span className="text-primary">suministros eléctricos</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En SPRECI ELECTRIC nos especializamos en ofrecer soluciones eléctricas completas para 
              proyectos industriales, comerciales y residenciales. Contamos con un equipo técnico 
              altamente capacitado para asesorarte en cada etapa de tu proyecto.
            </p>

            <ul className="mt-8 space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-secondary-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-6 text-center border-glow"
              >
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
