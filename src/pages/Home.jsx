import React from 'react'
import Header from '../components/Header';
import Register from '../components/Register';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <div className=''>
        <img src="./IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.png" className="   w-screen h-screen brightness-50" />
      </div>
      <div className='  mt-[-520px] absolute text-[white] ml-[500px]  ' >
        <div className='text-[59px] font-extrabold text-[white]'>Unlimited movies,</div>
        <div className='text-[59px] font-extrabold  text-[white] ml-[-18px] mt-[-20px]'>TV shows and more</div>
        <div className='ml-[110px] text-[20px] font-semibold mt-2'>Starts at 149.Cancel at any time.</div>
      </div>
      <Register />
      <div className='w-full h-[2000px] bg-black '>
        <div className='ml-[180px] pt-[50px]'>
          <div className='text-[white] font-semibold text-2xl '>Trending Now</div>
          <div className='flex gap-5'>
            <select className="select select-bordered  max-w-xs bg-[#242424] text-[white]  h-[25px] mt-[15px] w-[120px]  hover:to-blue-950">
              <option disabled selected className='bg-white text-[black] '>India</option>

              <option className='bg-white text-[black]'>Global</option>
            </select>

            <select className="select select-bordered  max-w-xs bg-[#242424] text-[white]  h-[25px] mt-[15px] w-[120px]  hover:to-blue-950">
              <option disabled selected className='bg-white text-[black] '>Movies</option>

              <option className='bg-white text-[black]'>TV Shows</option>
            </select>
          </div>
        </div>

        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-screen gap-10 mt-8 ">
            <img
              src="AAAABRdHH1kknBPqzHdMLO2sdIGevZN2L9TQbc7rXNYE0xdzErZai-dcQTJSWITfOpVARl-wX43-zutpdNvCxSuUIR-Hclt9KX776NiTuQoQIH_PBia4PV-q5xpeYZhyYswGDsFMVJ11yYmbSKf7s_0-woPZ.png"
              className="w-[200px] ml-[200px]  rounded-lg transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
            <img src="AAAABd-YGh_bvuzKadnvPj27fy7lHwG7D8nUzfyWGi0NZqxoh1kyQt77A2BiwNHGjzSLv3dnMZReXSh5lsWbAcRIh6ND90eTYRvGalmEDch76KEonU6raBwRCyr7ZuK_lYdZzyu7jNgvYk_2TQR0AXCY-J17.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABc2yIy-ZB86sxAXJG5yLPScgypuyYgK5lZAUBQEo8gg2g93qqBeXfQbprx1eRJlVzox4JK8HxG4WDJ5H_ETg3EX3l3GeeRYoDKYWoM2MiHKzzxvmRqMeZkJX6dV5Mrtw1_TWJKst_8mFI76qVPuCB2CO.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABcLQt0rSp0K79TguxpJuedM5kvIircNdnTJcLcMP1bIgBl6GBsjVIWHkmTV8yPhAuGrBSyBX-NnJo9AHTbRGAt7P79jhtnYWT8Hm7N4pxPS0_nB-lBo_qRQS3LcLKADa6HcyrGEqSR4QiIPH9lvp05nK.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABY2wEo96cXNfBuCNtJIp0W8vNebys8ZlwuBDPq9EEhbL-My9RPnwZ5PPxg4yrOz7yJlC8LYnqAnRUNmOqumrtB3qVmjFSLXqBhNkJ7PPkUngDGcoH2rJWcmYg6yIjanNErxDJNETiLuL00VoNKR9se7-.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform  justify-end">
              {/* <a href="#slide4" className="btn btn-circle ml-[150px]">❮</a> */}
              <a href="#slide2" className="btn btn-circle mr-[130px]">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-screen  gap-10 mt-8">
            <img
              src="AAAABYLhxBrXiWUbmTcCcJ_uFEGdnNTDP_ip-4av27u-pEUaWK9cDPO6mnkhVRDRa0uVHu_PGb-pb8ezB7Flv8tTfgf-cViFqmqpkmAXKhjqP3eqcyxbP9zPFMPMl4Zf0VETxuq0I7gsUexbrpigYvj1WvZg.png"
              className=" rounded-lg w-[200px] ml-[200px] hover:scale-105 transition duration-300 ease-in-out hover:rounded-lg cursor-pointer" />
            <img src="AAAABbfl0wfsZZec4_2WiCyP32L-nq503E6PYoiOgWY9HqiFrOqbPQBIXkNe_zbJ1CNE5_ZQqbL4GwwdW87gOkdYaS9SWg9RRx_47sxIU3nd4Ek1DdT4Tdq-54e6DBgAPIcpsQ8LZIkE9tSvJDHJRBoOvXpF.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABQZXzIce1s5RLMdznUDVCtf0AkM3SF9thim4c4VpQygf1YYddPyyRr08UHwBhRpTqjnLGbeptYyL5MNBTODqLmr5_EsgeHIiUMSg6jHtHnNy4_lcOpWoKeAIyRJDjsi7O0iwwqHwjW9wE1rX9KfaZ3ak.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABdLyA4Ftygp8jGIZ5dJTnwnujRCLSbr7nFEuKnBhx-S0uZbqR7ivo-PseqS34310xCoZl_Khu24WVit96Sdw8BmB3HcBn9yKIUyVa_dCSa7SdE1J7ktAEHucuVJiKnw2GVG7IH1ZzoJRFv0T1go72vrf.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />
            <img src="AAAABQJwm1AiI8kljKd4PvvJM_akkjP-Ds4QwebTqOFEtgMNjNLphsppFnonR8uW_dkdJDkxKHy2ebFhgStLk7UkFcwHGHSjpV2KWw5hOLe-QbNP6QbNuid7UONyx3KtfxW7em5zglP7yFXzvxdtBLm6gw23.png" className="w-[200px] hover:scale-105 transition duration-300 ease-in-out rounded-lg cursor-pointer" />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform ">
              <a href="#slide1" className="btn btn-circle ml-[150px]">❮</a>
              {/* <a href="#slide2" className="btn btn-circle mr-[130px]">❯</a> */}
            </div>


          </div>
         
        </div>
        <div className='mt-16 ml-[180px]'>
            <h5 className='  text-white font-semibold text-2xl'>More reasons to join</h5>
            
            <div className='flex gap-4'>
            <div className='w-[290px] h-[280px] bg-[#122843c1] mt-4 rounded-2xl'>
              <h5 className='text-[white] p-4 text-2xl font-semibold'>Enjoy on your TV</h5>
              <p className='text-[#a9a7a7] ml-4 font-semibold '>Watch on smart TVs, PlayStation,<br /> Xbox, Chromecast, Apple TV, Blu-ray <br /> players and more.</p>
            </div>
            <div className='w-[290px] h-[280px] bg-[#122843c1] mt-4 rounded-2xl'>
              <h5 className='text-[white] p-4 text-2xl font-semibold'>Download your shows to watch offline</h5>
              <p className='text-[#a9a7a7] ml-4 font-semibold '>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className='w-[290px] h-[280px] bg-[#122843c1] mt-4 rounded-2xl'>
              <h5 className='text-[white] p-4 text-2xl font-semibold'>Watch everywhere</h5>
              <p className='text-[#a9a7a7] ml-4 font-semibold '>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
            </div>
            <div className='w-[290px] h-[280px] bg-[#122843c1] mt-4 rounded-2xl'>
              <h5 className='text-[white] p-4 text-2xl font-semibold'>Create profiles for kids</h5>
              <p className='text-[#a9a7a7] ml-4 font-semibold'>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
            </div>
            </div>
          <div>
            <h5 className='  text-white  text-2xl font-semibold mt-16'>Frequently Asked Questions</h5>
            <div className="collapse collapse-plus   w-[1240px] rounded-none mt-4 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">What is Netflix?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, <br /> documentaries and more – on thousands of internet-connected devices. <br /><br />You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. <br /> There's always something new to discover, and new TV shows and movies are added every week!</p>
  </div>
</div>
<div className="collapse collapse-plus   w-[1240px] rounded-none mt-1 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">How much does Netflix cost?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. <br /> Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
  </div>
</div>
<div className="collapse collapse-plus   w-[1240px] rounded-none mt-1 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">Where can i watch?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from <br />your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, <br /> smartphones, tablets, streaming media players and game consoles. <br /><br />
    You can also doWatch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from <br /> your persownload your favourite shows with the iOS or Android app. Use downloads to watch while  <br />you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
  </div>
</div>
<div className="collapse collapse-plus   w-[1240px] rounded-none mt-1 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">How do i cancel?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account <br /> online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
  </div>
</div>
<div className="collapse collapse-plus   w-[1240px] rounded-none mt-1 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">What can i watch on Netflix?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix <br /> originals, and more. Watch as much as you want, anytime you want.</p>
  </div>
</div>
<div className="collapse collapse-plus   w-[1240px] rounded-none mt-1 ">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-2xl   bg-[#343333] text-[white] h-[80px] pt-6">Is Netflix good for Kids?</div>
  <div className="collapse-content text-[white] bg-[#343333] text-2xl mt-1">
    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family- <br />friendly TV shows and films in their own space. <br /><br />

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids <br /> can watch and block specific titles you don’t want kids to see.</p>
  </div>
</div>
   
  


          </div>
        </div>
      </div>
      <div className='mt-28'><Register/></div>
      <Footer/>
      <div className='mt-[-200px] ml-[180px]'>
      <select className="select select-bordered  max-w-xs bg-[#180404] text-[white]  h-[15px] mt-[15px] w-[120px]  hover:to-blue-950">
            <option disabled selected className='bg-white text-[black] '>English</option>
           
            <option className='bg-white text-[black]'>Hindi</option>
            </select>
      </div>
      <div className='text-[#a9a7a7] ml-[180px] mt-9'>Netflix India</div>

    </div>
    
  )
}

export default Home;
