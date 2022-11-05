
import ColorContainer from './Components/ColorContainer';

function App() {
  const colors = ["pink", "#9FE2BF", "lightblue", "gray","lavender","#DE3163","orange","black", "#bada55","#6495ED" ]
  return (
    <div className="App1">
     {colors.map((element,idx) => {
      console.log(element)
      return(
        
        <ColorContainer color={element} key={idx}/>
        
      )
     })}
     <h5>Created with ❤️..Happy coding..</h5>
     <h6>Renuka Choudhary</h6>
    </div>
  );
}

export default App;
