import { Link } from "react-router-dom";
import { useContext } from "react";
import { PersonCtx } from "../Contexts/PersonContext";

export default function AddingItem(){
   const { 
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
       cancekHandeler
   } = useContext(PersonCtx)

    return(
        <div className="flex flex-col items-center ">
          <div className="w-3xl shadow-2xl pl-7">
        <Link to="/" onClick={cancekHandeler}><h2 className=" font-bold  mb-6 text-center text-blue-500">Back to Contact App</h2></Link>
        <h2 className="text-2xl font-semibold text-center mb-6">Add New Contact</h2>
        <div >
        <form className="flex flex-col gap-2"
        onSubmit={saveHandeler}
        >
            First Name
          <input className="w-2xl px-2 py-2 border rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={firstName} onChange={(e)=>setFirstName(e.target.value)}
        />
           Last Name
          <input
          className="w-2xl px-2 py-2 border rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={lastName} onChange={(e)=>setLastName(e.target.value)}
          />
           Phone Number
          <input
          className="w-2xl px-2 py-2 border rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phone} onChange={(e)=>setPhone(e.target.value)}
          />

           Email
          <input
          className="w-2xl px-2 py-2 border rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={email} onChange={(e)=>setEmail(e.target.value)}
          />

          Adress
          <textarea
          className="w-2xl px-2 py-2 border rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500"
         value={address} onChange={(e)=>setAddress(e.target.value)}
          />

         <button type="submit"  className="px-4 py-2 w-[150px] bg-blue-600 text-amber-50 rounded-md 
        hover:bg-blue-700 transition"
        >Save</button>
       
        </form>
         <button 
        className="px-4 py-2 mt-3 w-[150px] bg-blue-600 text-amber-50 rounded-md 
        hover:bg-blue-700 transition" onClick={cancekHandeler}
      >Cancel</button>
      </div>
      
        </div>
      </div>
    )
}