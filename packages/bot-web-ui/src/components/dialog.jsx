import { Button, Modal, Icon } from '@deriv/components';
import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import '../assets/sass/bot-ui-dialog.scss';

const Dialog = ({ children, onOkButtonClick, onCancelButtonClick, is_open, title }) => {
    return (
        <Modal className='bot-dialog' is_open={is_open} toggleModal={onCancelButtonClick}>
            <div className='bot-dialog__content'>
                <div className='bot-dialog__header'>
                    <div className='bot-dialog__title'>{title}</div>
                    <div onClick={onCancelButtonClick}>
                        <Icon icon='IcCross' />
                    </div>
                </div>
                <div className='bot-dialog__text'>{children}</div>
                <div className='bot-dialog__footer'>
                    {onCancelButtonClick && (
                        <Button
                            className='bot-dialog__button bot-dialog__cancel'
                            text={localize('Cancel')}
                            onClick={onCancelButtonClick}
                            has_effect
                            secondary
                        />
                    )}
                    {onOkButtonClick && (
                        <Button
                            className='bot-dialog__button bot-dialog__ok'
                            text={localize('Ok')}
                            onClick={onOkButtonClick}
                            has_effect
                            primary
                        />
                    )}
                    {/* TODO Add array to send more buttons if requierd */}
                </div>
            </div>
        </Modal>
    );
};

Dialog.propTypes = {
    children: PropTypes.node,
    is_open: PropTypes.bool,
    onCancelButtonClick: PropTypes.func,
    onOkButtonClick: PropTypes.func,
    title: PropTypes.string,
};

export default Dialog;