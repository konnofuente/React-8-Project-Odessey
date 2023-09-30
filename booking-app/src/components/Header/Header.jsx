import { MediaQueryContext } from '../../hooks/MediaQueryContext'
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { useContext,useState ,useEffect } from "react";
import './Header.css'



function Header(){

    const MQ = useContext(MediaQueryContext) 

    const [scroll,setScroll] = useState('absolute')
    useEffect(() => {
      const handleScroll = (e) => {
        setScroll(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    return (
        <>
        {
            !MQ.DT ? 
            <MobileHeader scroll={scroll} /> :
            <DesktopHeader />
        }
        </>
    )

}
export default Header