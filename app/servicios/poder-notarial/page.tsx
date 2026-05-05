import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Scale, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  FileText,
  Euro,
  Building2
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Poder Notarial Venezuela desde España - Trámites Legales',
  description: 'Otorga poder notarial para trámites en Venezuela desde España. Vía notario español + apostilla o consulado. Asesoría completa.',
};

export default function PoderesNotarialesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-amber-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Legal</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Poderes Notariales
              </h1>
              <p className="text-xl text-amber-100 max-w-2xl">
                Otorga poder a alguien en Venezuela para que actúe por ti. 
                Dos vías: notario español + apostilla o consulado venezolano.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €150</div>
              <div className="flex items-center text-amber-100 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                1-2 semanas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intro */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué es un Poder Notarial?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Un poder notarial es un documento que te permite designar a una persona (apoderado) 
                  para que realice trámites o actúe en tu nombre en Venezuela, mientras tú resides en el exterior.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Es útil para: vender o comprar bienes inmuebles, gestionar cuentas bancarias, 
                  trámites ante organismos públicos, representación legal en juicios, entre otros.
                </p>
              </Card>

              {/* Dos Vías */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Dos Vías para Otorgar Poder desde España
                </h2>
                
                <div className="space-y-6">
                  {/* Vía 1 */}
                  <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl bg-green-50/50 dark:bg-green-900/10">
                    <div className="flex items-center mb-4">
                      <Badge variant="success" className="mr-3">Recomendada</Badge>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Vía 1: Notario Español + Apostilla
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Firmas el poder ante un notario en España y luego se apostilla. Es la opción más rápida 
                      y económica.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Cita generalmente disponible en 1-3 días
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Apostilla española gratuita
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Válido en Venezuela sin problemas
                      </li>
                    </ul>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="font-semibold text-gray-900 dark:text-white">Costo estimado:</span>
                      <span className="text-green-600 font-bold">€50-200 (notario) + Apostilla gratis</span>
                    </div>
                  </div>

                  {/* Vía 2 */}
                  <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="mr-3">Alternativa</Badge>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Vía 2: Consulado de Venezuela
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Firmas el poder ante un funcionario consular. No requiere apostilla posterior.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                        Validez inmediata en Venezuela
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        Citas pueden demorar semanas o meses
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        Tasas consulares aplican
                      </li>
                    </ul>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="font-semibold text-gray-900 dark:text-white">Costo estimado:</span>
                      <span className="text-blue-600 font-bold">€30-120 (tasas consulares)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="text-amber-800 dark:text-amber-200">
                    <strong>Nuestra recomendación:</strong> La vía del notario español es generalmente 
                    la mejor opción por rapidez y costo. La apostilla española es gratuita y el poder 
                    es plenamente válido en Venezuela.
                  </p>
                </div>
              </Card>

              {/* Tipos de Poder */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tipos de Poder Notarial
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Poder General
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Facultades amplias para actuar en nombre del poderdante. Incluye administración 
                      de bienes, representación legal general, etc.
                    </p>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                      Recomendado para representación general
                    </span>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Poder Especial
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Facultades limitadas a actos específicos: vender un inmueble, gestionar una cuenta 
                      bancaria específica, representar en un juicio particular.
                    </p>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                      Recomendado para trámites específicos
                    </span>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Poder para Pleitos
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Específico para representación en procesos judiciales. El apoderado puede actuar 
                      en tribunales venezolanos.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Requisitos */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Requisitos Generales
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Documento de identidad vigente:</strong> Pasaporte o NIE
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Datos del apoderado:</strong> Nombre completo y cédula de identidad de la persona 
                      que recibirá el poder en Venezuela
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Definir el tipo de poder:</strong> General, especial o para pleitos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Especificar facultades:</strong> Qué trámites podrá realizar el apoderado
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Proceso */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Proceso Paso a Paso (Vía Notario Español)
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Consulta',
                      desc: 'Nos contactas y definimos el tipo de poder que necesitas y las facultades requeridas.'
                    },
                    {
                      step: '2',
                      title: 'Preparación',
                      desc: 'Preparamos el borrador del poder según tus necesidades específicas.'
                    },
                    {
                      step: '3',
                      title: 'Cita Notarial',
                      desc: 'Concertamos cita con notario en España (generalmente disponible en 1-3 días).'
                    },
                    {
                      step: '4',
                      title: 'Firma',
                      desc: 'Acudes al notario, identificas y firmas el poder ante el notario y testigos.'
                    },
                    {
                      step: '5',
                      title: 'Apostilla',
                      desc: 'El notario gestiona la apostilla gratuita (o la solicitas tú en el Colegio de Notarios/TSJ).'
                    },
                    {
                      step: '6',
                      title: 'Envío a Venezuela',
                      desc: 'Envías el poder apostillado a tu apoderado en Venezuela por correo certificado.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* FAQs */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿El poder de notario español es válido en Venezuela?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, completamente válido. La apostilla de La Haya permite que documentos españoles 
                      tengan validez en Venezuela y viceversa.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Cuánto dura un poder notarial?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Generalmente no tienen fecha de vencimiento, pero es recomendable especificar 
                      una duración (ej: 1 año) o indicar &quot;hasta que se revoque&quot;. Algunos registros 
                      venezolanos pueden pedir poderes recientes (menos de 1-2 años).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo revocar el poder?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, el poderdante puede revocar el poder en cualquier momento mediante escritura pública. 
                      Debes notificar al apoderado y a terceros que hayan actuado con el poder.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué pasa si no encuentro cita consular?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      La vía del notario español es perfecta en estos casos. No dependes de la disponibilidad 
                      del consulado y el proceso es más rápido.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Otorga tu Poder
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Te asesoramos para elegir la mejor vía según tu urgencia y presupuesto.
                </p>
                <Link href="/contacto">
                  <Button variant="primary" className="w-full mb-3">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Gratis
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="w-full">
                    Formulario Online
                  </Button>
                </Link>
              </Card>

              {/* Info Cards */}
              <Card>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo Total</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  1-2 semanas (vía notario)<br />
                  Variable (vía consulado)
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Euro className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Inversión</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Notario: €50-200<br />
                  Consulado: €30-120<br />
                  Apostilla: Gratis (ES)
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Vigencia</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Indefinida o según se especifique en el documento.
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Elige bien al Apoderado
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      El apoderado actuará en tu nombre con efectos legales. 
                      Asegúrate de confiar plenamente en esa persona.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
