import React, { useEffect, useState } from 'react'
import { BiRupee, BiRefresh } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import ModalWin from './ModalWin';
import ModalReadRule from './ModalReadRule';
import { Link } from 'react-router-dom'

const WinHeader = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [deadline, setDeadline] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(0)

    const initialDeadline = () => {
        let now = new Date()
        let deadline = new Date(now.getTime() + 60000)
        setDeadline(deadline)
    }

    const updateTimer = () => {
        let now = new Date()
        let remaining = now.getTime() - deadline.getTime()

        setTimeRemaining(remaining)        
    }

    useEffect(() => {
        initialDeadline()
    }, [])
    

    useEffect(() => {
        updateTimer()
    })
    
    return (
        <>
            <div style={{ backgroundColor: '#1E90FF', color: 'white' }}>
                <p style={{ padding: '30px' }}>You can only withdraw cash after your bet amount recharge the top-up amount. For example, if you recharge 200rs, you can withdraw money only after your accumulated bet amountreaches 200rs. Our withdrawal time is 10:00-22:00, other time will not provide withdrawal services. </p>
            </div>
            <div style={{ backgroundColor: '#6495ED', color: 'white', marginTop: '-16px' }}>
                <div>
                    <h6 style={{ padding: '20px' }}>Available balance: 0.00 <BiRupee /></h6>
                </div>

                <div style={{ display: 'flex', padding: '10px' }}>
                    <div >
                        <Link to='/recharge'><Button variant="primary">Recharge</Button></Link>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Button variant="light" onClick={() => setModalShow1(true)}>Read Rule</Button>
                    </div>

                    <div style={{ fontSize: '20px', marginLeft: '40px' }}>
                        <BiRefresh />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#DCDCDC	' }}>
                <div style={{ display: 'flex', padding: '10px' }}>
                    <div>
                        <AiFillTrophy />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <h6>Period</h6>
                        <h4>20220210208</h4>
                    </div>

                    <div style={{ marginLeft: '55px' }}>
                        <h6>Count Down</h6>
                        <h4>{timeRemaining}</h4>
                    </div>
                </div>

                <div style={{ display: 'flex', padding: '6px' }}>
                    <div >
                        <Button style={{ backgroundColor: '#00FF00', borderStyle: 'none' }}>Join Green</Button>
                    </div>
                    <div style={{ marginLeft: '5px' }}>
                        <Button style={{ backgroundColor: '#9f40ff', borderStyle: 'none' }}>Join Violet</Button>
                    </div>
                    <div style={{ marginLeft: '5px' }}>
                        <Button style={{ backgroundColor: '#FD0404', borderStyle: 'none' }}>Join Red</Button>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: ' repeat(auto-fill, 125px)', padding: '30px', gridGap: '10px' }}>

                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 100</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 500</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 1000</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 3000</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 5000</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 10000</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 20000</Button>
                </div>
                <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 50000</Button>
                </div>
                <div>
                    <Button variant="light" onClick={() => setModalShow(true)} style={{ boxShadow: '1px 1px gray', width: '100px' }}>Coustom</Button>
                </div>
            </div>
            <ModalWin
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <ModalReadRule
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
        </>
    )
}

export default WinHeader