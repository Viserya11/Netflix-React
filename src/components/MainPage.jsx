import Movies from "./Movies";

const MainPage = () => {
    return(
        
    <div className='main'>
     
    <h2 id='title'>Harry Potter</h2>
  <Movies search="harry potter"/>
  <h2 id='title'>Lord of The Rings</h2>
  <Movies search="lord of the rings"/>
  <h2 id='title'>The Hunger Games</h2>
  <Movies search="hunger games"/>
  </div>
    )
}

export default MainPage