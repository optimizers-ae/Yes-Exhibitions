import ScrollExpand from "./ui/ScrollExpand"
import hero1Img from '../assets/hero_1.png';

const About_Hero = () => {
  return (
    <div>
      <ScrollExpand
        src={hero1Img}
        alt="YES Exhibition Stand"
        title="FROM IDEA TO IMPACT"
        scrollHint="Scroll to explore"
        useWindowScroll
      >

      </ScrollExpand>
    </div>
  )
}

export default About_Hero