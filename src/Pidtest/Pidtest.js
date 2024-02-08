import React from 'react';
import "./Pidtest.css" 
import NaviBar from './NaviBar/NaviBar';
import LeftSide from './LeftSide/LeftSide';


function Pidtest() {
    return (

        <div class="container-fluid">
            <NaviBar></NaviBar>
            <div class="row">
                <div class="col-3 bg-light vh-100">
                    <LeftSide></LeftSide>
                </div>

                <div class="col"> 


                </div>
                <div class="col-3 bg-light vh-100">     

                    
                </div>
            </div>
        </div>

        
    );
}

export default Pidtest;








