import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Calendar } from '@progress/kendo-react-dateinputs';
import {
  Form,
  Field,
  FormElement,
  FieldRenderProps,
  FormRenderProps,
} from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello KendoReact!</h1>
        <Calendar />
      </div>
    );
  }
}

export class Formulario extends Component {
  private emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
  private emailValidator = (value: string) =>
    this.emailRegex.test(value) ? '' : 'Please enter a valid email.';
  private EmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
      <div>
        <Input {...others} />
        {visited && validationMessage && <Error>{validationMessage}</Error>}
      </div>
    );
  };

  render() {
    const handleSubmit = (dataItem: { [name: string]: any }) =>
      alert(JSON.stringify(dataItem, null, 2));
    return (
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement style={{ maxWidth: 650 }}>
            <fieldset className={'k-form-fieldset'}>
              <legend className={'k-form-legend'}>Please fill in the fields:</legend>
              <div className="mb-3">
                <Field name={'firstName'} component={Input} label={'First name'} />
              </div>

              <div className="mb-3">
                <Field name={'lastName'} component={Input} label={'Last name'} />
              </div>

              <div className="mb-3">
                <Field
                  name={'email'}
                  type={'email'}
                  component={this.EmailInput}
                  label={'Email'}
                  validator={this.emailValidator}
                />
              </div>
            </fieldset>
            <div className="k-form-buttons">
              <button
                type={'submit'}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                disabled={!formRenderProps.allowSubmit}>
                Submit
              </button>
            </div>
          </FormElement>
        )}
      />
    );
  }
}

export default App;
