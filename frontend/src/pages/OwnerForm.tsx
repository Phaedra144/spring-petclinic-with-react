import { ChangeEvent, useState } from 'react';
import { InputField } from 'src/components/InputField';

const TELEPHONE_NUMBER_LENGTH = 8;

const defaultUserInfo = {
  firstName: '',
  lastName: '',
  city: '',
  address: '',
  telephone: '',
};

export const OwnerForm = () => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [telephoneErrors, setTelephoneErrors] = useState<string[]>([]);
  const newOwner = true;

  const validatePhoneNumberLength = (value: string) => {
    const errors = [...telephoneErrors];
    const lengthErrorMessages = {
      tooLong: 'Phone number too long',
      tooShort: 'Phone number not long enough',
      notStartWithPlus: 'Phone number should start with "+"',
    };

    const removeError = (message: string) => {
      const index = errors.indexOf(message);
      if (index !== -1) {
        errors.splice(index, 1);
      }
    };

    removeError(lengthErrorMessages.tooLong);
    removeError(lengthErrorMessages.tooShort);
    removeError(lengthErrorMessages.notStartWithPlus);

    if (value) {
      if (!value.startsWith('+')) {
        errors.push(lengthErrorMessages.notStartWithPlus);
      }
      if (value.length > TELEPHONE_NUMBER_LENGTH) {
        errors.push(lengthErrorMessages.tooLong);
      }
      if (value.length < TELEPHONE_NUMBER_LENGTH) {
        errors.push(lengthErrorMessages.tooShort);
      }
    }

    setTelephoneErrors(errors);
  };

  const handleTelephoneChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    validatePhoneNumberLength(value);
    setUserInfo((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <>
      <h2>Owner</h2>
      <form className="form-horizontal" id="add-owner-form" method="post">
        <div className="form-group has-feedback">
          <InputField
            type="text"
            name="firstName"
            label="First Name"
            placeHolder="First name"
            value={userInfo.firstName}
            onChange={handleChange}
            required
            errors={[]}
          />

          <InputField
            type="text"
            name="lastName"
            label="Last Name"
            placeHolder="Last name"
            value={userInfo.lastName}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="text"
            name="address"
            label="Address"
            placeHolder="Address"
            value={userInfo.address}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="text"
            name="city"
            label="City"
            placeHolder="City"
            value={userInfo.city}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="tel"
            name="telephone"
            label="Telephone"
            placeHolder="Telephone"
            value={userInfo.telephone}
            onChange={handleTelephoneChange}
            required
            errors={telephoneErrors}
          />
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary" type="submit">
              {newOwner ? 'Add Owner' : 'Update Owner'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
