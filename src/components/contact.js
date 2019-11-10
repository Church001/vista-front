import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import { SocialLinks } from 'components';
import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import { ReactComponent as Marker } from 'assets/svg/marker.svg';
import { ReactComponent as Phone } from 'assets/svg/phone.svg';
import axios from 'axios';
import api from '../utils/api';
import { AST_True } from 'terser';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactDetail: null,
      attemptedSubmission: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      success: false,
      error: null,
      isSubmitting: false
    };
  }

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
        this.errSetter(err);
      });
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = ev => {
    ev.preventDefault();
    const data = {
      service_id: 'sendgrid',
      template_id: 'template_MRaGFUZ5',
      user_id: 'user_HPapAzeDrNpzNMlZ0buh4',
      template_params: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      }
    };
    this.setState({
      attemptedSubmission: true,
      error: null,
      success: false
    });
    const { name, email, phone, message } = this.state;
    let declined = false;
    if (name === '') declined = true;
    if (email === '') declined = true;
    if (phone === '') declined = true;
    if (message === '') declined = true;
    if (!declined) {
      this.setState({
        isSubmitting: true
      });
      axios({
        method: 'post',
        url: api.EMAIL_URL,
        data: data
      })
        // .post(, data)
        .then(res => {
          this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            attemptedSubmission: false,
            error: null,
            success: true,
            isSubmitting: false
          });
        })
        .catch(err => {
          this.setState({
            error: err,
            success: false,
            attemptedSubmission: false,
            isSubmitting: false
          });
        });
    }
  };

  render() {
    const {
      contactDetail,
      name,
      email,
      phone,
      message,
      attemptedSubmission,
      success,
      error,
      isSubmitting
    } = this.state;
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
                <form>
                  {success && (
                    <h4
                      style={{
                        color: 'green'
                      }}
                    >
                      Thank you for reaching out to us. We'll get back to you.
                    </h4>
                  )}
                  {error !== null && (
                    <h4
                      style={{
                        color: 'red'
                      }}
                    >
                      Something went wrong, Please try again
                    </h4>
                  )}
                  <FormGroup>
                    <Label
                      className={
                        attemptedSubmission && name === ''
                          ? 'form__label_error'
                          : 'form__label'
                      }
                    >
                      Name
                    </Label>
                    <Input
                      className={
                        attemptedSubmission && name === ''
                          ? 'form__field_error'
                          : 'form__field'
                      }
                      name='name'
                      onChange={this.onChange}
                      value={name}
                      disabled={isSubmitting ? true : false}
                    />
                    {attemptedSubmission && name === '' && (
                      <p style={{ color: 'red' }}>must be filled</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label
                      className={
                        attemptedSubmission && email === ''
                          ? 'form__label_error'
                          : 'form__label'
                      }
                    >
                      Email
                    </Label>
                    <Input
                      className={
                        attemptedSubmission && email === ''
                          ? 'form__field_error'
                          : 'form__field'
                      }
                      name='email'
                      onChange={this.onChange}
                      value={email}
                      disabled={isSubmitting ? true : false}
                    />
                    {attemptedSubmission && email === '' && (
                      <p style={{ color: 'red' }}>must be filled</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label
                      className={
                        attemptedSubmission && phone === ''
                          ? 'form__label_error'
                          : 'form__label'
                      }
                    >
                      Phone Number
                    </Label>
                    <Input
                      className={
                        attemptedSubmission && phone === ''
                          ? 'form__field_error'
                          : 'form__field'
                      }
                      name='phone'
                      type='number'
                      onChange={this.onChange}
                      value={phone}
                      disabled={isSubmitting ? true : false}
                    />
                    {attemptedSubmission && phone === '' && (
                      <p style={{ color: 'red' }}>must be filled</p>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label
                      className={
                        attemptedSubmission && message === ''
                          ? 'form__label_error'
                          : 'form__label'
                      }
                    >
                      Message
                    </Label>
                    <Input
                      className={
                        attemptedSubmission && message === ''
                          ? 'form__field_error'
                          : 'form__field'
                      }
                      type={'textarea'}
                      name='message'
                      onChange={this.onChange}
                      value={message}
                      disabled={isSubmitting ? true : false}
                    />
                    {attemptedSubmission && message === '' && (
                      <p style={{ color: 'red' }}>must be filled</p>
                    )}
                  </FormGroup>

                  <div className='d-flex justify-content-center'>
                    {isSubmitting ? (
                      <Button
                        className='btn__purple btn--rounded btn--lg'
                        // onClick={this.onSubmit}
                        disabled={true}
                      >
                        SENDING...
                      </Button>
                    ) : (
                      <Button
                        className='btn__purple btn--rounded btn--lg'
                        onClick={this.onSubmit}
                      >
                        SEND MESSAGE
                      </Button>
                    )}
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
