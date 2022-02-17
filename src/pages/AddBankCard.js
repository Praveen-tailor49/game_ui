import React, { useEffect, useState } from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const AddBankCard = () => {

    const [userBankInfo, setUserBankInfo] = useState({
        userId: localStorage.getItem('token'), actualName: '', ifseCode: '', bankName: '', accountNumber: '', state: '', city: '', address: '', mobileNumber: '', email: '', upiAccount: '', userStatus: '0', userDelete: '1'
    })

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId:localStorage.getItem('token') 
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/showBankDetails", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })

    const HandlShow = (e) => {
        const { name, value } = e.target

        setUserBankInfo((prastate) => ({
            ...prastate,
            [name]: value,
        }))
    }

    const AddBankCardDetails = (e) => {

        e.preventDefault()

        const { userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete } = userBankInfo

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userId, actualName, ifseCode, bankName, accountNumber, state, city, address, mobileNumber, email, upiAccount, userStatus, userDelete
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
                if (result.mess === 'Successfully') {
                    alert('Add Successfully')
                    document.getElementById('showDiv').style.display = 'none'
                } else {
                    alert('Not Add')
                }
            })
            .catch(error => console.log('error', error));
    }
    console.log(userBankInfo.accountNumber);

    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand ><Link to='/mine' style={{ marginLeft: '42px', color: 'white' }}><IoMdArrowRoundBack /></Link></Navbar.Brand>
                    <Navbar.Brand >Add Bank Card</Navbar.Brand>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '85vw' }}>
                        <div style={{ color: 'white', marginRight: '30px', cursor: 'pointer' }}>
                            <span onClick={() => document.getElementById('showDiv').style.display = 'block'}><AiOutlinePlus /></span>
                        </div>
                    </div>
                </Navbar>
            </div>
            <div style={{ display: 'none' }} id='showDiv'>
                <div style={{ padding: '30px' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Actual Name" name='actualName' value={userBankInfo.actualName} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="IFSC Code" name='ifseCode' value={userBankInfo.ifseCode} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Bank Name" name='bankName' value={userBankInfo.bankName} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Account Number" name='accountNumber' value={userBankInfo.accountNumber} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="State/Territory" name='state' value={userBankInfo.state} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="City" name='city' value={userBankInfo.city} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Address" name='address' value={userBankInfo.address} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Mobile Number" name='mobileNumber' value={userBankInfo.mobileNumber} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" name='email' value={userBankInfo.email} onChange={HandlShow} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="UPI Account" name='upiAccount' value={userBankInfo.upiAccount} onChange={HandlShow} required />
                        </Form.Group>


                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div>
                                <Button variant="primary" style={{ width: '13rem' }} type="submit" onClick={(e) => AddBankCardDetails(e)}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddBankCard