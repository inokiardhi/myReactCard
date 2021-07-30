import { Fragment } from 'react';
import './App.css';
import Card from './components/Card/Card';


function App() {

  const cardConten = [
    {title:"My Card", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis itaque ipsum quae quisquam fugiat debitis, eaque ea sed enim ut libero sint consectetur totam rem voluptatibus asperiores illo. Maiores?"},
    {title:"My Card2", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis itaque ipsum quae quisquam fugiat debitis, eaque ea sed enim ut libero sint consectetur totam rem voluptatibus asperiores illo. Maiores?"}
  ]
  
  const rendCard = cardConten.map((item, index) => <Card key={index} {...item}/>)

  console.log(cardConten[1])

  return (
    <Fragment>
      {/* <Card title={"huhu"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis itaque ipsum quae quisquam fugiat debitis, eaque ea sed enim ut libero sint consectetur totam rem voluptatibus asperiores illo. Maiores?"}/> */}
      {/* {rendCard} */}
      <Card {...cardConten[0]}/>
    </Fragment>
    
  );
}

export default App;
