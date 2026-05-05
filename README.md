# Trámites Legales Venezuela - Next.js

Sitio web para gestión de trámites documentales para venezolanos en el exterior.
Migrado a Next.js 16 + TypeScript + Tailwind CSS.

## 🚀 Deploy en Vercel

```bash
# Verificar build local
npm run build

# Deploy con Vercel CLI
npx vercel --prod

# O conecta tu repo GitHub en vercel.com/new
```

## 📁 Estructura

```
app/
├── page.tsx                    # Home
├── servicios/
│   ├── page.tsx               # Listado de servicios
│   ├── acta-nacimiento/
│   │   └── page.tsx           # Detalle servicio
│   └── antecedentes-penales/
│       └── page.tsx           # Detalle servicio
├── contacto/
│   └── page.tsx               # Página de contacto
└── layout.tsx                 # Layout principal

components/
├── layout/
│   ├── Navbar.tsx             # Navegación
│   └── Footer.tsx             # Pie de página
└── ui/
    ├── Button.tsx             # Botón reutilizable
    ├── Card.tsx               # Tarjeta reutilizable
    └── Badge.tsx              # Badge reutilizable

content/
├── content.md                 # Contenido de servicios
└── paises.md                  # Información por países

lib/
└── db.ts                      # Base de datos (Neon/mock)
```

## ✅ Páginas Creadas

- [x] Home (Hero, servicios, características, testimonios, CTA)
- [x] Servicios (listado completo)
- [x] Contacto (formulario + info)
- [x] Acta de Nacimiento (detalle)
- [x] Antecedentes Penales (detalle)

## 🛠️ Tecnologías

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React (iconos)
- Neon Database (opcional)

## 📝 Notas

- El sitio usa datos mock por defecto (no requiere DB para funcionar)
- Para persistencia real, configurar DATABASE_URL en Vercel
- Todas las páginas son estáticas excepto las que usen API routes

## 🌐 URL en Vercel

Después del deploy: `https://tu-proyecto.vercel.app`
