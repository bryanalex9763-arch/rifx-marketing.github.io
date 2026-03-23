import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "principal", // Asegúrate de que este sea el nombre de tu rama en GitHub
  clientId: "AQUÍ_PEGA_TU_CLIENT_ID", 
  token: "AQUÍ_PEGA_TU_TOKEN",
  build: {
    outputFolder: "admin",
    publicFolder: "./", // Como es HTML puro, tus assets están en la raíz
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
        path: "./", // Indica que busque el archivo en la raíz
        format: "html",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título Principal",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción Hero",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "btn_text",
            label: "Texto Botón",
          }
        ],
      },
    ],
  },
});