import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardDefault } from './Components/cards'
import { ComplexNavbar } from './Components/Navbar'
import {
  Button,
} from "@material-tailwind/react";
import { CarouselDefault } from './Components/Carousal'
import { FooterWithSitemap } from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)
  const [apidata, setApidata] = useState([])
  const [page, setpage] = useState(1)

  const getApidata = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setApidata(data))
  }

  useEffect(() => {
    getApidata()
  }, [])

  const page1 = apidata.slice(0, Math.ceil(apidata.length / 2))
  const page2 = apidata.slice(page1.length, apidata.length)

  
  return (
    <>
      <div className='sticky top-2 z-10'><ComplexNavbar/></div>
      <div className='h-[40vh] w-[87%] mx-auto '><CarouselDefault/></div>
      <div className='flex flex-col items-center justify-center'>
      {page === 1 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center w-[90%] xl:w-[90%] '>
          {page1.map((element, index) => (
            <div className='justify-center mt-[100px] w-[80%] sm:w-[50%] md:w-[80%] lg:w-[80%] xl:w-[90%] mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto' key={element.id}>
              <CardDefault 
                title={element.title}
                image={element.image}
                description={element.description}
                rate={element.rating}
                price={element.price}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center w-[90%] xl:w-[90%]'>
          {page2.map((element, index) => (
              <div className='justify-center mt-[100px] w-[80%] sm:w-[50%] md:w-[80%] lg:w-[80%] xl:w-[90%] mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto ' key={element.id}>
              <CardDefault 
                title={element.title}
                image={element.image}
                description={element.description}
                rate={element.rating}
                price={element.price}
              />
            </div>
          ))}
        </div>
      )}
      </div>
      <div className='w-[90%] mt-[50px] mx-auto'>
        <span>Pages:</span>
        <Button className='me-5' onClick={()=>setpage(1)}>1</Button>
        <Button className='focus:border-white focus:bg-white-600 text-black bg-gray-600' onClick={()=>setpage(2)}>2</Button>
      </div>
     
   
      <FooterWithSitemap/>
    </>
  )
}

export default App
