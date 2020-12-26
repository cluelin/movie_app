import PropTypes from "prop-types"
const foodILike = [
  {
    id : 1,
    name : "Kimbap",
    image : "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    rating : 4.7
  },
  {
    id : 2,
    name : "kuckBap",
    image : "https://image.fmkorea.com/files/attach/new/20190613/3674493/833750700/1901253155/71d2089d383ad9da891e5694f2ecae0d.jpg",
    rating : 5
  }

];

function Food({ name, picture , rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
      <h2>{rating}/5.0</h2>
    </div>
  );
};

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => {
        return <Food 
          key = {dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}/>
      })}
    </div>
  );
}

export default App;
