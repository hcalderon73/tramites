# Trámites Legales Venezuela - Next.js

Sitio web profesional para gestión de trámites documentales para venezolanos en el exterior.
Desarrollado con Next.js 16 + TypeScript + Tailwind CSS + Resend.

## ✨ Características

- ✅ **10+ páginas** de servicios detalladas
- ✅ **Formulario de contacto funcional** con Resend
- ✅ **Diseño responsive** y moderno
- ✅ **SEO optimizado** con metadatos
- ✅ **Dark mode** compatible
- ✅ **Páginas legales** completas (Términos, Privacidad, Aviso Legal)

## 🚀 Deploy en Vercel

### 1. Configurar Variables de Entorno

Antes de hacer deploy, configura estas variables en Vercel (Settings > Environment Variables):

```
RESEND_API_KEY=re_LkAeeKtM_M7vdYJGHk7cVCAqKb9EzZ6nT
RESEND_FROM_EMAIL=contacto@tramiteslegales.com
RESEND_TO_EMAIL=contacto@tramiteslegales.com
```

### 2. Deploy

```bash
# Verificar build local
npm run build

# Deploy con Vercel CLI
npx vercel --prod

# O conecta tu repo GitHub en vercel.com/new
```

## 📁 Estructura Completa

```
my-app/
├── app/                          # Páginas Next.js
│   ├── page.tsx                 # Home
│   ├── layout.tsx               # Layout principal
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # API para envío de emails (Resend)
│   ├── servicios/
│   │   ├── page.tsx             # Listado de servicios
│   │   ├── acta-nacimiento/
│   │   │   └── page.tsx         # Detalle
│   │   ├── antecedentes-penales/
│   │   │   └── page.tsx         # Detalle
│   │   ├── titulo-universitario/
│   │   │   └── page.tsx         # Detalle
│   │   ├── carta-solteria/
│   │   │   └── page.tsx         # Detalle
│   │   ├── pasaporte/
│   │   │   └── page.tsx         # Detalle
│   │   ├── apostilla-haya/
│   │   │   └── page.tsx         # Detalle
│   │   └── poder-notarial/
│   │       └── page.tsx         # Detalle
│   ├── contacto/
│   │   ├── page.tsx             # Server Component (metadata)
│   │   └── ContactoContent.tsx  # Client Component (formulario)
│   ├── terminos/
│   │   └── page.tsx             # Términos y Condiciones
│   ├── privacidad/
│   │   └── page.tsx             # Política de Privacidad
│   └── aviso-legal/
│       └── page.tsx             # Aviso Legal
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navegación con dropdown
│   │   └── Footer.tsx           # Footer completo
│   └── ui/
│       ├── Button.tsx           # Botón reutilizable
│       ├── Card.tsx             # Tarjeta reutilizable
│       └── Badge.tsx            # Badge reutilizable
├── content/
│   ├── content.md               # Contenido de servicios
│   └── paises.md                # Información por países
├── .env.local                   # Variables locales (NO subir a git)
└── .env.example                 # Ejemplo de variables
```

## 🛠️ Tecnologías

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Iconos:** Lucide React
- **Email:** Resend API
- **Deploy:** Vercel (optimizado)

## 📧 Configuración de Resend

El formulario de contacto usa **Resend** para enviar emails:

1. **Regístrate** en [resend.com](https://resend.com)
2. **Obtén tu API key** desde el dashboard
3. **Verifica tu dominio** (opcional pero recomendado)
4. **Configura las variables** en Vercel:
   - `RESEND_API_KEY`: Tu API key
   - `RESEND_FROM_EMAIL`: Email desde donde enviar (debe estar verificado)
   - `RESEND_TO_EMAIL`: Email donde recibirás los mensajes

### Funcionalidades del Formulario:

- ✅ Validación de campos
- ✅ Email de confirmación al cliente
- ✅ Email de notificación al administrador
- ✅ Estados de carga y éxito
- ✅ Manejo de errores
- ✅ Responsive design

## 🎨 Páginas Disponibles

### Servicios (8 páginas):
1. `/servicios` - Listado completo
2. `/servicios/acta-nacimiento` - Acta de Nacimiento
3. `/servicios/antecedentes-penales` - Antecedentes Penales
4. `/servicios/titulo-universitario` - Título Universitario
5. `/servicios/carta-solteria` - Certificado de Soltería
6. `/servicios/pasaporte` - Renovación de Pasaporte
7. `/servicios/apostilla-haya` - Apostilla La Haya
8. `/servicios/poder-notarial` - Poderes Notariales

### Otras Páginas:
- `/` - Home
- `/contacto` - Formulario de contacto funcional
- `/terminos` - Términos y Condiciones
- `/privacidad` - Política de Privacidad (GDPR/LOPDGDD)
- `/aviso-legal` - Aviso Legal

## 🔒 Seguridad

- ✅ Variables de entorno para API keys
- ✅ Validación de datos en servidor
- ✅ Sanitización de inputs
- ✅ HTTPS obligatorio en producción
- ✅ Headers de seguridad configurados

## 📝 Notas Importantes

### ⚠️ NUNCA subas `.env.local` a GitHub

El archivo `.env.local` contiene tu API key de Resend. Está incluido en `.gitignore` por defecto.

### 🚀 Para producción:

1. **Verifica tu dominio en Resend** para enviar desde tu propio email
2. **Configura webhooks** de Resend para tracking (opcional)
3. **Activa analytics** en Vercel para monitorear
4. **Configura un dominio personalizado** (opcional)

## 🐛 Solución de Problemas

### Error: "Failed to send email"
- Verifica que `RESEND_API_KEY` esté configurada en Vercel
- Asegúrate de que el email `from` esté verificado en Resend

### Formulario no envía
- Verifica la consola del navegador (F12) para errores
- Revisa los logs de Vercel: `vercel logs --all`

### Emails van a spam
- Verifica tu dominio en Resend (SPF, DKIM)
- Usa un email `from` profesional (no Gmail/Yahoo)

## 📞 Soporte

Para soporte técnico o consultas:
- WhatsApp: +58 412 123 4567
- Email: contacto@tramiteslegales.com

---

**Hecho con ❤️ para venezolanos en el exterior**
