import React from 'react';
import { Form, Label, FormGroup, Input } from 'reactstrap';

export const ContactForm = props => {
  return (
    <div className='cf'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='cf__title text text--xl c-white fw-light'>
              How to contact us for what you need?
            </h1>

            <div className='cf__info'>
              <div className='cf__info__item'>
                <div className='icon'>icon</div>

                <div className='texts'>
                  <p className='text c-white mb-0'>
                    27b Isaac John Street Ikeja, GRA Lagos.
                  </p>
                </div>
              </div>

              <div className='cf__info__item'>
                <div className='icon'>icon</div>

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
                <div className='icon'>icon</div>

                <div className='texts'>
                  <p className='text c-white mb-0'>Sales : (081) 508 844 93</p>
                  <p className='text c-white mb-0'>
                    Technical : (081) 508 844 96
                  </p>
                </div>
              </div>
            </div>

            <div className='cf__social'>ig</div>
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
