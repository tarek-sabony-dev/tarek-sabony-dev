import LoadingAnimation from "@/components/loading";
import Orb from "@/components/ui/Orb";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <main className="bg-[#e8e8e3]">
      <div className="w-full h-screen relative">
        <Orb hoverIntensity={0.2} rotateOnHover hue={0} forceHoverState={false} >
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
            <TextAnimate animation="slideUp" by="character" duration={1} delay={9.5} className="w-fit text-5xl sm:text-9xl text-[#171717] font-medium font-[lora]" >
              Tarek Sabony
            </TextAnimate>
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0625 0L12.1247 10.5L0.000322342 10.5L6.0625 0Z" fill="#6B645C"/></svg>
            <div className="w-fit h-fit flex flex-col justify-center items-center">
              <TextAnimate animation="slideUp" by="word" duration={1} delay={10} className="w-fit text-xl sm:text-3xl text-[#6B645C] text-center font-medium font-[raleway]" >
                Think it. Solve it. Build it.
              </TextAnimate>
              <TextAnimate animation="slideUp" by="word" duration={1} delay={10.5} className="w-fit text-xl sm:text-3xl text-[#6B645C] text-center font-medium font-[raleway] px-2" >
                This is how I turn ideas into an Interactive Reality.
              </TextAnimate>
            </div>
          </div>
        </Orb>
        <div className="hidden sm:inline-block absolute top-1/4 right-64">
          <TextAnimate animation="slideLeft" by="text" duration={1.5} delay={9} className="w-fit text-3xl text-[#6B645C] text-center font-medium font-[raleway] leading-12" >
            {`D\nE\nV\nE\nL\nO\nP\nE\nR`}
          </TextAnimate>
        </div>
      </div>
      <LoadingAnimation />
    </main>
  );
}



