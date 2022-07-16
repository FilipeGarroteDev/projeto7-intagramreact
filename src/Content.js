
export default function Content(){
  return (
    <div class="corpo">
        <MainContent />

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg"  alt=""/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg"  alt=""/>
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/chibirdart.svg"  alt=""/>
                <div class="texto">
                  <div class="nome">chibirdart</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/razoesparaacreditar.svg"  alt=""/>
                <div class="texto">
                  <div class="nome">razoesparaacreditar</div>
                  <div class="razao">Novo no Instagram</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/adorable_animals.svg"  alt=""/>
                <div class="texto">
                  <div class="nome">adorable_animals</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/smallcutecats.svg"  alt=""/>
                <div class="texto">
                  <div class="nome">smallcutecats</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
  )
}

function MainContent(){
  return (
  <div class="esquerda">
    <Stories />
    <Posts />
  </div>
)
}

function Stories(){
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
      {storiesArray.map((storie) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={storie.img}  alt=""/>
            </div>
            <div class="usuario">
              {storie.user}
            </div>
          </div>
        )
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Posts(){
  const postsArray = [
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
    {profileImg: "./css/img/meowed.svg", user: "meowed", postImg: "./css/img/gato-telefone.svg", likeImg: "./css/img/respondeai.svg", likeProfile: "respondeai", totalLikes: "outras 101.523 pessoas"},
  ]
  return(
    <div class="posts">
      {postsArray.map((post) => {
        return (
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={post.profileImg}  alt=""/>
                {post.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={post.postImg}  alt=""/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={post.likeImg}  alt=""/>
                <div class="texto">
                  Curtido por <strong>{post.likeProfile}</strong> e <strong>{post.totalLikes}</strong>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  ) 
}