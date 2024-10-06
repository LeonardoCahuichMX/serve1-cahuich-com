---
layout: post
title:  "Instalar Jekyll en MacOS"
date:   2024-10-03 22:09:48 -0600
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


Instalar Jekyll en MacOS es hasta cierto punto facil, para eso se requiere:
- Un gestor de paquetes, en este caso: **Homebrew**.
- Un gestor de versiones de Ruby, en este caso **ruby-install**.
- Un selector de versiones, en este caso **chruby**

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

### Referencias

- [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)