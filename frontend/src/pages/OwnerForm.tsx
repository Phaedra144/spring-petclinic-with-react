import { ChangeEvent, FormEventHandler, useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateOwnerMutation } from 'src/api/ownerReducers';
import { InputField } from 'src/components/InputField';
import useRefreshPage from 'src/hooks/useRefreshPage';
import { useTelephoneValidation } from 'src/hooks/useTelephoneValidation';

const defaultUserInfo = {
  firstName: '',
  lastName: '',
  city: '',
  address: '',
  telephone: '',
};

export const OwnerForm = () => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const { telephoneErrors, validatePhoneNumberLength } = useTelephoneValidation();
  const newOwner = true;
  const [createOwner] = useCreateOwnerMutation();
  const refreshPage = useRefreshPage();

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    createOwner(userInfo)
      .then(() => refreshPage())
      .catch(() => toast.error('Something went wrong when creating the course'));
  };

  return (
    <>
      <h2>Owner</h2>
      <form className="form-horizontal" id="add-owner-form" method="post" onSubmit={handleSubmit}>
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
