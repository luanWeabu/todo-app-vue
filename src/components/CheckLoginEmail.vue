<template>
  <div>
    <div class="background"></div>
    <v-main class="d-flex justify-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card>
          <div class="text-center">
            <h2 class="indigo--text">Login</h2>
            <h4 class="">Enter your email</h4>
          </div>
          <v-form v-model="valid">
            <v-container>
              <v-row class="align-center">
                <v-col cols="12" sm="6" class="mx-auto">
                  <v-text-field
                    type="email"
                    label="Email"
                    clearable
                    class="mb-2"
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="changeCurrentStep()"
                    >Next</v-btn
                  ></v-col
                >
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
import userService from "@/service/user.service";

export default {
  name: "CheckLoginEmail",

  data() {
    return {
      valid: true,
      allowSpaces: false,
      max: 0,
      error: [],
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail";
        },
      },
    };
  },
  methods: {
    changeCurrentStep() {
      this.$emit("nextStep");
    },
  },
};
</script>

<style lang="scss" scoped></style>
