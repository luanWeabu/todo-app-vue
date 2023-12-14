<template>
  <div>
    <div class="background"></div>
    <v-main class="d-flex justify-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card>
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">Check Your email</h2>
          </div>
          <v-form>
            <v-container>
              <v-row class="align-center">
                <v-col cols="12" sm="6" class="mx-auto">
                  <v-card-text>Email something</v-card-text>
                  <v-text-field
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    counter="25"
                    label="Please, Enter your password"
                    @click:append="show = !show"
                  ></v-text-field>
                  <v-btn>Login</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "LoginEmail",

  data() {
    return {
      show: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "required",
        min: (value) => value.length >= 8 || "Min 8 character",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
