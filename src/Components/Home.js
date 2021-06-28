import { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from  './ImageSlider'
import Viewers from './Viewers'
import Recommends from '../Components/Recommends'
import NewDisney from '../Components/NewDisney'
import Originals from '../Components/Originals'
import Trending from '../Components/Trending'
import db from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../features/Movie/movieSlice'
import { selectUser } from '../features/userSlice'

const Home = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

   useEffect(()=>{
       db.collection("movies").onSnapshot((snapshot)=>{
           snapshot.docs.map((doc)=>{
               switch(doc.data().type){
                   case 'recommend':
                       recommends= [...recommends,{id:doc.id, ...doc.data() }]
                       break;

                     case 'new':
                       newDisneys= [...newDisneys,{id:doc.id, ...doc.data() }]
                       break;

                      case 'original':
                       originals= [...originals,{id:doc.id, ...doc.data() }]
                       break;

                      case 'trending':
                       trending= [...trending,{id:doc.id, ...doc.data() }]
                       break;     
               }
           })

       dispatch(setMovies({
           recommend: recommends,
           newDisney: newDisneys,
           original: originals,
           trending: trending,
       })
      )
    })
   },[user])

    return(
        <Container>
           <ImageSlider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Originals/>
           <Trending/>
        </Container>
    )
}

const Container = styled.main `
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}

`

export default Home