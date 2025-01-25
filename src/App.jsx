
import { Route, Routes, } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Signin from './pages/Signin'
import GetStarted from './pages/GetStarted'
import LoginPage from './pages/LoginPage'
import Caurosel from './components/Caurosel'
import Movie from './pages/Movie'


function App() {


  return (
    <div className=' '>

      {/* <div className='text-white text-xl font-bold  mt-24 '>Top Searches</div>
      <div className="carousel w-[100vw] mt-3 m-0 p-0 ">

        <div id="slide1" className="carousel-item relative  gap-2  ">
          <img
            src="./AAAABZr63aJJU-MQ0ENk2tWucxSj-tchenBsbn1JgTXApwST2mdJlunUQ8OIacVLW3e1-S8z15dFUf3pjRX47Vmm8GZI1UvbbXfyPNqCsPIfkribQl-RUd8jB-wpJWuGoHMz03renXgIPNJnYSzAa5S_KHyjEDMf05uXkOpxKLdwk4fjcWI0JhU4FuMrfjyU-FrOco4_.png"
            className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABfuBxwODJWGpnxkkB_o4u6261-94UU3qXviCR10RUPHt_t2aUmLdxZSf9Ya1QPVE-RSGPIFap0ktl5E9IzJCdmOleGJlBtkgbJ9w5m7dY_HIg34-vtCLyJn7oD0YolAl8jOJ.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
       <img src="AAAABYxFbmwEZ8jfOgDHz_5sysT-xLndOFsdno8iB1elNxGPUGkM6FQdOKKJ2JrWnHaAdcd5TSXUhsUcR8YClbCPhN5PJmOE9_YW-Tzo9wzFHUWGuTDxoqfYxX32TEe5P9BjDIWe796guXrdD6fENGMbbzrV44zvm8EijeI.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
             <img src="AAAABVxIVadnPvO0R7WbeYeqLjhR_IVqeWmI_Y1vWefCE9tLvi2ZrrwwWIH9YDogPko81JyXD2qQlxFzd63qxl6ZDtm7xTbYhThxDG7_-EdVpfPF1e690mbqFHpzpsXnP59n0pBaUBfqFeeqh77dXgzloXtK28TI9DrTOGw7jw6FiB9qcUJwT5jAdGHMnuSFg_EAEuGe.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABZpqXFsjKaGv8dFkq95qNawpIT7SiCSxCdSyetlvrvK52C3ZpxSJDzkigwaFhBmOZzVkhZfqM5tf8G27jguWNy3YfKdK0mZ5bfle6RUdj7tdVfocsHSM2vyzDk8-BlIjjKRpW9UXGlqYOLTAp0G3pqp0w5yLge2IQcTfQ4l_nbLaLKsuOfVwVXn1rqyWxohr-QkQ.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABRy_MyuKLgwtBI7UxRpIot9p0bgMhBoR6RS0yvDx32xfE7gqatzi5UktB100SL5I6WJQS8AL7BjXobh_vgnzT32Okd_TnsKC8YyGl6UXDQohmSGlLpP1EleDNUqPfd6ZmAX7.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ml-[-450px]  justify-end">
            <a href="#slide2" className=" text-white text-5xl mr-[-20px]  ">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-screen  gap-2   ">
          <img
            src="./AAAABSKVdab5c1tw_eb2KW3dX8PNbhEqGZAb_8JxIisAhh2jTS6p10hkg1rL9m9wlkwDBoB9KTl6Pt6HTovQ00iF3cg9k6BIxcHIJmY.png"
            className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABddTwrttfxH7SK7C5R9mKfkuxmKqO_l3knGhM1O-ASuMG-ifZW9iVSBeTtSKy-ltC0eC8Fscgfzbp2tJMzMdT-3n-RvKW1IaX7cfWJ4j5G0wPh92DlVXfDjQLj4gkUUQlS8JpRDFo8DqzoYHYRBPZgfWzJu6eD3tKrnT-CY2NS37edeI2mNCiqfXrmOXtAulKdBG.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABV3iffiel9FivId2muFtAKnHrBcTmbyrayrdvac6BJX9FBNbf9jZroWBnns_9sg2iBHF9-66NfgYtUn58JjkzAVf_4ffXHjkiPp-i8JxWeBA52E4vojoID5r47H9JxTTolRjxThPFNchsGEharlq7ssqLkxUmShCAkq_Pi2KD5fuhrQOOttoKzi-xEl4jfcRl6k3.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABfKHvgbCRprrNirEY_ho_EudgYi_KLyPIRtHoZ1oJXB_CyayF6ewIwZ6vcQuk6vjsFYb7wb4WUL936-d7o_kPm-HwnQUluIs0KM.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABZ-EEl7TRWQ-0Piym0UO0UaOBlDbS2TXO8A6gr-GjXMOP7wiY2yAcVCHpUNMsfdbkga4NrGVRBqGU_qsmgh82rxFVeiPIlLo7i8Tp7f7cPfQzXik6gLlabBdHEY8i6S0WoMcqfRuamxtolOQNZEWhxEi4yBE-I-liTKnA9FDSOjKENZbPqvSmn-awZ38MS303qQi.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABTDjZzJW9cOx6l_mAnDcGW7Bi2We1NQy0JYBq9n9fjW22XorF1YbArUgV0Orrxyntx-qteV8-PL0dWTzYr9W5ClkJ-3vi8NvyscEGSb-PXV5jPjAa3jOzSyCutMq8fK7KACEvuNlkTHooyFcC3pw6Jhwt2qA6UyBUwbfRQC_ov77xwJRQyV6IBdqwmz4XSz4EvPV.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ml-[-20px] ">
            <a href="#slide1" className="text-white text-5xl">❮</a>
          </div>


        </div>

      </div> */}

      {/* <div className="carousel w-screen  overflow-hidden bg-red-500 mx-5 ">
        <div id="slide1" className="carousel-item relative w-screen h-40 gap-2 mt-8 flex  pl-5 ">
          <img
            src="./AAAABZr63aJJU-MQ0ENk2tWucxSj-tchenBsbn1JgTXApwST2mdJlunUQ8OIacVLW3e1-S8z15dFUf3pjRX47Vmm8GZI1UvbbXfyPNqCsPIfkribQl-RUd8jB-wpJWuGoHMz03renXgIPNJnYSzAa5S_KHyjEDMf05uXkOpxKLdwk4fjcWI0JhU4FuMrfjyU-FrOco4_.png"
            className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABfuBxwODJWGpnxkkB_o4u6261-94UU3qXviCR10RUPHt_t2aUmLdxZSf9Ya1QPVE-RSGPIFap0ktl5E9IzJCdmOleGJlBtkgbJ9w5m7dY_HIg34-vtCLyJn7oD0YolAl8jOJ.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABVxIVadnPvO0R7WbeYeqLjhR_IVqeWmI_Y1vWefCE9tLvi2ZrrwwWIH9YDogPko81JyXD2qQlxFzd63qxl6ZDtm7xTbYhThxDG7_-EdVpfPF1e690mbqFHpzpsXnP59n0pBaUBfqFeeqh77dXgzloXtK28TI9DrTOGw7jw6FiB9qcUJwT5jAdGHMnuSFg_EAEuGe.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABYxFbmwEZ8jfOgDHz_5sysT-xLndOFsdno8iB1elNxGPUGkM6FQdOKKJ2JrWnHaAdcd5TSXUhsUcR8YClbCPhN5PJmOE9_YW-Tzo9wzFHUWGuTDxoqfYxX32TEe5P9BjDIWe796guXrdD6fENGMbbzrV44zvm8EijeI.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABZpqXFsjKaGv8dFkq95qNawpIT7SiCSxCdSyetlvrvK52C3ZpxSJDzkigwaFhBmOZzVkhZfqM5tf8G27jguWNy3YfKdK0mZ5bfle6RUdj7tdVfocsHSM2vyzDk8-BlIjjKRpW9UXGlqYOLTAp0G3pqp0w5yLge2IQcTfQ4l_nbLaLKsuOfVwVXn1rqyWxohr-QkQ.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABRy_MyuKLgwtBI7UxRpIot9p0bgMhBoR6RS0yvDx32xfE7gqatzi5UktB100SL5I6WJQS8AL7BjXobh_vgnzT32Okd_TnsKC8YyGl6UXDQohmSGlLpP1EleDNUqPfd6ZmAX7.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform  justify-end">

            <a href="#slide2" className="btn btn-circle mr-[100px]">❯</a>
          </div>
        </div>
        <div id="slide2" className=" carousel-item relative w-screen  h-40  gap-2 mt-8">
          <img
            src="./AAAABSKVdab5c1tw_eb2KW3dX8PNbhEqGZAb_8JxIisAhh2jTS6p10hkg1rL9m9wlkwDBoB9KTl6Pt6HTovQ00iF3cg9k6BIxcHIJmY.png"
            className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABddTwrttfxH7SK7C5R9mKfkuxmKqO_l3knGhM1O-ASuMG-ifZW9iVSBeTtSKy-ltC0eC8Fscgfzbp2tJMzMdT-3n-RvKW1IaX7cfWJ4j5G0wPh92DlVXfDjQLj4gkUUQlS8JpRDFo8DqzoYHYRBPZgfWzJu6eD3tKrnT-CY2NS37edeI2mNCiqfXrmOXtAulKdBG.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABV3iffiel9FivId2muFtAKnHrBcTmbyrayrdvac6BJX9FBNbf9jZroWBnns_9sg2iBHF9-66NfgYtUn58JjkzAVf_4ffXHjkiPp-i8JxWeBA52E4vojoID5r47H9JxTTolRjxThPFNchsGEharlq7ssqLkxUmShCAkq_Pi2KD5fuhrQOOttoKzi-xEl4jfcRl6k3.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABfKHvgbCRprrNirEY_ho_EudgYi_KLyPIRtHoZ1oJXB_CyayF6ewIwZ6vcQuk6vjsFYb7wb4WUL936-d7o_kPm-HwnQUluIs0KM.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABZ-EEl7TRWQ-0Piym0UO0UaOBlDbS2TXO8A6gr-GjXMOP7wiY2yAcVCHpUNMsfdbkga4NrGVRBqGU_qsmgh82rxFVeiPIlLo7i8Tp7f7cPfQzXik6gLlabBdHEY8i6S0WoMcqfRuamxtolOQNZEWhxEi4yBE-I-liTKnA9FDSOjKENZbPqvSmn-awZ38MS303qQi.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
          <img src="AAAABTDjZzJW9cOx6l_mAnDcGW7Bi2We1NQy0JYBq9n9fjW22XorF1YbArUgV0Orrxyntx-qteV8-PL0dWTzYr9W5ClkJ-3vi8NvyscEGSb-PXV5jPjAa3jOzSyCutMq8fK7KACEvuNlkTHooyFcC3pw6Jhwt2qA6UyBUwbfRQC_ov77xwJRQyV6IBdqwmz4XSz4EvPV.png" className="slide-img  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ">
            <a href="#slide1" className="btn btn-circle ml-[100px]">❮</a>

          </div>


        </div>

      </div> */}










      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/register' element={<GetStarted />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/movie/:id' element={<Movie />}></Route>
      </Routes>


    </div>

  )
}

export default App
