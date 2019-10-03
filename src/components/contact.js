import React from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import { SocialLinks } from 'components';
import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import { ReactComponent as Marker } from 'assets/svg/marker.svg';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';

export const ContactForm = () => {
  return (
    <div className='cf'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-4 mb-md-0'>
            <h1 className='cf__title text text--xl c-white fw-light'>
              Let us know what you need!
            </h1>

            <div className='cf__info'>
              <div className='cf__info__item'>
                <div className='icon'>
                  <Marker width={20} />
                </div>

                <div className='texts'>
                  <p className='text c-white mb-0'>
                    22EB, Opposite Aswani Market, Osolo Way, Aswani-Oshodi
                    Industrial Scheme, Isolo, Lagos.
                  </p>
                </div>
              </div>

              <div className='cf__info__item'>
                <div className='icon'>
                  <Mail width={20} height={20} />
                </div>

                <div className='texts'>
                  <a
                    className='text c-white'
                    href='mailto:sales.ng@vistaafrica.net'
                  >
                    sales.ng@vistaafrica.net
                  </a>
                  <a
                    className='text c-white'
                    href='mailto:info.ng@vistaafrica.net'
                  >
                    info.ng@vistaafrica.net
                  </a>
                </div>
              </div>

              <div className='cf__info__item'>
                <div className='icon'>
                  <Phone width={20} height={20} />
                </div>

                <div className='texts'>
                  <p className='text c-white'>
                    Sales : +234 816 911 0000 / 815 211 0000
                  </p>
                  <p className='text c-white'>
                    Technical : +234 810 452 1818 / 816 911 0000
                  </p>
                  <p className='text c-white'>
                    Toll Free : 0800 847 8264 / 0700 8478 27273
                  </p>
                </div>
              </div>
            </div>

            <SocialLinks />
          </div>
          <div className='col-md-6'>
            <div className='card cf__card'>
              <Form>
                <FormGroup>
                  <Label className='form__label'>Name</Label>
                  <Input className='form__field' />
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
                  <Button className='btn__purple btn--rounded btn--lg'>
                    SEND MESSAGE
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
