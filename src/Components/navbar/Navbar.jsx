import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContext';

function Navbar() {

  const { dispatch, darkMode } = useContext(DarkModeContext)


  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon className='Icon' />
        </div>
        <div className='Items'>
          <div className="Item">
            <LanguageOutlinedIcon className='Icon' />
            English
          </div>
          <div className="Item">
            {darkMode ? <DarkModeOutlinedIcon className='Icon' onClick={() => dispatch({ type: "TOGGLE" })} /> : <WbSunnyOutlinedIcon className='Icon' onClick={() => dispatch({ type: "TOGGLE" })} /> }
          </div>
          <div className="Item">
            <FullscreenExitOutlinedIcon className='Icon' />
          </div>

          <div className="Item">
            <NotificationsNoneOutlinedIcon className='Icon' />
            <div className='counter'>1</div>
          </div>


          <div className="Item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className='counter'>2</div>
          </div>


          <div className="Item">
            <ListOutlinedIcon />
          </div>

          <div className="Item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar