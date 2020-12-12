import React from 'react';
import './Recognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='facerecognition-div center ma'>
            <div className='facerecognition-box absolute mt2'>
                <div className='bounding-box' 
                    style={{ 
                        left: box.leftCol,
                        top: box.topRow,
                        right: box.rightCol,
                        bottom: box.bottomRow,
                    }}
                >
                </div>
                    <img id='inputimage' alt='result' src={imageUrl} width='600px' height='auto' />
            </div>
        </div>
    )
}

export default FaceRecognition;
