import Link from 'next/link';
import { 
  Shield, 
  FileText, 
  Award, 
  Briefcase, 
  Globe,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const allServices = [
  {
    icon: FileText,
    title: 'Acta de Nacimiento',
    description: 'Copia certificada con Apostilla de La Haya. Solicítalo desde cualquier país del mundo.',
    href: '/servicios/acta-nacimiento',
    price: 'Desde €80',
    time: '20-30 días',
    badge: 'Más solicitado',
    badgeVariant: 'secondary' as const,
    features: [
      'Copia certificada del Registro Civil',
      'Apostilla de La Haya incluida',
      'Envío internacional',
      'Válido para nacionalidad española'
    ]
  },
  {
    icon: Shield,
    title: 'Antecedentes Penales',
    description: 'Certificado apostillado obligatorio para trámites de residencia y nacionalidad.',
    href: '/servicios/antecedentes-penales',
    price: 'Desde €95',
    time: '20-40 días',
    badge: 'Obligatorio',
    badgeVariant: 'primary' as const,
    features: [
      'Certificado del CICPC',
      'Apostilla ante el MPPRE',
      'Vigencia: 3 meses',
      'Válido para inmigración'
    ]
  },
  {
    icon: Award,
    title: 'Título Universitario',
    description: 'Apostilla para homologación de estudios y ejercer profesiones reguladas.',
    href: '/servicios/titulo-universitario',
    price: 'Desde €120',
    time: '30-45 días',
    badge: 'Homologación',
    badgeVariant: 'success' as const,
    features: [
      'Título original o constancia',
      'Registro en MPPEU verificado',
      'Apostilla ante SAREN',
      'Para convalidación en España'
    ]
  },
  {
    icon: Briefcase,
    title: 'Certificado de Soltería',
    description: 'Para contraer matrimonio o formar pareja de hecho en el exterior.',
    href: '/servicios/carta-solteria',
    price: 'Desde €85',
    time: '20-35 días',
    badge: 'Matrimonio',
    badgeVariant: 'info' as const,
    features: [
      'Constancia del Registro Civil',
      'Vigencia: 6 meses',
      'Apostilla incluida',
      'Para matrimonio en España'
    ]
  },
  {
    icon: Globe,
    title: 'Pasaporte - Renovación',
    description: 'Asesoría completa para renovar tu pasaporte venezolano desde el exterior.',
    href: '/servicios/pasaporte',
    price: 'Desde €60',
    time: 'Variable',
    badge: 'Asesoría',
    badgeVariant: 'warning' as const,
    features: [
      'Gestión de cita consular',
      'Asesoría documental',
      'Seguimiento del trámite',
      'Información actualizada'
    ]
  },
  {
    icon: FileText,
    title: 'Apostilla La Haya',
    description: 'Apostillamos cualquier documento público venezolano para uso internacional.',
    href: '/servicios/apostilla-haya',
    price: 'Desde €70',
    time: '15-30 días',
    badge: 'General',
    badgeVariant: 'gray' as const,
    features: [
      'Cualquier documento público',
      'Gestionado ante SAREN',
      'Válido en 124 países',
      'Digital o físico'
    ]
  }
];

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Gestión profesional de trámites documentales para venezolanos en el exterior. 
            Todos nuestros servicios incluyen apostilla y envío internacional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.map((service) => (
              <Card key={service.title} className="h-full" hover>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  </div>
                  
                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {service.price}
                      </span>
                      <span className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.time}
                      </span>
                    </div>
                    <Link href={service.href}>
                      <Button variant="primary" size="sm">
                        Ver más
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Por qué necesitas la Apostilla de La Haya?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            La Apostilla de La Haya es un sello internacional que certifica la autenticidad de tus 
            documentos venezolanos para que tengan validez legal en España y otros 123 países signatarios 
            del Convenio de La Haya. Sin apostilla, tus documentos no serán reconocidos en el extranjero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar Presupuesto
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
