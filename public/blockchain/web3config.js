App={
  loadingweb3:false,
  load:async ()=>{
    App.loadingweb3=true;
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    App.loadingweb3=false;
  },
  loadWeb3:async ()=>{
      // Modern dapp browsers...
      if (window.ethereum) {
        console.log("Metamask Detected");
        window.web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          var res = await ethereum.enable();
          // if (res) alert("Website Connected using address: " + res);
          web3.eth.net.getNetworkType().then(console.log);
        } catch (error) {
          alert("Permission Denied, Metamask Not connected!");
        }
      }
      else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
  },

  loadAccount:async ()=>{
    App.account= await web3.eth.getAccounts();
    console.log("Account Connected Address :  " + App.account);
  },

  loadContract:async ()=>{
    var abi = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "r",
            "type": "bool"
          }
        ],
        "name": "dladded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "r",
            "type": "bool"
          }
        ],
        "name": "isadded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "r",
            "type": "bool"
          }
        ],
        "name": "poadded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "r",
            "type": "bool"
          }
        ],
        "name": "rcadded",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "validity",
            "type": "string"
          }
        ],
        "name": "add_driving",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "validity",
            "type": "string"
          }
        ],
        "name": "add_insurance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "validity",
            "type": "string"
          }
        ],
        "name": "add_pollution",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "validity",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "regdate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "chassis",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "engine",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "model",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "seat",
            "type": "string"
          }
        ],
        "name": "add_rc",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_driving_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_insurance_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_pollution_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_rc_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_user_details",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getid",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          }
        ],
        "name": "registeruser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "setverified",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "testcontract",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "total_user_count",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "verified",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "verify",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];
    var address = "0x0543cA86fC449D982EBc4DB71ac6C53fCAf18Fb7";
    
    App.contract = new web3.eth.Contract(abi, address);
    
    var result =await App.contract.methods.testcontract().call();
      console.log(result);
    
  }

};

App.load();



