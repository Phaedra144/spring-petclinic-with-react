import { usePaging } from "../hooks/usePaging";

const EXAMPLE_OWNERS_DATA = [
    { firstName: 'Vanessa', lastName: 'Hudgens', pets: [{ name: 'Málna' }] },
    { firstName: 'Theodor', lastName: 'Roosevelt', pets: [{ name: 'Kaktusz' }] },
    { firstName: 'John', lastName: 'Connor', pets: [] },
    { firstName: 'Stewart', lastName: 'Harold', pets: [] },
    { firstName: 'Santana', lastName: 'Jacobson', pets: [] },
  ];


export const OwnerList = () => {
    const [currentItems, paginator] = usePaging({ itemsPerPage: 2, items: EXAMPLE_OWNERS_DATA });
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
              currentItems.map(
                (vet: { firstName: string; lastName: string; pets: { name: string }[] }) => {
                  return (
                    <tr key={`${vet.firstName + ' ' + vet.lastName}`}>
                      <td>{`${vet.firstName + ' ' + vet.lastName}`}</td>
                      <td>
                        {vet.pets.map((pet) => {
                          return <span>{pet.name}</span>;
                        })}
                        {vet.pets.length < 1 && <span>none</span>}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  );
                },
              )}
          </tbody>
        </table>
        {paginator}
      </>
    );
};
