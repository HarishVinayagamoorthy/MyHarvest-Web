import React, { useState, useEffect } from 'react';
import FarmerDetails from './farmer_details';
import { useTranslation } from 'react-i18next';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import CommonModal from '../common/modal/custom_modal';

const FarmerHeader = ({ farmer, isChecked, onCheckChange }) => {
    const { t } = useTranslation();
    const [farmerDetailsModal, setFarmerDetailsModal] = useState(false);

    useEffect(() => {
        setFarmerDetailsModal(false); 
    }, [isChecked]);

    const handleCheckboxChange = () => {
        onCheckChange(farmer.id, !isChecked);
    };

    const handleFarmer = () => {
        setFarmerDetailsModal(true);
    };

    const handleCloseFarmer = () => {
        setFarmerDetailsModal(false);
    };

    return (
        <>
            <div className='farmer-details-header'>
                <span className='farmer-name' onClick={handleFarmer}>
                    {farmer?.name}
                </span>
                <div onClick={handleCheckboxChange} style={{ cursor: 'pointer' }} id={`checkbox-${farmer.id}`}>
                    {isChecked ? <IoMdEyeOff color='white' /> : <IoMdEye color='white' />}
                </div>
            </div>
            <CommonModal open={farmerDetailsModal} footer={null} title={t('farmer_details')} onCancel={handleCloseFarmer} centered>
                <FarmerDetails farmer={farmer} />
            </CommonModal>
        </>
    );
};

export default FarmerHeader;
