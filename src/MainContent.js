import React from "react";

export default function MainContent(){
  return (
  <div class="esquerda">
    <StoriesContainer />
    <PostsContainer />
  </div>
)
}

function StoriesContainer(){
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

function PostsContainer(){
  const postsArray = [
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/perfil1.png", user: "garrote94", postImg: "./css/img/viagem3.png", likeImg: "./css/img/curtida3.png", likeProfile: "lele_piratinha", totalLikes: "outras 511.147 pessoas"},
    {profileImg: "./css/img/perfil1.png", user: "garrote94", postImg: "./css/img/viagem5.png", likeImg: "./css/img/chibirdart.svg", likeProfile: "chibirdart", totalLikes: "outras 10.560 pessoas"},
    {profileImg: "./css/img/barked.svg", user: "barked", postImg: "./css/img/dog.svg", likeImg: "./css/img/adorable_animals.svg", likeProfile: "adorable_animals", totalLikes: "outras 99.159 pessoas"},
    {profileImg: "./css/img/perfil1.png", user: "garrote94", postImg: "./css/img/viagem7.png", likeImg: "./css/img/razoesparaacreditar.svg", likeProfile: "razoesparaacreditar", totalLikes: "outras 783.403 pessoas"},
    {profileImg: "./css/img/perfil2.png", user: "turistando", postImg: "./css/img/viagem1.jpg", likeImg: "./css/img/smallcutecats.svg", likeProfile: "smallcutecats", totalLikes: "outras 1.503 pessoas"},
  ]

  return(
    <div class="posts">
      {postsArray.map((post) => <Post profileImg= {post.profileImg} user= {post.user} postImg= {post.postImg} likeImg= {post.likeImg} likeProfile= {post.likeProfile} totalLikes= {post.totalLikes}/>)}
    </div>
  ) 
}

function Post(props){
  const [likeColor, setLikeColor] = React.useState("md hydrated unliked")
  const [iconName, setIconName] = React.useState("heart-outline")

  return (
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.profileImg}  alt=""/>
        {props.user}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.postImg}  alt="" onClick={() => {
            if (likeColor === "md hydrated unliked"){
              setLikeColor("md hydrated liked")
              setIconName("heart")
            }
            }
            }/>
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name={iconName} class={likeColor} onClick={() => {
            if (likeColor === "md hydrated unliked"){
              setLikeColor("md hydrated liked")
              setIconName("heart")
            } else {
              setLikeColor("md hydrated unliked")
              setIconName("heart-outline")
            }
            }
            }></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.likeImg}  alt=""/>
        <div class="texto">
          Curtido por <strong>{props.likeProfile}</strong> e <strong>{props.totalLikes}</strong>
        </div>
      </div>
    </div>
  </div>
  )
}