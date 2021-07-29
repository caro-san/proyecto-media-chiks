import React from 'react';
import './custombutton.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import { FacebookIcon, LinkedInIcon, TwitterIcon, RoomIcon, MailIcon, PhoneAndroidIcon } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const Custombutton = ({texto, color, btnText, tamaño}) => {

    if (btnText === "facebook"){
        return (
            <div>
                <FacebookIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if (btnText === "linkedin"){
        return (
            <div>
                <LinkedInIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if(btnText === "twitter"){
        return (
            <div>
                <TwitterIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if(btnText === "celular"){
        return (
            <div>
                <PhoneAndroidIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if(btnText === "ubicacion"){
        return (
            <div>
                <RoomIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if(btnText === "mail"){
        return (
            <div>
                <MailIcon style={{fontSize: tamaño, color: color }} />
            </div>
        )
    }else if(btnText === "dafault"){
        return (
            <div>
                <button className="customButton" style={{backgroundColor: color}}><MailIcon/>{texto}</button>
            </div>
        )
    }


    
}

export default Custombutton
