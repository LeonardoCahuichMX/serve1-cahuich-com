---
layout: post
title:  "Generar un sitio web con Jekyll"
date:   2024-10-05 17:30:48 -0600
#permalink: /Primer post
categories: [ Blog ]
color: '#b0b013'
author: Leonardo Cahuich
tag: [jekyll, lunr-js, html5, html, js, programacion]

date-in: 2024-09-26
date-out: 2024-09-26

author-dev: Leonardo Cahuich

#datos
color: '#ffcc00'
#backgroundColor: '#333333'
---
Jekyll es un constructor de sitios web estaticos basado en ruby, relacionado indirectamente a github,
es una herramienta para mantener sitios web, blog, etc. De una forma menos costosa, usando github y
un dominio web relacionado a este.


## 1. Iniciar un proyecto

Ahora que tenemos Jekyll instalado, generamos un proyecto.
Hay dos opciones:

- Desde un tema basico como **"Minimal"**.
- Un tema propio.

### Tema basico

Generamos una carpta de poryectos, iniciamos la terminal y abrimos la carpeta con la terminal, ejemplo:

```
cd /my_proyecto/
```

Donde mi proyecto es la ruta de la carpeta, simplemente escribe **cd** arrastra la carpeta con el mouse y sueltala en la terminal,
asi se escribir la ruta.

Ahora generamos un proyecto:
```
jekyll new my-awesome-site
```

Donde **my-awesome-site** es el nombre que tendra este.

### Tema propio

Lo anterior pero al momento de generar el proyecto usamos esto:
```
jekyll new-theme my-awesome-site
```
Donde **my-awesome-site** es el nombre que tendra este.

### Iniciar servidor

Una vez generado el proyecto, inicializamos el servidor:
```
bundle exec jekyll serve
```
Estara disponible en la sigiente direccion local, desde el navegador:
[http://localhost:4000](http://localhost:4000)

Ó la que señale, en la terminal se puede ver:
```
Server address: http://127.0.0.1:4000/
```
Para detener el servidor simplemente es:
```
Server running... press ctrl-c to stop.
```
Es decir oprime **Ctrl+C**

### Referencias

- [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)