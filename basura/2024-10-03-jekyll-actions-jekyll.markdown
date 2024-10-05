---
layout: post
title:  "Usar Jekyll en Github con Actions Jekyll"
date:   2024-10-05 16:10:00 -0600
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
Github permite la implementacion de jekyll de forma restringida mediante Github-Pages,
pero tambien permite la implementacion por medio de Actions, usando el perfil Jekyll.
Asi puede usar distintas versiones de Jekyll en lugar de la permitida por
"github-pages", e incluso usar plugins que no estan en la lista blanca de una forma mas facil.


La opcion "normal" de uso de Jekyll en github, corria por "github-pages", pero esta de forma restringida
dando errores ya sea en situacion de:
- Temas
- Plugins (que no estuviera en la lista blanca)
- etc.

Pero ahora Github CI/CD interno nombrado Acciones de GitHub. Las ventajas de esta implementacion son:

- Versiones alternas de Jekyll.
- Plugins fuera de la lista blanca.
- Temas con caracteristicas de la versioens nueva de Jekyll.

## Flujo de trabajo / Mi Caso

En mi caso, mi sitio web tuvo problemas ya que se usaba la implementacion **Github-Pages**, pero esto me genero:

- Errores de dependencias con el tema personalizado.
- Errores de dependencias con la gema: [jekyll-webp](https://github.com/sverrirs/jekyll-webp)

Tarde tiempo consultado para encontrar soluciones, encontrandome con dos situaciones comunes:

- Error de dependencias con tema personalizado.
- Error de bundler (code 5, code 6, code 16)

### Error de dependencias con tema personalizado

Este problema lo solucione cambiando el flujo de trabajo a Jekyll, solo jekyll no Github-Pages,
pero el problema era que mi proyecto ya estaba configurado con:

- Plugin: Github-pages
- Version de jekyll usada por Github-Pages.

Esto me llevo a los problemas con bundle.

Recomendaciones importantes:
- **Nunca instales homebrew con sudo**
  Por ejemplo, tener un usuario normal, y otro solo de administrador eso traera problemas.
  Usa un usuario normal con administrador habilitado.

## 1. Paso 1: Instalar Homebrew

Inicia una terminal e introduce:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Recuerda: **nada de sudo al inicio**

## 2. Paso 2: Instalar chruby y ruby con ruby-install
Revisamos la version de ruby instalada, en este caso veremos una pero es la que macos usa por defecto, no la nescesitamos:
```
ruby -v
```
Instalamos chruby y ruby-install:
```
brew install chruby ruby-install
```
Instalar ruby:
```
ruby-install ruby
```
Actualizamos para estar seguros:
```
ruby-install ruby --update
```
Revisamos la version de ruby instalada, recuerda anotar la version:
```
ruby -v
```
Una vez revisada la version instalada, que sera la mas reciente. configurar shell a uso automático chruby.
```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby VERSION_RUBY" >> ~/.zshrc # run 'chruby' to see actual version
```
En VERSION_RUBY ponemos la version que tenemos anotada anteriormente, ejemplo: **ruby-3.3.5**

Si usas Bash, reemplaza .zshrc con .bash_profile.

## 3. Paso 3: Instalar Jekyll

```
gem install jekyll
```

## Extra 1: Iniciar un proyecto

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

- [https://jekyllrb.com/docs/continuous-integration/github-actions/](https://jekyllrb.com/docs/continuous-integration/github-actions/)