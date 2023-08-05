
import './App.css';
import Testimony from './components/Testimony';


function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>
          These are the best Assassins in the history of the assassin's creed saga
        </h1>
        <Testimony
          img="Altair"
          name="Altaïr Ibn-La'Ahad"
          cargo="Master Assassin"
          text="Altaïr Ibn-La'Ahad was a member of the Assassin Order during the 11 and 12
           hundreds, and the first of the playable protagonists in the Assassin's Creed 
           franchise. Born in 1165, of a Christian mother and a Muslim father, both of whom 
           were members of the Assassins, Altaïr himself was brought into the Order after the 
           death of them both by the time he was 11, where he found himself under the teaching 
           of the then-current grand mentor of the Al Mualim."
        />
        <Testimony
          img="Edward-Kenway"
          name="Edward-Kenway"
          cargo="Master Assassin"
          text="Edward James Kenway (1693 – 1735) was a Welsh-born British privateer-
          turned-pirate and a member of the West Indies and British Brotherhoods of Assassins.
          
          Born to humble farmers, Edward always sought to acquire
           riches and fame. He became a privateer for the Royal Navy early 
           in his life and, once accepted, found himself stationed in the West Indies.
         
            However, an abrupt end to the War of the Spanish Succession and the promise of 
            gold, glory and fame eventually seduced him into a life of piracy. It was during 
            this quest that Edward first encountered the Assassins and Templars, and became 
            embroiled in their struggle."
        />
        <Testimony
          img="Ezio-Auditore"
          name="Ezio-Auditore"
          cargo="Master Assassin"
          text="Ezio Auditore da Firenze (1459 – 1524) was a Florentine nobleman during the 
          Renaissance, and, unbeknownst to most historians and philosophers, a Master 
          Assassin and the Mentor of the Italian Brotherhood of Assassins, a title which 
          he held from 1503 to 1513. He is also an ancestor of William and Desmond Miles, 
          as well as Clay Kaczmarek and Noa Kim.

          I have lived my life as best I could, 
          not knowing its purpose, but drawn forward like a moth to a 
          distant moon; and here at last, I discover a strange truth. 
          That I am only a conduit, for a message that eludes my understanding.
          ―Ezio Auditore da Firenze on his role as the Prophet, 1512"
        />
      </div>
    </div>
  );
}

export default App;
