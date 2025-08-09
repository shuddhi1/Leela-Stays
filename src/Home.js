import Footer from "./Components/Footer";
import Header from "./Components/header";
import LeelaStaysMap from "./Components/LeelaStaysMap";
import Navbar from "./Components/navbar";
import Photogrid from "./Components/Photogrid";




const Home = () =>(
    <div>
       <Navbar/>
   <Header/>
   <div style={{ marginBottom: '40px',marginTop:'40px'  }} />
  
    <Photogrid/>
    <div style={{ marginBottom: '40px',marginTop:'40px' }} />
     <LeelaStaysMap/>
        <div style={{ marginBottom: '40px',marginTop:'40px'  }} />
  <Footer/>
   <div style={{ marginBottom: '40px',marginTop:'40px'  }} />
    </div>
  )
 export default Home; 