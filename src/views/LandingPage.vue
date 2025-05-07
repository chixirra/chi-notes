<script lang="ts" setup></script>
<template>
  <div class="landing-page">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1>Welcome to the Landing Page</h1>
    </header>

    <main>
      <p>This is the main content of the landing page.</p>
      <router-link to="/login">Go to Login</router-link>
    </main>

    <footer>
      <p>&copy; 2023 Your Company</p>
    </footer>
  </div>
</template>
