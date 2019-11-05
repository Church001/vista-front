import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import { SocialLinks } from 'components';
import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import { ReactComponent as Marker } from 'assets/svg/marker.svg';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import axios from 'axios';
import api from '../utils/api';
import GeneralState from 'context/Context';
import { SET_ERROR } from 'context/Constants';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetail: null
    };
  }

  handlerName = e => {
    e.preventDefault();
    console.log(e);
  };

  errSetter = err => {
    const error = {};
    error.msg = err;
  };

  componentDidMount() {
    axios
      .get(api.CONTACTS_URL)
      .then(res => {
        this.setState({
          contactDetail: res.data[0]
        });
      })
      .catch(err => {
        // errSetter(err);
      });
  }

  render() {
    const { contactDetail } = this.state;
    return (
      <div className='cf'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-4 mb-md-0'>
              {contactDetail && contactDetail.heading ? (
                <h1 className='cf__title text text--xl c-white fw-light'>
                  {contactDetail.heading}
                </h1>
              ) : (
                <h1 className='cf__title text text--xl c-white fw-light'>
                  loading...
                </h1>
              )}

              <div className='cf__info'>
                {contactDetail && contactDetail.address ? (
                  <div className='cf__info__item'>
                    <div className='icon'>
                      <Marker width={20} />
                    </div>

                    <div className='texts'>
                      <p className='text c-white mb-0'>
                        {contactDetail.address}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='cf__info__item'>
                    <div className='icon' />
                    <div className='texts'>
                      <p className='text c-white mb-0'>loading...</p>
                    </div>
                  </div>
                )}

                {contactDetail && contactDetail.address ? (
                  <div className='cf__info__item'>
                    <div className='icon'>
                      <Mail width={20} height={20} />
                    </div>

                    <div className='texts'>
                      <a
                        className='text c-white'
                        href='mailto:sales.ng@vistaafrica.net'
                      >
                        {contactDetail.email1}
                      </a>
                      <a
                        className='text c-white'
                        href='mailto:info.ng@vistaafrica.net'
                      >
                        {contactDetail.email2}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className='cf__info__item'>
                    <div className='icon' />

                    <div className='texts'>
                      <a
                        className='text c-white'
                        href='mailto:sales.ng@vistaafrica.net'
                      >
                        loading...
                      </a>
                    </div>
                  </div>
                )}

                {contactDetail && contactDetail.address ? (
                  <div className='cf__info__item'>
                    <div className='icon'>
                      <Phone width={20} height={20} />
                    </div>

                    <div className='texts'>
                      <p className='text c-white'>
                        Telephone : {contactDetail.technical_phone}
                      </p>
                      <p className='text c-white'>
                        Sales : {contactDetail.sales_phone}
                      </p>
                      <p className='text c-white'>
                        Toll Free : {contactDetail.toll_free_phone}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='cf__info__item'>
                    <div className='icon' />

                    <div className='texts'>
                      <p className='text c-white'>loading...</p>
                    </div>
                  </div>
                )}
              </div>

              {contactDetail && contactDetail.address ? (
                <SocialLinks />
              ) : (
                <div className='cf__info__item'>
                  <div className='icon' />

                  <div className='texts'>
                    <p className='text c-white'>loading...</p>
                  </div>
                </div>
              )}
            </div>
            <div className='col-md-6'>
              <div className='card cf__card'>
                <form netify>
                  <FormGroup>
                    <Label className='form__label'>Name</Label>
                    <Input className='form__field' name='name' />
                  </FormGroup>

                  <FormGroup>
                    <Label className='form__label'>Email</Label>
                    <Input className='form__field' />
                  </FormGroup>

                  <FormGroup>
                    <Label className='form__label'>Phone Number</Label>
                    <Input className='form__field' />
                  </FormGroup>

                  <FormGroup>
                    <Label className='form__label'>Message</Label>
                    <Input className='form__field' type={'textarea'} />
                  </FormGroup>

                  <div className='d-flex justify-content-center'>
                    <Button
                      className='btn__purple btn--rounded btn--lg'
                      // onClick={e => submitter(e)}
                    >
                      SEND MESSAGE
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
