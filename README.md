# gestor-multimedia
dentro de este repositorio se encuentra la practica final del laboratorio de ingenieria de software
Teniendo en cuenta las funcionalidades obligatorias y opcionales planteadas para el proyecto he creado un sitio web con acceso autenticado que consta de 2 partes, la parte 1 es la del usuario con rol de administrador quien puede crear, seleccionar, editar y eliminar videos, categorias y usuarios de la pagina con las credenciales:
## Usuario: 
admin@edu.upct.co
## Contraseña:  practica_final
y en la parte 2 del proyecto he creado un usuario que al autenticarse puede ver todos los videos por categoria con las siguientes credenciales:
## Usuario: 
user@edu.upct.co
## Contraseña: practica_final

como parte de seguridad del sitio se ha implementado JWT (Json Web Tokens) el cual se crea al verificar el usuario en el inicio de sesión, se almacena en la base de datos para registrar la sesión del usuario y posteriormente por medio del localstorage se almacena para ser enviado en la cabecera de la solicitud HTTP para cada funcionalidad, en general la gestión del CRUD y el inicio y cierre de sesión se maneja utilizando angularJS, una base de datos SQL y el servidor node JS junto con la herramienta express js, en la carpeta diagramas se plasma un poco de la interacción de las herramientas junto con el diseño de la base de datos. 

