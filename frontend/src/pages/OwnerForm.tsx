import { ChangeEvent, FormEventHandler, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useChangeOwnerMutation,
  useCreateOwnerMutation,
  useGetOwnerQuery,
} from 'src/api/ownerReducers';
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
  const params = useParams();
  const id = params['id'] ?? '';
  const newOwner = Boolean(!id);

  const { currentData: owner } = useGetOwnerQuery(id);

  const [userInfo, setUserInfo] = useState(owner ?? defaultUserInfo);
  const { telephoneErrors, validatePhoneNumberLength } = useTelephoneValidation();

  const [createOwner] = useCreateOwnerMutation();
  const [changeOwner] = useChangeOwnerMutation();

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
    if (id) {
      changeOwner({ ownerId: id, payload: userInfo })
        .unwrap()
        .then(() => refreshPage())
        .catch(({ data }) =>
          data.errors.forEach((item: string) => {
            toast.error(item);
          }),
        );
    } else {
      createOwner(userInfo)
        .unwrap()
        .then(() => refreshPage())
        .catch(({ data }) =>
          data.errors.forEach((item: string) => {
            toast.error(item);
          }),
        );
    }
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
            value={owner?.firstName}
            onChange={handleChange}
            required
            errors={[]}
          />

          <InputField
            type="text"
            name="lastName"
            label="Last Name"
            placeHolder="Last name"
            value={owner?.lastName}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="text"
            name="address"
            label="Address"
            placeHolder="Address"
            value={owner?.address}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="text"
            name="city"
            label="City"
            placeHolder="City"
            value={owner?.city}
            onChange={handleChange}
            required
            errors={[]}
          />
          <InputField
            type="tel"
            name="telephone"
            label="Telephone"
            placeHolder="Telephone"
            value={owner?.telephone}
            onChange={handleTelephoneChange}
            required
            errors={telephoneErrors}
          />
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <Button className="btn btn-primary" type="submit">
              {newOwner ? 'Add Owner' : 'Update Owner'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
