import React from 'react'

function Caurosel2() {
    const handleLeft = () => { 
        const tabMenu = document.getElementById("scrollTab2"); 
        tabMenu.scroll({ 
            left: tabMenu.scrollLeft - 1500, 
            behavior: "smooth", 
        }); 
    }; 
 
    const handleRight = () => { 
        const tabMenu = document.getElementById("scrollTab2"); 
        tabMenu.scroll({ 
            left: tabMenu.scrollLeft + 1500, 
            behavior: "smooth", 
        }); 
    }; 
 
    return ( 
        <div className=" w-screen relative gap-2 "> 
            <div id="scrollTab2" className=" w-screen flex overflow-x-scroll overflow-y-hidden   p-5 gap-2   "> 
            <img
                  src="./AAAABfttqe53LJVE_giCp_NGuhsjyFEf6RG4VlC_OszSftbfV3VnZRWIxIcq8hzSOJ1FI7WbbV73ouCOO6PyZhrXZFq4yV6UmfdcEFW8bJ4zrmns_XNbKdYXpjvmaK-zkNipHNtI.png"
                  className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABREo2zmy2f1WfPe7KwmCwcGYuLygMPx4-j9Vz1C7dWvBKGTVq_xIzOX1QDi-_LuSUb9twYfaugUaVWTQbJ3J6ipRGMP5AVbqse3fu33yIzeVL9YFI6bpw8W4E2L95sEJST4vbFSzw810dt4UlTZSZ9Qpy0gOVcjHripIQFJqCl9DlFrIo2KvQXS9p8kds3s.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABU5hFHpMqMZJaxgYEVjTyvGAvYmv3joNACN3N9Loy7oluIhWSjdXsgDkRsE1EOQ0sBQUe0Jgjg4dyth7sCWQEuOBiJY2TQq2q-E.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABVUKS_Yx9W1R44TR0qibCTj2CD5YWgmzsGXkSrNTxW6lT_ySwtZE_0w7mVoS2MHyjcdfauK_D7qotUiKJXF9jmLZiFfSeqGjM7u95XlI0bxyjUh0Ds4NG52iShMvuictpHCa.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
              {/* <img src="AAAABZpqXFsjKaGv8dFkq95qNawpIT7SiCSxCdSyetlvrvK52C3ZpxSJDzkigwaFhBmOZzVkhZfqM5tf8G27jguWNy3YfKdK0mZ5bfle6RUdj7tdVfocsHSM2vyzDk8-BlIjjKRpW9UXGlqYOLTAp0G3pqp0w5yLge2IQcTfQ4l_nbLaLKsuOfVwVXn1rqyWxohr-QkQ.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
               */}
             <img src="AAAABVw8_SiCd0K_EpaM0KBRjtwLKvU1O_BHVvhV28FTfvzCnqf5lhWkJUfjHhQMD1YKFSk4m7-Ixq-z9UOMhgI9Z5b5dH6-RiKDbOx34iMu3yFck722bItZDnMgOSV_YiPls7fE.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
             <img
                  src="./AAAABXkv8r_3nW-UeAi24cWoF6FSpZoH4oP4JuMVclOKQWOvMGRVofkcbJymXxigm23-vqJtgWRF0_WW_6STVI2zpdh0qZ9sgX3rZBRoR_25PGc1RdqNj6WRfCbjXEhn9HNrY-4ClZygeA6xpMzrukckbn0Kj3W3Zejo4sk.png"
                  className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABTwdTR-lM-vSD_Hm35enIskVhVeGrcNKyEvUrWK_8hYf5OYE-EqB1dQqCQQGJaMdOMcUMLk9PpWf1geZpIoeK-g5_0g-OTTnBFk.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABSKVdab5c1tw_eb2KW3dX8PNbhEqGZAb_8JxIisAhh2jTS6p10hkg1rL9m9wlkwDBoB9KTl6Pt6HTovQ00iF3cg9k6BIxcHIJmY.png" className="w-[250px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABQ2JGf6jvD-27Cw97yRPTsthEr-CuEOAE3XY3fj_tHID4aDe3Ixpze53lUuACFyEmzKmuLIaS9GYoxanmns1OPTe5x9HtbfY8d0.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
                <img src="AAAABV3iffiel9FivId2muFtAKnHrBcTmbyrayrdvac6BJX9FBNbf9jZroWBnns_9sg2iBHF9-66NfgYtUn58JjkzAVf_4ffXHjkiPp-i8JxWeBA52E4vojoID5r47H9JxTTolRjxThPFNchsGEharlq7ssqLkxUmShCAkq_Pi2KD5fuhrQOOttoKzi-xEl4jfcRl6k3.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                <img src="AAAABeyUnDPsSz8-nkZoWhgyU454OogTNtz7i-7reZXau4vhb3YLsSJrmV5BG-i6p9glh9KftPaQEG3EIvudrvbcRZsTN7DMzU_T7BI.png" className="w-[230px] h-[140px]  rounded-sm transition duration-300 ease-in-out hover:transform hover:translate-2 hover:scale-105 cursor-pointer" />
                
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

export default Caurosel2
