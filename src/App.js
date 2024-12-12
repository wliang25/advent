import React, { useState } from 'react';
import './App.css';
import Modal from './modal';
import calendar from './calendar.json';

function App() {
  const [activeDate, setActiveDate] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [displayDate, setDisplayDate] = useState(false);

  const onDateClick = (date) =>{
    const currentDate = new Date().getDate();
    if (currentDate < parseInt(date)) {
      setDisplayDate(false);
    } else {
      setDisplayDate(true);
    }
    setActiveDate(date);
    setModalOpen(true);
  };

  const onDateClose = () => {
    setModalOpen(false);
    setActiveDate();
  }

  const polaroid = (imgSrc, title, caption) => {
    return (
      <div className='polaroid'>
        <img src={`./imgs/${imgSrc}`} alt={title} />
        <div className='polaroid-caption'>{caption}</div>
      </div>
    );
  }

  const modalContent = () => {
    if (!activeDate) return null;
    if (!displayDate) {
      return (
        <>getting a little ahead of ourselves huh?</>
      );
    }
    const day = calendar.days.find(d => d.day === activeDate);
    const imgDisplay = day.img && 
      (day.polaroid ? 
        polaroid(day.img, day.title, day.caption)
        : <img src={`./imgs/${day.img}`} alt={day.title} />);
    return (<>
      <p className='modal-title'>{day.title}</p>
      <p className='modal-msg'>{day.message}</p>
      {imgDisplay}
    </>);
  }

  return (
    <div className="App">
      <header className="App-header">
        welcome to your<br />
        14 days before christmas
      </header>
      <div className="calendar">
        <h3>december 2024</h3>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        
        <div onClick={() => setActiveDate()}></div>
        <div onClick={() => setActiveDate()}></div>
        <div onClick={() => setActiveDate()}></div>

        <div className={`date ${activeDate === '11' ? 'active' : ''}`} onClick={() => onDateClick('11')}>11</div>
        <div className={`date ${activeDate === '12' ? 'active' : ''}`} onClick={() => onDateClick('12')}>12</div>
        <div className={`date ${activeDate === '13' ? 'active' : ''}`} onClick={() => onDateClick('13')}>13</div>
        <div className={`date ${activeDate === '14' ? 'active' : ''}`} onClick={() => onDateClick('14')}>14</div>
        <div className={`date ${activeDate === '15' ? 'active' : ''}`} onClick={() => onDateClick('15')}>15</div>
        <div className={`date ${activeDate === '16' ? 'active' : ''}`} onClick={() => onDateClick('16')}>16</div>
        <div className={`date ${activeDate === '17' ? 'active' : ''}`} onClick={() => onDateClick('17')}>17</div>
        <div className={`date ${activeDate === '18' ? 'active' : ''}`} onClick={() => onDateClick('18')}>18</div>
        <div className={`date ${activeDate === '19' ? 'active' : ''}`} onClick={() => onDateClick('19')}>19</div>
        <div className={`date ${activeDate === '20' ? 'active' : ''}`} onClick={() => onDateClick('20')}>20</div>
        <div className={`date ${activeDate === '21' ? 'active' : ''}`} onClick={() => onDateClick('21')}>21</div>
        <div className={`date ${activeDate === '22' ? 'active' : ''}`} onClick={() => onDateClick('22')}>22</div>
        <div className={`date ${activeDate === '23' ? 'active' : ''}`} onClick={() => onDateClick('23')}>23</div>
        <div className={`date ${activeDate === '24' ? 'active' : ''}`} onClick={() => onDateClick('24')}>24</div>
        <div className={`date ${activeDate === '25' ? 'active' : ''}`} onClick={() => onDateClick('25')}>25</div>

        <div onClick={() => setActiveDate()}></div>
        <div onClick={() => setActiveDate()}></div>
        <div onClick={() => setActiveDate()}></div>
      </div>
      <p className='footer'>
        Click on a day to see what I got in store for you - can't look ahead though!<br />
        Specially curated by yours truly~
      </p>
      <Modal isOpen={modalOpen} onClose={onDateClose} day={activeDate}>
        {modalContent()}
      </Modal>
    </div>
  );
}

export default App;
