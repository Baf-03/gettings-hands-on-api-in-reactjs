import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardDefault } from './Components/cards'
import { ComplexNavbar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  let [apidata,setApidata]=useState([])
  let [page,setpage] = useState(1)
  const getApidata = ()=>{
    
    let p =fetch("https://fakestoreapi.com/products/")
    p.then((response)=>{
      // console.log(response.status)
      return response.json()
    }).then((data)=>{
      setApidata(data)
      
    })
   
  }
  useEffect(()=>{
    const firstHalf = apidata.slice(0, Math.ceil(apidata.length / 2));
    const secondHalf = apidata.slice(Math.ceil(apidata.length / 2));
    console.log(apidata.length)
    console.log(firstHalf.length)
    console.log(secondHalf.length)
  },[apidata])
  console.log("data length",apidata.length)

  useEffect(() => {
  
    getApidata()
    // console.log(apidata)
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <>
    <div className='sticky top-2 z-10'><ComplexNavbar/></div>
    
     
     <section className='grid grid-cols-4 gap-4 mx-auto w-[80%]'>
      {
        apidata.map((element,index)=>{
          // console.log(element.id)
          return(
         
            <div className='mt-[100px] w-2'key={element.id} ><CardDefault 
             title={element.title}
             image={element.image}
             description={element.description}
             rate={element.rating}
             price={element.price}/></div>
          
          )
        })
      }
     </section>
    </>
  )
}

export default App
