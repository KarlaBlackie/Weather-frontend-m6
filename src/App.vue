<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
    <div class="container">

      <router-link to="/" class="navbar-brand fw-bold">
        ☀️ Clima y Salud Emocional
      </router-link>

     
      <div class="ms-auto d-flex gap-3">
        <router-link to="/" class="nav-link text-white link-hover">
        Home
        </router-link>
  
      <a href="#acerca" class="nav-link text-white link-hover" style="cursor: pointer;">
        Acerca de
      </a>
    </div>
  </div>
</nav>

<router-view/>

<footer id="acerca" class="text-center py-4 mt-5 border-top">
  <p class="text-muted">&copy; 2026 - Proyecto de clima y salud Emocional | Desarrollado por Karla Jara Mena.</p>
</footer>
</template>


<style>
.italic {
  font-style: italic;
}

.texto-justificado {
  text-align: justify;
}

.link-hover:hover {
  text-decoration: underline;
  opacity: 0.9;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

html {
  scroll-behavior: smooth;
}
</style>
