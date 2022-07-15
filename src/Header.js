export default function Header(){
  return (
    <div class="headerResponsive">
      <div class="headerDesktop">
        <HeaderDesktop />
      </div>
      <div class="headerMobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./images/logo.png"/>
        <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    </div>

  )
}

function HeaderDesktop(){
  return(
    <div class="desktopContainer">
      <Logo />
      <Search />
      <Icons />
    </div>)
}

function Logo(){
  return (
    <div class="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div id="border-logo"></div>
      <img src="./css/images/logo.png" alt="sdas" />
    </div>)
}     

function Search(){
  return (
    <div class="search">
      <p>Pesquisar</p>
    </div>
  )
}
function Icons(){
  const iconsArray = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]
  return (
    <div class="icons">
      {iconsArray.map(icon => <ion-icon name={icon}></ion-icon>)}
    </div>
  )
}
