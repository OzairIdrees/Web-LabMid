import { Link } from "react-router-dom";
function Menubar() {
    return (  
        <div>
<navbar>
<nav className="navbar navbar-light bg-light" >
  <div className="container-fluid" >
    <h4 id="xyz"style={{color:"Blue",marginLeft:"550px",fontFamily:"Times New Roman"}}><strong> Fifa</strong></h4>
    <form className="d-flex input-group w-auto" style={{marginRight:"100px"}}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
      <button type="button" className="btn btn-light">Store</button>
      <button type="button" className="btn btn-light">Tickets</button>
      <button type="button" className="btn btn-light">Login</button>
    </form>
  </div>
</nav>

   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TOURNMANENTS ON FIFA+</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/details'>
          <a class="nav-link active" aria-current="page" href="#">ABOUT FIFA</a>
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SOCIAL IMPACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WOMEN'S FOOTBAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">TECHNICAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">LEGAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">WORLD RANKING</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</navbar>
        </div>
    );
}

export default Menubar;