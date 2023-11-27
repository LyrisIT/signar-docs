# Configurar Firma

| Versión del documento | Fecha de publicación |
| --- | --- |
| 1.1 | 22/08/2023 |

Esta ventana tiene dos pestañas superiores, indicando el tipo de firma a aplicar, **Tipo de firma PDF o XML**. 

Para más información sobre los tipos de firma, ver [Tipos de firma](/firmador/tipos.md)


[[toc]]

## Firma PDF

En este caso, se tienen nuevas opciones, tal como se muestra a continuación:

<img src='/images/firmador/image21.png' />

### Firma invisible

Si el usuario marca esta opción se firmará el documento, pero no podrá visualizar la leyenda de la firma. 

En este caso, el software con el que se abra el documento firmado, indica que se ha aplicado una firma digital ya que detecta la firma aplicada y realiza la verificación pero la visualización del documento es idéntica al original ya que no se aplica ninguna leyenda que indique que está firmado.

### Firma visible

Si no se marca la opción de Firma invisible, se considera firma visible, por lo cual al firmar, el sistema agrega una hoja al final con la leyenda de la o las firmas aplicadas sobre el documento. En tal caso, hay dos opciones:

  * **Firma en hoja nueva**, lo que hará es agregarle al final del archivo una hoja con la leyenda Firma del Documento, y el nombre de la persona que ha firmado digitalmente.
  * **Firma en hoja existente**, permite configurar la firma en la primera o última hoja del documento, como también elegir en qué posición debe ubicarse la firma en la hoja, las opciones disponibles son: *Superior izquierda / Superior centro / Superior derecha / Inferior izquierda / Inferior centro / Inferior derecha*

<img src='/images/firmador/image27.png' />

### Adjuntar imagen

::: warning IMPORTANTE
Solo posible en caso de firma en hoja existente
:::

En caso de haber seleccionado **“Firma en hoja existente”** se permite adjuntar imagen junto a la firma, por ejemplo el logo de la empresa, tildar la opción “Adjuntar imagen” y seleccionar la ubicación de la imagen para adjuntar. En caso de no querer adjuntar una imagen, dicho casillero no debe tener tilde.

Además, indicar la posición de ubicación de la misma respecto a la firma, “superpuesta”, “arriba” o “abajo”.

<img src='/images/firmador/image17.png' />

#### Modificar imagen

Cuando sea necesario cambiar la imagen, se puede realizar presionando directamente el botón [+] o desde  “limpiar”, esto  eliminará la imagen asociada y permite volver a seleccionar una nueva.

<img src='/images/firmador/image23.png' />

::: tip NOTA
La imagen que se adjunta se ajusta en forma automática al realizar el proceso de firma. Además, la misma queda pre-determinada para todo tipo de documento que se firme.
:::

### Fuente

Permite seleccionar una de las tres opciones de fuente de los tipos de letra disponibles para la leyenda que llevará la Firma Digital: *Helvetica, Courier o Times New Roman.*

## Firma XML

Se visualizan las siguientes opciones:

<img src='/images/firmador/image18.png' />

Se sugiere seleccionar la opción `Detached`. 

::: tip
Consultar técnicamente a un informático en caso de querer aplicar la firma XML
:::