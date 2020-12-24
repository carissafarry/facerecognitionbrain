import React, { Component } from 'react';
import './Recognition.css';
import Clarifai from 'clarifai';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import FaceRecognition from './FaceRecognition';

const app = new Clarifai.App({
    apiKey: '9804f8e90def4571b9f96fc344ad5018'
});

class Recognition extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputimage');
        const widthImage = Number(image.width);
        const heightImage = Number(image.height);
        console.log(widthImage, heightImage);
        return {
            leftCol: clarifaiFace.left_col * widthImage + 370,
            topRow: clarifaiFace.top_row * heightImage + 470,
            rightCol: widthImage - (clarifaiFace.right_col * widthImage) + 375,
            bottomRow: heightImage - (clarifaiFace.bottom_row * heightImage) + 171
        }
    }

    displayFaceBox = (box) => {
        console.log(box);
        this.setState({box: box});
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onButtonSubmitUrl = () => {
        this.setState({imageUrl: this.state.input});
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input
        ).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }

    onButtonSubmitFile = () => {
        this.setState({imageUrl: this.state.input});
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input.replace(/^data:image\/(.*);base64,/, '')
        ).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }

    uploadImageOnChange=(event)=>{
        if(event.target.files[0]) {
            var reader = new FileReader();
            reader.addEventListener('load', this.inputsetState)
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    inputsetState=(event)=>{
        this.setState({
            input: event.target.result
        },function(){
            this.onButtonSubmitFile()
        })
    }

    render() {
        return (
            <>
                <div className="form"> 
                    {/* <div class="hero__title">Hello World</div> */}
                    <div className='sign-out'>
                        <LinkR to={`/`}></LinkR>
                        <div className='signOutBtn'>
                            <a href='/'>Sign Out</a>
                        </div>
                    </div>
                    <div className="recognition-form">
                        <div className="recognition-div">
                            <div className='fields'>
                                <img src={"https://img.icons8.com/fluent-systems-regular/26/000000/upload.png"} alt='upload' 
                                    style={{
                                    padding:'7px 10px 7px 0'
                                    }}
                                />
                                <div className='photo-input'>
                                    <input 
                                        type="file" 
                                        id="upload_file" 
                                        onChange={this.uploadImageOnChange}
                                    />
                                </div>
                                <LinkS to={`#result`}></LinkS>
                                <div className='recognitionBtn' 
                                    onClick={this.onButtonSubmitFile}>
                                    <button>Upload</button>
                                </div>
                            </div>

                            <div className='fields'>
                                <img src={"https://img.icons8.com/fluent-systems-regular/26/000000/upload.png"} alt='upload' 
                                    style={{
                                    padding:'7px 10px 7px 0'
                                    }}
                                />
                                <div className='photo-input'>
                                    <input 
                                        type='text' 
                                        className='user-input' 
                                        placeholder='Masukkan URL Gambar' 
                                        onChange={this.onInputChange}
                                    >
                                    </input>
                                </div>
                                <LinkS to={`#result`}></LinkS>
                                <div className='recognitionBtn' 
                                    onClick={this.onButtonSubmitUrl}>
                                    <button>Detect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
            </>
        )
    }
}

export default Recognition;
