import React from 'react';
// import Logo from '../images/nlogo.jpg';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            coinamount: 0,
            greencoinamount: 0,
            coin: ""

        }
    }


    openModal = () => {

        var check = document.getElementById("termcheck").checked;
        console.log('checkbox=======', check)
        if (check === true) {
            var e = document.getElementById('buy');
            var result = e.options[e.selectedIndex].value;
            this.setState({ modalOpen: true, coin: result }, () => {
                if (this.state.coin === 'eth') {
                    console.log('etherblock', result, this.state.coinamount);
                    let greencoinvalue = this.state.coinamount * 10000
                    this.setState({ greencoinamount: greencoinvalue })
                } else {
                    let greencoinvalue = this.state.coinamount * 1000
                    console.log('btcblock', result, this.state.coinamount, greencoinvalue);
                    this.setState({ greencoinamount: greencoinvalue })
                }


            })

        } else {
            alert('Please indicate that you accept the Terms and Conditions')
        }


    }

    closeModal = () => {
        this.setState({ modalOpen: false })
        window.location.reload();
    }

    handleCoinBal = (event) => {
        this.setState({ coinamount: event.target.value })
    }
    // handlebtcval = (event) => {
    //     this.setState({ btcamount: event.target.value })
    // }


    render() {



        return (
            <>
                <div className="topheader">
                    <nav className="navbar navbar-expand-lg nav-custom-style fixed-top">

                        <div className="d-flex justify-content-end justify-content-lg-start pt-1 pt-lg-0">
                            <a className="navbar-brand" href="/">
                                <h3>LOGO</h3>
                                {/* <img src={Logo} alt="logo" /> */}
                            </a>
                        </div>

                        <ul class="nav header-menu">
                            <li class="nav-item">
                                <a class="nav-link" href="#" >Dashboard</a>
                            </li>


                        </ul>
                        <div className="collapse navbar-collapse justify-content-end navMenu">
                            <div className="nav-side-icon">
                                {/* <button className="btn blue-btn"></button> */}
                                <span><i class="fas fa-bell"></i></span>
                                <span><i class="fas fa-cog"></i></span>
                            </div>
                        </div>

                    </nav>
                </div>

                <div className="main-body">
                    <div id="mySidebar" class="sidebar">
                        <a href="#">
                            <i class="fas fa-bell"></i>
                            <span>Wallet</span>
                        </a>
                        <a href="#">
                            <i class="fas fa-chart-area"></i>
                            <span>Transfer History</span>
                        </a>
                        <a href="#">
                            <i class="fas fa-chart-area"></i>
                            <span>Affiliate Program</span>
                        </a>
                        <a href="#">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>

                    </div>
                    <div className="main-dashboard">
                        <div className="wrap">
                            <div className="app-contant">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="coins-count">
                                            <div className="text-center">
                                                <h3>TOTAL GREEN COIN</h3>
                                                <div className="tokan-box">
                                                    <hr />
                                                    <div className="tokan-info">
                                                        <span className="bitscoin-tb">Total Balance</span>
                                                        <span className="p-l">|</span>
                                                        <span className="bitscoin-v">0.0000</span>
                                                        <span className="bitscoin-tb">GREEN COIN</span>
                                                        <span className="p-l">=</span>
                                                        <span className="coin-amount">0.0000 USD</span>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="coins-count">
                                            <div className="text-center">
                                                <h3>TOTAL ETHER</h3>
                                                <div className="tokan-box">
                                                    <hr />
                                                    <div className="tokan-info">
                                                        <span className="bitscoin-tb">Total Balance</span>
                                                        <span className="p-l">|</span>
                                                        <span className="bitscoin-v">0.0000</span>
                                                        <span className="bitscoin-tb">ETHER</span>
                                                        <span className="p-l">=</span>
                                                        <span className="coin-amount">0.0000 USD</span>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="chart">
                                            <div className="chart-header">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <h4>BUY GREEN COIN</h4>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <a href="#"><h4>How To Buy?</h4></a>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="chart-body">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 line">
                                                        <div className="row">
                                                            <div className="col-md-6 col-sm-6">
                                                                <div class="form-group buycoin-form">
                                                                    <label for="buy">Purchase Mode</label>
                                                                    <select class="form-control" id="buy">
                                                                        <option selected value="eth">ETH</option>
                                                                        <option value="btc">BTC</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <div class="form-group buycoin-form">
                                                                    <label for="text">ETH / BTC / USD / INR</label>
                                                                    <input type="text" class="form-control" value={this.state.coinamount} placeholder="HOW MUCH" onChange={this.handleCoinBal} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12">
                                                                <div class="form-group form-check buycoin-form">
                                                                    <label class="form-check-label">
                                                                        <input class="form-check-input" id="termcheck" type="checkbox" /> I have read and accepted the terms and conditions
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12">
                                                                <button className="custom-button" onClick={this.openModal}>Purchase</button>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="value-info">
                                                            <p>1 ETHER = 10000 Green</p>
                                                            <p>1 BTC = 1000 Green</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
                <Modal
                    isOpen={this.state.modalOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="coindetail-modal">

                        <div className="coin-details">
                            {
                                this.state.coin === "eth" ? (
                                    <div>
                                        <h1>You will get</h1>
                                        <h3>{this.state.greencoinamount} Green Coin in {this.state.coinamount} ETH</h3>
                                    </div>
                                ) : (
                                    <div>
                                        <h1>You will get</h1>
                                        <h3>{this.state.greencoinamount} Green Coin in {this.state.coinamount} BTC</h3>
                                    </div>
                                )


                            }
                        </div>


                        <button onClick={this.closeModal}>X</button>
                    </div>
                </Modal>


            </>
        )
    }



}

export default Dashboard;