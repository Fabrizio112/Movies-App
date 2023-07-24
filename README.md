# Movies App maded with React

In this project was used hooks like **useState,useEffect,useContext** ,technologies like **HTML,CSS,Javascript,React,Sass**  and for routes managment **React Router**

 _This proyect was built with the purpose of practising React_

**_Note: Is resposive_**

<p align="center">
<img width="600px" heigth="600px" src="src/assets/gif-eating-popcorn-title.gif" alt="Michael eating Popcorn">
</p>

## How i thought about the project and its functioning

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


