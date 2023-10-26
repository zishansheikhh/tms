import React, { useState } from 'react';
import Modal from 'react-modal';
import AcademyImg1 from '../../assets/microphone.png';
import AcademyImg2 from '../../assets/piano_2.png';
import AcademyImg3 from '../../assets/karaoke.png';
import AcademyImg4 from '../../assets/studio.png';
import AcademyImg5 from '../../assets/location.png';

import './services-page.styled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Modal.setAppElement('#root');

const Academy = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here, you can implement your submission logic
      // For this example, we're just logging the form data
      console.log('Form submitted');
      closeModal(); // Close the modal after submission
    };

    return (
        <div className='container-fluid m-auto'>
            <h1 className='tms-header'>All Services</h1>
            <div className='academy-wrapper'>
                <div className='cards-basic'>
                    <img src={AcademyImg1} alt='' />
                    <p onClick={openModal}>
                        Concert Series
                    </p>
                </div>

                <div className='cards-basic'>
                    <img src={AcademyImg2} alt='' />
                    <p onClick={openModal}>
                        Private Lessons
                    </p>
                </div>

                <div className='cards-basic'>
                    <img src={AcademyImg3} alt='' />
                    <p onClick={openModal}>
                        Group Lessons
                    </p>
                </div>

                <div className='cards-basic'>
                    <img src={AcademyImg4} alt='' />
                    <p onClick={openModal}>
                        Recording Studio
                    </p>
                </div>

                <div className='cards-basic'>
                    <img src={AcademyImg5} alt='' />
                    <p onClick={openModal}>
                        Locate Me
                    </p>
                </div>
            </div>

            <div className='external-videos-wrapper'>
                
            </div>

            {/* Modal */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='academy-model'>
                {/* popup form content */}
                <h2 className='tms-header '>Concert Series Form</h2>
                <button onClick={closeModal} className='close-btn'><FontAwesomeIcon icon="fa-regular fa-circle-xmark" /></button>
                <form className='academy-form' onSubmit={handleSubmit}>
                    <div><input type='text' placeholder='Name' /></div>
                    <div><input type='tel' placeholder='Phone Number' /></div>
                    <div><input type='email' placeholder='Email' /></div>
                    <div><input type='text' placeholder='Location for Concert' /></div>
                    <div><input type='text' placeholder='Budget Range' /></div>
                    <div className='d-flex jc-center al-item-cen'><button type='submit'>Submit</button></div>
                </form>
            </Modal>

        </div>
    )
}

export default Academy;