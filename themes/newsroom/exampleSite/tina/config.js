import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "80ef5d6d-7cf5-4ba8-b365-410adb783f1e", // Get this from tina.io
  token: "06eb566e7ba292577a6db093d7ae835d449cbd82", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          include: "_index"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ]
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          exclude: "_index"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        format: "md",
        match: {
          exclude: "_index"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "image",
            name: "image",
            label: "Preview Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          }
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: 'd4495a2ebcb80c835d4385cdd336919d814d1561',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
