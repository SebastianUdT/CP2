import {connect} from "react-redux";
import Cards from "../../components/cards/Cards";

function Favorites(props) {
  console.log(props.favorites);
  return (
    <div>
      <Cards characters={props.favorites} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
