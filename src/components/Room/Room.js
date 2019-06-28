import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Speaker from '../Speaker';
import Participants from '../Participants';
import Chat from '../Chat';

import './Room.css';
import '../../assets/react-grid-layout.css';
import '../../assets/react-resizable.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const startDragAndDrop = element => {
  element.classList.add('dragMe');
};

function Room() {
  const layouts = {};
  const speakerArea = React.createRef();
  const participantsArea = React.createRef();
  const chatArea = React.createRef();

  return (
    <div className="Room">
      <Sidebar />
      <Header />
      <ResponsiveGridLayout
        draggableHandle=".dragMe"
        className="layout"
        layouts={layouts}>
        <div
          key="speaker"
          ref={speakerArea}
          data-grid={{ w: 6, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
          <span onMouseDown={() => startDragAndDrop(speakerArea.current)}>
            X
          </span>
          <Speaker />
        </div>
        <div
          key="participants"
          ref={participantsArea}
          data-grid={{ w: 4, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
          <span onMouseDown={() => startDragAndDrop(participantsArea.current)}>
            X
          </span>
          <Participants />
        </div>
        <div
          key="chat"
          ref={chatArea}
          data-grid={{ w: 12, h: 3, x: 0, y: 3, minW: 2, minH: 3 }}>
          <span onMouseDown={() => startDragAndDrop(chatArea.current)}>X</span>
          <Chat />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

export default Room;
