import React, {useState} from 'react'
import { BiRupee, BiRefresh } from 'react-icons/bi';
import { AiFillTrophy } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import ModalWin from './ModalWin';
import ModalReadRule from './ModalReadRule';
import { Link } from 'react-router-dom'
import coin1 from '../image/coins-img/coin-1.png'
import coin2 from '../image/coins-img/coin-2.png'
import coin3 from '../image/coins-img/coin-3.png'
import coin4 from '../image/coins-img/coin-4.png'
import coin5 from '../image/coins-img/coin-5.png'
import coin6 from '../image/coins-img/coin-6.png'
import coin7 from '../image/coins-img/coin-7.png'
import coin8 from '../image/coins-img/coin-8.png'
import card1 from '../image/cards/card-1.png'
import card2 from '../image/cards/card-2.png'
import card3 from '../image/cards/card-3.png'
import ModalRupesSelect from './ModalRupesSelect';

const WinHeader = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [valueRupess, setValueRupess] = useState('');

    const showDiv = () =>{
         document.getElementById('showCoin').style.display='block'
    }

    const showModal2 = (val) => {
        setModalShow2(true)
        console.log(val);
        setValueRupess(val)
    }

    return (
        <>
            <div style={{ backgroundColor: '#1E90FF', color: 'white' }}>
                <p style={{ padding: '30px' }}>You can only withdraw cash after your bet amount recharge the top-up amount. For example, if you recharge 200rs, you can withdraw money only after your accumulated bet amountreaches 200rs. Our withdrawal time is 10:00-22:00, other time will not provide withdrawal services. </p>
            </div>
            <div style={{ backgroundColor: '#6495ED', color: 'white', marginTop: '-16px' }}>
                <div>
                    <h6 style={{ padding: '20px' }}>Available balance: 0.00 <BiRupee /></h6>
                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
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
                <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
                    <div>
                        <AiFillTrophy />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <h6>Period</h6>
                        <h4>20220210208</h4>
                    </div>

                    <div style={{ marginLeft: '55px' }}>
                        <h6>Count Down</h6>
                        <h4>02:49</h4>
                    </div>
                </div>

                <div style={{ display: 'flex', padding: '6px', justifyContent: 'center' }}>

                    <div style={{ margin: '1rem' }} onClick={()=>showDiv()}>
                        <img src={card2} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '0.5rem' }} alt='card1' />
                    </div>

                    <div style={{ margin: '1rem' }} onClick={()=>showDiv()}>
                        <img src={card1} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '0.5rem' }} alt='card2' />
                    </div>

                    <div style={{ margin: '1rem' }} onClick={()=>showDiv()}>
                        <img src={card3} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '0.5rem' }} alt='card3' />
                    </div>
                </div>
            </div>

            <div style={{display:'none'}} id='showCoin'>
                <div style={{ display: 'grid', gridTemplateColumns: ' repeat(auto-fill, 125px)', justifyItems: 'center', gridGap: '10px', padding: '1rem' }}>

                    <div >
                        <img src={coin1} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#F6B527' }} alt='coin1'  onClick={() => showModal2('100')} />
                    </div>
                    <div >
                        <img src={coin2} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#ED1F57' }} alt='coin2'  onClick={() => showModal2('500')} />
                    </div>
                    <div >
                        <img src={coin3} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#BB4D9D' }} alt='coin3'  onClick={() => showModal2('1000')} />
                    </div>
                    <div >
                        <img src={coin4} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#7153A3' }} alt='coin4'  onClick={() => showModal2('3000')} />
                    </div>
                    <div >
                        <img src={coin5} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#443292' }} alt='coin5'  onClick={() => showModal2('5000')} />
                    </div>
                    <div >
                        <img src={coin6} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#10B99D' }} alt='coin6'  onClick={() => showModal2('10000')} />
                    </div>
                    <div >
                        <img src={coin7} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#6CBD45' }} alt='coin7' onClick={() => showModal2('20000')} />
                    </div>
                    <div >
                        <img src={coin8} style={{ boxShadow: '1px 1px gray', width: '5rem', borderRadius: '50rem', background: '#E16926' }} alt='coin8' onClick={() => showModal2('30000')} />
                    </div>
                    {/* <div>
                    <Button variant="light" style={{ boxShadow: '1px 1px gray', width: '100px' }}><BiRupee /> 500</Button>
                </div> */}


                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
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

            <ModalRupesSelect
               show={modalShow2}
               onHide={() => setModalShow2(false)}
               value= {valueRupess}
            />
        </>
    )
}

export default WinHeader