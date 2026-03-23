import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "40561aba-f9f7-4e3d-a8fa-d0149e35ca4b",
  token: "7e3f66ae4163da82066dca9e0c46999c7ee217cb",
  branch: "main",

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
  },

  schema: {
    collections: [
      // ─────────────────────────────────
      // HERO
      // ─────────────────────────────────
      {
        name: "hero",
        label: "🚀 Hero - Sección Principal",
        path: "data",
        match: { include: "hero" },
        format: "json",
        fields: [
          { type: "string", name: "titulo_1", label: "Título línea 1" },
          { type: "string", name: "titulo_2", label: "Título línea 2" },
          { type: "string", name: "titulo_3", label: "Título línea 3" },
          { type: "string", name: "subtitulo", label: "Subtítulo", ui: { component: "textarea" } },
          { type: "string", name: "boton_form", label: "Texto del botón" },
          { type: "image", name: "imagen_hero", label: "Imagen astronauta" },
        ],
      },

      // ─────────────────────────────────
      // MISIÓN
      // ─────────────────────────────────
      {
        name: "mision",
        label: "🌍 Misión - Quiénes Somos",
        path: "data",
        match: { include: "mision" },
        format: "json",
        fields: [
          { type: "string", name: "etiqueta", label: "Etiqueta superior" },
          { type: "string", name: "titulo", label: "Título" },
          { type: "string", name: "subtitulo_naranja", label: "Subtítulo naranja" },
          { type: "string", name: "descripcion", label: "Descripción", ui: { component: "textarea" } },
          { type: "string", name: "boton", label: "Texto del botón" },
          { type: "image", name: "imagen", label: "Imagen de la sección" },
        ],
      },

      // ─────────────────────────────────
      // SERVICIOS
      // ─────────────────────────────────
      {
        name: "servicios",
        label: "🔭 Servicios",
        path: "data",
        match: { include: "servicios" },
        format: "json",
        fields: [
          { type: "string", name: "titulo_seccion", label: "Título de la sección" },
          {
            type: "object", name: "servicio_1", label: "Servicio 1",
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "nombre", label: "Nombre" },
              { type: "string", name: "descripcion", label: "Descripción", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "servicio_2", label: "Servicio 2",
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "nombre", label: "Nombre" },
              { type: "string", name: "descripcion", label: "Descripción", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "servicio_3", label: "Servicio 3",
            fields: [
              { type: "string", name: "emoji", label: "Emoji" },
              { type: "string", name: "nombre", label: "Nombre" },
              { type: "string", name: "descripcion", label: "Descripción", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // ─────────────────────────────────
      // TESTIMONIOS
      // ─────────────────────────────────
      {
        name: "testimonios",
        label: "⭐ Testimonios",
        path: "data",
        match: { include: "testimonios" },
        format: "json",
        fields: [
          {
            type: "object", name: "testimonio_1", label: "Testimonio 1",
            fields: [
              { type: "string", name: "nombre", label: "Nombre y cargo" },
              { type: "string", name: "texto", label: "Texto", ui: { component: "textarea" } },
              { type: "image", name: "foto", label: "Foto de perfil" },
            ],
          },
          {
            type: "object", name: "testimonio_2", label: "Testimonio 2",
            fields: [
              { type: "string", name: "nombre", label: "Nombre y cargo" },
              { type: "string", name: "texto", label: "Texto", ui: { component: "textarea" } },
              { type: "image", name: "foto", label: "Foto de perfil" },
            ],
          },
          {
            type: "object", name: "testimonio_3", label: "Testimonio 3",
            fields: [
              { type: "string", name: "nombre", label: "Nombre y cargo" },
              { type: "string", name: "texto", label: "Texto", ui: { component: "textarea" } },
              { type: "image", name: "foto", label: "Foto de perfil" },
            ],
          },
        ],
      },

      // ─────────────────────────────────
      // CTA FINAL
      // ─────────────────────────────────
      {
        name: "cta",
        label: "📣 CTA Final",
        path: "data",
        match: { include: "cta" },
        format: "json",
        fields: [
          { type: "string", name: "titulo_1", label: "Título línea 1" },
          { type: "string", name: "titulo_2", label: "Título línea 2" },
          { type: "string", name: "boton", label: "Texto del botón" },
        ],
      },

      // ─────────────────────────────────
      // CONTACTO
      // ─────────────────────────────────
      {
        name: "contacto",
        label: "📞 Contacto e Info",
        path: "data",
        match: { include: "contacto" },
        format: "json",
        fields: [
          { type: "string", name: "telefono", label: "Teléfono" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "direccion", label: "Dirección" },
          { type: "string", name: "footer_texto", label: "Texto del footer", ui: { component: "textarea" } },
          { type: "string", name: "copyright", label: "Copyright" },
        ],
      },
    ],
  },
});