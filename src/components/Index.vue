<template>
  <form>
    <md-card class="md-layout-item md-size-50 md-size-100">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        <div class="">
          <input
            name="first-name"
            class="custom-input"
            autocomplete="given-name"
            v-model="form.username"
            :placeholder="language.USERNAME"
          />
        </div>

        <div class="">
          <input
            name="first-name"
            class="custom-input"
            autocomplete="given-name"
            v-model="form.username"
            :placeholder="language.USERNAME"
          />
        </div>

              <md-button class="md-raised md-accent">Login</md-button>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { LANGUAGE } from "../resources/constants";

export default {
  name: "Index",
  data: () => ({
    form: {
      username: "",
    },
  }),
  computed: {
    language() {
      return LANGUAGE;
    },
  },
};
</script>