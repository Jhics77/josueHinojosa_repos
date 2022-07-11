import logo from '../logo.svg';
import '../css/App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import pokeList from './listPoke';

const url = "https://pokeapi.co/api/v2/pokemon/?limit=4&offset=4"


/*class App extends Component{
  constructor(props){
    super(props)
    
    this.state={
    pokemones: [],
    isFetch: true,
  }
}

  

  
/*
  obtenerPokes = async() =>{
    await axios
    .get(url)
    .then((response)=>{
      //console.log(response.data.results);
      this.setState({pokemones: response.data.results})
      //console.log(this.state.pokemones[0])
    })
    for(let i=0; i<=this.state.pokemones.length; i++){
      console.log(this.state.pokemones[i].name)
    }
      //this.setState({nombre: this.state.pokemones[0].name.toString()});
    
  }*/
  
 /* obtenerPokes = async() =>{
    await fetch(url)
    .then(response => response.json())
    .then(pokesJson => this.setState({pokemones: pokesJson.results, isFetch: 'False'}))
  }
  

  componentDidMount = async() =>{
    await this.obtenerPokes()
  }
*/
  function App(){
    const [pokemones, setPokemones]=useState([])
    const [recuperado, setRecuperado] = useState(false)
    useEffect(()=>{
      fetch(url)
      .then((reponse)=>{
        return reponse.json()
      })
      .then((pokemones)=>{
        setPokemones(pokemones.results)
        setRecuperado(true)
      })
    },[])
    /*if(this.state.isFetch){
      return 'Loading..'
    }*/
      if(recuperado){
        const name = pokemones[0].name;
        return (
          <div>
            <div className='App'>
              <h1>Listado de Pokemon</h1>
            </div>
            
            <div style={{width: "800px", justifyContent:"center", margin:"0px auto"}}>
              <div>
                <input type="text" style={{width:"420px", height:"30px", marginBottom:"30px"}}/>
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
                <div id='pokeList' style={{marginRigth:"auto"}}>
                  <div style={{display:"flex"}}>
                    <div style={{backgroundColor:"green", width:"200px", height:"250px"}}> <br />
                      <div style={{textAlign:"center", width:"150px",height:"150px", margin:"0px auto", backgroundColor:"white"}}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png" alt="" style={{width:"60%", marginTop:"20px"}}/>
                      </div>
                      <br />
                      <div style={{textAlign:"center"}}>
                        <label htmlFor=""># 1</label><br />
                        <label htmlFor="" >{pokemones[0].name}</label>
                      </div>
                    </div>
                    <div style={{backgroundColor:"orange", width:"200px", height:"250px", marginLeft:"20px"}}> <br />
                        <div style={{textAlign:"center", width:"150px",height:"150px", margin:"0px auto", backgroundColor:"white"}}>
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png" alt="" style={{width:"60%", marginTop:"20px"}}/>
                        </div>
                        <br />
                        <div style={{textAlign:"center"}}>
                        <label htmlFor=""># 2</label><br />
                        <label htmlFor="">{pokemones[1].name}</label>
                        </div>
                    </div>
                  </div>
                  <br />
                  <div style={{display:"flex"}}>
                    <div style={{backgroundColor:"#E8ADAA", width:"200px", height:"250px"}}> <br />
                        <div style={{textAlign:"center", width:"150px",height:"150px", margin:"0px auto", backgroundColor:"white"}}>
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png" alt="" style={{width:"60%", marginTop:"20px"}}/>
                        </div>
                        <br />
                        <div style={{textAlign:"center"}}>
                          <label htmlFor=""># 3</label><br />
                          <label htmlFor="">{pokemones[2].name}</label>
                        </div>
                    </div>
                    <div style={{backgroundColor:"gray", width:"200px", height:"250px", marginLeft:"20px", marginRigth:"auto"}}> <br />
                        <div style={{textAlign:"center", width:"150px",height:"150px", margin:"0px auto", backgroundColor:"white"}}>
                          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png" alt="" style={{width:"60%", marginTop:"20px"}}/>
                        </div>
                        <br />
                        <div style={{textAlign:"center"}}>
                          <label htmlFor=""># 4</label><br />
                          <label htmlFor="">{pokemones[3].name}</label>
                        </div>
                    </div>
                  </div>
                </div>
                <div style={{width: "300px", backgroundColor: "purple", marginLeft:"auto"}}> <br />
                  <div style={{textAlign:"center", width:"150px",height:"150px", margin:"0px auto", backgroundColor:"white"}}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png" alt="" style={{width:"60%", marginTop:"20px"}}/>
                  </div>
                  <br />
                  <div style={{textAlign:"center"}}>
                    <label htmlFor=""># 4</label><br />
                    <label htmlFor="">Pokemon</label>
                  </div>
                  <div style={{marginLeft:"20px"}}>
                    <label htmlFor="">Types</label><br />
                    <label htmlFor="">agua y no se que</label><br /><br />
                    <label htmlFor="">Peso</label><br />
                    <label htmlFor="">2 Ton</label><br /><br />
                    <label htmlFor="">Sprites</label><br /><br />
                    <div>
                      Imagenes sprites
                    </div>
                    <br />
                    <label htmlFor="">Movimientos</label><br />
                    <label htmlFor="">Wow como se mueve</label><br /><br />
                  </div>
                </div>
              </div>
              <br />
              <div style={{display:"flex", marginBottom:"25px"}}>
                  <input type="button" value={"Anterior"} style={{marginRight:"auto"}} />
                  <input type="button" value={"Siguiente"} style={{marginLeft:"auto"}}/>
              </div>
            </div> 
          </div>
        );
      }
      else
       return (<div>recuperando datos...</div>)
      //return <pokeList name = {"sss"}/>
    
}



export default App;