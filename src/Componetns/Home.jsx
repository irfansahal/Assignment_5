import { useContext } from "react"
import { PersonCtx } from "../Contexts/PersonContext"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(){

const { persons ,
        isFilter,
        setIsFilter,
        removeHandeler,
        edithandeler,
        searchValue,
        setSearchValue,
        searcheHandeler,
 } = useContext(PersonCtx)

   
   


    return (
        <div className="flex justify-center ">
            <div className="flex flex-col items-center w-[90%] shadow-xl/30 pb-5 px-3">
        <h2 className="text-2xl font-semibold text-center mb-2">All Contects</h2>
        
        <Link to="/adding"><h2 className="font-bold p-4 text-blue-500">Add Now</h2></Link>

        <div>
            <form onSubmit={searcheHandeler}>
                <input type="text"
                className='p-3 w-2xl rounded-md border border-blue-700'
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                />
                <button type="submit"
                className='rounded-md bg-blue-500 text-amber-50    
    hover:bg-blue-800 w-[150px] p-3
     '>Search </button>
            </form>
        </div>


      <div>
        <select 
        value={isFilter}
        onChange={(e)=>setIsFilter(e.target.value)}
        className="p-3 border border-blue-600 w-[400px] 
        m-2 rounded focus:ring-2 
        focus:ring-blue-500" >
            <option value="default">Default</option>
            <option value="firstName">First Name A-Z</option>
            <option value="lastName">Last Name A-Z</option>
            <option value="oldest">Oldest To First</option>           
        </select>
        </div>        
        
         <div>
          <table>
                <thead className="p-4">
                    <tr>
                        <th className="p-4 border border-black">#</th>
                        <th className="p-4 border border-black"> First Name</th>
                        <th className="p-4 border border-black">Last Name</th>
                        <th className="p-4 border border-black">Email</th>
                        <th className="p-4 border border-black">Phone Number</th>
                        <th className="p-4 border border-black">Address</th>
                        <th className="p-4 border border-black">Delete Actions</th>
                         <th className="p-4 border border-black">See details</th>
                          <th className="p-4 border border-black">Edit Actions</th>
                    </tr>
                </thead>
              
                <tbody>    
                  {  persons.map((single)=>(
                
                    <tr key={single?.id}>
                      <td className="p-4 border border-black">{single?.count}</td>
                       <td className="p-4 border border-black">{single?.fiestName}</td>
                       <td className="p-4 border border-black">{single?.lastName}</td>
                       <td className="p-4 border border-black">{single?.email}</td>
                       <td className="p-4 border border-black">{single?.phone}</td>
                       <td className="p-4 border border-black">{single?.Address}</td>
                       <td className="p-4 border border-black " ><button onClick={()=>removeHandeler(single.id)}>Delete<i className="fa-solid fa-trash-can-arrow-up p-2"></i></button></td>
                       <td className="p-4 border border-black"><Link to={`contects/${single.id}`}>See Details<i class="fa-solid fa-eye p-2"></i></Link></td>
                       <td className="p-4 border border-black"><Link to="/adding"><button onClick={()=>edithandeler(single)}>Edit<i class="fa-solid fa-pen-to-square p-2"></i></button></Link></td>
                    </tr>
                    
            ))}
         
                </tbody>
            </table>
                        </div> 
        </div>
        </div>
    )
}