import React from 'react'

export const List = ({ birthday }) => {
  return (


    <div>
      <>
        <ul>
          {birthday.map((person) => (
            <li key={person.id} className='font-bold'>

              <div className="flex justify-between space-x-3">

                <div className="box2">
                  <img
                    src={person.image}
                    alt={`${person.Name}'s image`}
                    className="w-32 h-32 object-cover rounded-full my-3" // Use the custom margin class
                  />

                </div>

                <div className="box1 my-11">
                  <h1>Name: {person.Name}</h1>
                  <p>Age: {person.Age}</p>
                </div>

              </div>

            </li>
          ))}

        </ul>
      </>
    </div>


  )
}


export default List