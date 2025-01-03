<template>
  <div class="user-form">
    <form name="user-form" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <!-- Honeypot field to prevent spam bots -->
      <input type="hidden" name="bot-field" />

      <!-- Your form fields here -->
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="message">信息:</label>
        <textarea id="message" name="message"></textarea>
      </div>

      <!-- Submit button -->
      <button type="submit">提交</button>
    </form>
  </div>
</template>
