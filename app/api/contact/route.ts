import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Verificar API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no configurada');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

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

    // Configuración para cuenta gratuita
    const fromEmail = 'onboarding@resend.dev';
    const toEmail = 'calderonhumberto@gmail.com'; // Tu email verificado

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
IP: ${request.headers.get('x-forwarded-for') || 'No disponible'}
-------------------------------------
    `;

    console.log('Enviando email...');
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
      console.error('Error Resend:', error);
      return NextResponse.json(
        { 
          error: 'Error al enviar el email', 
          details: error.message 
        },
        { status: 500 }
      );
    }

    console.log('✅ Email enviado exitosamente:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud enviada correctamente. Te responderemos en menos de 24 horas.',
        data 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error servidor:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
