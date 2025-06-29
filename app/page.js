import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";

import FAQ from "@/components/FAq";
import Rate from"@/components/Rate";
import Contact from "@/components/Contact";
import Last from"@/components/Last";
export default function Home(){
  return(

    <main>
      <Hero/>
      <About/>
      <Service/>
      <Rate/>
      <FAQ/>  
      <Contact/>
      <Last/>
    </main>
  );
}