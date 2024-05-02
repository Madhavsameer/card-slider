
import CardSlider from './Components/CardSlider';

const cards = [
  {
    title: 'Madhav Sameer',
    description: 'Fullstack Developer with 5 Years of Industry Experience',
    image: 'https://avatars.githubusercontent.com/u/111692125?v=4',
  },
  {
    title: 'Aditya Yadav',
    description: 'Frontend Developer at Amazon',
    image: 'https://avatars.githubusercontent.com/u/111692125?v=4',
  },
  {
    title: 'Sameer Yadav',
    description: 'Data Analyst At Walmart😍',
    image: 'https://avatars.githubusercontent.com/u/111692125?v=4',
  },
  {
    title: 'Royal Yadav',
    description: 'Backend Devloper at Facebook',
    image: 'https://avatars.githubusercontent.com/u/111692125?v=4',
  },
  // Add more cards as needed
];



function App() {
  return (
  <div>


      <h1 style={{textAlign:'center', fontSize:'60px'}}>Meet Our Allumunis👏</h1>
      <CardSlider cards={cards} />

   

   
    
   
    
    
 
    

  </div>
  );
}

export default App;
