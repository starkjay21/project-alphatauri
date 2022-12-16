import { Header, Container, Wrapper, Button, Screen, RadixContainer, RadixWrapper, ResultContainer } from "./styles";
import { useState } from 'react'

// function convert(){
//   setAnswer(num+x+y);
// }

function App() {
  const [answer, setAnswer] = useState(0);
  const [num, setNum] = useState(0);
  const [x, setX] = useState(2);
  const [y, setY] = useState(10);

  // function toDecimal(n, x1){
  //   const len = n.toString().length; 
  //   var power = 0;
  //   var val=0;
  //   while(power < len){
  //     var r = n%10;
  //     val+=(Math.pow(x1, power)*r)
  //     power++;
  //     n/=10;
  //   }
  //   console.log("val is", val)
  //   return val;
  // }

  // function fromDecimal(dec, y1){
  //   var value="";
  //   while(dec !== 0)
  //   {
  //     value = value.concat((dec%10).toString());
  //     dec/=10;
  //   }
  //   value = value.split("").reverse().join("");
    
  //   return (parseInt)(value);
  // }

  function convert(){
    var n = (parseInt)(num);
    var x1 = (parseInt)(x);
    var y1 = (parseInt)(y);

    // var dec = toDecimal(n, x1);
    // dec = (parseInt)(dec);
    // var ans = fromDecimal(dec, y1);

    var decimal = parseInt(n,x1);
    setAnswer(decimal.toString(y1))
  }

  return (
    <Wrapper>
      <Header>
      ✨Base Convert Engine✨
      </Header>
      <Container>
        <Screen onChange={e => setNum(e.target.value) } placeholder="0" id="num" type="number" step="1" />
        <RadixContainer onChange={e => setX(e.target.value) } placeholder="From Base" id="from" min="2" max="16" type="number" step="1"/>
        <RadixContainer onChange={e => setY(e.target.value) } placeholder="To Base" id="to" min="2" max="16" type="number" step="1" />
        <ResultContainer>
          <span className="row-span-1 text-3xl text-midnight">Result:</span> 
          <span className="row-span-2 text-6xl">{answer}</span> 
        </ResultContainer>
      </Container>
      <Button onClick={e => convert()}>CONVERT</Button>
    </Wrapper>
  );
}

export default App;
