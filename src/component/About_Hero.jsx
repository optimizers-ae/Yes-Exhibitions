import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Building2,
  ChevronRight
} from 'lucide-react';
import aboutBannerImg from '../assets/about_banner.png';
import hero1Img from '../assets/hero_1.png';
import ScrollExpand from './ui/ScrollExpand';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const stats = [
  { value: '500+', label: 'Stands Delivered Worldwide', icon: Building2 },
  { value: '100%', label: 'In-House Fabrication', icon: Award },
  { value: '24h', label: '3D Concept Turnaround', icon: Clock },
  { value: '100%', label: 'On-Time Handover Guarantee', icon: ShieldCheck }
];

const About_Hero = () => {
  return (
    <ScrollExpand 
         src={hero1Img}
          alt="YES Exhibition Stand"
          title="FROM IDEA TO IMPACT"
          scrollHint="Scroll to explore"
          useWindowScroll
          >
   
    </ScrollExpand>
  );
};

export default About_Hero;