import { Badge} from "@mui/icons-material";

 import { Search, ShoppingCartOutlined, LoginIcon } from "@mui/icons-material";
import {Link} from 'react-router-dom';
// import { LoginIcon } from '@material-ui/icons';
import React from "react";

const Navbar = () => {

  const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
  return (


    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper   pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">


          <div className=" left flex flex-1  items-center">
            {/* <div className="cursor-pointer text-[16px] mobile:hidden">
                En
            </div> */}

            {/* Search Input */}
            <div className="SearchInput flex border-[2px] border-solid border-black rounded-md items-center ml-[10px] p-[5px]">
                <input type='text' className="border-none mobile:w-[50px] outline-none transition-all" placeholder="Search for Products" />
                <Search className="text-[#122e31] m" style={{fontSize: '16px'}}/>
            </div>
          </div>


          {/* Logo */}
          <div className="center  text-center  mobile:ml-8">
               {/* <div className ="logo font-bold text-2xl text-center"> */}
              <img src="./images/logo.jpeg" style={{"width":"203px","height":"48px"}}></img>
              {/* </div>  */}
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2] mr-6">
            {/* <LoginIcon/> */}
            <div className={style}><img src="./images/india.png" alt="icon-india" style={{"width":"36px","height":"36px"}}/>
             </div>
             <Link to="/register"> <div className={style}>Register</div></Link>
             <Link to="/login"> <div className={style}>Login</div></Link>
             <Link to="/cart">
              <div className={style}>
                <Badge badgeContent={3} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
              </div>
              </Link>
          </div>

      </div>
    </div>
  );
};

export default Navbar;