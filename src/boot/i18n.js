import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import utility from "src/tools/utility";

export default boot(({ app }) => {
  let loadLanguage = utility.LoadStorageSession("language");
  let language = loadLanguage ? loadLanguage : "en-US";

  if (language == "id-ID") {
    language = "id-ID";
  } else {
    language = "en-US";
  }

  const i18n = createI18n({
    locale: language,
    globalInjection: true,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
