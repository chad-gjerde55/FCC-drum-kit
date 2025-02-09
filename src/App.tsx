import './App.css'
import { AudioClip } from './Types'
import Drum from './Drum';

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    descritpion: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    descritpion: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    descritpion: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    descritpion: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    descritpion: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    descritpion: "Open-HH",
  },
  {
    keyTrigger: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    descritpion: "Kick-n-Hat",
  },
  {
    keyTrigger: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    descritpion: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    descritpion: "Closed-HH",
  }
];

function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === e.key.toLocaleUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);
  
      document.getElementById("drum-" + clip.keyTrigger)?.focus();
      document.getElementById("display")!.innerText = clip.descritpion;
  } 

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>FCC Drum Kit</h1>
      <div className="drum-container">
        {audioClips.map((clip) => 
          <Drum audioClip={clip} key={clip.keyTrigger}/>
        )}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App
