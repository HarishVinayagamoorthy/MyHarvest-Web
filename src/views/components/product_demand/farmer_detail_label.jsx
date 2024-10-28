import React from 'react'

const FarmerDetailsLabel = ({ label, value }) => {
    return (
        <div className='label-container'>
            <text className='label-name'>
                {`${label} :`}
            </text>
            <text className='value-name'>
                {value}
            </text>
        </div>
    )
}

export default FarmerDetailsLabel
