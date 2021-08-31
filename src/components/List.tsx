import React, { Fragment } from 'react';

interface Props {
  details: {
    firstName: string;
    lastName: string;
    age: number;
    employeeId?: string;
    image?: string;
  }[];
}

const List: React.FC<Props> = ({ details }) => {
  const renderList = (): JSX.Element[] => {
    return details.map((person) => {
      return (
        <Fragment>
          <h1 className='List-header'>Invited Guests</h1>
          <li className='List'>
            <div className='List-header'>
              <img src={person.image} alt='Rajinikanth' className='List-img' />
            </div>
            <p>
              {person.firstName} {person.lastName}
            </p>
            <p>{person.age} years old</p>
            <p>{person.employeeId}</p>
          </li>
        </Fragment>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
