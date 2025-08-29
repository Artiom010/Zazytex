export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: "2025-08-28",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "FoodShop - Produse alimentare",
      meta: [
        {
          name: "description",
          content: "E-commerce cu produse alimentare și coș funcțional",
        },
        { property: "og:title", content: "FoodShop" },
        {
          property: "og:description",
          content: "Lista de produse alimentare, cumpărături rapide și ușoare",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
});
