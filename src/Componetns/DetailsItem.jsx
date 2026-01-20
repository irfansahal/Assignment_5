import { Link, useParams  } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

export default function DetailsItem(){
  const { postId } = useParams();
  const [ post, setPost ] = useState(null)

  useEffect(()=>{
  const getAPI =async () => {
     const response = await fetch(`https://fake-json-1.onrender.com/contects/${postId}`);
     console.log(response);
     
     const data = await response.json();
     setPost(data)
     console.log(post);
     
  }
   getAPI()
  },[postId])

    
    return(
      <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center mb-10">this is Details page</h2>
      <div className="flex flex-col items-center  w-[90%] shadow-xl/30 pb-5">
        <table>
          <thead>
            <tr>
              <th className="p-4 border border-black">#</th>
              <th className="p-4 border border-black">First Name</th>
              <th className="p-4 border border-black">Last Name</th>
              <th className="p-4 border border-black">Email</th>
              <th className="p-4 border border-black">Phone</th>
              <th className="p-4 border border-black">Address</th>               
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border border-black">{post?.count}</td>
              <td className="p-4 border border-black">{post?.fiestName}</td>
              <td className="p-4 border border-black">{post?.lastName}</td>
              <td className="p-4 border border-black">{post?.email}</td>
              <td className="p-4 border border-black">{post?.phone}</td>
              <td className="p-4 border border-black">{post?.Address}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/"><button className='rounded-md bg-blue-500 text-amber-50    
    hover:bg-blue-800 w-[150px] p-2 m-3
     '>back to the Home</button></Link>
      </div>
      </div>
    )
}