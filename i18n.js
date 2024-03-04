module.exports = {
  locales: ["en"],
  defaultLocale: "en",
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "u"],
  pages: {
    "*": ["common"],
    "/": ["home"],
  },
  loadLocaleFrom: (lang, namespace) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/${lang}/${namespace}.json`).then((m) => m.default),
};
