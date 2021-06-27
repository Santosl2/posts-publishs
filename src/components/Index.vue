<template>
  <div
    class="
      md-layout-item
      md-medium-size-33
      md-small-size-50
      md-xsmall-size-100
      md-size-20
    "
  >
    <md-progress-bar :md-mode="determinate"></md-progress-bar>

    <form v-on:submit.prevent="tryLogin()">
      <md-card style="border-radius: 0 0 3px 3px; padding: 20px">
        <md-card-header
          style="
            text-align: center;
            text-transform: uppercase;
            font-family: 'Raleway';
          "
        >
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="messageClass">
            <label>{{ language.USERNAME }}</label>
            <md-input v-model="form.username" required></md-input>
                  <md-icon>user</md-icon>

            <span class="md-error">{{ PASSWORD_ERROR }}</span>
          </md-field>

          <md-field :class="messageClass">
            <label>{{ language.PASSWORD }}</label>
            <md-input
              type="password"
              v-model="form.password"
              required
            ></md-input>
            <span class="md-error">{{ PASSWORD_ERROR }}</span>
          </md-field>

          <md-checkbox v-model="form.remember">Lembre-me</md-checkbox>

          <md-button
            type="submit"
            class="md-raised md-primary"
            style="width: 100%"
            :disabled="form.loading"
            >Acessar</md-button
          >
          <hr />
          <div style="text-align: center">
            Você não possui uma conta?
            <br />
            <a>Crie uma conta</a>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>
<script>
import { LANGUAGE } from "../resources/constants";

export default {
  name: "Index",
  data: () => ({
    form: {
      username: "",
      password: "",
      remember: false,
      loading: false,
      hasErrors: false,
    },
    determinate: "determinate",
  }),
  methods: {
    tryLogin() {
      let form = this.form;
      this.determinate = "indeterminate";
      form.loading = true;

      if (form.username.trim() == "" || form.password.trim() == "") {
        form.hasErrors = true;
        this.determinate = "determinate";
      }
    },
  },
  computed: {
    language() {
      return LANGUAGE;
    },
    messageClass() {
      return {
        "md-invalid": this.form.hasErrors,
      };
    },
  },
};
</script>
