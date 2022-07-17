export default function Sidebar(){
  return (
    <div class="sidebar">
      <UserSuggestion img="./css/img/catanacomics.svg" user="catanacomics" name="Catana"/>
      <OtherSuggestion />
      <SidebarFooter class="links" text="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma" />
      <SidebarFooter class="copyright" text="© 2021 INSTAGRAM DO FACEBOOK" />
    </div>
  )
}

function UserSuggestion(props){
  return(
    <div class="usuario">
      <img src={props.img}  alt=""/>
      <div class="texto">
        <strong>{props.user}</strong>
        {props.name}
      </div>
    </div>
  )
}

function OtherSuggestion(){
  const suggestionsArray = [
    {img: "./css/img/bad.vibes.memes.svg", name: "bad.vibes.memes", status: "Segue você"},
    {img: "./css/img/chibirdart.svg", name: "chibirdart", status: "Segue você"},
    {img: "./css/img/razoesparaacreditar.svg", name: "razoesparaacreditar", status: "Novo no Instagram"},
    {img: "./css/img/adorable_animals.svg", name: "adorable_animals", status: "Segue você"},
    {img: "./css/img/smallcutecats.svg", name: "smallcutecats", status: "Segue você"},
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestionsArray.map((suggestion) => <Suggestion img= {suggestion.img} name= {suggestion.name} status= {suggestion.status} />)}

    </div>
  )
}

function Suggestion(props){
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img}  alt=""/>
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  )
}

function SidebarFooter(props){
  return (
    <div class={props.class}>
      {props.text}
    </div>
  )
}