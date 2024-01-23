---
title: Primero pasos
description: A reference page in my new Starlight docs site.
---

## Instalación de VS Code

VS Code es un editor de código para compilar y depurar aplicaciones.
Necesario instalar las extensiones para compilar, implementar y depurar aplicaciones en cualquier lenguaje.

- [Visual Studio Code](https://code.visualstudio.com/)


## Instalación de Flutter

Flutter es un marco de Google para desarrollar aplicaciones multiplataforma con el lenguaje de programación Dart, utilizando Widgets como bloques de construcción.

### ¿Porque Flutter?

Flutter permite crear aplicaciones multiplataforma (Android, iOS, Linux, Mac, Windows, Google Fuchsia y la web) a partir de un único código base.

### Instalacion del SDK Flutter

1. Descargar el paquete de instalacion de la version mas reciente de Flutter

- [Instalar en Windows](https://docs.flutter.dev/get-started/install/windows)
- [Instalar en macOS](https://docs.flutter.dev/get-started/install/macos)
- [Instalar en Linux](https://docs.flutter.dev/get-started/install/linux)
- [Instalar en chromeOS](https://docs.flutter.dev/get-started/install/chromeos)

2. Mover la carpeta a un directorio para su instalacion 
   
    > **Advertencia**:
    >
    > Evita instalar Flutter en rutas con caracteres especiales, espacios o que requieran privilegios elevados, como `C:\Program Files\`.

3. Extraer el archivo flutter_sdk_v1.0.0.zip
   
### Actualizacion de la variable de PATH de Windows

1. Presione la tecla ``windows + s``
2. Seleccionar la opcion ``Editar Variables de Entorno del Sistema``
3. Cuando se muestra la ventana **Propiedades del sistema** seleccionar la opcion **Variables de entorno.**
4. Seleccionar **Path** en variables de usuario y despues seleccionar **Editar**
5. Cuando se muestra la ventana Editar variable de entorno seleccionar opcion **Nuevo**
6. Agregar la direccion ``C:\flutter_windows_3.13.5-stable\flutter\bin`` en el espacio vacio
7. Presionar opcion **Aceptar**

### Comprobar la configuracion de desarrollo

#### Ejecutar comando ``flutter doctor``
El comando verifica la integridad de todos los componentes necesarios para un entorno de desarrollo Flutter completo en Windows.

1. Abrir terminal con tecla ``windows`` y escribir terminal.
2. En la terminal escribimos el comando ``flutter doctor``

## Instalacion de Python

Python es un lenguaje de programación de alto nivel y fácil de leer. Soporta varios estilos de programación y es ampliamente utilizado en desarrollo web, análisis de datos y aprendizaje automático.

- [Python](https://www.python.org/downloads/)

## Instalacion Django

Django es un framework de Python para el desarrollo web. Proporciona herramientas para construir sitios web de manera rápida y segura. Django es versátil y se utiliza en una amplia gama de aplicaciones web.

- [Django](https://www.djangoproject.com/start/)

### Pasos de instalacion 
1. Instala Python: Django es un framework de Python, por lo que necesitas tener  Python instalado en tu sistema.
2. Verifica la instalación de Python: Puedes verificar que Python está instalado correctamente escribiendo python en tu terminal
3. Crea un entorno virtual: Es recomendable instalar Django en un entorno virtual para evitar conflictos con otras bibliotecas de Python en tu sistema. Puedes crear un entorno virtual con el comando ``virtualenv env`` y luego activarlo con el comando ``. env/bin/activate``
4. Instala Django: Una vez que tu entorno virtual esté activo, puedes instalar Django con el comando pip install Django
5. Verifica la instalación de Django: Para verificar que Django está instalado correctamente, puedes intentar importarlo en Python con los comandos ``import django`` y ``print(django.get_version())``
 
  

## Instalacion de Postman

Postman es una plataforma de API para crear y usar API. Postman simplifica cada paso del ciclo de vida de la API y agiliza la colaboración para que pueda crear mejores API más rápido.

- [Postman app](https://www.postman.com/downloads/)


### Pasos de instalacion 
1. Descarga Postman: Ve a la página oficial de descargas de Postman. El sitio web te recomendará la versión adecuada para tu sistema operativo.  
2. Instala Postman: Una vez descargado, abre el archivo y sigue las instrucciones para instalar Postman en tu sistema.

## Instalacion de Docker
Docker es una plataforma que permite a los desarrolladores construir, compartir y ejecutar aplicaciones en contenedores. Proporciona herramientas para acelerar la entrega de aplicaciones seguras y funciona con todas las herramientas de desarrollo. Docker Desktop ofrece un conjunto de herramientas para construir aplicaciones en cualquier lugar.

- [Docker](https://www.docker.com/get-started/)

### Pasos de instalacion 

1. Visita el sitio web de Docker y descarga el instalador de Docker Desktop
2. Ejecuta el instalador ``(Docker Desktop Installer.exe)``
3. Durante la instalación, asegúrate de seleccionar la opción ``Use WSL 2 instead of Hyper-V`` en la página de configuración, dependiendo de tu elección de backend
4. Sigue las instrucciones del asistente de instalación para autorizar el instalador y proceder con la instalación

## Instalacion de Node.js
Node.js es un entorno de ejecución de JavaScript que permite desarrollar aplicaciones escalables. Utiliza operaciones de entrada/salida no bloqueantes y una arquitectura asincrónica basada en eventos, lo que permite manejar múltiples conexiones simultáneamente. Sin embargo, no es adecuado para tareas que requieren un uso intensivo de la CPU.

- [Node.js](https://nodejs.org/en)

## Visual Studio
Visual Studio es necesario para ejecutar ciertas herramientas que nos facilitan la ejecucion de un proyecto en Flutter y Django.

- [Visual Studio](https://visualstudio.microsoft.com/es/downloads/)

## Astro
Astro es un web framework que agiliza la creacion de sitios web rapidos y dinamicos.

- [Astro](https://astro.build/)

### Pasos de instalacion de Astro

Prerequisitos

- Node.js v18.14.1 o superior
- Text editor - Recomendacion VS Code con la extension de Astro

1. Ejecutar en la terminal el siguiente comando ``npm create astro@latest``

2. Iniciar Astro en la terminal con el siguiente comando ``npm run dev``

## Tailwind CSS
Tailwind CSS es un frameworkde de clases para construir cualquier diseño web.

### Instalacion de Tailwind CSS

Ejecutar los siguientes comandos en la terminal:

1. ``npm install -D tailwindcss``
2. ``npx tailwindcss init``


## DaisyUI

DaisyUI es un plugin para Tailwind CSS que nos permite complementar las clases con componentes ya predefinidos.

- [DaisyUI](https://daisyui.com/)

### Instalacion de DaisyUI

1. Ejecutar en la terminal el comando ``npm i -D daisyui@latest``
2. instalar la extension del visual studio para tener la configuracion completa.

## React 

React es una biblioteca que permite crear componentes dinamicos para interfaces de usuario de web. 

- [React](https://es.react.dev/)


























   


   


