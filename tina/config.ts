import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Revisa si tu rama es 'main' o 'master'
  clientId: "10561aba-f9f7-4e3d-a8fa-d0149e35ca1b", // Tu ID de la captura
  token: "GENERA_UN_TOKEN_EN_LA_PESTAÑA_TOKENS", 
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "imágenes",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Páginas",
        path: "./",
        format: "html",
        fields: [
          { type: "string", name: "title", label: "Título Principal" },
          { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } },
          { type: "string", name: "btn_text", label: "Texto Botón" },
        ],
      },
    ],
  },
});