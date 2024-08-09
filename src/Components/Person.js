import { useDispatch } from 'react-redux';

import { deselectPerson, selectPerson } from '../Redux/Features/People/personSlice';

import '../Stylesheets/Person.scss';

function Person({ person, isProfile }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    window.scroll(0, 0);
    isProfile
      ? dispatch(deselectPerson())
      : dispatch(selectPerson(person));
  }

  const personCard = person => {
    return (
      <>
        <img alt={ person.name } src={ person.image } />
        <h3>{ person.name }</h3>
      </>
    );
  }

  const noPerson = () => {
    return (
      <>
        <h3>Choose yourself</h3>
        <img
          alt='unknown'
          src='https://cdn4.iconfinder.com/data/icons/business-vol-4-2/100/Artboard_15-512.png'
        />
      </>
    );
  }

  return (
    <div className='person'>
      <div onClick={ handleClick }>
        { person.id ? personCard(person) : noPerson() }
      </div>
    </div>
  );
}

export default Person;