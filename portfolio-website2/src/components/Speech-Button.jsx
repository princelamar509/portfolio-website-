import React, { useState } from 'react';
import { FaVolumeUp, FaMicrophone } from 'react-icons/fa';
import './Speech-Button.css';

const SpeechButtonWithNote = () => {
  const [showNote, setShowNote] = useState(false);

  const handleSpeech = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `Dear Recruiter,

        I hope this message finds you well. I wanted to take a moment to introduce myself and share a bit about my journey into front-end development. 
        After being rejected by my dream college, Barry University in Miami, Florida, in 2014, I had to shift gears faster than a teenager sneaking home past curfew. 
        I didn’t jump right back into schooling until 2018, when I attended the Aviation Institute of Maintenance. 
        That turned out to be a brief layover, thanks to a few of life’s unexpected turbulences.

        In 2019, I found a more grounded path at Fortis College, where I earned an associate degree in HVAC (Heating, Ventilation, and Air Conditioning). 
        I worked in the field for a while, but I quickly realized that I wanted a new challenge, one where I could create, design, and think ahead—so I decided to dive into coding.

        As a self-taught front-end developer, I’ve honed my skills with a focus on delivering clean, efficient code and creating seamless user experiences. 
        My forward-thinking approach ensures that I’m always improving, constantly learning, and staying ahead of trends. I take pride in my strong work ethic and attention to detail, 
        and I’m passionate about crafting interfaces that users love.

        I’d love to bring this energy and mindset to your team. Looking forward to the opportunity to contribute to your projects and push the boundaries of great design.

        Best regards, 
        Madeus Rene.`;

        speech.lang = 'en-US'; 
        window.speechSynthesis.speak(speech);
      };
    
      return (
        <div className="card-container">
          <div
            className="speech-button-card"
            onMouseEnter={() => setShowNote(true)}
            onMouseLeave={() => setShowNote(false)}
            onClick={handleSpeech}
          >
            <FaVolumeUp className="icon-voice" />
            <FaMicrophone className="icon-mic" />
           
            {showNote && (
              <div className="note-card">
               
<ul>
           <li><span class="icon-star">⭐</span> Male voice selected.</li>
           <li><span class="icon-star">⭐</span> Narrator may vary by device.</li>
           <li><span class="icon-star">⭐</span> If unsupported, notification will appear.</li>
           <li><span class="icon-star">⭐</span> English language only.</li>
</ul>

              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default SpeechButtonWithNote;