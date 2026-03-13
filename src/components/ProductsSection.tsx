import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Cables y Conductores",
    count: "500+ productos",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  },
  {
    title: "Tableros y Protecciones",
    count: "300+ productos",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
  },
  {
    title: "Iluminación LED",
    count: "400+ productos",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
  },
  {
    title: "Automatización Industrial",
    count: "200+ productos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Catálogo</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
            Nuestros <span className="text-primary">productos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Miles de productos de las mejores marcas del mercado eléctrico.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="text-sm text-primary">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#contacto">
              Solicitar catálogo completo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
