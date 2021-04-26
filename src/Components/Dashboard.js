import React from 'react';
// import Logo from '../images/nlogo.jpg';
import Modal from 'react-modal';
import Web3 from 'web3';
var web3 = new Web3();

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
// coinpayments------------





class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            coinamount: 0,
            greencoinamount: 0,
            coin: "",
            account:""

        }
    }

    async componentDidMount(){

        await this.loadWeb3();
        await this.loadBlockchainData();
        
    }
    
    loadWeb3 = async () => {
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
            }
            else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
            }
        } catch (err) {
            console.log({ title: "please install metamask", icon: "error" })
        }
    };

    loadBlockchainData = async () => {
        try {
            const web3 = window.web3
            // Load account
            const accounts = await web3.eth.getAccounts()
            this.setState({ web3: web3, account: accounts[0] })
 

        } catch (err) {
            // console.log("error", err)
        }

    }

   
    logout = () => {
        sessionStorage.clear()
        window.location.href = '/';
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
    metapayment = () =>{
        // const provider = detectEthereumProvider();
        
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');

            let web3js = new Web3(window.web3.currentProvider); 
            web3js.eth.sendTransaction({
                from: this.state.account,
                to: '0x5B75c8B4d4c98109fAe87A3aaF7Ac973779Bd11e',
                value: web3js.utils.toWei(this.state.coinamount, 'ether'), 
            })  
            

          } else {
            console.log('MetaMask not found,Please install MetaMask')
          }
        

    }
    


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
                                {/* <a class="nav-link" href="#" >Dashboard</a> */}
                            </li>


                        </ul>
                        

                        <div className="collapse navbar-collapse justify-content-end navMenu">
                            <div className="nav-side-icon">
                                {/* <button className="btn blue-btn"></button> */}
                                <button className="btn blue-btn" onClick={this.logout}>Logout</button>
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
                                                                <button className="custom-button" onClick={this.metapayment}>Purchase with MetaMask</button>
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