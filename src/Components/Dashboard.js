import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';




export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
    
    }

    // componentDidMount(){
    //     $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    //         $("body").toggleClass("sidebar-toggled");
    //         $(".sidebar").toggleClass("toggled");
    //         if ($(".sidebar").hasClass("toggled")) {
    //           $('.sidebar .collapse').collapse('hide');
    //         };
    //       });
    // }

    // componentDidMount(){

    //     let config = {
    //         apiKey: "AIzaSyB1KtB9U83WpVinWmD4toh0PdgNceRjm5M",
    //         // authDomain: "XXXXX",
    //         databaseURL: "https://windzsystem-a01cc.firebaseio.com/",
    //         projectId: "windzsystem-a01cc",
    //         // storageBucket: "XXXX",
    //         // messagingSenderId: "XXXX"
    //     };
    //     firebase.initializeApp(config);



    //     let data = {
    //         name: 'Los Angeles',
    //         state: 'CA',
    //         country: 'USA'
    //       };

    //       // Add a new document in collection "cities" with ID 'LA'

    //       firebase.database().collection("cities").doc("LA").set({
    //         name: "Los Angeles",
    //         state: "CA",
    //         country: "USA"
    //     })
    //     .then(function() {
    //         console.log("Document successfully written!");
    //     })
    //     .catch(function(error) {
    //         console.error("Error writing document: ", error);
    //     });


    // <h1>welcome to react</h1>
    //             <Link to={'/employeeDetails'}>Sign Up</Link>

    // }

    render() {
        return (
            <div id="wrapper">

                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>

                    <hr class="sidebar-divider my-0"></hr>

                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    <hr class="sidebar-divider" />

                    <div class="sidebar-heading">
                        Interface
</div>

                    <li class="nav-item">
                        <a class="nav-link" href="charts.html">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Companys Details</span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Employee Details</span></a>
                    </li>

                    <hr class="sidebar-divider d-none d-md-block"></hr>

                    <div class="text-center d-none d-md-inline">
                        <button  onClick={this.handleClick}       ref={a => this.button = a}  class="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>


                </ul>



                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">

                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                            <ul class="navbar-nav ml-auto">



                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                                    <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
          </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
          </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
          </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
          </a>
                                    </div>

                                </li>

                            </ul>

                        </nav>

                        <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary float-left">Employee Details</h6>
                                    <div class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm float-right"><i class="fas fa-plus fa-sm text-white-50"></i> Add Employee</div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Employee ID</th>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Mobile Number</th>
                                                    <th>Payment Details</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Employee ID</th>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Mobile Number</th>
                                                    <th>Payment Details</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>10251</td>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>
                                                </tr>
                                                <tr>
                                                    <td>10252</td>        <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td>9857255896</td>
                                                    <td>Free</td>
                                                    <td>icons</td>
                                                </tr>
                                                <tr>
                                                    <td>10253</td><td>Ashton Cox</td>
                                                    <td>Junior Technical Author</td>
                                                    <td>98574 879621</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10254</td><td>Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>9885699762</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10278</td>
                                                    <td>Airi Satou</td>
                                                    <td>Accountant</td>
                                                    <td>8547322589</td>
                                                    <td>Full Money</td>
                                                    <td>icons</td>
                                                </tr>
                                                <tr>
                                                    <td>10689</td><td>Brielle Williamson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>8795526589</td>
                                                    <td>Discont</td>
                                                    <td>icons</td>
                                                </tr>
                                                <tr>
                                                    <td>10289</td><td>Herrod Chandler</td>
                                                    <td>Sales Assistant</td>
                                                    <td>8972368899</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td><td>Rhona Davidson</td>
                                                    <td>Integration Specialist</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td>
                                                    <td>Colleen Hurst</td>
                                                    <td>Javascript Developer</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td><td>Sonya Frost</td>
                                                    <td>Software Engineer</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td>
                                                    <td>Jena Gaines</td>
                                                    <td>Office Manager</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td><td>Quinn Flynn</td>
                                                    <td>Support Lead</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td>
                                                    <td>Charde Marshall</td>
                                                    <td>Regional Director</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td><td>Haley Kennedy</td>
                                                    <td>Senior Marketing Designer</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td>
                                                    <td>Tatyana Fitzpatrick</td>
                                                    <td>Regional Director</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>
                                                <tr>
                                                    <td>10251</td><td>Michael Silva</td>
                                                    <td>Marketing Designer</td>
                                                    <td>98579 25897</td>
                                                    <td>Free</td>
                                                    <td>icons</td>

                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2019</span>
                            </div>
                        </div>
                    </footer>

                </div>

                <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>

 

            </div>
        )
    }

}