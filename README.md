# clima-frontend-m6
App de clima y bienestar

Esta aplicación es una SPA(Single page application) desarrollada con Vue.js que permite explorar el clima de distintas ciudades del mundo junto con consejos de bienestar emocional.
El usuario puede navegar entre un listado de ciudades, ver su clima actual y acceder a un detalle con pronóstico semanal y estadísticas.

# Vistas principales

# Home
*Lista de ciudades con:
  *Nombre
  *Imagen
  *Temperatura actual
  *Icono del clima
*Buscador de ciudades en tiempo real(v-model + v-for)
*Navegación a la lista vista de detalle de cada ciudad mediante '<router-link>'

# Detalle de ciudad
*Información completa del clima:
  *Temperatura actual
  *Velocidad del viento

*Pronóstico de la semana(V-for sobre días)
*Estadísticas
  *Temperatura máxima
  *Temperatura mínima
  *Promedio
  *Días soleados y con lluvia

*Consejos de bienestar emocional asociados a cada ciudad.
*Botón para volver al Home

# Rutas(Vue Router)
* / => Home(listado de ciudades)
*'/ciudad/:id'=> Detallle de una ciudad

La navegación se realiza sin recargar la página utilizando Vue Router.

# Tecnologías utilizadas

*Vue.js 3(Composition API)
*Vue Router
*Javascript(ES6)
*Bootstrap(estilos)
*API Open-Meteo(datos climáticos)

# Funcionalidades principales
*Renderizado dinámico con v-for
*Condicionales con v-if / v-show.
*Binding de datos con {{}}
*Manejo de eventos con @click y @submit.
*Uso de v-model para el buscador de ciudades.
*Consumo de API Open-Meteo para datos climáticos
*SPA con navegación entre visitas sin recarga de la página.

# Cómo ejecutar el proyecto
1.Clonar el repositorio
bash
git clone https://github.com/MI-USUARIO/MI-REPO.git

2.Entrar a la carpeta del proyecto


3.Instalar dependencias
npm install

4.Ejecutar el servidor
npm run dev

5.Abrir en el navegador
http://localhost:5173

# Repositorio
https://github.com/KarlaBlackie/Weather-frontend-m6

# Notas
*La aplicación utiliza datos reales desde la API de Open-Meteo
*Se implementó una interfaz interactiva y navegación como SPA con Vue Router.
*Se agregaron mejoras visuales como iconos de clima y estado de carga.

# Autor
Karla Irene Jara Mena.
Desarrollado como parte del bootcamp de Frontend.

  
