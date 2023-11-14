import React, {useRef, useState, useCallback} from "react";
import PropTypes from 'prop-types';
import Webcam from "react-webcam";
import { message } from "antd";
import { useIsMobile } from "./ImageUpload";

function WebcamComponent ({getFile}) {
    const isMobile = useIsMobile();
    const [ imgSrc, setImgSrc ] = useState(null);
    const [ mirrored, setMirrored ] = useState(false);
    const webcamRef = useRef(null);

    const deviceWidth = window.innerWidth - 68;

    const videoConstraints = {
        width: isMobile?deviceWidth:640,
        height: 480
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) message.warning("Couldn't detect the camera.")
        else {
            setImgSrc(imageSrc);
            getFile(imageSrc);
        }
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    }

    return(
        <>
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam ref={webcamRef} width={isMobile?deviceWidth:640} height={480} mirrored={mirrored} videoConstraints={videoConstraints} screenshotFormat="image/png" />
            )}
            <div>
                <input type="checkbox" checked={mirrored} onChange={(e) => setMirrored(e.target.checked)} />
                <label>Mirror</label>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                {imgSrc ? (
                    <button onClick={retake}>Retake photo</button>
                ) : (
                    <button onClick={capture}>Capture photo</button>
                )}
            </div>
        </>
    )
}

WebcamComponent.propTypes = {
    getFile: PropTypes.func
}

export default WebcamComponent;