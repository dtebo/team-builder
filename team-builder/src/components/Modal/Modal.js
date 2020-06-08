import React, {useState, useEffect} from 'react';
import Form from '../Form/Form';

import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button
} from 'reactstrap';

const MyModal = (props) => {
    
    const {
        buttonLabel,
        className,
        modal,
        toggle,
        addNewMember,
        memberToEdit,
        editMember
    } = props;

    
    return(
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Add/Update Member</ModalHeader>
            <ModalBody>
                <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
};

export default MyModal;