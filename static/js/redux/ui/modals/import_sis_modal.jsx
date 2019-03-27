/*
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'boron/WaveModal';
import * as SemesterlyPropTypes from '../../constants/semesterlyPropTypes';

class ImportSISModal extends React.Component {
  componentDidMount() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }

  componentDidUpdate() {
    if (this.props.isVisible) {
      this.modal.show();
    }
  }

  render() {

    const modalHeader =
            (<div className="modal-content">
              <div className="modal-header">
                <h1>Allow Semester.ly to Import SIS data?</h1>
                <div className="modal-close" onClick={() => this.modal.hide()}>
                  <i className="fa fa-times" />
                </div>
              </div>
            </div>);
    const modalStyle = {
      width: '100%',
    };
    return (
      <Modal
        ref={(c) => { this.modal = c; }}
        className="save-calendar-modal sis-import-modal max-modal"
        modalStyle={modalStyle}
        onHide={() => {
          this.props.toggleImportSISModal();
          history.replaceState({}, 'Semester.ly', '/');
        }}
      >
        {modalHeader}
        <div className="sis-import-modal__container">
        <p>In Partnership with the JHU IT department, we can now import your SIS data to check  prerequisites and improve your search results.</p>

        <div>
          <a
              className="legal-links"
              href="/termsofservice"
              rel="noopener noreferrer"
              target="_blank"
          >
            Terms of Service
            <i
                className="fa fa-external-link"
            />
          </a>
          <a
              className="legal-links"
              href="/privacypolicy"
              rel="noopener noreferrer"
              target="_blank"
          >
            Privacy Policy
            <i
                className="fa fa-external-link"
            />
          </a>
        </div>
        <div className="call-to-action">
        <a href="/import_sis">
          <div className="signup-button">
            <i
                className="fa fa-check"
            />
            <span> I accept  </span>
          </div>
        </a>
        </div>
        </div>
      </Modal>
    );
  }
}

ImportSISModal.propTypes = {
  toggleImportSISModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ImportSISModal;

