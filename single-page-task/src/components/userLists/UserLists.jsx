import React, { useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

const UserLists = () => {
  const [users, setUsers] = useState();
//   async function fetchData() {
//     const res = await fetch("http://localhost:8080/products");
//     const data = await res.json();
//     const users = await data;
//     console.log(users);

//   }
useEffect(()=>{
axios("http://localhost:8080/products").then(res=>setUsers(res.data))
},[users])

const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/products/${id}`)
}
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">

          <Tbody>
        
            {
                users && users.map((user)=>{
                    return(
                        <Tr key={user._id}>
                        <Td>{user.firstname}</Td>
                        <Td style={{paddingLeft:'350px'}}>{user.lastname}</Td>
                        <Td isNumeric>{user.email}</Td>
                        <Td><button onClick={()=>handleDelete(user._id)}>delete</button></Td>
                      </Tr>
                    )
                })
            }
            
          
                  
            
          </Tbody>
         
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserLists;
