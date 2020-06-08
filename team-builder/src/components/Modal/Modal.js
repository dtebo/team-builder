import React, {useState, useEffect} from 'react';

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
        form,
        modal,
        toggle
    } = props;

    return(
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Add/Update Member</ModalHeader>
            <ModalBody>
                {form}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
};

export default MyModal;