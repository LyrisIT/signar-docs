# Introducción

Este instructivo explica cómo se utiliza el firmador de escritorio. Este software se ejecuta en la máquina del usuario, quién lo invoca desde su computadora para firmar un documento almacenado en la misma. Requiere de la utilización de un token donde se almacena la clave del usuario y su correspondiente certificado de clave pública.

| Version del documento | Fecha de publicación |
| --- | --- |
| 1.1 | 22/08/2021 |


[[toc]]


## Requisitos

* Contar con un token y sus drivers instalados previamente (Ver Instructivo de Instalación de driver del token en Windows o solicitar a Lyris IT)
* Contar con el módulo del firmador descargado en su computadora, lo cual se indica a continuación.

## Descarga e instalación

Para la instalación del firmador de escritorio, se puede hacer desde un navegador web, de dos formas:
1. Accediendo a [https://firmador.lyris.com.ar/](https://firmador.lyris.com.ar/) , donde se debe elegir la versión de su sistema operativo si es x32 o x64 y presionar el botón Descargar(beta) como se muestra en la siguiente imagen.

<img src='/images/firmador/image14.png' />

2. Luego aparece una ventana como la siguiente:

<img src='/images/firmador/image15.png' />

Se guarda el archivo y esperar varios minutos para que se termine de descargar y poder instalarlo.

Dependiendo si el navegador es Firefox o Chrome, se visualiza de diferentes maneras para descargarlo y ejecutarlo. 


::: details Mozilla Firefox
**Si es Firefox**, aparece el siguiente botón en la barra de menú en la parte superior  donde debe presionar y abrir el archivo para ejecutar

<img src='/images/firmador/image25.png' />
:::

::: details Google Chrome
Si utiliza **Chrome** se visualiza lo siguiente en la parte inferior de la pantalla:

<img src='/images/firmador/image12.png' />
:::

Una vez descargado, se puede ejecutar el archivo.

::: warning IMPORTANTE
El instalador debe ejecutarse con **privilegios de administrador**. De no ejecutarlo con privilegios de administrador, se muestra la siguiente imagen de privilegio de administrador:

<img src='/images/firmador/image22.png' />

**Por favor recuerde ejecutarlo con privilegios de administrador**
:::

En caso de que solicite permiso para ejecutar, se muestra una ventana como la siguiente, donde hay que presionar en **Más Información**:

<img src='/images/firmador/image26.png' />

Luego, presionar el botón ejecutar de todas formas.

<img src='/images/firmador/image30.png' />


A continuación, aceptar los términos del acuerdo.

<img src='/images/firmador/image28.png' />

Presionar el botón **Instalar**.

<img src='/images/firmador/image20.png' />

Una vez que se ha completado la instalación, se puede  cerrar la ventana.

<img src='/images/firmador/image2.png' />

En el escritorio aparece el icono de la aplicación, que es el siguiente:

<img src='/images/firmador/image8.png' />

Una vez instalado y por primera vez, el sistema realiza lo siguiente:

<img src='/images/firmador/image19.png' />

Y luego, abre la aplicación, mostrando lo siguiente:

<img src='/images/firmador/image9.png' />

<img src='/images/firmador/image7.png' />

En este caso, no se encuentra conectado el token, por lo que informa en la pantalla con el mensaje que se muestra en color rojo. Una vez conectado el mismo, se mostrará el mensaje “Token detectado” en color verde, como se aprecia en la siguiente imagen: 

<img src='/images/firmador/image13.png' />

Si se visualiza el mensaje “Token detectado”, significa que se han realizado correctamente los pasos de instalación de los drivers del mismo y que puede ser utilizado para firmar. 

::: danger IMPORTANTE
No retirar el token hasta terminar de utilizar el firmador
:::

Esta descarga se realiza si es la primera vez que se ejecuta el firmador.  En ejecuciones posteriores se puede omitir la descarga y ejecutar directamente desde el menú de inicio o escribiendo “Firmador Signar” en el buscador de windows, o desde el icono que se presentará en el escritorio que comentó anteriormente, tal como se indica a continuación.

## Ejecución

Cada vez que se quiere ejecutar el firmador, buscar la aplicación en el menú de inicio o escribiendo “Firmador Signar” en el buscador de windows, o desde el icono que se presentará en el escritorio que comentó anteriormente.

Tal como se indica a continuación y se ha detallado en el apartado anterior, si el token está conectado y previamente se ha instalado el driver del mismo, aparecerá la leyenda **Token detectado** en color verde. Si el software informa **Token no detectado** puede ser que el token no esté conectado o que el driver del token no esté correctamente instalado en su equipo.

<img src='/images/firmador/image29.png' />