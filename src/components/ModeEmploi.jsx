const TextCard = (props) => {
  return (
    <div id="TextCard">
      <h2 className="title">
        <span>{props.title}</span>
      </h2>
      <div className="text">
        <div style={{ whiteSpace: "pre-wrap" }}>
          <p>{props.text}</p>
        </div>
      </div>
      <button className="discover-button">Découvrir</button>
    </div>
  );
};

const ImageCard = (props) => {
  return (
    <div id="ImageCard" className={props.right && "right"}>
      <img className="image" src={props.image} alt="card-image" />
      <div className="img-card MuiBox-root MuiBox-root-5 shadow-6dp">
        <div className="text">{props.text}</div>
        <div className="profil">
          <div className="profil-img">
            <img src={props.profil} alt="profil"></img>
          </div>
          <div>
            <div className="title">{props.title}</div>
            <div className="sub-title">{props.subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModeEmploi = (props) => {
  return (
    <div id="ModeEmploi">
      <div class="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ImageCard
              image="img/modeemploi/1.png"
              profil="img/modeemploi/p1.png"
              text="Nous avons travaillé sur le fait que ce miroir doit être léger, 
          pratique, non encombrant et esthétiqque selon vos gouts et décoration, 
          ce qui incult une personnalisation possible"
              title="Philippe Bihouix"
              subtitle="Ingénieur, EFFISUN"
              right
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="1. Accrochez"
              text={`Accrochez le support mural inclus dans la boîte au dessus de votre fenêtre et accrochez-y votre miroir grâce au cadre fourni et… C'est tout !

Attention cependant à le mettre sur une fenêtre où le soleil passe fréquemment !
`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="2. Utilisez"
              text={`Comme n'importe quel miroir, regardez-vous, préparez-vous avec. Une fois installé, rien de plus à faire. Les panneaux solaires installés au dos vont progressivement recharger la batterie.
`}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <ImageCard
              image="img/modeemploi/2.png"
              profil="img/modeemploi/p2.png"
              text="“Que ça soit pour se préparer ou simplement se regarder, le miroir a un impact important sur notre vie quotidienne. Nous cherchons à améliorer l'impact à travers ces objets du quotidien.“"
              title="Claire Deschênes"
              subtitle="Responsable Produit, EFFISUN"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ImageCard
              image="img/modeemploi/3.png"
              profil="img/modeemploi/p3.png"
              text="“Nous avons opté pour une batterie 10 000 mAh pour une question de pratique et de poids, vous permettant de recharger tous vos appareils.“"
              title="Yves Montreux"
              subtitle="Technicien, EFFISUN"
              right
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="3. Rechargez"
              text={`Une fois la batterie rechargée, vous pouvez décrocher votre miroir, le déplacer, et évidemment, l'utiliser pour recharger vos appareils !
`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
