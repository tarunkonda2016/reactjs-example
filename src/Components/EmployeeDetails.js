import React, { Component } from 'react'
import firebase from '../../src/Firebase'

export default class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
         const db = firebase.firestore()

         db.collection("cities").add({
            name: "Tokyo",
            country: "Japan"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        

        // db.collection("users").doc("EMP124").set({
        //     name: "tarunkonda",
        //     company: "prutech",
        //     empId : "EMP124",
        //     admin: false,
        //     qr : ''

        // })
        // .then(() => {
        //     console.log("Document successfully written!");
        // })
        // .catch((error) => {
        //     console.error("Error writing document: ", error);
        // });

        // let docRef = db.collection("users").doc("EMP123");

        // docRef.get().then(function (doc) {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });

    //     db.collection("users")
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    // db.collection("cities").where("country", "==" ,"Japan")
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    }

    render() {
        return (
            <div>
                <h1>welcome to react EmployeeDetails</h1>
            </div>
        )
    }

}