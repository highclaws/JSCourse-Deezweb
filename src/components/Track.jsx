import React from "react";

function Track(props) {
  const music = props.music;
  const isFavorite = props.isFavorite;
  const favBtnClass = isFavorite ? "btn-outline-danger" : "btn-danger";

  function onFavClick(music) {
    return e => {
      e.preventDefault();
      props.onClick(music);
    };
  }


  return (<div className="card w-50" style={{
      flex: "initial"
    }}>
    <div className="card-body text-left">
      <div className="media mb-2">
        <img className="align-self-center mr-2 w-25" src={music.album.cover_xl} alt=""/>
        <div className="media-body">
          <h5 className="card-title">{music.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {music.album.title}
          </h6>
        </div>
      </div>
      <audio src={music.preview} className="w-100" controls="controls"/>
      <br/>
      <a href="#" onClick={onFavClick(music)} className={'btn btn-sm btn-danger ' + favBtnClass}>
       {isFavorite ? <><i className="fas fa-heart-broken"></i> Retirer des favoris</> : <><i className="fas fa-heart"></i> Ajouter aux favoris</>}
        </a>
  </div>
  </div>);
}

export default Track;