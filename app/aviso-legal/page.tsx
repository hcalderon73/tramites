import { Metadata } from 'next';
import { Gavel, Building, Mail, Phone, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Aviso Legal - Trámites Legales Venezuela',
  description: 'Información legal del sitio web. Datos del titular, propiedad intelectual y condiciones de uso.',
};

export default function AvisoLegalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gavel className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviso Legal
          </h1>
          <p className="text-xl text-gray-300">
            Información legal y datos del titular
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="prose dark:prose-invert max-w-none">
            <div className="p-8">
              {/* Datos del Titular */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-blue-600" />
                  Datos del Titular
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Denominación Social</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Trámites Legales Venezuela</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">NIF/CIF</p>
                    <p className="font-semibold text-gray-900 dark:text-white">[Número de Identificación Fiscal]</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Dirección</p>
                      <p className="text-gray-900 dark:text-white">
                        Caracas, Venezuela<br />
                        Código Postal: [Código Postal]
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                      <p className="text-gray-900 dark:text-white">contacto@tramiteslegales.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Teléfono</p>
                      <p className="text-gray-900 dark:text-white">+58 412 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Objeto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El presente aviso legal regula el uso del sitio web www.tramiteslegales.com 
                (en adelante, "el Sitio Web"), del que es titular Trámites Legales Venezuela.
                La navegación por el Sitio Web atribuye la condición de usuario del mismo e 
                implica la aceptación plena y sin reservas de todas las disposiciones incluidas 
                en este Aviso Legal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El Sitio Web, incluyendo a título enunciativo pero no limitativo su programación, 
                edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, 
                logotipos, texto y/o gráficos, son propiedad del titular o, si es el caso, dispone 
                de licencia o autorización expresa por parte de los autores.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Todos los contenidos del Sitio Web se encuentran debidamente protegidos por la normativa 
                de propiedad intelectual e industrial, así como inscritos en los registros públicos 
                correspondientes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Independientemente de la finalidad para la que fueran destinados, la reproducción total 
                o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la 
                autorización escrita previa por parte del titular. Cualquier uso no autorizado previamente 
                será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial 
                del autor.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Condiciones de Uso
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El usuario se compromete a:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>Utilizar el Sitio Web de forma diligente, correcta y lícita.</li>
                <li>No realizar actividades que puedan dañar, inutilizar o sobrecargar el Sitio Web.</li>
                <li>No introducir virus, malware o cualquier otro código malicioso.</li>
                <li>No intentar acceder sin autorización a sistemas informáticos del titular.</li>
                <li>No reproducir, copiar, distribuir o modificar los contenidos sin autorización.</li>
                <li>No suplantar la identidad de otros usuarios o terceros.</li>
                <li>No enviar spam ni comunicaciones no solicitadas.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Exclusión de Garantías y Responsabilidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El titular se exime de cualquier tipo de responsabilidad derivada de la información 
                publicada en su Sitio Web, siempre que esta información haya sido manipulada o introducida 
                por un tercero ajeno al mismo.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El Sitio Web puede ofrecer enlaces a contenidos de otros sitios web. En ningún caso 
                el titular asume responsabilidad por los contenidos de dichos enlaces externos, ni 
                garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, 
                veracidad, validez y constitucionalidad de cualquier material o información contenida 
                en los mismos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El titular no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web 
                y de los servicios. Cuando ello sea razonablemente posible, se advertirán previamente 
                las interrupciones en el funcionamiento del Sitio Web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Política de Privacidad y Protección de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El tratamiento de los datos personales que se recojan a través del Sitio Web se rige 
                por nuestra Política de Privacidad, disponible en el enlace correspondiente de este 
                mismo sitio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Para la resolución de todas las controversias o cuestiones relacionadas con el presente 
                sitio web o de las actividades en él desarrolladas, será de aplicación la legislación 
                española, a la que se someten expresamente las partes, siendo competentes para la 
                resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y 
                Tribunales de Madrid.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Modificaciones
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que 
                considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los 
                contenidos y servicios que se presten a través del mismo, como la forma en la que estos 
                aparezcan presentados o localizados en su web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En caso de cualquier duda sobre estas condiciones legales, puede contactar con nosotros a través de:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-400" />
                    contacto@tramiteslegales.com
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-400" />
                    +58 412 123 4567
                  </li>
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                    <span>Caracas, Venezuela</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  <strong>Última actualización:</strong> 5 de mayo de 2026
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
