import { usePaging } from '../hooks/usePaging';
import styles from '/src/pages/Veterinarians.module.scss';

const EXAMPLE_VETS_DATA = [
  { firstName: 'Vanessa', lastName: 'Hudgens', specialties: [{ name: 'separation syndrome' }] },
  { firstName: 'Theodor', lastName: 'Roosevelt', specialties: [{ name: 'liver surgery' }] },
  { firstName: 'John', lastName: 'Connor', specialties: [] },
  { firstName: 'Stewart', lastName: 'Harold', specialties: [] },
  { firstName: 'Santana', lastName: 'Jacobson', specialties: [] },
];

export const Veterinarians = () => {
  const [currentItems, paginator] = usePaging({ itemsPerPage: 2, items: EXAMPLE_VETS_DATA });
  return (
    <>
      <h2 className="mb-2">Veterinarians</h2>
      <table id="vets" className="table table-striped mb-4">
        <thead className={styles.tableHead}>
          <tr>
            <th>Name</th>
            <th>Specialties</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(currentItems) &&
            currentItems.map(
              (vet: { firstName: string; lastName: string; specialties: { name: string }[] }) => {
                return (
                  <tr key={`${vet.firstName + ' ' + vet.lastName}`}>
                    <td>{`${vet.firstName + ' ' + vet.lastName}`}</td>
                    <td>
                      {vet.specialties.map((specialty) => {
                        return <span>{specialty.name}</span>;
                      })}
                      {vet.specialties.length < 1 && <span>none</span>}
                    </td>
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
