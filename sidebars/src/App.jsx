import {FiAward, FiHome, FiInfo, FiLayout, FiMenu, FiPhone, FiX} from 'react-icons/fi'
import './style.css'
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState();

  const menus = [
    {
      icon: <FiHome/>,
      name: 'Ana Səhifə'
    },
    {
      icon: <FiLayout/>,
      name: 'Xidmətlər'
    },
    {
      icon: <FiAward/>,
      name: 'Portfolio'
    },
    {
      icon: <FiInfo/>,
      name: 'Haqqımızda'
    },
    {
      icon: <FiPhone/>,
      name: 'Əlaqə'
    }
  ]

  return (
    <div className={`sidebar ${isOpen && 'open'}`}>
      <div className="sidebar-head">
          <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <FiMenu/>}
            {isOpen && <FiX/>}
          </button>
          <span className="logo">Emin Azeroglu</span>
      </div>
      <div className="sidebar-body">
          {menus.map((menu, index) => (
            <button className="sidebar-link" key={index}>
               <span className='icon'>{menu.icon}</span>
               <span className='text'>{menu.name}</span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default App;