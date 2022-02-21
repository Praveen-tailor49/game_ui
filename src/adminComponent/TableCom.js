import React from 'react'
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
import { BiEdit} from 'react-icons/bi';
import { AiOutlineDelete} from 'react-icons/ai';
import { FcViewDetails} from 'react-icons/fc';

const TableCom = () => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th> Name</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>Markdfdfdffd</td>
                        <td>Ottodfdffffhh</td>
                        <td>
                            <Action>
                                <Button>
                                    <BiEdit/>
                                </Button>
                                <Button>
                                    <AiOutlineDelete/>
                                </Button>
                                <Button>
                                    <FcViewDetails/>
                                </Button>
                            </Action>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableCom

const Action = styled.div`
    display:flex;
    font-size: 20px;
`;

const Button = styled.div`
    margin-Left: 1.5rem;
    cursor: pointer;
    

    @media screen and (min-width: 768px) {
        margin-Left: 5rem;
      }
`;