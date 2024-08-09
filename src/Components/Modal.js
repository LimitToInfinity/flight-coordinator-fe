import { useDispatch, useSelector } from 'react-redux';

import { hideModal, modalInnerComponentName } from '../Redux/Features/Modal/modalSlice';
import { unSetFlight } from '../Redux/Features/Flights/flightSlice';

import modalComponents from './modalComponents';

import '../Stylesheets/Modal.scss';

function Modal() {

  const dispatch = useDispatch();

  const innerComponentName = useSelector(modalInnerComponentName);
  const InnerComponent = modalComponents[innerComponentName];

  const closeModal = () => {
    dispatch(unSetFlight());
    dispatch(hideModal());
  }

  return (
    <section className='modal'>
      <div className='overlay' onClick={ closeModal }></div>
      <div className='modal-content'>
        <button className='close-modal' onClick={ closeModal }>X</button>
        <InnerComponent closeModal={ closeModal } />
      </div>
    </section>
  );
}

export default Modal;
