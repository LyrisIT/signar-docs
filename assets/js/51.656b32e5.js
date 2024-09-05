(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{478:function(a,e,r){"use strict";r.r(e);var t=r(12),s=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"version-14-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#version-14-2"}},[a._v("#")]),a._v(" Versión 14.2")]),a._v(" "),e("p",[a._v("Esta nueva versión fue destinada principalmente a la corrección de errores menores y mejorar la experiencia de usuario en la plataforma. A continuación se destacan los cambios más importantes:")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#cambios-al-crear-una-nueva-carpeta"}},[a._v("Cambios al crear una nueva carpeta "),e("Badge",{attrs:{type:"warning",text:"IMPORTANTE",vertical:"middle"}})],1)]),e("li",[e("a",{attrs:{href:"#abrir-el-menu-contextual-sobre-la-carpeta-actual"}},[a._v("Abrir el menú contextual sobre la carpeta actual "),e("Badge",{attrs:{type:"tip",text:"NUEVO",vertical:"middle"}})],1)]),e("li",[e("a",{attrs:{href:"#errores-solucionados"}},[a._v("Errores solucionados")]),e("ul",[e("li",[e("a",{attrs:{href:"#intentar-asignar-un-permiso-a-un-usuario-deshabilitado"}},[a._v("Intentar asignar un permiso a un usuario deshabilitado")])]),e("li",[e("a",{attrs:{href:"#eliminar-una-carpeta-dentro-de-si-misma"}},[a._v("Eliminar una carpeta dentro de sí misma")])]),e("li",[e("a",{attrs:{href:"#error-incorrecto-al-no-tener-permisos-suficientes-para-crear-una-carpeta"}},[a._v("Error incorrecto al no tener permisos suficientes para crear una carpeta")])]),e("li",[e("a",{attrs:{href:"#mostrar-el-boton-de-descargar-acta-de-alta-en-la-vista-de-certificados"}},[a._v("Mostrar el botón de 'Descargar acta de alta' en la vista de Certificados")])])])]),e("li",[e("a",{attrs:{href:"#changelog-extendido"}},[a._v("Changelog extendido")])])])]),e("p"),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("¿Encontraste algún error?")]),a._v(" "),e("p",[a._v("Podés contactarnos a través de nuestro "),e("a",{attrs:{href:"https://soporte-lyris.atlassian.net/servicedesk/customer/portals",target:"_blank",rel:"noopener noreferrer"}},[a._v("Centro de ayuda de Lyris IT"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"cambios-al-crear-una-nueva-carpeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cambios-al-crear-una-nueva-carpeta"}},[a._v("#")]),a._v(" Cambios al crear una nueva carpeta "),e("Badge",{attrs:{type:"warning",text:"IMPORTANTE",vertical:"middle"}})],1),a._v(" "),e("p",[a._v("Previamente, al crear una nueva carpeta, el usuario era redirigido dentro de la misma automáticamente. Esto provocaba una experiencia de usuario menos satisfactoria, sobre todo si se deseaba crear un esquema de carpetas con múltiples en un mismo nivel. Ahora, al realizar esta acción, el usuario no es redirigido dentro de la carpeta, sino que "),e("strong",[a._v("permanece en la misma sobre la que ejecutó la acción")]),a._v(". Esto es útil para crear varias carpetas en un mismo nivel. Si se desea ingresar a la carpeta creada, puede hacer doble clic sobre el nombre de la misma. También se selecciona automáticamente, para dar la posibilidad de cambiarle el nombre rápidamente.")]),a._v(" "),e("p",[a._v("Como pequeña mejora se agregó un atajo de teclado "),e("strong",[a._v("(Shift + F)")]),a._v(" para crear una carpeta más rápidamente, sin necesidad de utilizar el mouse.")]),a._v(" "),e("p",[a._v("Por ejemplo, si se posiciona sobre una carpeta cualquiera y presiona el atajo Shift + F:")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/images/v14.2/sobre_carpeta_padre.webp"),alt:"Posicionado sobre una carpeta padre"}}),a._v(" "),e("p",[a._v("Luego, escribe un nombre para la nueva carpeta y presiona la tecla Enter:")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/images/v14.2/creando_carpeta_hija.webp"),alt:"Escribir nombre de la nueva carpeta"}}),a._v(" "),e("p",[a._v("Podrá verificar que la nueva carpeta se crea y se selecciona automáticamente:")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/images/v14.2/carpeta_hija_creada.webp"),alt:"Nueva carpeta creada y seleccionada"}}),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("IMPORTANTE")]),a._v(" "),e("p",[a._v("Contáctese con Lyris IT para la activación del módulo 'Repositorio'.")])]),a._v(" "),e("h2",{attrs:{id:"abrir-el-menu-contextual-sobre-la-carpeta-actual"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abrir-el-menu-contextual-sobre-la-carpeta-actual"}},[a._v("#")]),a._v(" Abrir el menú contextual sobre la carpeta actual "),e("Badge",{attrs:{type:"tip",text:"NUEVO",vertical:"middle"}})],1),a._v(" "),e("p",[a._v("En versiones anteriores no era posible abrir el menú contextual sobre la carpeta actual. Ahora, al hacer clic derecho sobre ésta, se desplegará el menú contextual con las opciones disponibles y podrá realizar las acciones correspondientes (según su nivel de permiso sobre la carpeta).")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:a.$withBase("/images/v14.2/menu_contextual_sobre_carpeta_actual.webp"),alt:"Menú contextual sobre la carpeta actual"}})]),a._v(" "),e("h2",{attrs:{id:"errores-solucionados"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#errores-solucionados"}},[a._v("#")]),a._v(" Errores solucionados")]),a._v(" "),e("p",[a._v("A continuación se detallan los errores solucionados en esta versión:")]),a._v(" "),e("h3",{attrs:{id:"intentar-asignar-un-permiso-a-un-usuario-deshabilitado"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intentar-asignar-un-permiso-a-un-usuario-deshabilitado"}},[a._v("#")]),a._v(" Intentar asignar un permiso a un usuario deshabilitado")]),a._v(" "),e("p",[a._v("Previamente al buscar un usuario, a la hora de asignar un permiso o cambiar de propietario un archivo, la lista de usuarios mostraba a los deshabilitados. Ahora, si un usuario está dado de baja, no aparecerá disponible para asignarle permisos.")]),a._v(" "),e("h3",{attrs:{id:"eliminar-una-carpeta-dentro-de-si-misma"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eliminar-una-carpeta-dentro-de-si-misma"}},[a._v("#")]),a._v(" Eliminar una carpeta dentro de sí misma")]),a._v(" "),e("p",[a._v("Si se intentaba eliminar una carpeta dentro de sí misma, no se redirigía al usuario a la carpeta padre, lo que provocaba un error visual. Ahora, si se elimina una carpeta dentro de sí misma, se redirige al usuario a la carpeta padre inmediata. También se agregaron mensajes de confirmación para evitar la eliminación accidental de carpetas y atajos de teclado para confirmar o cancelar la acción más rápidamente.")]),a._v(" "),e("h3",{attrs:{id:"error-incorrecto-al-no-tener-permisos-suficientes-para-crear-una-carpeta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-incorrecto-al-no-tener-permisos-suficientes-para-crear-una-carpeta"}},[a._v("#")]),a._v(" Error incorrecto al no tener permisos suficientes para crear una carpeta")]),a._v(" "),e("p",[a._v("Se mostraba un error incorrecto cuando no se contaba con el nivel de permiso suficiente para crear una carpeta dentro de otra. Ahora, el botón de 'Crear carpeta' estará deshabilitado en función del nivel de permisos del usuario que ejecuta la acción. También se extendió este comportamiento al resto de botones de creación (documento y serie documental).")]),a._v(" "),e("h3",{attrs:{id:"mostrar-el-boton-de-descargar-acta-de-alta-en-la-vista-de-certificados"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mostrar-el-boton-de-descargar-acta-de-alta-en-la-vista-de-certificados"}},[a._v("#")]),a._v(" Mostrar el botón de 'Descargar acta de alta' en la vista de Certificados")]),a._v(" "),e("p",[a._v("Existía un botón en el apartado de Certificados que indicaba que se podía descargar el acta de alta, pero esta acción sólo la podrá realizar un usuario OR o de Lyris IT. Si necesita el acta de alta de su certificado de firma electrónica tendrá que hacer el pedido a alguno de éstos.")]),a._v(" "),e("h2",{attrs:{id:"changelog-extendido"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog-extendido"}},[a._v("#")]),a._v(" Changelog extendido")]),a._v(" "),e("ul",[e("li",[a._v("Se solucionó un problema menor relacionado con funciones administrativas de Lyris IT sobre la plataforma. El cambio no impacta a los usuarios actuales.")]),a._v(" "),e("li",[a._v("Se solucionó un problema en el que se permitía asignar permisos a un usuario dado de baja. Ahora, si un usuario está dado de baja, no se le pueden asignar permisos de ningún tipo.")]),a._v(" "),e("li",[a._v("Se solucionó un problema visual, que estaba relacionado con crear una carpeta dentro de otra sobre la que no se tenía un nivel de permiso suficiente. Ahora, si no se posee este nivel de permiso, el botón de 'Crear carpeta' estará deshabilitado. También se extendió este comportamiento al resto de botones.")]),a._v(" "),e("li",[a._v("Se quitó el botón de 'Descargar acta de alta' de la vista de Certificados, ya que esta acción sólo la podrá realizar un usuario OR o de Lyris IT. Si necesita su certificado de firma electrónica tendrá que hacer el pedido a alguno de éstos.")]),a._v(" "),e("li",[a._v("Se solucionó un problema en el que si se eliminaba una carpeta dentro de sí misma, no se redirigía al usuario a la carpeta padre, lo que provocaba un error visual. Ahora, si se elimina una carpeta dentro de sí misma, se redirige al usuario a la carpeta padre inmediata.")]),a._v(" "),e("li",[a._v("Se renovó una funcionalidad básica del repositorio, la cual es 'Crear carpeta'. Ahora, si se crea una nueva carpeta, el usuario no es redirigido dentro de ésta automáticamente, sino que permanece en la carpeta en la que estaba. Esto es útil para crear varias carpetas en un mismo nivel. Si se desea ingresar a la carpeta creada, puede hacer doble clic sobre el nombre de la misma.")]),a._v(" "),e("li",[a._v("SIGNAR-552: Quitar los espacios innecesarios a los datos de los usuarios una vez que fueron creados")]),a._v(" "),e("li",[a._v("SIGNAR-554: Permitir abrir el menú contextual sobre la carpeta actual")]),a._v(" "),e("li",[a._v("SIGNAR-566: Quitar botón 'Acciones' de la barra de selección de documentos para escritorio")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("¿Encontraste algún error?")]),a._v(" "),e("p",[a._v("Podés contactarnos a través de nuestro "),e("a",{attrs:{href:"https://soporte-lyris.atlassian.net/servicedesk/customer/portals",target:"_blank",rel:"noopener noreferrer"}},[a._v("Centro de ayuda de Lyris IT"),e("OutboundLink")],1),a._v(".")])])])}),[],!1,null,null,null);e.default=s.exports}}]);