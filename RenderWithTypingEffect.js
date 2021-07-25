import React from 'react';
import TypingEffect from "../../services/TypingEffect";

const RenderWithTypingEffect = ({ titles }) => {

  const [title, setTitle] = useState("");

  useEffect(() => {

    const typingEffect = new TypingEffect();

    typingEffect.start(titles, setTitle);
    
    return () => {

      typingEffect.stop();
      
    }

  }, []);

  return (<h3>{title}</h3>);
}

export default RenderWithTypingEffect;