import React from 'react'
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import UserLists from './../../components/userLists/UserLists';


const UserPage = () => {
  
  return (
    <div>
          <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>FirstName</Th>
        <Th>LastName</Th>
        <Th isNumeric>Email</Th>
      </Tr>
    </Thead>
  </Table>
</TableContainer>
<UserLists/>
    </div>
  )
}

export default UserPage