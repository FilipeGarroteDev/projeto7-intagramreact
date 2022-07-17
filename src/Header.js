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
        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
        <IconsMobile class="icones-mobile" icon="paper-plane-outline"/>
      </div>
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
