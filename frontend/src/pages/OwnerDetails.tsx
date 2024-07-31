import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetOwnerQuery } from 'src/api/ownerReducers';

export const OwnerDetails = () => {
  const params = useParams();
  const { currentData: owner } = useGetOwnerQuery(params['id'] ?? '');
  return (
    <>
      <h2>Owner Information</h2>

      <table className="table table-bordered">
        <tr>
          <th>Name</th>
          <td>{`${owner?.firstName} ${owner?.lastName}`}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{owner?.address}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{owner?.city}</td>
        </tr>
        <tr>
          <th>Telephone</th>
          <td>{owner?.telephone}</td>
        </tr>
      </table>

      <Button className="btn btn-primary mr-4">Edit Owner</Button>
      <a className="btn btn-primary">Add New Pet</a>

      <br />
      <br />
      <br />
      {/* <h2>Pets and Visits</h2>

      <table className="table table-striped">
        <tr th:each="pet : ${owner.pets}">
          <td valign="top">
            <dl className="dl-horizontal">
              <dt>Name</dt>
              <dd th:text="${pet.name}"></dd>
              <dt>Birth Date</dt>
              <dd th:text="${#temporals.format(pet.birthDate, 'yyyy-MM-dd')}"></dd>
              <dt>Type</dt>
              <dd th:text="${pet.type}"></dd>
            </dl>
          </td>
          <td valign="top">
            <table className="table-condensed">
              <thead>
                <tr>
                  <th>Visit Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tr th:each="visit : ${pet.visits}">
                <td th:text="${#temporals.format(visit.date, 'yyyy-MM-dd')}"></td>
                <td th:text="${visit?.description}"></td>
              </tr>
              <tr>
                <td>
                  <a th:href="@{__${owner.id}__/pets/__${pet.id}__/edit}">Edit Pet</a>
                </td>
                <td>
                  <a th:href="@{__${owner.id}__/pets/__${pet.id}__/visits/new}">Add Visit</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> */}
    </>
  );
};
