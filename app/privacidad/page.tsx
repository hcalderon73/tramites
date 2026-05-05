import { Metadata } from 'next';
import { Shield, Lock, Eye, UserCheck, FileKey } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Trámites Legales Venezuela',
  description: 'Política de privacidad y protección de datos personales. Cumplimiento con GDPR y LOPDGDD.',
};

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-blue-200">
            Protección de tus datos personales
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

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-blue-600" />
                  Compromiso con tu privacidad
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  En Trámites Legales Venezuela nos tomamos muy en serio la protección de tus datos 
                  personales. Cumplimos con el Reglamento General de Protección de Datos (GDPR) de la UE 
                  y la Ley Orgánica de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD) española.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Responsable del Tratamiento
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Identidad del Responsable:
                </p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Denominación social:</strong> Trámites Legales Venezuela</li>
                  <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
                  <li><strong>Dirección:</strong> Caracas, Venezuela</li>
                  <li><strong>Email:</strong> contacto@tramiteslegales.com</li>
                  <li><strong>Teléfono:</strong> +58 412 123 4567</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Datos que Recopilamos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Podemos recopilar los siguientes datos personales:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                    Datos de Identidad
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nombre y apellidos</li>
                    <li>• Número de identificación (pasaporte, cédula)</li>
                    <li>• Nacionalidad</li>
                    <li>• Fecha y lugar de nacimiento</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-blue-600" />
                    Datos de Contacto
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Dirección postal completa</li>
                    <li>• Dirección de email</li>
                    <li>• Número de teléfono/WhatsApp</li>
                    <li>• País de residencia</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2 flex items-center">
                  <FileKey className="w-5 h-5 mr-2" />
                  Datos de Documentos
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Para la prestación de nuestros servicios, necesitamos copias de documentos oficiales 
                  (actas, títulos, certificados). Estos datos son especialmente sensibles y reciben 
                  tratamiento de máxima seguridad.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Finalidad del Tratamiento
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tratamos tus datos personales para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Gestión de trámites documentales:</strong> Procesar solicitudes de documentos, apostillas y legalizaciones.</li>
                <li><strong>Contacto y comunicación:</strong> Responder consultas, enviar presupuestos y mantener informado al cliente.</li>
                <li><strong>Envío de documentación:</strong> Direcciones postales para entrega de documentos físicos.</li>
                <li><strong>Facturación:</strong> Emisión de facturas y gestión de pagos.</li>
                <li><strong>Cumplimiento legal:</strong> Obligaciones fiscales y administrativas.</li>
                <li><strong>Mejora del servicio:</strong> Análisis estadístico anonimizado.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Base Jurídica del Tratamiento
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La base legal para el tratamiento de tus datos es:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Ejecución de un contrato:</strong> Tratamiento necesario para prestar los servicios contratados.</li>
                <li><strong>Consentimiento explícito:</strong> Para el envío de comunicaciones comerciales (si lo has autorizado).</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> Requisitos fiscales y administrativos.</li>
                <li><strong>Interés legítimo:</strong> Mejora de nuestros servicios y prevención de fraudes.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Conservación de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Tus datos personales se conservarán durante el tiempo necesario para cumplir con la 
                finalidad para la que se recabaron y para determinar las posibles responsabilidades 
                que pudieran derivarse. Generalmente:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Datos de clientes:</strong> 6 años (obligación fiscal).</li>
                <li><strong>Documentación tramitada:</strong> 2 años desde la finalización del servicio.</li>
                <li><strong>Consultas no contratadas:</strong> 1 año.</li>
                <li><strong>Datos de marketing:</strong> Hasta que revoques tu consentimiento.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Destinatarios de los Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tus datos podrán ser comunicados a:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Organismos públicos venezolanos:</strong> SAREN, Registro Civil, etc. (solo los estrictamente necesarios para los trámites).</li>
                <li><strong>Empresas de mensajería:</strong> Para envío de documentación (Correos, DHL, FedEx, etc.).</li>
                <li><strong>Proveedores de servicios tecnológicos:</strong> Hosting, email, almacenamiento en la nube (con acuerdos de confidencialidad).</li>
                <li><strong>Asesores legales y fiscales:</strong> Cuando sea necesario para el cumplimiento de obligaciones.</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-6">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Importante:</strong> No vendemos ni cedemos tus datos personales a terceros 
                  para fines comerciales sin tu consentimiento expreso.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Transferencias Internacionales
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Dado que operamos entre España y Venezuela, tus datos pueden transferirse entre estos países. 
                Garantizamos que cualquier transferencia internacional se realiza con las garantías adecuadas, 
                bien mediante decisiones de adecuación de la Comisión Europea o mediante cláusulas contractuales 
                tipo aprobadas por la Comisión Europea.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Derechos del Interesado
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Como titular de los datos, tienes derecho a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Acceso</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Obtener confirmación sobre si tratamos tus datos y acceder a ellos.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rectificación</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solicitar la corrección de datos inexactos o incompletos.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Supresión</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solicitar la eliminación de tus datos cuando ya no sean necesarios (derecho al olvido).
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Limitación</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Solicitar la limitación del tratamiento en determinadas circunstancias.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portabilidad</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Recibir tus datos en un formato estructurado y transferirlos a otro responsable.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Oposición</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Oponerte al tratamiento basado en interés legítimo o marketing directo.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Para ejercer tus derechos, contacta con nosotros en:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                <li>Email: privacidad@tramiteslegales.com</li>
                <li>Teléfono: +58 412 123 4567</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                También puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> 
                si consideras que el tratamiento de tus datos vulnera la normativa.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Medidas de Seguridad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Implementamos las siguientes medidas de seguridad para proteger tus datos:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Cifrado SSL/TLS:</strong> Todas las comunicaciones están cifradas.</li>
                <li><strong>Almacenamiento seguro:</strong> Servidores con acceso restringido y firewalls.</li>
                <li><strong>Control de accesos:</strong> Solo personal autorizado puede acceder a los datos.</li>
                <li><strong>Backups cifrados:</strong> Copias de seguridad automáticas y cifradas.</li>
                <li><strong>Actualizaciones de seguridad:</strong> Mantenemos todos los sistemas actualizados.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Uso de Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos 
                cookies de terceros para publicidad ni seguimiento de usuarios. Puedes configurar tu 
                navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Cambios en la Política de Privacidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nos reservamos el derecho de modificar esta política para adaptarla a novedades legislativas 
                o cambios en nuestros procedimientos. Los cambios serán publicados en esta página con la 
                fecha de actualización correspondiente.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                12. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Para cualquier consulta sobre privacidad y protección de datos:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Email: privacidad@tramiteslegales.com</li>
                <li>Responsable de Protección de Datos (DPO): dpo@tramiteslegales.com</li>
                <li>Teléfono: +58 412 123 4567</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
