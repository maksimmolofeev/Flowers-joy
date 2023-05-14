import { Modal } from 'shared/ui/Modal/Modal';
import { CompaniesForm } from '../CompaniesForm/CompaniesForm';
import { FC } from 'react';

export interface CompaniesModalProps {
    isOpen: boolean;
    onClose: () => void
}

export const CompaniesModal: FC<CompaniesModalProps> = (props) => {

    const {
        isOpen,
        onClose
    } = props

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <CompaniesForm />
        </Modal>
    );
}