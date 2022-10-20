import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import LuigisThings from './pages/LuigisThings/LuigisThings'
import MichaelJordanThings from './pages/MichaelJordanThings/MichaelJordanThings'
import Landing from './pages/Landing/Landing'
import AndrewsThings from './components/AndrewsThings/AndrewsThings'
import FitnessThings from './pages/FitnessThings/FitnessThings'

const App = () => {
  const michaelJordansThings = [
    {
      name: 'basketball',
      image: "https://csq.com/wp-content/uploads/2017/08/Michael-Jordan-Slam-Dunk-172.jpeg",
      attributes: [
        'rich', 
        'famous',
        'talented',
        'gambler'
      ]
    }
  ]
  const bensThings = [
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]

  const luigisThings = [
    {
      name: "Books",
      image: "https://wallpapercrafter.com/th800/102528-digital-art-clouds-books.png",
      attributes: ["relaxing", 'mesmerizing', 'enrapturing']
    }
  ]
  
  const gregsThings = [
    {
      name: "fitness",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["refreshing", "fun", "exciting"],
    },
  ]

  const andrewsThings = [
    {
      name: "speakers",
      image: "http://meniscus.lightningbasehosted.com/wp-content/uploads/2017/04/Classix-2.5-Pair.jpg",  
      attributes: ["big soundstage", "audiophile quality", "massive bass", "soaring highs"],
    },
  ]

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route 
        path='/the-michael-jordan'
        element={<MichaelJordanThings things={michaelJordansThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-fitness-things"
        element={<FitnessThings things={gregsThings} />}
      />
      <Route
        path="/the-luigis-things"
        element={<LuigisThings things={luigisThings} />}
      />
      <Route
        path="/the-andrew-things"
        element={<AndrewsThings things={andrewsThings} />}
      />
    </Routes>
  )
}

export default App
