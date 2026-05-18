import {
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Wine,
  PartyPopper,
  Users,
  Sparkles,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mixBarLogo from "../imports/Marca_dgua_3.png";
import evento1 from "../imports/evento1.jpeg";
import evento2 from "../imports/evento2.jpeg";
import evento3 from "../imports/evento3.jpeg";
import evento4 from "../imports/evento4.jpeg";
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&h=900&fit=crop", // Drinks coloridos
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&h=900&fit=crop", // Bartender preparando drink
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1600&h=900&fit=crop", // Festa/evento
    "https://images.unsplash.com/photo-1560426351-ab681f93d897?w=1600&h=900&fit=crop", // Coquetel elegante
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para meu evento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2B2B2B] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco no WhatsApp
        </span>
      </a>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={mixBarLogo}
                alt="Mix Bar"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#servicos"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#degustacao"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Degustação
              </a>
              <a
                href="#drinks"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Drinks
              </a>
              <a
                href="#galeria"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Galeria
              </a>
              <a
                href="#depoimentos"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* BOTAO DE MENU MOBILE */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* NAVEGACAO MOBILE */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#servicos"
                className="block text-gray-600 hover:text-gray-900"
              >
                Serviços
              </a>
              <a
                href="#degustacao"
                className="block text-gray-600 hover:text-gray-900"
              >
                Degustação
              </a>
              <a
                href="#drinks"
                className="block text-gray-600 hover:text-gray-900"
              >
                Drinks
              </a>
              <a
                href="#galeria"
                className="block text-gray-600 hover:text-gray-900"
              >
                Galeria
              </a>
              <a
                href="#depoimentos"
                className="block text-gray-600 hover:text-gray-900"
              >
                Depoimentos
              </a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* SECAO HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* IMAGENS DE FUNDO DO TOPO/HERO */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
          {/* OVERLAY ACIZENTADO DO HERO */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

          {/* INDICADORES DE SLIDESHOW DO HERO */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-amber-600 w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* LOGO/MARCA - DESKTOP (DIREITA) */}
        <div className="absolute top-8 right-8 z-10 hidden lg:block">
          <img
            src={mixBarLogo}
            alt="Mix Bar Logo"
            className="w-64 opacity-25 hover:opacity-35 transition-opacity drop-shadow-lg"
          />
        </div>

        {/* Logo/Marca - Mobile (centro, menor) */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 lg:hidden">
          <img
            src={mixBarLogo}
            alt="Mix Bar Logo"
            className="w-40 opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Drinks Incríveis para
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Eventos Inesquecíveis
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 drop-shadow">
            Serviço profissional de bartender para festas, casamentos, eventos
            corporativos e celebrações. Transforme seu evento com drinks
            personalizados e um show à parte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white bg-white/10 rounded-full hover:bg-white hover:text-amber-600 transition-colors">
              Acessar Cardápio
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                500+
              </div>
              <div className="text-gray-200 mt-1">Eventos Realizados</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                50+
              </div>
              <div className="text-gray-200 mt-1">Drinks Exclusivos</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                100%
              </div>
              <div className="text-gray-200 mt-1">Satisfação</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-white drop-shadow-lg">
                5★
              </div>
              <div className="text-gray-200 mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto">
              Soluções completas para tornar seu evento especial e memorável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Casamentos",
                description:
                  "Open bar personalizado para o dia mais importante da sua vida, com drinks exclusivos e atendimento impecável.",
                icon: <PartyPopper className="w-10 h-10 text-amber-600" />,
              },
              {
                title: "Festas Privadas",
                description:
                  "Transforme sua festa em casa em um evento inesquecível com bartender profissional e drinks personalizados.",
                icon: <Sparkles className="w-10 h-10 text-amber-600" />,
              },
              {
                title: "Eventos Corporativos",
                description:
                  "Impressione seus clientes e colaboradores com um serviço de bar profissional e sofisticado.",
                icon: <Users className="w-10 h-10 text-amber-600" />,
              },
              {
                title: "Drinks Personalizados",
                description:
                  "Criamos drinks exclusivos baseados nas suas preferências e tema do evento.",
                icon: <Wine className="w-10 h-10 text-amber-600" />,
              },
              {
                title: "Bar Completo",
                description:
                  "Fornecemos todo o equipamento necessário: shakers, copos, utensílios e decoração.",
                icon: "🍸",
              },
              {
                title: "Flair Bartending",
                description:
                  "Show de malabarismo com garrafas para entreter seus convidados com muito estilo.",
                icon: "🎪",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 rounded-2xl border border-[#D3D3D3] hover:shadow-lg hover:border-amber-600 transition-all"
              >
                <div className="mb-4">
                  {typeof service.icon === "string" ? (
                    <span className="text-4xl">{service.icon}</span>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degustação Section */}
      <section
        id="degustacao"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#2B2B2B] mb-6">
                Degustação Presencial
              </h2>
              <p className="text-xl text-[#6B6B6B] mb-8">
                Experimente nossos drinks antes do seu evento! Agende uma
                degustação presencial e conheça pessoalmente nosso trabalho,
                prove os drinks e tire todas as suas dúvidas.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">
                      Agende seu Horário
                    </h3>
                    <p className="text-[#6B6B6B]">
                      Escolha o melhor dia e horário para sua visita
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg flex-shrink-0">
                    <Wine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">
                      Prove os Drinks
                    </h3>
                    <p className="text-[#6B6B6B]">
                      Deguste uma seleção dos nossos drinks mais populares
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">
                      Conheça a Equipe
                    </h3>
                    <p className="text-[#6B6B6B]">
                      Converse com nossos bartenders e tire suas dúvidas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B2B2B] mb-1">
                      Local Conveniente
                    </h3>
                    <p className="text-[#6B6B6B]">
                      Atendimento em nosso espaço ou online via videochamada
                    </p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Degustação Gratuita
              </button>
            </div>

            {/* Right Side - Card with Details */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#D3D3D3]">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mb-4">
                  <Clock className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-2">
                  Como Funciona?
                </h3>
                <p className="text-[#6B6B6B]">Processo simples e rápido</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B2B2B] mb-1">
                      Entre em Contato
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">
                      Envie uma mensagem pelo WhatsApp ou preencha o formulário
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B2B2B] mb-1">
                      Escolha Data e Horário
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">
                      Marcamos um horário que seja conveniente para você
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B2B2B] mb-1">
                      Deguste e Aprove
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">
                      Prove os drinks, escolha seu cardápio personalizado e
                      feche seu evento
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <p className="text-sm text-[#6B6B6B] text-center">
                  <strong className="text-[#2B2B2B]">
                    Degustação 100% gratuita
                  </strong>{" "}
                  para eventos confirmados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Menu Section */}
      <section id="drinks" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2B2B2B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cardápio de Drinks
            </h2>
            <p className="text-xl text-gray-300">
              Alguns dos nossos drinks mais populares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Clássicos",
                drinks: [
                  "Caipirinha",
                  "Mojito",
                  "Margarita",
                  "Gin Tônica",
                  "Cosmopolitan",
                  "Old Fashioned",
                ],
              },
              {
                name: "Tropicais",
                drinks: [
                  "Piña Colada",
                  "Mai Tai",
                  "Blue Hawaiian",
                  "Sex on the Beach",
                  "Daiquiri",
                  "Batida de Coco",
                ],
              },
              {
                name: "Premium",
                drinks: [
                  "Negroni",
                  "Manhattan",
                  "Aperol Spritz",
                  "Whisky Sour",
                  "French 75",
                  "Espresso Martini",
                ],
                popular: true,
              },
              {
                name: "Autorais",
                drinks: [
                  "Criações exclusivas",
                  "Drinks temáticos",
                  "Receitas personalizadas",
                  "Assinatura do evento",
                  "Sabores regionais",
                  "Combinações únicas",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl border-2 ${
                  category.popular
                    ? "border-amber-600 relative"
                    : "border-[#D3D3D3]"
                } hover:shadow-xl transition-shadow`}
              >
                {category.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm rounded-full">
                    Mais Pedido
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#2B2B2B] mb-6">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.drinks.map((drink, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B6B6B]">{drink}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              *Todos os pacotes incluem bebidas não-alcoólicas, sucos e água
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full hover:opacity-90 transition-opacity">
              Solicitar Cardápio Completo
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              Nossos Eventos
            </h2>
            <p className="text-xl text-[#6B6B6B]">
              Confira alguns momentos especiais que já fizemos parte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Casamento Elegante",
                description: "Open bar completo com drinks autorais",
                image: evento1,
              },
              {
                title: "Festa Tropical",
                description: "Drinks tropicais e decoração temática",
                image: evento2,
              },
              {
                title: "Evento Corporativo",
                description: "Bar premium para 200 pessoas",
                image: evento3,
              },
              {
                title: "Aniversário VIP",
                description: "Show de flair bartending",
                image: evento4,
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-200">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-[#6B6B6B]">
              Depoimentos de eventos que foram um sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana & Carlos",
                role: "Casamento - Março 2026",
                content:
                  "O serviço de bartender da Mix Bar foi perfeito! Os drinks estavam incríveis e nossos convidados não pararam de elogiar. O show de flair bartending foi o destaque da festa!",
                rating: 5,
              },
              {
                name: "Ricardo Mendes",
                role: "Evento Corporativo - TechBrasil",
                content:
                  "Contratamos a Mix Bar para nosso evento de fim de ano com 200 pessoas. Profissionalismo impecável, drinks deliciosos e atendimento de primeira. Super recomendo!",
                rating: 5,
              },
              {
                name: "Mariana Silva",
                role: "Festa de Aniversário",
                content:
                  "Fiz minha festa de 30 anos e contratei a Mix Bar. Foi simplesmente perfeito! Os drinks personalizados com tema da festa ficaram lindos e deliciosos. Superou todas as expectativas!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 rounded-2xl border border-[#D3D3D3] hover:border-amber-600 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-[#6B6B6B] mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-[#2B2B2B]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#9B9B9B]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO COMO FUNCIONA*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-[#6B6B6B]">
              Como funciona nosso processo em 4 etapas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Entre em Contato",
                description:
                  "Envie uma mensagem pelo WhatsApp ou preencha o formulário de orçamento com detalhes do seu evento.",
              },
              {
                step: "02",
                title: "Planejamento",
                description:
                  "Criamos um cardápio personalizado baseado no seu evento, tema e preferências dos convidados.",
              },
              {
                step: "03",
                title: "Confirmação",
                description:
                  "Aprovamos juntos todos os detalhes: horário, número de pessoas, drinks e equipamentos necessários.",
              },
              {
                step: "04",
                title: "Evento Perfeito",
                description:
                  "Nossa equipe chega com antecedência, monta o bar e garante que tudo seja perfeito durante todo o evento.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contato"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-orange-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto Para Seu Próximo Evento?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Entre em contato e solicite um orçamento personalizado. Vamos fazer
            seu evento ser inesquecível!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center">
              WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-amber-600 transition-colors">
              Solicitar Orçamento
            </button>
          </div>
          <div className="mt-8 text-amber-100">
            <p>📧 contatomixbar@gmail.com</p>
            <p className="mt-2">
              {" "}
              📱 (31) 9 9539-4970 (Mateus)
              <br />
              (31) 9 8857-2056 (Lucas)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] text-[#9B9B9B] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wine className="w-6 h-6 text-amber-600" />
                <span className="text-2xl font-bold text-white">Mix Bar</span>
              </div>
              <p className="text-sm">
                Serviço profissional de bartender para eventos, festas e
                celebrações inesquecíveis.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Casamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Festas Privadas
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Eventos Corporativos
                  </a>
                </li>
                <li>
                  <a
                    href="#drinks"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Cardápio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-600 transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#6B6B6B] pt-8 text-sm text-center">
            © 2026 Mix Bar. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
