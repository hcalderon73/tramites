import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Obtener datos del formulario
    const body = await request.json();
    const { 
      nombre, 
      apellido, 
      email, 
      telefono, 
      servicio, 
      pais, 
      mensaje 
    } = body;

    // Validar campos requeridos
    if (!nombre || !apellido || !email || !servicio || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Preparar el contenido del email
    const emailContent = `
NUEVA SOLICITUD DE CONTACTO

DATOS DEL CLIENTE:
==================
Nombre: ${nombre} ${apellido}
Email: ${email}
Teléfono: ${telefono || 'No proporcionado'}
País de residencia: ${pais || 'No especificado'}

SERVICIO SOLICITADO:
====================
${servicio}

MENSAJE:
========
${mensaje}

---
Enviado desde el formulario de contacto de Trámites Legales Venezuela
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
    `;

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'contacto@tramiteslegales.com',
      subject: `Nueva solicitud: ${servicio} - ${nombre} ${apellido}`,
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email', details: error.message },
        { status: 500 }
      );
    }

    // También enviar email de confirmación al cliente (opcional)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: 'Hemos recibido tu solicitud - Trámites Legales Venezuela',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">¡Gracias por contactarnos, ${nombre}!</h2>
            <p>Hemos recibido tu solicitud correctamente y te responderemos en menos de 24 horas.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Resumen de tu solicitud:</h3>
              <p><strong>Servicio:</strong> ${servicio}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-line;">${mensaje}</p>
            </div>
            
            <p>Si tienes alguna pregunta urgente, puedes contactarnos por WhatsApp:</p>
            <p><a href="https://wa.me/584121234567" style="color: #2563eb;">+58 412 123 4567</a></p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="color: #6b7280; font-size: 12px;">
              Este es un email automático. Por favor no respondas a este mensaje.
            </p>
          </div>
        `,
      });
    } catch (confirmationError) {
      // No fallar si el email de confirmación no se envía
      console.log('Email de confirmación no enviado:', confirmationError);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Solicitud enviada correctamente',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
