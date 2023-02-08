import React, { useEffect, useState } from 'react';
import roller from '../assets/roller.svg';
import { TypeAnimation } from 'react-type-animation';
const HomePage = () => {


  const changeColor = (color) => {
    document.getElementById('animation').style.color = color;
    };

  return (
    <div class="flex flex-col  h-screen ">
      <div class="flex flex-row space-y-4 bg-[#293b7a] text-white h-[80vh] bg-center justify-between">
        <div class="flex flex-col justify-center space-y-4 px-10 ml-20">
          <div class="font-bold">Content Writing Services </div>
          <div class="text-4xl font-bold font-serif">
            Get Professionally Written
          </div>
          <div class=" font-['ubuntu']" id="animation">
          <div class="text-4xl font-bold font-serif justify-between">
            <TypeAnimation
              sequence={[
                'Articles',
                1000,
                () =>   changeColor('#f5986f'),
                'Blogs',
                1000,
                () => changeColor('#4f6ab4'),
                'Web Content',
                1000,
                () => changeColor('#c4c4c4'),

              ]}
              wrapper="div"
              cursor={true}
              cursorStyle="|"
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </div>
          </div>
            <div class=" font-bold font-serif ">
            Instant writer match. Easy briefing process. Affordable prices. On-time delivery, every time.
            </div>
        </div>
        <div
          class="flex flex-col
    items-end
           w-[50%] bg-center "
        >
          <img src={roller} alt="roller" className="w-[100%] h-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
