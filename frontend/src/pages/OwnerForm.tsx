import { ChangeEvent, useState } from 'react';

const defaultUserInfo = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  userType: '',
  partnerCompany: '',
  channel: 'standard',
  companyName: '',
  usherer: null,
  hasGlobalVisibility: false,
  excludeMarketingCampaign: true,
};

export const OwnerForm = () => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
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
          <label style={{ cursor: 'pointer', marginBottom: '-5px' }}>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={''}
            onChange={handleChange}
            required
          />
          <label style={{ cursor: 'pointer', marginBottom: '-5px' }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={''}
            onChange={handleChange}
            required
          />
          <label style={{ cursor: 'pointer', marginBottom: '-5px' }}>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={''}
            onChange={handleChange}
            required
          />
          <label style={{ cursor: 'pointer', marginBottom: '-5px' }}>City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={''}
            onChange={handleChange}
            required
          />
          <label style={{ cursor: 'pointer', marginBottom: '-5px' }}>Telephone</label>
          <input
            type="text"
            name="telephone"
            placeholder="Telephone"
            value={''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              th:with="text=${owner['new']} ? 'Add Owner' : 'Update Owner'"
              className="btn btn-primary"
              type="submit"
              th:text="${text}"
            >
              Add Owner
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
