/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["tr-TR","en-US", "fr-FR", "es-ES"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "tr-TR",
  },
}

module.exports = nextConfig
