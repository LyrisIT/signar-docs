# signar-docs

> El siguiente repositorio está hecho con VuePress v1.x y con el mismo publicamos el sitio web de documentación de Signar de Lyris IT que se provee a nuestros clientes: https://docs.signar.com.ar

## Pre-requisitos

Para poder ejecutar el proyecto, es necesario tener instalado:
- NodeJS v10.x+

## Instalacion

Para instalar las dependencias, ejecutar el siguiente comando:

```bash
npm install
```

## Development

Para ejecutar el proyecto en modo desarrollo, ejecutar el siguiente comando:

```bash
npm run dev
```

## Buildear

Para generar el sitio web estático, ejecutar el siguiente comando:

```bash
npm run build
```

## Publicar una nueva version

Para publicar una nueva version, primero commitear a `master` los cambios que se desean publicar. Si se desarrollo en otra rama, recordar hacer un merge a `master` antes de continuar.

Luego, sobre `master`, hay que crear un nuevo tag.

Para ver la lista de tags disponibles, se puede ejecutar:

```bash
git tag -l
```

Para crear un nuevo tag, ejecutar:

```bash
git tag 1.2
```

Luego hay que pushear el tag al repositorio remoto:

```bash
git push --tags
```

Luego Github correrá el workflow de CI/CD y publicará la nueva versión en https://docs.signar.com.ar


