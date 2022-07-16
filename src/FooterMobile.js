export default function App(){
  const footerIconsArray = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
  return (
    <div class="fundo-mobile">
      {footerIconsArray.map((icon) => <ion-icon name={icon}></ion-icon>)}
    </div>
  )
}