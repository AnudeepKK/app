import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllEventsPage from './Components/AllEventsPage';
import Abt from './Components/About';
import img1 from "./Images/Clan.png"
import img2 from "./Images/Py.png"
import EventCarousel from './Components/YourComponent';
import Course from './Components/Course';

function App() {

  const events = [
    {
        eventName: 'event-1',
        imageSrc: img1,
        tagline: "Event 1: Join us for an amazing event! An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "August 20, 2023",
        time: "3:00 PM",
        buttonText: "RSVP Now",
        category: "technical"
    },
    {
        eventName: 'event-2',
        imageSrc: img2,
        tagline: "Event 2: An evening of entertainment and fun An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "technical"
    },
    {
        eventName: 'event-3',
        imageSrc: img2,
        tagline: "Event 3: An evening of entertainment and fun An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "attraction"
    },
    {
        eventName: 'event-4',
        imageSrc: img1,
        tagline: "Event 4: An evening of entertainment and fun An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "attraction"
    },
    {
        eventName: 'event-5',
        imageSrc: img2,
        tagline: "Event 5: An evening of entertainment and fun An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "others"
    },
    {
        eventName: 'event-6',
        imageSrc: img1,
        tagline: "Event 6: An evening of entertainment and fun An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "others"
    },
    {
        eventName: 'event-7',
        imageSrc: img2,
        tagline: "Event 7: An evening of entertainment and fun dagfuy efuwyf  fiefhekj feigfeg ogghkz grehgjkhd al eu eayeiw ufew fugrfbgw gf",
        date: "September 5, 2023",
        time: "7:30 PM",
        buttonText: "Get Tickets",
        category: "technical"
    },
    // ...more events
];


  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/course" element={<Course />} />
          <Route path="/event" element={<AllEventsPage />} />
          <Route path='/about' element={<Abt />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
