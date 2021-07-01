# HashsyTravel
A Semi decentralized travel document management system using Etherem Blockchain and HarperDB

![dashboard](https://github.com/mbcse/HashsyTravel/blob/main/ProjectImages/Screenshot%20(306).png)

# The Problem
One cannot just drive just because one knows driving. You need all the documents like driving license, pollution certificate, vehicle papers, etc so that if asked by traffic police you can show them. Carrying these papers is a cumbersome task. Also, there is a high probability of documents getting lost or in poor non-readable condition. Not to forget the authenticity of those documents is also debatable. With so many loopholes, there is no reason why we should not look for a system that not only reduces your task of carrying those documents but also guarantees authenticity and transparency.

# The Solution
To overcome the existing problems, we have proposed a new solution QR code Blockchain-based Vehicle documents managing System. A system where the user will first need to upload all types of documents on the portal after registration. After the verification of the documents, a QR code will be issued to the user scanning which all the information of the documents could be accessed. All those information will be uploaded on blockchain and after scanning the QR code the data will be fetched from the blockchain as well as from the database(#harperdb) and verification will be done to match the details. Since the data is on the blockchain, no one can tamper with the data. One can easily put the QR code on the car and traffic police can directly access them in one scan in time of need.  


# How It is made
The architecture of the system proposed starts with the KYC (Know Your Customer)  system using the OCR (Optical Character Recognition). Before logging in to the system, a user is expected to do KYC wherein he/she needs to get all the credentials verified by the undersigned authorities using their nationally recognized card. For now, we have proposed an Aadhar card and pan card in India. Similarly in other countries, it can be extended according to the requirements.
 
Once the user is verified, the user is allowed to log in to the portal. Thereafter, the user can submit various vehicle-related documents like license documents, pollution certificates, registration certificates, and insurance certificates of the car. The documents will be uploaded on the distributed peer-to-peer IPFS (InterPlanetary File System) network which generates a unique hash of those documents. The hash of those documents is stored on the blockchain network to make sure that no one tampers with those documents. Along with this, all the data of the documents is fetched using OCR and along with the hash it will be stored in the HarperDB database. There will be sync between transactions happening on the database and blockchain so that everything is verified

After the documents are uploaded, the undersigned authorities will verify the documents. If all the documents meet the required criteria, then a QR code will be issued to the user which would contain all the details of those documents with a unique stamp/digital signature guaranteeing the user that the QR code is valid and ready to use anywhere. If the documents lack information, they will be rejected by the authorities and the user needs to resubmit again with meeting all the requirements.


# Technical Implementation
The solution is implemented using Ethereum Blockchain Network, Interplanetary File System (IPFS), Ocr, and Web3 technologies. The solution is having its logic written in Solidity, which is then deployed on Ethereum Network and connected to Application using Web3Js. In the middle, Ocr is used to fetch the relevant documents and verification.


The Ipfs Network is used to initially upload and store documents. It is a decentralized peer-to-peer Storage network where we can host websites, store documents, etc. Anything uploaded to the Ipfs network gets attached to a unique hash which can be later used to access the documents. The documents uploaded by the user are stored in Ipfs and the hash of that document is stored in Ethereum. This provides immutability and privacy of data. 


![Screenshot (309).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625162491629/uo8x8YvaT.png)

Ocr is used to fetch the important relevant data from the documents and verification purposes. In this system, we have used a predefined document format designed by us for the purpose of data extraction. With better Ocr, any document format can be used.

![Screenshot (310).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625162570103/dRKR_VzFo.png)

The data fetched and hash will be transferred to the Ethereum Blockchain network, (Kovan Testnet is used for deployment for research). The Blockchain Logic/smart contracts are written in Solidity programming language which is the standard language for ethereum. The Documents are stored in form of structures which are in turn mapped to the respective unique ids of the user.

There are functions/endpoints to fetch document details and a single verification function is also made. The QR code is mapped to this specific endpoint, for one scan verification and details. 

![Screenshot (307).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1625162532211/ljbPqEAF2.png)

On the expiration of documents, the user has to re-upload the expired document, but the QR code will remain the same. As the Qr code is mapped to a node endpoint that is consistent, The node endpoint backend will handle the same



# Tech Stack
- Blockchain(Ethereum)
- Solidity 
- IPFS
- HarperDB
- NodeJs
- OCR
- Html/css/JavaScript
- Jquery
- BootStrap
- Metamask

# Project Links

Deployed Live link 👉 [https://hashsytravel.herokuapp.com/](https://hashsytravel.herokuapp.com/) 

Deployed on Kovan TestNet at address `0x0543cA86fC449D982EBc4DB71ac6C53fCAf18Fb7`
