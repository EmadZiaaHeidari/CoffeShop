import React from 'react';
import ImageHero from "../assets/img/hero.png"
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${ImageHero})` }}
            className=' w-full h-[50vh] lg:h-[110vh] bg-cover bg-no-repeat relative flex justify-center items-center'
        >
            <div className='absolute  lg:left-10 max-md:w-[70%] backdrop-blur-[3px] lg:backdrop-blur-0' >
                <div>
                    <h2 className='text-cream text-4xl my-10' >کافه گوشه</h2>
                </div>
                <div>
                    <p className='text-xl text-gray-200 my-10' >فراتر از یک کافه ، جایی برای استراحت ، آرامش و تجربه های جدید

                        <br />

                        به کافه ما خوش آمدید !
                    </p>
                </div>
                <div>
                    <button  className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none' >
                            ثبت سفارش
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Hero;
