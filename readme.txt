A continuación, ejecutamos los comandos:

git init

git add .


numero 2 Creamos un primer commit del estado del proyecto con el comando:

git commit -m "comienzo del proyecto"


numero 3 Nos dirigimos a la web de GitHub y creamos el repositorio con el nombre que queramos. A continuación, copiamos la URL del repositorio para usarla en el siguiente paso.


numero 4 En el Terminal de Visual Studio Code ejecutamos el siguiente comando cambiando la url del ejemplo por la nuestra.

git remote add origin https://github.com/PCSolucion/Green-Purple.git


numero 5 Para finalizar, ejecutamos los siguientes comandos también desde la Terminal de Visual Studio Code:

git branch -M master

git push -u origin master