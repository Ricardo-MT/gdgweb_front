# Descripción del repositorio.

Este repositorio contiene el proyecto web encargado de implementar el frontend del portal web de la comunidad GDG Algeciras. Está basado en React (y en un futuro apoyado por Nextjs), concretamente usando Create-React-App, y para el backend usamos el conjunto de herramientas formado por MongoDB, NodeJs y Express.

## Configuración del editor (VSCode)

Para una mejor experiencia con la refactorización del código y recomendaciones, instalar las extensiones "Prettier - Code formatter" y "ESLint" de VSCode.

El objetivo es conseguir un alto standard de calidad y legibilidad del código. De esta manera distintos desarrolladores podrán colaborar más eficientemente.

El código debe estar correctamente formateado antes de enviarlo a GitHub. Para eso se debe ejecutar el npm script "prettier", o incluso mejor, configurar el archivo "settings.json" del VSCode para que al guardar un archivo formatee el código automáticamente. Este es el archivo de preferencias de VSCode, se accede con el siguiente comando: 

Ctrl + Shift + P > Preferences Open User settings (JSON)

Este repositorio se configuró con la siguiente configuración del "settings.json":

```json
{
  ... Other configurations,
  "typescript.format.insertSpaceAfterCommaDelimiter": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace",
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.guides.bracketPairs": true,
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false
  }
}
```

## Antes de comenzar

Antes de comenzar será necesario crear un archivo .env (Archivo de configuración de variables) en el root directory. En este archivo tendremos que poner las siguientes variables como mínimo:

- REACT_APP_API_URL

El valor de dichas variables será provisto por privado.

## Una vez tenemos el proyecto configurado.

### Instalar en tu ordenador NODE

Instalar Node: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).\

### Ejecutar comando para instalar los paquetes

En el directorio raiz, ejecutar el comando "npm install".

### Ejecutar comandos para correr la web

Para arancar el frontend, en la terminal moverse a la carpeta raiz y correr el siguiente comando:

### `npm start`

## Estructura del repositorio

En principio el repositorio cuenta con dos carpetas principales: **app** y **services**. Se podrán crear carpetas auxiliares siempre que tenga sentido.

### root/app

En esta carpeta habrán dos carpetas: **components** y **pages**.

En **components** irán todos los componentes de react comunes para varias vistas.

**pages** tendrá un árbol de carpetas y archivos que tratará de simular la misma estructura de navegación de la web. Es decir, si la web tiene 3 apartados principales "Home", "Acerca de" y "Contacto", entonces esta carpeta **pages** tendrá 3 subcarpetas "home", "acerca_de" y "contacto".

Cada una de estas subcarpetas tendrá todos los ficheros que dicha página en particular necesite para su funcionamiento: hooks, contextos, componentes de react, etc.

### root/services

En esta carpeta habrán como mínimo dos carpetas: **api** y **utils**.

En **api** irán toda la configuración del cliente http encargado de hacer las requests a servicios externos, así como la configuración e implementación de los endpoints.

En **utils** irán módulos de utilidades, o cualquier otro servicio/lógica que no esté atada a una vista en particular.

## Flujo de git

**IMPORTANTE**

Nunca se trabajará directamente sobre la rama **develop** o **main**.

Nunca se hará un push directamente a la rama **main**.

Cada vez que querramos implementar una funcionalidad se seguirán los siguientes pasos:

- Checkout en la rama **develop**
- Fetch origin para traer los cambios en remoto
- Pull si hay cambios
- Crear rama a partir de **develop** con nombre **feature/nombre-descriptivo-de-la-funcionalidad**
- Trabajar sobre esa rama
- Cuando se termine, publicar la rama **feature/nombre-descriptivo-de-la-funcionalidad**
- Checkout nuevamente en la rama **develop**
- Crear rama a partir de **develop** con nombre **merge/feature/nombre-descriptivo-de-la-funcionalidad**
- Mergear **feature/nombre-descriptivo-de-la-funcionalidad** into **merge/feature/nombre-descriptivo-de-la-funcionalidad**
- Resolver los conflictos que tenga **merge/feature/nombre-descriptivo-de-la-funcionalidad**
- Mergear **merge/feature/nombre-descriptivo-de-la-funcionalidad** into **develop**

**IMPORTANTE**

Una vez que se haga el merge a **develop** final, no se vuelve a trabajar en esa rama.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
