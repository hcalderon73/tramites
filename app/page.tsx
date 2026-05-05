import Link from 'next/link';
import { 
  Shield, 
  FileText, 
  Clock, 
  Globe, 
  CheckCircle, 
  Award,
  Users,
  ArrowRight,
  Star,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const services = [
  {
    icon: FileText,
    title: 'Acta de Nacimiento',
    description: 'Copia certificada con Apostilla de La Haya. Solicítalo desde cualquier país.',
    href: '/servicios/acta-nacimiento',
    badge: 'Más solicitado',
    badgeVariant: 'secondary' as const
  },
  {
    icon: Shield,
    title: 'Antecedentes Penales',
    description: 'Certificado apostillado para trámites migratorios en el exterior.',
    href: '/servicios/antecedentes-penales',
    badge: 'Obligatorio',
    badgeVariant: 'primary' as const
  },
  {
    icon: Award,
    title: 'Título Universitario',
    description: 'Apostilla para homologación de estudios en el extranjero.',
    href: '/servicios/titulo-universitario',
    badge: 'Homologación',
    badgeVariant: 'success' as const
  },
  {
    icon: FileText,
    title: 'Certificado de Soltería',
    description: 'Para matrimonio en el exterior. Validez 6 meses.',
    href: '/servicios/carta-solteria',
    badge: 'Matrimonio',
    badgeVariant: 'info' as const
  }
];

const features = [
  {
    icon: Globe,
    title: '100% Online',
    description: 'Gestiona tus trámites desde cualquier país sin regresar a Venezuela.'
  },
  {
    icon: Clock,
    title: 'Rápido y Eficiente',
    description: 'Plazos claros: 20-40 días hábiles para la mayoría de documentos.'
  },
  {
    icon: Shield,
    title: '100% Legal',
    description: 'Documentos apostillados ante el SAREN con validez internacional.'
  },
  {
    icon: CheckCircle,
    title: 'Garantía de Entrega',
    description: 'Enviamos a cualquier país del mundo con seguimiento incluido.'
  }
];

const testimonials = [
  {
    name: 'María G.',
    location: 'Madrid, España',
    text: 'Excelente servicio. Obtuve mi acta de nacimiento apostillada en 25 días sin tener que viajar a Venezuela.',
    rating: 5
  },
  {
    name: 'Carlos R.',
    location: 'Buenos Aires, Argentina',
    text: 'Muy profesionales. Me ayudaron con los antecedentes penales para mi residencia.',
    rating: 5
  },
  {
    name: 'Ana P.',
    location: 'Miami, USA',
    text: 'Rápidos y confiables. Mi título universitario apostillado llegó perfecto.',
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="white" className="mb-6">
              🚀 Servicio 100% Online
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trámites Legales para<br />
              <span className="text-blue-200">Venezolanos en el Exterior</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Gestionamos apostillas y documentos desde Venezuela con envío a cualquier país del mundo. 
              Rápido, seguro y 100% online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/servicios">
                <Button variant="white" size="lg">
                  Ver Servicios
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Gratis
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">5000+</div>
                <div className="text-blue-200 text-sm">Trámites Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">30+</div>
                <div className="text-blue-200 text-sm">Países Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">5★</div>
                <div className="text-blue-200 text-sm">Calificación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Nuestros Servicios</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trámites Documentales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Apostillamos tus documentos venezolanos para que tengan validez legal en cualquier país.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card hover className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <Badge variant={service.badgeVariant} size="sm">{service.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      Más información
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/servicios">
              <Button variant="outline" size="lg">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              La mejor opción para venezolanos en el exterior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Proceso simple en 4 pasos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Solicitud', desc: 'Completa el formulario online con tus datos' },
              { step: '2', title: 'Procesamiento', desc: 'Gestionamos tu trámite en Venezuela' },
              { step: '3', title: 'Apostilla', desc: 'Apostillamos tu documento ante el SAREN' },
              { step: '4', title: 'Entrega', desc: 'Recibe tu documento en cualquier país' }
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Más de 5,000 venezolanos confían en nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center">
                  <Users className="w-10 h-10 text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas Apostillar un Documento?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicita tu presupuesto gratis. Respuesta en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button variant="white" size="lg">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Gratis
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Ver Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
