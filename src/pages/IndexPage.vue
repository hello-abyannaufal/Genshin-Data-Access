<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    {{ $t("welcome") }}
    <q-btn label="Click Me" color="primary" @click="languageToggler" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import utility from "src/tools/utility";

defineOptions({
  name: "IndexPage",
});

const { t, locale } = useI18n();

const languageToggler = () => {
  let language = utility.LoadStorageSession("language");
  console.log(language);
  if (language == "id-ID") {
    utility.SaveStorageSession("language", "en-US");
    locale.value = "en-US";
  } else {
    utility.SaveStorageSession("language", "id-ID");
    locale.value = "id-ID";
  }
};
</script>
