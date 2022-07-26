import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form class="form-group">
  <div class="form-group">
    <label for="exampleFormControlFile1">Appload your photo</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
      <form>
      <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Surname</label>
    <div class="col-sm-10">
      <input type="Name" class="form-control" id="inputEmail3" placeholder="Surname"/>
    </div>
  </div>
  <div class="form-group row">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" >
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Niveau d'études</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            Licence
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
           Mastere
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
          <label class="form-check-label" for="gridRadios3">
            Doctorat
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Permis</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
         OUI/NON
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
<form class="form-group">
  <div class="form-group">
    <label for="exampleFormControlFile1">Appload your CV</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
    </div>
  );
}

export default App;
