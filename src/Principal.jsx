import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import "./estilo.css"

function Pag0(){
   return(
     <div className="padre">
         <div className="contenido">
              
         </div>

         <div className="ads">
                
         </div>

         <div className="pie">
            <br></br>
            <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
         </div>
     </div>
   );
}
function Pag1()
{
    return(
        <div className="padre">
         <div className="contenido">
             <h1>Historia de Navidad en Bolivia</h1>
           
            </div>

            <div className="ads">
                 
            </div>

            <div className="pie">
                <br></br>
                <h3>Realizado por Luis Alexander Olarte Marquez, 2025</h3>
            </div>
     </div>
    );
}

function Principal()
{
    return(
        <div className="cabecera">
            <h1>Titulo mierda</h1>
                 <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand">MENÚ</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/"><a class="nav-link active" aria-current="page">Inicio</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag1"><a class="nav-link">Historia</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag2"><a class="nav-link">Costumbres</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag3"><a class="nav-link">Gastronomía</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag4"><a class="nav-link">Regalos populares</a></Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/pag5"><a class="nav-link">Contactos</a></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                 </nav>
              <Routes>
                <Route path="/"element={<Pag0></Pag0>}></Route>
                <Route path="/pag1" element={<Pag1></Pag1>}></Route>
              </Routes>
            </div>
    );

}
export default Principal;