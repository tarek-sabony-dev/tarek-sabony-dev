import Image from "next/image";
import { LiaUniversitySolid } from "react-icons/lia";

export default function SVGDrawOnScroll () {
  

  return (
    <div className="w-full h-screen flex justify-center items-center flex-wrap gap-16 px-16">
      <div className='w-fit h-fit flex flex-col justify-center items-start gap-8'>
        <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
          <LiaUniversitySolid color="black" size={48} />
          <div className="w-full h-px bg-black " />
        </div>
        <div className="w-fit h-fit flex flex-col gap-2">
          <span className="w-full font-[raleway] font-semibold text-3xl sm:text-4xl primary-light">
            ITE Student
          </span>
          <span className="w-3/4 font-[raleway] text-base sm:text-xl secondary-light">
            I started my Information Technology Engineering journey in <span className="font-mono">2023</span> at Damascus University.
          </span>
        </div>
      </div>
      <Image className="w-full max-w-3xl rounded-xl" width={768} height={512} src={"/damascus-university.png"} alt="damascus-university" />
      
    </div>
  );
};