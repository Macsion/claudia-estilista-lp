import { useEffect, useRef, useState } from "react";
import { Menu, X, MapPin, Phone, Clock, MessageCircle, Star } from "lucide-react";

/* DESIGN SYSTEM: Noir Elegante Minimalista
   - Contraste dramático: negro absoluto vs. blanco puro
   - Fucsia como acento puntual y dramático
   - Minimalismo radical: menos es más
   - Lujo a través de la simplicidad
*/

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const whatsappLink = (message: string) => {
    const phone = "5491134493593";
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-black">
              <span className="text-white text-xs font-bold text-center leading-tight">
                CE
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold tracking-wider">CLAUDIA ESTILISTA</h1>
              <p className="text-xs text-gray-600">Salón Unisex</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-semibold hover:text-pink-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-semibold hover:text-pink-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm font-semibold hover:text-pink-600 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-semibold hover:text-pink-600 transition-colors"
            >
              Contacto
            </button>
            <a
              href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-pink-600 text-white font-bold text-sm rounded hover:bg-pink-700 transition-colors"
            >
              Reservar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left font-semibold hover:text-pink-600"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left font-semibold hover:text-pink-600"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-left font-semibold hover:text-pink-600"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left font-semibold hover:text-pink-600"
              >
                Contacto
              </button>
              <a
                href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-pink-600 text-white font-bold text-sm rounded text-center"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/hero-salon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center mx-auto mb-8 border-2 border-white">
            <span className="text-white text-xs font-bold text-center leading-tight">
              CLAUDIA<br />ESTILISTA
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider">
            Tu belleza, nuestro arte
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto">
            Peluquería profesional en Tortuguitas · Más de 185 clientes satisfechos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-pink-600 text-white font-bold uppercase tracking-widest hover:bg-pink-700 transition-all duration-400 rounded"
            >
              Reservar Turno
            </a>
            <button
              onClick={() => scrollToSection("servicios")}
              className="px-8 py-4 bg-transparent text-white border-2 border-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-400 rounded"
            >
              Ver Servicios
            </button>
          </div>
          <p className="text-sm font-light">Lunes a Sábados 9:00 - 19:00 hs</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 tracking-wider">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para transformar tu look
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corte y Peinado",
                description: "Cortes modernos y peinados personalizados según tu estilo",
              },
              {
                title: "Coloración y Mechas",
                description: "Colores vibrantes y mechas con técnicas profesionales",
              },
              {
                title: "Tratamientos Capilares",
                description: "Cuidado profundo para cabello saludable y brillante",
              },
              {
                title: "Alisado y Keratina",
                description: "Tratamientos de alisado y keratina de calidad premium",
              },
              {
                title: "Peinados para Eventos",
                description: "Peinados especiales para bodas, fiestas y eventos",
              },
              {
                title: "Asesoramiento de Imagen",
                description: "Consultoría personalizada para encontrar tu mejor look",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                data-animate
                id={`service-${idx}`}
                className={`bg-black text-white p-8 text-center rounded transition-all duration-400 hover:bg-pink-600 transform ${
                  visibleElements.has(`service-${idx}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm font-light">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href={whatsappLink("Hola! Me gustaría consultar disponibilidad de servicios")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-400 rounded inline-block"
            >
              Consultá Disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 tracking-wider">
            Nuestros Trabajos
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Galería de transformaciones realizadas por nuestro equipo profesional
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/hair-red.jpg", alt: "Coloración roja intensa" },
              { src: "/hair-black.jpg", alt: "Cabello negro liso brillante" },
              { src: "/hair-violet.jpg", alt: "Violeta vibrante" },
              { src: "/hair-transformation.jpg", alt: "Antes y después" },
              { src: "/hair-red.jpg", alt: "Coloración roja" },
              { src: "/hair-violet.jpg", alt: "Violeta" },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate
                id={`gallery-${idx}`}
                className={`relative overflow-hidden group cursor-pointer aspect-square rounded transition-all duration-400 ${
                  visibleElements.has(`gallery-${idx}`)
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <p className="text-white font-bold text-center px-4">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              data-animate
              id="about-image"
              className={`transition-all duration-600 ${
                visibleElements.has("about-image")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="/hero-salon.jpg"
                alt="Claudia Estilista"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div
              data-animate
              id="about-text"
              className={`transition-all duration-600 ${
                visibleElements.has("about-text")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wider">
                Sobre Claudia
              </h2>
              <p className="text-lg font-light mb-6 leading-relaxed">
                Con más de 15 años de experiencia, Claudia y su equipo transforman cada visita en una experiencia única de belleza y cuidado personal. Nos especializamos en ofrecer atención personalizada, utilizando productos de calidad premium en un ambiente moderno y acogedor.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">4.2⭐</div>
                  <p className="text-sm font-light">En Google</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">185+</div>
                  <p className="text-sm font-light">Clientes Felices</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">✓</div>
                  <p className="text-sm font-light">Profesionales Certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 tracking-wider">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Testimonios reales de clientes satisfechos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María García",
                text: "Excelente atención brindada por su dueña Claudia, una estilista de las mejores! Muy recomendable.",
                stars: 5,
              },
              {
                name: "Sofía López",
                text: "Por la buena atención, el local agradable y buena música. Definitivamente vuelvo a venir.",
                stars: 5,
              },
              {
                name: "Valentina Rodríguez",
                text: "Profesionales certificados y productos de calidad. Mi cabello nunca se vio mejor!",
                stars: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                data-animate
                id={`testimonial-${idx}`}
                className={`bg-white border border-gray-200 p-8 rounded transition-all duration-400 ${
                  visibleElements.has(`testimonial-${idx}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-pink-600 text-pink-600"
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-light mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location and Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 tracking-wider">
            Ubicación y Contacto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Map */}
            <div
              data-animate
              id="map-section"
              className={`transition-all duration-600 ${
                visibleElements.has("map-section")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8888888888888!2d-58.7333333!3d-34.6166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc0b0b0b0b0b1%3A0xb0b0b0b0b0b0b0b0!2sMoreno%201190%2C%20B1667%20Tortuguitas%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div
              data-animate
              id="contact-info"
              className={`transition-all duration-600 ${
                visibleElements.has("contact-info")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4">
                  <MapPin className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Ubicaciones</h3>
                    <p className="text-gray-700 mb-3">
                      Moreno 1190, B1667 Tortuguitas, Buenos Aires
                    </p>
                    <p className="text-gray-700">
                      Hipólito Bouchard 1416, Grand Bourg
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Teléfono</h3>
                    <p className="text-gray-700 mb-1">
                      <a href="tel:+5491134493593" className="hover:text-pink-600">
                        011 3449-3593 (WhatsApp)
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:+542320621340" className="hover:text-pink-600">
                        02320 621340
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">Horarios</h3>
                    <p className="text-gray-700">Lunes a Sábados: 9:00 - 19:00 hs</p>
                    <p className="text-gray-700">Domingos: Cerrado</p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div>
                  <a
                    href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold uppercase tracking-widest hover:bg-green-600 transition-all duration-400 rounded"
                  >
                    <MessageCircle size={20} />
                    Contactar por WhatsApp
                  </a>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-bold mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/claudiaestilista1190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 font-bold transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/claudiaestilista1190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 font-bold transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wider">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
            Reserva tu turno ahora y descubre por qué más de 185 clientes confían en nosotros
          </p>
          <a
            href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-pink-600 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all duration-400 rounded border-2 border-white"
          >
            Reservar Mi Turno Ahora
          </a>
          <p className="mt-6 font-light">Respondemos en minutos por WhatsApp ❤️</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-white">
              <span className="text-black text-xs font-bold text-center leading-tight">
                CE
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 text-sm">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-pink-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="hover:text-pink-600 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="hover:text-pink-600 transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-pink-600 transition-colors"
              >
                Contacto
              </button>
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com/claudiaestilista1190"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/claudiaestilista1190"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                Facebook
              </a>
            </div>

            <p className="text-xs text-gray-500 text-center">
              © 2025 Claudia Estilista · Tortuguitas, Buenos Aires
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink("Hola! Me gustaría reservar un turno en Claudia Estilista 💇‍♀️")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
