export default function Header(){
  return (
    <div class="navbar">
      <div class="container">
        <LogoDesktop />
        <LogoIconMobile />
        <LogoMobile />
        <Search />
        <IconsDesktop />
        <IconsMobile />
      </div>
    </div>
  )
}

function LogoDesktop(){
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div class="separador"></div>
      <img src="./css/img/logo.png"  alt=""/>
    </div>
  )
}

function LogoIconMobile(){
  <div class="logo-mobile">
    <ion-icon name="logo-instagram"></ion-icon>
  </div>
}

function LogoMobile(){
  return (
    <div class="instagram-mobile">
      <img src="assets/img/logo.png" alt=""/>
    </div>
  )
}

function Search(){
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
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

function IconsMobile(){
  return (
    <div class="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  )
}
