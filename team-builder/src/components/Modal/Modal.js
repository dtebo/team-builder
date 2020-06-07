import React, {useState} from 'react';

import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap';

const Modal = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <Model isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Add/Update Member</ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Model>
    )
}