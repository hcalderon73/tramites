import { NextResponse } from 'next/server';

// No inicializar Resend aquí - hacerlo dentro del handler
// Esto evita errores durante el build

export async function POST(request: Request) {
  try {
    // Importar Resend dinámicamente dentro del handler
    const { Resend } = await import('resend');
    
    // Verificar API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('❌ RESEND_API_KEY no configurada');
      return NextResponse.json(
        { error: 'Error de configuración del servidor: API key no configurada' },
        { status: 500 }
      );
    }

    // Inicializar Resend aquí, no en el scope global
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { nombre, apellido, email, telefono, servicio, pais, mensaje } = body;

    // Validaciones
    if (!nombre || !apellido || !email || !servicio || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Configuración
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'calderonhumberto@gmail.com';

    const emailContent = `
=====================================
NUEVA SOLICITUD - TRÁMITES LEGALES VZLA
=====================================

DATOS DEL CLIENTE:
------------------
Nombre: ${nombre} ${apellido}
Email: ${email}
Teléfono: ${telefono || 'No proporcionado'}
País: ${pais || 'No especificado'}

SERVICIO SOLICITADO:
--------------------
${servicio}

MENSAJE:
--------
${mensaje}

-------------------------------------
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
-------------------------------------
    `;

    console.log('📧 Enviando email...');
    console.log('From:', fromEmail);
    console.log('To:', toEmail);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `📧 Nueva Solicitud: ${servicio} - ${nombre} ${apellido}`,
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('❌ Error Resend:', error);
      return NextResponse.json(
        { 
          error: 'Error al enviar el email', 
          details: error.message 
        },
        { status: 500 }
      );
    }

    console.log('✅ Email enviado exitosamente');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud enviada correctamente. Te responderemos en menos de 24 horas.',
        data 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error servidor:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
