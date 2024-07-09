import pets from './assets/images/pets.png';

function App() {

  return (
    <>
      <h2 >Welcome</h2>
      <div className="row">
          <div className="col-md-12">
            <img className="img-responsive" src={pets}/>
          </div>
      </div>
    </>
  )
}

export default App
