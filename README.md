# Movies App maded with React

In this project was used hooks like **useState,useEffect,useContext** ,technologies like **HTML,CSS,Javascript,React,Sass**  and for routes managment **React Router**

 _This proyect was built with the purpose of practising React_

**_Note: Is resposive_**
## How i thought about the project and its functioning

**_Main Idea: Movies App with a search bar_**

La API que utilice para este proyecto fue : [TvMaze]("https://www.tvmaze.com/")

Primero que nada ,queria hacer una aplicacion de peliculas/shows que tenga una barra de busqueda y que al escribir algo en ella , vayan apareciendo los resultados en la pantalla. Y ademas queria que cuando aparezcan pudieras entrar a la pelicula/show que te interese y obtener mas informacion de esta


Lo primero que construi fue la Barra de Busqueda y me enfoque en su funcionamiento , ya que es lo mas "complicado" de toda la app y lo principal. Utilize un contexto para poder manejar el estado general de la aplicacion, y al estado general lo llame "search"

Cada caracter que se escriba en la barra de busqueda va a provocar que se realice una peticion y se traigan los shows/peliculas que sean mas acordes a lo que posea la barra de busqueda/estado de la App , y estos resultados se almacenan en un nuevo estado llamado "Shows" .

Con la informacion del estado "Shows" se renderizan las diferentes cards de cada show.

Si el usuario desea conocer mas sobre ese show , clickea el "view more" .Se almacena el show seleccionado en un estado llamado "ShowSelected" .

COn la informacion del "ShowSelected" se renderiza la page de la informacion individual del Show.

Note: Tenia el problema de que si el usuario se encontraba en la pagina individual del show y recargaba se perdia el contenido . Asi que decidi almacenar en Local Storage la informacion del ultimo show que visita el usuario.

Para los estilos utilice SASS , ya que es una herramienta que me resulta muy comoda y eficiente de utilizar.

![Michael eating popcorn](./Movie/src/assets/gif-eating-popcorn-title.gif)