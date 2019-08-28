import React, { Component } from 'react'
import firebase from '../Firebase'
import QRCode from 'qrcode.react'


export default class QrCodeGenerator extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.downloadQR = this.downloadQR.bind(this)
        this.state = {
            qrcodeValue: '',
            size: 128,
            fgColor: '#000000',
            bgColor: '#ffffff',
            level: 'H',
            renderAs: 'canvas',
        }
    }


    componentDidMount() {
        //     const db = firebase.firestore()

        //     db.collection("hello").add({
        //        name: "Tokyo",
        //        country: "Japan"
        //    })
        //    .then(function(docRef) {
        //        console.log("Document written with ID: ", docRef.id);
        //    })
        //    .catch(function(error) {
        //        console.error("Error adding document: ", error);
        //    });
    }

    handleChange = (value) => {
        this.setState({ qrcodeValue: value.target.value })
    }

    downloadQR = () => {
        const canvas = document.getElementById("123456");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = this.state.qrcodeValue + ".png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);



    }



    render() {
        return (
            <div className="container-fluid">

                <input
                    type=""
                    name="employee id"
                    placeholder="Employee Id"
                    value={this.state.qrcodeValue}
                    onChange={this.handleChange}
                />

                <QRCode
                    id={'123456'}
                    value={this.state.qrcodeValue}
                    size={this.state.size}
                    fgColor={this.state.fgColor}
                    bgColor={this.state.bgColor}
                    level={this.state.level}
                    renderAs={this.state.renderAs}
                    includeMargin={true}

                />
                <a onClick={this.downloadQR}> Download QR </a>

            </div>
        )
    }


}