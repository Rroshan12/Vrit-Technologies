import "./App.css";
import ButtonFactory from "./component/button";
import Wrapper from "./component/wrapper";





function App() {
  return (
    <Wrapper>

      <ButtonFactory type="download"/>
      <ButtonFactory type="cancel"/>
      <ButtonFactory type="export"/>
     


    </Wrapper>
  );
}

export default App;
