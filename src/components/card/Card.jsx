import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions";
import style from "./card.module.css";

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  console.log(props);
  const [fav, setFav] = useState(false);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [favorites]);

  function favoriteHandler(character) {
    if (!fav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          onClick={navigateHandler}
          src={character.image}
          alt={character.name}
        />
        <h2 className={style.name}>{character.name}</h2>
        {fav ? (
          <button onClick={() => favoriteHandler(character.id)}>❤️</button>
        ) : (
          <button onClick={() => favoriteHandler(character)}>🤍</button>
        )}
        <button
          className={style.closeButton}
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
      </div>

      <div className={style.atributes}>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),

    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
