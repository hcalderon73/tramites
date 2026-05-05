import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizado para Vercel
  output: 'standalone',
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  
  // Headers de seguridad básicos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
