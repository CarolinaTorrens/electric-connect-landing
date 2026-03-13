import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            ¿Listo para <span className="text-primary">cotizar</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escríbenos y te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input placeholder="Nombre completo" required className="bg-card" />
              <Input placeholder="Empresa" className="bg-card" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input type="email" placeholder="Correo electrónico" required className="bg-card" />
              <Input type="tel" placeholder="Teléfono" className="bg-card" />
            </div>
            <Textarea placeholder="Describe tu proyecto o los productos que necesitas..." rows={5} required className="bg-card" />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>

          <div className="space-y-8">
            {[
              { icon: MapPin, label: "Dirección", value: "Av. Industrial 1250, Col. Centro, Ciudad de México" },
              { icon: Phone, label: "Teléfono", value: "+52 (55) 1234-5678" },
              { icon: Mail, label: "Email", value: "ventas@ruzzoelectric.com" },
              { icon: Clock, label: "Horario", value: "Lun-Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
