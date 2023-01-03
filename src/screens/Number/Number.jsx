import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './number.css';

const Number = () => {
    const [number,setNumber] = useState('');
    const [range,setRange] = useState('1000')

    function createRandomNumber() {
        const numberRange = document.getElementById('numberRange').value;
        if(numberRange < 10000 && numberRange >= 0) {
            const random = Math.floor(Math.random() * numberRange);
            setRange(numberRange)
            setNumber(random);
        }else if (numberRange < 0){
            Swal.fire({
                icon: 'error',
                title: 'Range error',
                text: "Range musn't be negative!",
                confirmButtonColor:'#00A154'
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Range error',
                text: 'Range must be between 0 to 9999!',
                confirmButtonColor:'#00A154'
              })
        }

    }

    function createAgain() {
        const random = Math.floor(Math.random() * range);
        setNumber(random)
    }


    return (
        <div className='number'>
            <h1 className='number-title1'>
                GENERATE<span className='number-title2'> RANDOM </span>NUMBER
            </h1>
            {
                number.length === 0 ? 
            <>
                <div className='number-inputs'>
                    <input
                        defaultValue='0'
                        className='number-input'
                        readOnly
                    />
                    <p className='number-input-to'>TO</p>
                    <input
                        defaultValue='1000'
                        className='number-input'
                        id='numberRange'
                    />
                </div>
                <button className='number-button' onClick={() => createRandomNumber()}>
                    CREATE RANDOM NUMBER
                </button>
            </>
            : 
            <>
                <p className='number-created'>{ number }</p>
                <div className='number-created-container-buttons'>
                    <button className='number-button' onClick={() => createAgain()} >
                        CREATE RANDOM AGAIN
                    </button>
                    <button className='number-button' onClick={() => setNumber('')}>
                        CHANGE RANDOM RANGE
                    </button>
                </div>
            </>
            }
        </div>
    );
}

export default Number;
