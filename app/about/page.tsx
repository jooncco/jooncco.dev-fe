'use client';

import {Avatar} from '@material-tailwind/react';
import React from 'react';

export default function About(): JSX.Element {
  return (
    <section className="w-full mx-auto h-screen">
      <div className="my-4 xs:my-12 sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-[440px] md:h-[400px] h-[440px] bg-gradient-to-b from-secondary" />
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="mt-8 font-black text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
                Hi there. I'm <span className="text-secondary">JunHa.</span>
              </h1>
              <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] leading-[32px]">
                I'm a full-stack software engineer. <br />
              </p>
              <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[10px] xs:text-[14px] sm:text-[18px] lg:text-[24px] sm:leading-[24px]">
                AWS, K8s, Next.js, and Competitive Programming are the things
                that I'm into nowadays. I have more capabilities of course, so
                please refer to the Skills section if you wish to see more.
                <br />
                I'm currently open to job opportunities by the way, especially
                those in Canada. So please don't hesitate to reach me if you're
                a manager, head hunter, or whatever your position is. Weight
                training, watching performances, going to music festivals and
                snow boarding are my top hobbies. I listen to jazzy-house mix
                when I work, and I'm also an inevitable coffee lover.
              </p>
            </div>
            <Avatar
              variant="circular"
              alt="profile"
              withBorder={true}
              className="mt-12 hidden lg:block lg:w-[320px] lg:h-[300px] border-2 border-secondary hover:z-10 focus:z-10"
              src="/img/profile.jpg"
            />
          </div>
        </div>
      </div>

      {/* Contact Me:
      Looking for a self-motivated & mission oriented engineer ?
      Man, you're on the right track.
      */}
    </section>
  );
}
