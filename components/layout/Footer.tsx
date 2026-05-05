import Link from 'next/link';
import { Shield, MessageCircle, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Trámites Legales</h3>
                <p className="text-xs text-blue-400">Venezuela - España</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Servicio 100% online para venezolanos en el exterior. Gestionamos 
              apostillas y trámites documentales desde Venezuela con envío a 
              cualquier país del mundo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/acta-nacimiento" className="hover:text-blue-400 transition-colors">
                  Acta de Nacimiento
                </Link>
              </li>
              <li>
                <Link href="/servicios/antecedentes-penales" className="hover:text-blue-400 transition-colors">
                  Antecedentes Penales
                </Link>
              </li>
              <li>
                <Link href="/servicios/titulo-universitario" className="hover:text-blue-400 transition-colors">
                  Título Universitario
                </Link>
              </li>
              <li>
                <Link href="/servicios/carta-solteria" className="hover:text-blue-400 transition-colors">
                  Certificado de Soltería
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-blue-400 transition-colors">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>WhatsApp: +58 412 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>contacto@tramiteslegales.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span>Lun-Vie: 8:00 - 17:00</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span>Servicio 100% online<br />Atendemos desde Caracas<br />Envíos a todo el mundo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Trámites Legales Venezuela. Servicio 100% online. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos de Uso
              </Link>
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
