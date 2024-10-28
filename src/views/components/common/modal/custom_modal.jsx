import { Modal } from 'antd'
import React from 'react'
import ModalBody from './modal_body'
import ModalTitle from './modal_title'
import { AiFillCloseCircle } from "react-icons/ai";
const CommonModal = ({ title, open, children, onCancel, footer = null, width }) => {
    return (
        <Modal
            title={<ModalTitle title={title} />}
            open={open}
            onCancel={onCancel}
            footer={footer}
            closeIcon={<AiFillCloseCircle color='white' />}
            width={width}
        >
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    )
}

export default CommonModal
