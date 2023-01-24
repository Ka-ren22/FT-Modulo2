import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {  //Establesco un estado local como componente de clase: Constructor -> Super
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) { //setea el estado en nuevo valor
    //this.setState(prev => {...prev, title: event.target.value})
    this.setState({ title: event.target.value }); //A medida que increso el titulo se modifuca el valor del input
  }
  handleSubmit(event) {
    event.preventDefault(); //evita que se actualice la pagina
    this.props.getMovies(this.state.title) //Funcion enviar --> a través de getMovies con el parametro del nuevo titulo
                                            //Obtengo una nueva pelicula pasandole el titulo
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}> 
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}  //estado actual del input
              onChange={(e) => this.handleChange(e)}  //paso la def de una funcion, cambia el valor del input
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
          this.props.movies && this.props.movies.map(movies => (  //Si existe this.props.movies --> ejecuta la funcion
            <div key={movie.imdbID}>
                <Link to ={`/movie/${movie.imdbID}`}> 
                {movie.Title}
                </Link>
                <button onClick={()=> this.props.addMovieFavorite({title: movie.title, id: movie.imdbID})}>FAV</button>
            </div>
          ))
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){  //Recibe un estado y devuelve un obj con el nuevo estado
  return{
    movies: state.moviesLoaded
  }
}

function mapDispatchToProps(dispatch){   //Recibe un dispatch y devuelve un obj con las acciones a realizar
  return{
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: title => dispatch(addMovieFavorite(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
//a través de connect le decimos a redux cuando el componente produce un cambio, es una funcion que recibe
//como parametro el componente


/*
-->Como componente funcional
export default function Buscador({prop1, prop2}){  //Recibe las props por destructuring
const [title, setTitle] = useState('')  //Estado local
let handleChange = (e)=> {
  setTitle(e.target.value);
}
let handleSubmit = (e)=>{
  e.preventDefault();
}
}

return (
  <div>
    <h2>Buscador</h2>
    <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
      <div>
        <label className="label" htmlFor="title">Película: </label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={title}  //estado actual del input
          onChange={(e) => this.handleChange(e)}  //paso la def de una funcion
        />
      </div>
      <button type="submit">BUSCAR</button>
    </form>
    <ul>
    </ul>
  </div>
);
*/