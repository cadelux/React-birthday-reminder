import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople]=useState(data)  // yani diyoruz ki default olarak �st tarafta ./data' dan data olarak isimle �a��rd���m�z dosyalar� varsay�lan olarak getir.

  return (
    <main>
      <section className='container'>
        <h3> {people.length} Birthday Today</h3>
        <List people={people}/>
        <button className='clearbtn' onClick={()=>setPeople([])}>Clear all</button>
      </section>

    </main>


  )
}

export default App;
