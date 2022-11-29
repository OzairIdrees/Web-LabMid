const Footer = () => {
    return ( 
        //  Top Section
           <div style={{width:"99%"}}>
            <br></br>
            <h3 style={{fontFamily:"Times New Roman", color:"Blue", alignText:"center", marginLeft:"47%"}}><strong> Fifa Partners</strong></h3>
            <br></br>
            <table style={{width:"100%"}}>
                <tr>
                    
                    <td> <img src="https://i.pinimg.com/280x280_RS/89/27/18/892718ab333f14d55cdcb71c4e0d67a7.jpg" alt="Addidas"/> </td>
                    <td> <img src="https://i.pinimg.com/236x/85/a3/15/85a315faadfbc446cfb427aa12706940.jpg" alt="CocaCola" style={{width:"150px", height:"150px"}}/> </td>
                    <td> <img src="https://w7.pngwing.com/pngs/235/965/png-transparent-qatar-airways-logo-airline-oryx-others-text-logo-qatar-airways-thumbnail.png" alt="Qatar Airways" style={{width:"150px", height:"150px"}}/> </td>
                    <td> <img src="https://i.pinimg.com/280x280_RS/aa/1a/38/aa1a389e1329ddaeaa193a71929b52bf.jpg" alt="Hyundai" style={{width:"150px", height:"150px"}}/> </td>
                    <td> <img src="https://i.pinimg.com/280x280_RS/cd/4f/54/cd4f547ad9e75660943cf45704bee77a.jpg" alt="Visa" style={{width:"150px", height:"150px"}}/> </td>
                    <td> <img src="https://eiti.org/sites/default/files/styles/logo/public/2022-03/QP%20logo%20vertical-big_0.jpg?itok=a-cWIhgv" alt="Q energy" style={{width:"150px", height:"150px"}}/> </td>
                    

                </tr>
            </table>
            <br></br>
            <h1 style={{marginLeft:"50%", fontFamily:"Algerian", color:"Blue"}}><strong> FIFA</strong></h1>
            <br></br>
              {/* Middle Left Section */}
              <div>
            <div style={{fontFamily:"Times New Roman", marginLeft:"5%", color:"Black"}}>
            <h2 ><strong>Explore</strong> </h2>
            <br></br>
            <p>Competetions</p>
            <p>About FIFA</p>
            <p>Women Football</p>
            <p>Social Impact</p>
            <p>Football development</p>
            <p>Technical</p>
            <p>Legal and Compliance</p>
            <p>Fifa coca cola world ranking</p>
           
        </div>
          {/* Middle Center Section */}
          <div style={{fontFamily:"Times New Roman",marginLeft:"30%",marginTop:"-20%" ,color:"Black"}}>
            <h2 ><strong>ALSO VISIT</strong> </h2>
            <br></br>
            <p>All Stories& Topics</p>
            <p>Official Documents</p>
            <p>Jobs & careers</p>
            <p>Contact Fifa</p>
            
        </div>
        </div>
            {/* Bottom Section */}
            <div>
     <hr></hr>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">

<div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"5%"}}>
<ul className="navbar-nav">
<li className="nav-item active">
 <a className="nav-link" href="#">Term of service </a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#">Data protection portal</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#">Download</a>
</li>
<li className="nav-item">
 <a className="nav-link" href="#">Preference center</a>
</li>
</ul>

</div>
<div classname="btn-group dropup">

<div classname="dropdown-menu">

</div>
</div>
</nav>
<p style={{marginLeft:"5%"}}><strong>Copyright 1994 -2022 FIFA. All rights reserved.</strong></p>
        </div>
        </div>

     ); 
}
 
export default Footer;