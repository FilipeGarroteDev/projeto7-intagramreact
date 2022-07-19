import React from "react"

export default function Stories(){
  const storiesArray = [
    {img:"./css/img/9gag.svg", user: "9gag"},
    {img:"./css/img/meowed.svg", user: "meowed"},
    {img:"./css/img/barked.svg", user: "barked"},
    {img:"./css/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
    {img:"./css/img/wawawicomics.svg", user: "wawawicomics"},
    {img:"./css/img/respondeai.svg", user: "respondeai"},
    {img:"./css/img/filomoderna.svg", user: "filomoderna"},
    {img:"./css/img/memeriagourmet.svg", user: "memeriagourmet"},
  ]
  return (
    <div class="stories">
      {storiesArray.map((storie) => <Storie img= {storie.img} user= {storie.user} />)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Storie(props){

  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img}  alt=""/>
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  )
}