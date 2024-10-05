---
layout: post
title:  "Implementar Lunr.js en Jekyll"
date:   2024-10-03 21:30:48 -0600
#permalink: /Primer post
categories: [ Blog ]
color: '#b0b013'
author: Leonardo Cahuich
tag: [jekyll, lunr-js, html5, html, js, programacion]

date-in: 2024-09-26
date-out: 2024-09-26

author-dev: Leonardo Cahuich

#datos
color: '#000'
#backgroundColor: '#000'
---
Lunr.js es una biblioteca en “js” para una búsqueda front-end, por lo tanto,
es conveniente su uso en Jekyll dada su naturaleza similar.


La implementación varia, pero en este artículo veremos como hacerlo muy fácil, y muy rápido.

### 1. Instalación

Hay 3 modos de instalación.

#### 1.1 RPM
```
$ npm install lunr
```
#### 1.2 Local

1. Descarga el archivo "lunr.js" desde aquí [Lunr.js](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/js/lunr.js "Title")
2. Instalar en el directio "js" de raíz del proyecto
3. Descargar [search-lunr.html](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/_includes/search-lunr.html "Title")
4. Instalar en el directorio "_includes" de raíz del proyecto
5. Llamar el archivo "sear-lunr.html" desde cualquier parte con:
```
include search-lunr.html
```
Recuerda encerrar lo anterior con "{", "}", "%" respectivo.

#### 1.3 CDN

Es el mismo proceso que en local, pero en lugar de realizar el paso 1 y 2 de la lista anterior,
en el archivo "search-lunr.html" sustituirás:
```
<script src="{{ site.baseurl }}/assets/js/lunr.js"></script>
```
Por:
```
<script src="https://unpkg.com/lunr/lunr.js"></script>
```

### 2. Uso

Con eso basta para tener una implementación basica de lunr.js, para una personalización puede observar esta
implementación basica y modificarla o ver este enlace:
- [https://lunrjs.com/guides/getting_started.html](https://lunrjs.com/guides/getting_started.html)

### 3. Ejemplo

Puede ver un ejemplo del uso de lunr.js aquí mismo, arriba hay una lupa dele clic para verla.

#### Referencias

- [https://lunrjs.com/guides/getting_started.html](https://lunrjs.com/guides/getting_started.html)
- [https://jekyllcodex.org/without-plugin/search-lunr/](https://jekyllcodex.org/without-plugin/search-lunr/)


