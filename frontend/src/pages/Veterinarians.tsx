import styles from '/src/pages/Veterinarians.module.scss';

const EXAMPLE_VETS_DATA = [
  { firstName: 'Vanessa', lastName: 'Hudgens', specialties: [{ name: 'separation syndrome' }] },
  { firstName: 'Theodor', lastName: 'Roosevelt', specialties: [{ name: 'liver surgery' }] },
  { firstName: 'John', lastName: 'Connor', specialties: [] },
];

export const Veterinarians = () => {
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
          {EXAMPLE_VETS_DATA.map((vet) => {
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
          })}
        </tbody>
      </table>
    </>
  );
};
