import Logo from '../public/images/icon-cart.svg';
import banner from '../public/images/image-product-desktop.jpg';




export default function App() {
  return (
  <div className="md:flex md:items-center md:justify-center md:h-screen md:max-w-2xl md:mx-auto md:rounded-lg  ">
    <section className=" md:flex bg-white md:shadow-2xl md:rounded-3xl m-10 shadow-2xl rounded-3xl overflow-hidden">
      <div className='md:rounded-l-3xl md:overflow-hidden '>
          <img className=' h-80 w-full object-cover md:h-full md:w-full ' src={banner} />
      </div>
        
        <div className= "p-8  ">
          <h1>PERFUME</h1>

          <h2 className="font-bold text-4xl my-4">Gabrielle Essence Eau De Parfum</h2>

          <div className=" flex text-sm my-4">
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>

          <div className=" flex flex-row  gap-4 my-4">
            <div className=" text-3xl  font-bold text-cart ">
              $149.99  
            </div> 
            <div  className=" text-xs self-center line-through"> 
              $169.99 
            </div>
          </div>

          <button className=" flex justify-center bg-btt text-white rounded-lg w-full hover:bg-green-900 shadow transition-all duration-200 focus:ring-4 focus:outline-none text-sm px-5 py-2.5 text-center items-center" >
            <img className="mr-2 -ml-1" src={Logo} />
            <p>Add to Cart</p> 
            
          </button>
          
        </div>
    </section>

  </div>
  )
}
