import React, { Component } from 'react'
import firebase from '../Firebase'
import { BootstrapTable, TableHeaderColumn, InsertModalFooter, InsertButton } from 'react-bootstrap-table';

const jobTypes = ['A', 'B', 'C', 'D'];


export default class MainDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            empList: [
                {
                    'emp_id': 'XXXX',
                    'emp_name': 'XXXXXXXX',
                    'depratment': 'XXXX',
                    'designation': 'XXXX',
                    'pd': 'XXXX',
                    'emp_mobile': 'XXXX'

                }
            ]
        }

    }


    componentDidMount() {
        const db = firebase.firestore()

        // db.collection("users").add({
        //     'emp_id': 'EMP003',
        //     'emp_name': 'Tarun Konda',
        //     'depratment': 'Software',
        //     'designation': 'Developer',
        //     'pd': 'Free',
        //     'emp_mobile': '9502185553',
        //     'is_active': true
        // })
        //     .then(function (docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function (error) {
        //         alert('error')
        //         console.error("Error adding document: ", error);
        //     });

      db.collection("users")
        .get()
        .then((querySnapshot) =>  {
            
            // querySnapshot.forEach((doc) =>  {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

            let  data = querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
              });

              this.passData(data)
              
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

    }


    passData(data){
        console.log('data',data);
        
        this.setState({empList : data})

    }


    createCustomModalHeader = () => {
        return (
            <InsertModalFooter />
        );
    }





    onAfterInsertRow(row) {
        let newRowStr = '';

        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('The new row is:\n ' + newRowStr);
    }


    handleInsertButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('This is my custom function for InserButton click event');
        // onClick();
    }

    createCustomInsertButton = (onClick) => {
        return (
            <InsertButton
                onClick={() => this.handleInsertButtonClick(onClick)} />
        );
    }


    beforeClose(e) {
        alert(`[Custom Event]: Modal close event triggered!`);
    }

    beforeSave(e) {
        alert(`[Custom Event]: Modal save event triggered!`);
    }

    handleModalClose(closeModal) {
        // Custom your onCloseModal event here,
        // it's not necessary to implement this function if you have no any process before modal close
        console.log('This is my custom function for modal close event');
        closeModal();
    }

    handleSave(save) {
        // Custom your onSave event here,
        // it's not necessary to implement this function if you have no any process before save
        console.log('This is my custom function for save event');
        save();
    }

    createCustomModalFooter = (closeModal, save) => {
        return (
            <InsertModalFooter
                className='my-custom-class'
                saveBtnText='CustomSaveText'
                closeBtnText='CustomCloseText'
                closeBtnContextual='btn-warning'
                saveBtnContextual='btn-success'
                closeBtnClass='my-close-btn-class'
                saveBtnClass='my-save-btn-class'
                beforeClose={this.beforeClose}
                beforeSave={this.beforeSave}
                onModalClose={() => this.handleModalClose(closeModal)}
                onSave={() => this.handleSave(save)} />
        );

    }





    render() {



        const options = {
            onAddRow: (row) => { console.log("on add row", row) },
            onRowClick: (row) => { console.log("on row click: ", row) },
            paginationSize: 5,
            paginationShowsTotal: true,
            searchDelayTime: 500, // 0.5 second
            sizePerPage: 5,
            insertBtn: this.createCustomInsertButton,
            insertModalFooter: this.createCustomModalFooter


        }

        return (
            <div style={{ marginTop: 10 }} className="container">
                <BootstrapTable data={this.state.empList} options={options} exportCSV={true} insertRow={true} search={true} striped={true} bordered={true} hover={true} pagination={true}>
                    <TableHeaderColumn width={'15%'} dataField="emp_id" isKey={true}  >Employee ID</TableHeaderColumn>
                    <TableHeaderColumn width={'15%'} dataField="emp_name" >Employee Name</TableHeaderColumn>
                    <TableHeaderColumn width={'15%'} dataField="depratment" >Department</TableHeaderColumn>
                    <TableHeaderColumn width={'15%'} dataField="designation" >Designation</TableHeaderColumn>
                    <TableHeaderColumn width={'15%'} dataField="pd" editable={{ type: 'select', options: { values: jobTypes } }}>Payment Details</TableHeaderColumn>
                    <TableHeaderColumn width={'15%'} dataField="emp_mobile" >Mobile Number</TableHeaderColumn>
                </BootstrapTable>

            </div>
        )
    }


}