import React, {useState} from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import { AiOutlinePlus } from 'react-icons/ai';


const AddAddress = () => {

    const [userAddressInfo, setUserAddressInfo] = useState({
        userId:'', fullName:'', mobileNumber:'', pinCode:'', state:'', city:'', address:''
    })

    const HandlShow = (e) => {
        const { name, value} = e.target

        setUserAddressInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const AddAddressDetails = (e) => {

        e.preventDefault()

        const {userId, fullName, mobileNumber, pinCode, state, city, address} = userAddressInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, fullName, mobileNumber, pinCode, state, city, address
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/blankDetails", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.mess === 'Successfully'){
                    alert('Add Successfully')
                } else {
                    alert('Not Add')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{marginLeft:'42px', color:'white'}}><IoMdArrowRoundBack/></Link></Navbar.Brand>
                    <Navbar.Brand >Add Address</Navbar.Brand>
                    <div style={{display:'flex', justifyContent:'flex-end', width:'85vw'}}>
                        <div style={{color:'white', marginRight:'30px', cursor:'pointer'}}>
                            <span onClick={() => document.getElementById('showDiv').style.display = 'block'}><AiOutlinePlus/></span>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div style={{display:'none' }} id='showDiv'>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Full Name" name='fullName' value={userAddressInfo.fullName} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={userAddressInfo.mobileNumber} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Pincode" name='pinCode' value={userAddressInfo.pinCode} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State" name='state' value={userAddressInfo.state} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Town/City" name='city' value={userAddressInfo.city} onChange={HandlShow} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Detail Address" name='address' value={userAddressInfo.address} onChange={HandlShow} />
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button variant="primary" style={{width:'13rem'}} type="submit" onClick={(e) => AddAddressDetails(e)}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AddAddress