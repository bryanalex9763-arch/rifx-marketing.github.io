import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Asegúrate de que tu rama se llame 'main' o cámbialo si es 'master'
  clientId: "10561aba-f9f7-4e3d-a8fa-d0149e35ca1b", 
  token: "PEGA_AQUÍ_TU_TOKEN", // Lo obtienes en la pestaña 'Tokens' o 'Fichas' de TinaCloud
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
          { type: "string", name: "btn_text", label: "Texto del Botón" },
        ],
      },
    ],
  },
});