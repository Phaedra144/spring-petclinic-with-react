import { useGetOwnersQuery } from 'src/api/ownerReducers';
import { Owner } from 'src/types/owner';
import { usePaging } from '../hooks/usePaging';
import { useParams } from 'react-router-dom';

export const OwnerList = () => {
  const { lastName } = useParams<{ lastName: string }>();
  const { data } = useGetOwnersQuery(lastName ?? '');
  const owners = data ?? [];
  const [currentItems, paginator] = usePaging({ itemsPerPage: 5, items: owners });
  return (
    <>
      <h2 className="mb-2">Owners</h2>
      <table id="owners" className="table table-striped mb-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Telephone</th>
            <th>Pets</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(currentItems) &&
            currentItems.map((owner: Owner) => {
              return (
                <tr key={`${owner.firstName + ' ' + owner.lastName}`}>
                  <td>{`${owner.firstName + ' ' + owner.lastName}`}</td>
                  <td>{owner.address}</td>
                  <td>{owner.city}</td>
                  <td>{owner.telephone}</td>
                  <td>
                    {owner.pets.map((pet, i) => {
                      return (
                        <span>
                          {owner.pets.length > 1 && i !== owner.pets.length - 1
                            ? `${pet.name}, `
                            : pet.name}
                        </span>
                      );
                    })}
                    {owner.pets.length < 1 && <span>none</span>}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {paginator}
    </>
  );
};
