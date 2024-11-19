import requests from './Request'
import './App.css'
import Row from './Components/Row'
import Banner from './Components/Banner'

function App() {
  

  return (
    <>
       <Banner/>
      <Row isposter={true} title="Trending" fetchurl={requests.fetchTrending} />
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="TopRated" fetchurl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />



    </>
  )
}

export default App
