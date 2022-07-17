export default function Header(){
  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="./css/img/logo.png"  alt=""/>
        </div>
        <IconsMobile class="logo-mobile" icon="logo-instagram"/>
        <div class="instagram-mobile">
          <img src="assets/img/logo.png" alt=""/>
        </div>
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <IconsDesktop />
        <IconsMobile class="icones-mobile" icon="paper-plane-outline"/>
      </div>
    </div>
  )
}

function IconsDesktop(){
  const iconsArray = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
  return (
    <div class="icones">
      {iconsArray.map((element) => <ion-icon name={element}></ion-icon>)}
    </div>
  )
}

function IconsMobile(props){
  return (
    <div class={props.class}>
      <ion-icon name={props.icon}></ion-icon>
    </div>
  )
}
