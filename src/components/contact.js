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

let contactDetail = [];

export const ContactForm = () => {
  const [name, SetName] = useState('');
  const [contact, setContact] = useState({});
  const { dispatch } = useContext(GeneralState);

  const handlerName = e => {
    e.preventDefault();
    console.log(e);
  };

  const submitter = e => {
    e.preventDefault();
    console.log(contact);
  };

  const errSetter = err => {
    const error = {};
    error.msg = err;
    dispatch({
      type: SET_ERROR,
      payload: error
    });
  };

  useEffect(() => {
    axios
      .get(api.CONTACTS_URL)
      .then(res => {
        contactDetail = res.data[0];
        setContact(res.data[0]);
      })
      .catch(err => {
        errSetter(err);
      });
  }, []);

  return (
    <div className='cf'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-4 mb-md-0'>
            {contactDetail.heading ? (
              <h1 className='cf__title text text--xl c-white fw-light'>
                {contactDetail.heading}
              </h1>
            ) : (
              <h1 className='cf__title text text--xl c-white fw-light'>
                loading...
              </h1>
            )}

            <div className='cf__info'>
              {contactDetail.address ? (
                <div className='cf__info__item'>
                  <div className='icon'>
                    <Marker width={20} />
                  </div>

                  <div className='texts'>
                    <p className='text c-white mb-0'>
                      2EB, Opposite Aswani Market, Osolo Way, Aswani-Oshodi
                      Industrial Scheme, Isolo, Lagos.
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

              {contactDetail.address ? (
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
                    {/* <a
                      className='text c-white'
                      href='mailto:info.ng@vistaafrica.net'
                    >
                      loading...
                    </a> */}
                  </div>
                </div>
              )}

              {contactDetail.address ? (
                <div className='cf__info__item'>
                  <div className='icon'>
                    <Phone width={20} height={20} />
                  </div>

                  <div className='texts'>
                    <p className='text c-white'>
                      Sales : +234 (0) 816 911 0000 / 815 211 0000
                    </p>
                    <p className='text c-white'>
                      Technical : +234 (0) 810 452 1818 / 816 911 0000
                    </p>
                    <p className='text c-white'>
                      Toll Free : 0800 847 8264 / 0700 8478 27273
                    </p>
                  </div>
                </div>
              ) : (
                <div className='cf__info__item'>
                  <div className='icon' />

                  <div className='texts'>
                    <p className='text c-white'>loading...</p>
                    {/* <p className='text c-white'>
                      loading...
                    </p>
                    <p className='text c-white'>
                      loading...
                    </p> */}
                  </div>
                </div>
              )}
            </div>

            {contactDetail.address ? (
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
              {/* <Form> */}
              <FormGroup>
                <Label className='form__label'>Name</Label>
                <Input
                  className='form__field'
                  name='name'
                  value={name}
                  onChange={e => handlerName(e)}
                  disabled={!contactDetail.heading}
                />
              </FormGroup>

              <FormGroup>
                <Label className='form__label'>Email</Label>
                <Input
                  disabled={!contactDetail.heading}
                  className='form__field'
                />
              </FormGroup>

              <FormGroup>
                <Label className='form__label'>Phone Number</Label>
                <Input
                  disabled={!contactDetail.heading}
                  className='form__field'
                />
              </FormGroup>

              <FormGroup>
                <Label className='form__label'>Message</Label>
                <Input
                  disabled={!contactDetail.heading}
                  className='form__field'
                  type={'textarea'}
                />
              </FormGroup>

              <div className='d-flex justify-content-center'>
                <Button
                  className='btn__purple btn--rounded btn--lg'
                  onClick={() => submitter()}
                  disabled={!contactDetail.heading}
                >
                  SEND MESSAGE
                </Button>
              </div>
              {/* </Form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
