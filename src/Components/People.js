import { useSelector } from 'react-redux';

import { peopleInfo } from '../Redux/Features/People/peopleSlice';

import '../Stylesheets/People.scss';

import Person from './Person';

function People() {

  const { people } = useSelector(peopleInfo);

  const displayPeople = () => {
    return people.map(person => {
      return <Person key={ person.id } person={ person } />
    })
  }

  return (
    <section>
      <h2 className='people-header'>Choose yourself!</h2>
      <div className='people'>{ displayPeople() }</div>
    </section>
  );
}

export default People;