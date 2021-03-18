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
              title="test2"
              subtitle="test3"
              right
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="1. Accrochez"
              text={`Accrochez le support mural inclus dans la boite au
dessus de votre fenêtre et acrrochez-y votre miroir grâce au cadre fourni et ... C'est tout !

Attention ifuzeo ifu zeoifu zei  oufio
`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="1. Accrochez"
              text={`Accrochez le support mural inclus dans la boite au
dessus de votre fenêtre et acrrochez-y votre miroir grâce au cadre fourni et ... C'est tout !

Attention ifuzeo ifu zeoifu zei  oufio
`}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <ImageCard
              image="img/modeemploi/1.png"
              profil="img/modeemploi/p1.png"
              text="Nous avons travaillé sur le fait que ce miroir doit être léger, 
          pratique, non encombrant et esthétiqque selon vos gouts et décoration, 
          ce qui incult une personnalisation possible"
              title="test2"
              subtitle="test3"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ImageCard
              image="img/modeemploi/1.png"
              profil="img/modeemploi/p1.png"
              text="Nous avons travaillé sur le fait que ce miroir doit être léger, 
          pratique, non encombrant et esthétiqque selon vos gouts et décoration, 
          ce qui incult une personnalisation possible"
              title="test2"
              subtitle="test3"
              right
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <TextCard
              title="1. Accrochez"
              text={`Accrochez le support mural inclus dans la boite au
dessus de votre fenêtre et acrrochez-y votre miroir grâce au cadre fourni et ... C'est tout !

Attention ifuzeo ifu zeoifu zei  oufio
`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
