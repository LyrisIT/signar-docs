# Introducción

Este instructivo explica cómo se utiliza el Firmador Integrable versión 3. Este software se ejecuta en la máquina del usuario, y se invoca desde la plataforma de Signar cada vez que el usuario desee firmar un documento. Puede requerir de la utilización de un token donde se almacena la clave del usuario y su correspondiente certificado de clave pública.

[[toc]]


## Requisitos

* Contar con un token y sus drivers instalados previamente (Ver Instructivo de Instalación de driver del token en Windows o solicitar a Lyris IT).
* Contar con el módulo del firmador descargado en su computadora, lo cual se indica a continuación.

## Descarga e instalación

Link de descarga: [https://firmador.signar.com.ar/FirmadorSignarIntegrable_Installer.exe](https://firmador.signar.com.ar/FirmadorSignarIntegrable_Installer.exe)

Se descarga el archivo en la carpeta de descargas del navegador. 
Dependiendo si el navegador es Firefox o Chrome, se visualiza de diferentes maneras una vez descargado

::: details Mozilla Firefox
**Si es Firefox**, aparece el siguiente botón en la barra de menú en la parte superior  donde debe presionar y abrir el archivo para ejecutar:

<img src='/images/firmadorint/firefox.png' />
:::

::: details Google Chrome
Si utiliza **Chrome** se visualiza lo siguiente en la parte superior derecha de la pantalla:

<img src='/images/firmadorint/chrome.png' />
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

<img src='/images/firmadorint/ejecutar_todas_formas.png' />


A continuación, se da inicio al asistente de instalación

<img src='/images/firmadorint/wizard_1.png' />

Presionar el botón **Siguiente**. y aceptar los términos del acuerdo.

<img src='/images/firmadorint/wizard_2.png' />


Elegir la carpeta de instalación y hacer click en **Instalar**

<img src='/images/firmadorint/wizard_3.png' />


Esta descarga se realiza si es la primera vez que se ejecuta el firmador.  En ejecuciones posteriores se puede omitir la descarga y desde la plataforma web de Signar se debería invocar automáticamente este firmador si fue seleccionado para su uso.


## Ejecución

El firmador se invoca desde la plataforma de Signar cuando se necesita subir recibos, firmar recibos o bien firmar algún documento del repositorio, y se haya elegido la opción de hacerlo con el **Firmador integrable v3**. Por el momento no puede ejecutarse de manera autónoma


Una vez iniciado el firmador integrable, se debe elegir el método de firma y en el caso que lo requiera, la clave. 
Al presionar el botón **Firmar** se firmarán los documentos y se subirán a la plataforma Signar

<div align="center">
<img :src="$withBase('/images/v14.6/firmador3_firmar_recibos.png')" alt="Firmar con firmador integrable v3">
</div>

La configuración de la firma y la ubicación, se determina en la configuración del módulo de recibos de la plataforma.
