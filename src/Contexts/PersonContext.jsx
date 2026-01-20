import { createContext, useState , useEffect} from "react";
import GenerateNextCount from "../Componetns/GanaratorNaxtCount";

export const PersonCtx = createContext();

export default function PersonfProvider(props){
    const { children } = props
    const [ persons, setPersons] = useState([])
    const [ isFilter , setIsFilter ] = useState("default");
    const [ searchValue , setSearchValue ] = useState("")
     const [ firstName , setFirstName ] = useState("")
     const [ lastName , setLastName ] = useState("")
     const [ phone, setPhone ] = useState("")
     const [ email , setEmail ] = useState("")
     const [ address , setAddress ] = useState("")
    const [ editMode , setEditMode ] = useState(false)
    const [ eitAblePerson , setEditAblePerson ] = useState(null)
   
      const getAPI = async () => {
     
    const url = `https://fake-json-1.onrender.com/contects`
    let API = url
    
    const responce = await fetch(API);
    const data = await responce.json();
    console.log(data);
     
    
    //  if( isFilter === "firstName"){
    //     const filtered = [...persons].sort((a, b)=>a.fiestName.localeCompare(b.fiestName));
    //     setPersons(filtered)
    //    console.log(filtered);

    //  }else if( isFilter === "lastName"){
    //    const filtered = [...persons].sort((a, b)=>a.lastName.localeCompare(b.lastName));
    //    setPersons(filtered)
    //    console.log(filtered);
       
    //  }  

     if(isFilter==="firstName"){
        const sorted = [...data]
       sorted.sort((a, b)=> (a.fiestName).localeCompare(b.fiestName));
       console.log(isFilter);
      return  setPersons(sorted)
        }else if(isFilter==="lastName"){
          const sorted = [...data]
       sorted.sort((a, b)=> (a.lastName).localeCompare(b.lastName));
       console.log(sorted);
        return setPersons(sorted)
        }else if(isFilter==="oldest"){  
        const sorted = [...data]
        sorted.reverse();
        return setPersons(sorted)
      }else{
            const sorted = [...data]
            setPersons(sorted)
             console.log(sorted);
        }
       

      }


 useEffect(()=>{

  


    getAPI();
},[isFilter])
     
   const saveHandeler =(e) => {
    e.preventDefault();
    
    if( !firstName.trim() || !lastName.trim() || !phone.trim() ||  !email.trim() || !address.trim() ){
      return alert (`You have to fullfill form`)
    }
    
    editMode ? udateHandeler() : createHandeler()

    }

   const createHandeler =  async  () => {
      const newPerson = {
          id : Date.now()+ "",
          fiestName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          Address: address,
          count: GenerateNextCount(persons),
    }

      await fetch('https://fake-json-1.onrender.com/contects',{
        method: 'POST',
        body: JSON.stringify(newPerson),
        headers: {
            "content-type" : "application/json"
        }
      })
        getAPI();
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setEditMode(false);
        setEditAblePerson(null)
 
   }

    const removeHandeler = async (personId) => {
    //  alert (`Are you sure for removing `)
    if(!window.confirm(`Are you sure for removing?`))return;

     await fetch (`https://fake-json-1.onrender.com/contects/${personId}`,{
        method: "DELETE",
     }) 
     getAPI();
    }
 
    const edithandeler = ( person ) => {
      setEditMode(true)
      setEditAblePerson(person)
      setFirstName(person.fiestName)
      setLastName(person.lastName)
      setEmail(person.email)
      setPhone(person.phone) 
      setAddress(person.Address)
     
    }
   
    const udateHandeler = async () => {
       const udeatePerson =  {
            ...eitAblePerson,
            fiestName : firstName,
            lastName : lastName,
            email :  email,
            phone : phone,
            Address :  address ,
           
        } 
      
       

       await fetch (`https://fake-json-1.onrender.com/contects/${eitAblePerson.id}`,{
        method: 'PATCH',
        body : JSON.stringify(udeatePerson),
        headers : {
          'content-type' : 'application/json'
        }
       })
       getAPI();
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setEditMode(false)
         setEditAblePerson(null)
         
    } 
    
    const searcheHandeler = async (e) => {
       e.preventDefault();
        
       const API = `https://fake-json-1.onrender.com/contects?q=${searchValue}`;
        const response = await fetch(API)
        const data = await response.json();
         if(data.length===0){
          return alert(`nothing found `)
        }

       setPersons(data)
    
       
      // const updatePerson = persons.filter((item)=>{
        
      //   if(item.fiestName  ===  searchValue){
      //     return item
      //   }else if( item.lastName  ===  searchValue){
      //     return item
      //   }else if(item.email  ===  searchValue){
      //      return item
      //   }else if(item.phone  ===  searchValue){
      //     return item
      //   }else if(item.Address === searchValue){
      //    return item
      //   }
          
      // })
      //   setPersons(updatePerson)
      //   console.log(updatePerson);
        
        
    }
    const cancekHandeler = () => {
         setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setEditMode(false);
        setEditAblePerson(null)
       }
        
  
// if(isFilter === "firstName"){
     

    
//     }else if(isFilter==="lastName"){
      
//    }
 
  
    const ContextCtx = {
       persons, 
       setPersons,
       isFilter,
       setIsFilter,
       firstName,
       setFirstName,
       lastName,
       setLastName,
       phone, 
       setPhone,
       email,
       setEmail,
       address, 
       setAddress,
       saveHandeler,
       removeHandeler,
       edithandeler,
       searchValue,
       setSearchValue,
      searcheHandeler,
      cancekHandeler,
      GenerateNextCount
      
    }

    return(
        <PersonCtx.Provider  value={ContextCtx}>
          {children}
        </PersonCtx.Provider>
    )
}