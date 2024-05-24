# Calculadora

## Descripción

Esta es una calculadora básica. Esta calculadora utiliza `electron` y `vite`, pero con `electron-vite` se puede configurar todos los archivos `vite` en un solo archivo de configuración. También se utiliza `electron-builder` para construir los binarios.

## Desarrollo

Instala las dependencias antes de ejecutar los otros scripts:

```
npm install
```

Para probar la aplicación en modo desarrollo puedes ejecutar el siguiente script:

```
npm run start
```

Para visualizar el resultado en modo producción, ejecuta el siguiente script:

```
npm run preview
```

## Compilar

**Nota:**

Hice una configuración simple con `electron-builder`, usted puede modificar esto a sus necesidades en el siguiente archivo: [electron-builder.yml](./electron-builder.yml)

Para constuir los binarios (esto genera una carpeta _`dist`_), utiliza el siguiente script:

```
npm run make
```
