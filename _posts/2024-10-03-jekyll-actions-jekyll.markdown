---
layout: post
title:  "Configurar un sitio Jekyll usando acciones de Github: Jekyll"
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
Al construir un sitio web con **Jekyll** y subirlo a **Github** este funciona bajo un entorno restringido,
el cual no permite:

- Versiones alternas de Jekyll
- Plugins fuera de [lista blanca](https://pages.github.com/versions/)

Pero una forma de solucionar esto es implementando el sitio web con un **Workflow (flujo de trabajo)** disferente.
Github-Pages usa su flujo de trabajo, pero ahora esta disponible uno mas exacto solo llamado **Jekyll**,
el cual si permite lo que anteriormente no era permitido.

## Uso de flujo de trabajo "Jekyll"

Para implementar tienes que modificar tu sitio siguiendo los siguientes pasos:

### 1. Modificar "Gemfile"

Para ello ve a tu archivo **Gemfile** he inserta como gem la version de jekyll que quieres usar:

Ejemplo:

```
gem 'jekyll', '~> 4.3.4'
```

### 2. Agregar plataformas linux a "Gemfile.lock"

Ve a la terminal ya abierta en la carpeta de tu sitio web e ingresa:

```
 bundle lock --add-platform x86_64-linux
```

Esto se debe a que el flujo de trbajao en Github usa Ubuntu.

### 3. Conficto de versiones del tema y el flujo de trabajo.

Para ello debes ir al repositorio del tema que usas y buscar la version de ruby que requiere ese tema.

Esto lo encontraras en el ".gemspec" del tema, en una linea parecida a esta

```
 spec.required_ruby_version = "> 3.2"
```

Ahora ve al flujo de trabajo de tu sitio, encontrado en un carpte oculta llamada ".Github" en la sudcarptea "Workflow"
ahi encontraras el archivo "jekyll.yml", busca ahi una linea parecida a esta:

```
 ruby-version: '3.1' # Not needed with a .ruby-version file
```

Ahora iguala la version del tema con la version en el archivo "jekyll.yml" en la linea anteriormente mencionada:

```
 ruby-version: '3.2' # Not needed with a .ruby-version file
```

### Referencias

- [https://jekyllrb.com/docs/continuous-integration/github-actions/](https://jekyllrb.com/docs/continuous-integration/github-actions/)