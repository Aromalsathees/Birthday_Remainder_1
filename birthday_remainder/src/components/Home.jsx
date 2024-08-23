// Home.jsx
import React, { useState } from 'react';
import List from './List';
import { datas } from './datas';

const Home = () => {
  const [birthday, setBirthday] = useState(datas);

  return (

    <div className='flex flex-col justify-center items-center h-screen bg-gray-600'>
      <h1 className='underline font-bold italic text-3xl hover:bg-white rounded-full p-4'>{birthday.length} Birthdays Today</h1>
      <div className="box my-6">
        <List birthday={birthday} />
      </div>

      <button onClick={() => setBirthday([])} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">clear All</button>

    </div>

  );
};

export default Home;


