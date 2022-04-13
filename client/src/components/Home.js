import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { stateContext } from '../store';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const context = useContext(stateContext);

  let subtitle;
  console.log(context.state);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <h1>Remember Trip</h1>
      </div>
      <div>
        <Link to="/sign-up">
          <span>함께하기</span>
        </Link>
        {context.state.isLogIn ? (
          <>
            <span onClick={openModal}>시작하기</span>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              appElement={document.getElementById('root') || undefined}
            >
              <ReactFlagsSelect
                selected={selected}
                onSelect={data => {
                  context.funcs.issueCountry(data);
                  setSelected(data);
                }}
                fullWidth={false}
              />
              <DatePicker
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                  context.funcs.startDateHandler(date);
                }}
              />
              ~
              <DatePicker
                selected={endDate}
                onChange={date => {
                  setEndDate(date);
                  context.funcs.endDateHandler(date);
                }}
              />
              <label htmlFor="total-cost">Total</label>
              <input
                id="total-coast"
                type="number"
                onChange={e => context.funcs.totalCostHandler(e.target.value)}
              />
              {/* <Link to="/mypage"> */}
              <button type="button" onClick={context.funcs.startTrip}>
                Start
              </button>
              {/* </Link> */}
            </Modal>
          </>
        ) : (
          <Link to="/sign-in">
            <span>시작하기</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
