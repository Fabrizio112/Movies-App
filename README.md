# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>


## 🎬 <i align="center" style="font-size:2rem">APP DE PELICULAS DESARROLLADA  CON REACT</i>

En este proyecto se usaron hooks como **useState,useEffect,useContext** , tenologias como  **HTML,CSS,Javascript,React,Sass** y para el manejo de rutas **React Router**

 _Este proyecto fue construido con el proposito de practicar React_

**Nota: Es responsivo**
<p align="center">
<img width="600px" heigth="600px" src="src/assets/minions-shh.gif" alt="Michael eating Popcorn">
</p>

## 💡 Como se penso este proyecto y como funciona

**_Idea Principal: Una app de peliculas con una barra de busqueda_**

La api que se utilizo fue : [TvMaze](https://www.tvmaze.com/
)

Primero que nada , queria realizar lo mencionado anteriormente en la idea principal. En la barra de busqueda queria que el usuario escriba algo alli y aparezca en pantalla el show buscado. Al aparecer los shows en pantalla , el usuario puede hacer click en ellos par poder ver mas informacion sobre ellos. 

Primero comence haciendo la barra de busqueda. Me enfoque mucho en su funcionamiento que es lo mas "complicado" y lo principal de la app. Use un "context" para poder manejar el estado y lo llame a este estado principal **_"search"_**.

Cada caracter que el ususario escriba , se realizara una peticion que va a traer los shows/peliculas que sean mas coherentes con la busqueda que se realizo o con lo que posea la barra de busqueda en ese momento. Los resultado se van a almacenar en un nuevo estado llamado **"shows"**.

Con la informacion contenida dentro del estado "shows" , se renderizaran en pantalla las diferentes peliculas.

Si el usuario quiere conocer mas sobre algun show/pelicula como mencione al principio puede realizar click  en el boton "ver mas" para ver mas informacion. Esto va a hacer que el show se almacene en un nuevo estado llamado   **_Showselected_**.

Con la informacion contenida dentro del estado "ShowSelected"
se renderizara en pantalla la informacion individual del show/pelicula.

Nota: Tuve un problema que cuando el usuario recargaba la pagina mientras se encontraba mirando la informacion de un show , el contenido se perdia por completo . Por lo tanto decidi almacenar la informacion del ultimo show/pelicula visto en el Local Storage.

Para los estilos utilice SASS por que me siento muy comodo trabajando con el y es muy eficiente a mi punto de vista.


--------------------------------------------------------
--------------------------------------------------------


# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span  style="font-size:3rem">ENGLISH:</span>

## 🍿 <i align="center" style="font-size:2rem">MOVIES APP MADE WITH REACT</i>

In this project was used hooks like **useState,useEffect,useContext** ,technologies like **HTML,CSS,Javascript,React,Sass**  and for routes managment **React Router**

 _This proyect was built with the purpose of practising React_

**_Note: Is resposive_**

<p align="center">
<img width="600px" heigth="600px" src="src/assets/gif-eating-popcorn-title.gif" alt="Michael eating Popcorn">
</p>

## 🤔 How i thought about the project and its functioning

**_Main Idea: Movies App with a search bar_**


The Api used was : [TvMaze](https://www.tvmaze.com/
)

First of all, I wanted an Movies/Shows App with a search bar that while User writes anything into it , the shows appear in  screen. Also when shows appear ,user can click in the show that user likes and show more info about it

First that i made was Search Bar . I focus on it functioning because it is the most "dificult" and main part in whole app. So I used a context for handle the general state that i called "search"

Every character that user writes ,will  prompt a fetch where it fetch will bring shows/movies that are  more in line whit the contain into the navbar/state of the app.This results will storage in a new State called "Shows"

With the information contained into the "Shows" state ,be will render  the show cards

If the user wants to know more about any show , user clicks "view more" .It will cause that clicked show is stored in a new state called "ShowSelected"

With the information contained into the "ShowSelected" state, be will render the  individual information page  about the show.

Note: I had the problem that if user reloaded the page while user is in the individual information page ,content lost.So I decided store all the information about last show that the user clicks, in the Local Storage

For styles i used SASS because it is a very confortable and eficient tool for me


