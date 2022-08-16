import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const Table = () => {
    const[index, setIndex] = useState(0)

    return ( <div>
        This is the ping pong page
        <p className="info">Picture:</p>
        <div className="button-container">
      <button className="prev-btn" onClick={'hi'}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={'hi'}>
        <FaChevronRight/>
      </button>
      </div>
    </div> );
}
 
export default Table;