import { Metadata } from 'next';
import { Scale, AlertTriangle } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Trámites Legales Venezuela',
  description: 'Términos y condiciones de uso de nuestros servicios de gestión documental y apostillas.',
};

export default function TerminosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-slate-200">
            Condiciones de uso de nuestros servicios
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="prose dark:prose-invert max-w-none">
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                <strong>Última actualización:</strong> 5 de mayo de 2026
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Objeto y Aceptación
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Los presentes Términos y Condiciones regulan el uso del sitio web y los servicios ofrecidos por 
                Trámites Legales Venezuela. Al acceder y utilizar nuestros servicios, usted acepta 
                expresamente estas condiciones en su totalidad.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Si no está de acuerdo con estos términos, por favor absténgase de utilizar nuestros servicios.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Descripción de Servicios
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Trámites Legales Venezuela ofrece servicios de:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>Gestión de documentos públicos venezolanos</li>
                <li>Apostilla de documentos ante el SAREN</li>
                <li>Obtención de copias certificadas de actas</li>
                <li>Certificados de antecedentes penales</li>
                <li>Títulos universitarios apostillados</li>
                <li>Asesoría en trámites consulares</li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Importante:</strong> Somos una empresa de gestión documental privada, 
                    no una entidad gubernamental. No tenemos afiliación oficial con el SAREN, 
                    Registro Civil, SAIME ni ningún organismo público venezolano.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Proceso de Contratación
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                3.1. El cliente solicita presupuesto a través del formulario web, WhatsApp o email.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                3.2. Se envía presupuesto detallado con plazos y condiciones específicas.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                3.3. El servicio se considera contratado tras la aceptación del presupuesto y 
                confirmación del pago.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                3.4. Los plazos de entrega comienzan a contar desde la recepción del pago y 
                toda la documentación necesaria.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Precios y Pagos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                4.1. Los precios indicados en el sitio web son orientativos y pueden variar 
                según la complejidad del caso.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                4.2. El pago se realiza por adelantado mediante transferencia bancaria, 
                PayPal o Bizum.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                4.3. Los gastos de envío internacional no están incluidos en el precio base 
                salvo indicación expresa.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                4.4. Los precios no incluyen tasas consulares, gubernamentales ni aranceles 
                de importación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Plazos de Entrega
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                5.1. Los plazos indicados son estimaciones basadas en tiempos normales de 
                procesamiento.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                5.2. No nos hacemos responsables de retrasos causados por:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>Huelgas o paros en organismos públicos venezolanos</li>
                <li>Fallos tecnológicos en sistemas gubernamentales</li>
                <li>Retrasos en servicios postales o de mensajería</li>
                <li>Requerimientos adicionales no previstos inicialmente</li>
                <li>Force majeure (pandemias, desastres naturales, etc.)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Responsabilidad y Garantías
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                6.1. Garantizamos que los documentos apostillados son auténticos y emitidos 
                por las autoridades competentes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                6.2. La validez final de los documentos depende de las autoridades del país 
                destino. Recomendamos verificar requisitos específicos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                6.3. No garantizamos la aceptación de documentos por parte de organismos 
                extranjeros, ya que esto depende de sus políticas internas.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Política de Cancelaciones y Reembolsos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                7.1. Si el trámite aún no ha comenzado: reembolso del 100% menos gastos 
                administrativos (10%).
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                7.2. Si el trámite está en proceso: reembolso parcial según avance (máximo 50%).
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                7.3. Si el documento ya fue emitido/apostillado: no hay reembolso posible.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                7.4. No se realizarán reembolsos por cambios en los requisitos del país destino 
                posteriores a la emisión.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Protección de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El tratamiento de datos personales se rige por nuestra Política de Privacidad, 
                disponible en este mismo sitio web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Todo el contenido de este sitio web (textos, imágenes, logos, diseño) es propiedad 
                de Trámites Legales Venezuela y está protegido por derechos de autor. 
                Queda prohibida su reproducción sin autorización expresa.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Estos términos se rigen por la legislación española. Cualquier controversia será 
                sometida a los Juzgados y Tribunales de Madrid, con renuncia expresa a cualquier 
                otro fuero que pudiera corresponder.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Para cualquier consulta sobre estos términos:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Email: contacto@tramiteslegales.com</li>
                <li>WhatsApp: +58 412 123 4567</li>
                <li>Dirección: Servicio 100% online desde Caracas, Venezuela</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
