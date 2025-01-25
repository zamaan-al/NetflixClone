import React from 'react'

function Caurosel1() {
    const handleLeft = () => { 
        const tabMenu = document.getElementById("scrollTab1"); 
        tabMenu.scroll({ 
            left: tabMenu.scrollLeft - 1500, 
            behavior: "smooth", 
        }); 
    }; 
 
    const handleRight = () => { 
        const tabMenu = document.getElementById("scrollTab1"); 
        tabMenu.scroll({ 
            left: tabMenu.scrollLeft + 1500, 
            behavior: "smooth", 
        }); 
    }; 
 
    return ( 
        <div className=" w-screen relative gap-2 "> 
            <div id="scrollTab1" className=" w-screen flex overflow-x-scroll overflow-y-hidden   p-5 gap-2   "> 
            <img
                src="./AAAABZHOPfc4JOX_x2agoV_2khsbatOFXZNMdAjVxDh6mPjWbSVYbjzunwVPOz7_fktM2jqvN5cviR4fC5yq0W_audtIb7UdukXU0fashTZtd-sEs-HiE8R3h8jGFSPhwi2SpHuX.png"
                className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABTDjZzJW9cOx6l_mAnDcGW7Bi2We1NQy0JYBq9n9fjW22XorF1YbArUgV0Orrxyntx-qteV8-PL0dWTzYr9W5ClkJ-3vi8NvyscEGSb-PXV5jPjAa3jOzSyCutMq8fK7KACEvuNlkTHooyFcC3pw6Jhwt2qA6UyBUwbfRQC_ov77xwJRQyV6IBdqwmz4XSz4EvPV.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
             
              <img src="AAAABRy_MyuKLgwtBI7UxRpIot9p0bgMhBoR6RS0yvDx32xfE7gqatzi5UktB100SL5I6WJQS8AL7BjXobh_vgnzT32Okd_TnsKC8YyGl6UXDQohmSGlLpP1EleDNUqPfd6ZmAX7.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              {/* <img src="AAAABZpqXFsjKaGv8dFkq95qNawpIT7SiCSxCdSyetlvrvK52C3ZpxSJDzkigwaFhBmOZzVkhZfqM5tf8G27jguWNy3YfKdK0mZ5bfle6RUdj7tdVfocsHSM2vyzDk8-BlIjjKRpW9UXGlqYOLTAp0G3pqp0w5yLge2IQcTfQ4l_nbLaLKsuOfVwVXn1rqyWxohr-QkQ.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
               */}
              <img src="AAAABfshWMCam92l99pUXAPU2pR0IOQJxfeMZPXaVMIbP-hW6Z3ORofKlC6Br13Ys4xWn8GfCw47X2OJsLfB1D3uwWan8rBSI-9cSuPfQGwo3rk6Z17HzSXF8VR-oX7bGProCvyB.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img
                src="./AAAABZ-EEl7TRWQ-0Piym0UO0UaOBlDbS2TXO8A6gr-GjXMOP7wiY2yAcVCHpUNMsfdbkga4NrGVRBqGU_qsmgh82rxFVeiPIlLo7i8Tp7f7cPfQzXik6gLlabBdHEY8i6S0WoMcqfRuamxtolOQNZEWhxEi4yBE-I-liTKnA9FDSOjKENZbPqvSmn-awZ38MS303qQi.png"
                className=" ml-[10px] w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABVPDljVRnEkRI8Zh3i1_0nJm4QYSQKOC0OEDG9v8dpkI50jsf6QPXT6MC4Jyv7L1P2hg57_LwtV5aVZ6ZxDQfo06aHSu5TwXdFhLJjX49eIN96KDz-f9uB-qSHtFMtAGz4HR.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABbB-fCwY8bxorhH6lkja0aTRa7wDz_9Unpi5jiY4xPunAK5c7P1H0UkQikGLgVzGtOD85dL5b_fD5oA-YuqQs7CMhn_bRE6-W3I.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABSqyWtW8eelGbrToC814-NBQPuYfij6Fkm4j4zh613N_HTJMeSVYXp9i3r7C-oog3Ixe04CLcBQblBG4zR158S7zK_T8mvUZ2-M.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              
              <img src="AAAABfJ8toPgqcdsCPrvZQZeKE5Y53IuASQYNt-7FyEp9OWqO_u1sa8_pAmv0wq_qijlax-F9VR9WvUDI6KgW16CwEU1m3oTr74SLMIJPT4IAuomhl97DtJC68b0-1tJKDAGsTYO.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
              <img src="AAAABbLxdfkZsOLz-dffqhihyNVJDpuDZUeuSREajIYQIGXWdqxYXMP6_FfAggEEyVh3YLr-OSxXIklG_9a4gvQcu2t-e3mR7ecBY1thkITyAMHYvKOdMo6UZBesJ7VVx0qAb6fs.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />

                <div onClick={handleLeft} className=" absolute text-white left-0 text-4xl top-[80px] cursor-pointer ml-5"> 
                ❮
                </div> 
                <div onClick={handleRight} className=" absolute text-white right-[50px] text-4xl top-[80px] cursor-pointer  mr-5"> 
                ❯ 
                </div> 
            </div> 
        </div> 
    ); 
}

export default Caurosel1
