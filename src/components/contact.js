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
              How to contact us for what you need?
            </h1>

            <div className='cf__info'>
              <div className='cf__info__item'>
                <div className='icon'>
                  <Marker width={20} />
                </div>

                <div className='texts'>
                  <p className='text c-white mb-0'>
                    27b Isaac John Street Ikeja, GRA Lagos.
                  </p>
                </div>
              </div>

              <div className='cf__info__item'>
                <div className='icon'>
                  <Mail width={20} height={20} />
                </div>

                <div className='texts'>
                  <a className='text c-white' href='mailto:sales@pts.com'>
                    sales@pts.com
                  </a>
                  <a
                    className='text c-white'
                    href='mailto:technicalservices@pts.com'
                  >
                    technicalservices@pts.com
                  </a>
                </div>
              </div>

              <div className='cf__info__item'>
                <div className='icon'>
                  <Phone width={20} height={20} />
                </div>

                <div className='texts'>
                  <p className='text c-white mb-0'>Sales : (081) 508 844 93</p>
                  <p className='text c-white mb-0'>
                    Technical : (081) 508 844 96
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
                  <Button className='btn__purple btn--rounded btn--xl'>
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
