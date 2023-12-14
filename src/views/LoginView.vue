<template>
  <div>
    <template v-if="currentStep === 1">
      <check-login-email @nextStep="currentStep = 2"></check-login-email>
    </template>
    <template v-if="currentStep === 2">
      <login></login>
    </template>
  </div>
</template>

<script>
import CheckLoginEmail from "@/components/CheckLoginEmail.vue";
import LoginVue from "@/components/Login.vue";
export default {
  name: "LoginView",

  data() {
    return {
      currentStep: 1,
    };
  },
  components: {
    "check-login-email": CheckLoginEmail,
    login: LoginVue,
  },
  methods: {
    showwingPage() {},
  },
};
</script>

<style lang="scss" scoped></style>
