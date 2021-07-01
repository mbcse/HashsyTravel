pragma solidity ^0.5.1;

contract hashsytravel
{
    
    struct user
    {
        uint id;
        string name;
        string dob;
        
    }
    
    struct doc_driving
    {
        string dochash;
        string id;
        string validity;
        bool valid;
 
        
    }
    
    
       struct doc_rc
    {
       string dochash;
        string id;
        string validity;
        string regDate;
        string chassis;
        string engineNo;
        string model;
        string seat;
        bool valid;
        
    }
    
    
       struct doc_insurance
    {
      string dochash;
        string id;
        string validity;
        bool valid;
        
    }
    
    
       struct doc_pollution
    {
        string dochash;
        string id;
        string validity;
        bool valid;
        
    }
    
    
    
    event dladded(bool r);
    event rcadded(bool r);
    event poadded(bool r);
    event isadded(bool r);
    
    
    mapping(address=> uint) users; 
    mapping(uint=>doc_pollution) doc_array_pollution;
       mapping(uint=>doc_rc) doc_array_rc;
          mapping(uint=>doc_driving) doc_array_driving;
             mapping(uint=>doc_insurance) doc_array_insurance;
             
    mapping(uint=>user) users_detail_array;
    mapping(uint=>bool) public verified;
    
    uint public total_user_count;
    
    function registeruser(string memory name , string memory dob) public returns(uint id)
    {
        total_user_count++;
        users[msg.sender]=total_user_count;
        users_detail_array[total_user_count]=user(total_user_count,name,dob);
        verified[total_user_count]=false;
        return total_user_count;
        
    }
    
    
    function getid() public view returns(uint id)
    {
        id=users[msg.sender];
        return id;
    }
    
    
    function testcontract() public pure returns(string memory)
    {
        return "Contract Connected";
    }
    
    
    
   function add_rc(string memory hash ,string memory id, string memory validity, string memory regdate, string memory chassis, string memory engine, string memory
   model, string memory seat) public returns(bool ok)
   {
       
       doc_array_rc[users[msg.sender]]=doc_rc(hash,id,validity,regdate,chassis, engine, model, seat,true);
       emit rcadded(true);
       return true;
       
       
   }
   
     function add_pollution(string memory hash ,string memory id, string memory validity) public returns(bool ok)
   {
       
       doc_array_pollution[users[msg.sender]]=doc_pollution(hash,id,validity,true);
       emit poadded(true);
       return true;
       
       
   }
   
     function add_driving(string memory hash ,string memory id, string memory validity) public returns(bool ok)
   {
       
       doc_array_driving[users[msg.sender]]=doc_driving(hash,id,validity,true);
       emit dladded(true);
       return true;
       
       
   }
   
   
     
   
     function add_insurance(string memory hash ,string memory id, string memory validity) public returns(bool ok)
   {
       
       doc_array_insurance[users[msg.sender]]=doc_insurance(hash,id,validity,true);
       emit isadded(true);
       return true;
       
       
   }
   
   
   function setverified() public returns(bool ok)
   {
       if(doc_array_insurance[users[msg.sender]].valid==true &&
       doc_array_pollution[users[msg.sender]].valid==true&&
       doc_array_rc[users[msg.sender]].valid==true&&
       doc_array_driving[users[msg.sender]].valid==true)
       {
          verified[users[msg.sender]]=true;
          return true; 
       }
       
      return false; 
   }
   
   
  
    
    
     function  verify() public view returns(bool ok)
    {
        return verified[users[msg.sender]];
    }
    
    
    function get_user_details(uint id) public view returns(uint, string memory, string memory  )
    {
        
        user storage u=users_detail_array[id];
        return(u.id,u.name,u.dob);
        
        
    }
    
    
     function get_rc_details(uint id) public view returns(string memory, string memory, string memory )
    {
        
        
         doc_rc storage u=doc_array_rc[id];
         return(u.dochash,u.id,u.validity);
        
        
    }
    
     function get_pollution_details(uint id) public view returns(string memory, string memory, string memory )
    {
        
        
        doc_pollution storage u=doc_array_pollution[id];
         return(u.dochash,u.id,u.validity);
        
        
    }
    
    
    
    
    
    
     function get_insurance_details(uint id) public view returns(string memory, string memory, string memory )
    {
        
        
        doc_insurance storage u=doc_array_insurance[id];
         return(u.dochash,u.id,u.validity);
        
        
    }
    
    
    
    
     function get_driving_details(uint id) public view returns( string memory, string memory, string memory )
    {
        
        
        doc_driving storage u=doc_array_driving[id];
         return(u.dochash,u.id,u.validity);
        
        
    }
    

    
    
    
}
