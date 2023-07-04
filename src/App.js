import './App.css';
import logo from './C360_2019-06-29-13-24-58-736.jpg';
function App() {
  return (
<div class="birthdayCard">
<div class="cardFront">
  <div class="front-text">
  <h3 class="happy">HAPPY</h3>
  <h2 class="bday">BIRTHDAY</h2> 
  <h3 class="toyou">to you!</h3>  
  </div>
  <img src={logo} alt="" />
  <div class="wrap-deco">
<div class="decorations"></div>
<div class="decorationsTwo">
</div>
  </div> 
    <div class="wrap-decoTwo">
<div class="decorations">
  
</div>
<div class="decorationsThree"></div>
  </div>
  <div class="plate">

    <div class="cake"></div>
    <div class="flame"></div>
  

  </div>
</div>
  <div class="cardInside">
     <div class="inside-text">
  <h3 class="happy">HAPPY</h3>
  <h2 class="bday">BIRTHDAY</h2> 
  <h3 class="toyou">to you!</h3>  
  </div>
    <div class="wishes">
    <p>Dear Pokchi,</p>
    <p>You have no idea how much I like you for decorating my world the brilliant way you do. I am privileged to know such a sweet woman like you. May the sweetest and most beautiful things in the universe forever surround you. Happy birthday.</p>
    <p class="name">Nabaraj Rai</p>
    </div>
  </div>
</div>
  );
}

export default App;
