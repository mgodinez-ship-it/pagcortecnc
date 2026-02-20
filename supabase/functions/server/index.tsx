import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e97ce334/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-e97ce334/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return c.json({ error: "Faltan campos requeridos" }, 400);
    }

    // Obtener API key de Resend desde variables de entorno
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY no está configurada");
      return c.json({ error: "Configuración de servidor incorrecta" }, 500);
    }

    // Enviar correo usando Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["ventas@sgp.com.mx"],
        reply_to: email,
        subject: `Nuevo contacto web - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #06b6d4; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🔧 Nuevo Contacto - CORTE CNC</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Teléfono:</div>
                  <div class="value">${phone || "No proporcionado"}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Mensaje:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.log("Error de Resend:", resendData);
      return c.json({ error: "Error al enviar el correo", details: resendData }, 500);
    }

    console.log("Correo enviado exitosamente:", resendData);
    return c.json({ success: true, message: "Correo enviado exitosamente" });

  } catch (error) {
    console.log("Error en el endpoint de contacto:", error);
    return c.json({ error: "Error interno del servidor", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);