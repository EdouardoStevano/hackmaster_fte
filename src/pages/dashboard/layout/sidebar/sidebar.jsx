import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

// Importation du style
import "./_sidebar.scss";

// Importation de ressources
import siriusLogo from "@assets/branding/supernova/logo512.png";
import { toast } from "react-toastify";

function sidebar() {
  const logOut = async() =>{
    const isConfirm = await Swal.fire({
        title: 'Deconnexion',
        text: "Etes-vous sur de vouloir vous deconnecter?",
        icon: 'info',
        allowEnterKey: true,
        customClass:{
            container: 'swalModal'
        },
        showCancelButton: true,
        confirmButtonColor: '#439F47',
        cancelButtonColor: '#df0b0b',
        focusCancel:true,
        showLoaderOnConfirm: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: 'annuler'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }else{
        localStorage.removeItem('token')
        localStorage.removeItem('urlToAccess')
        Swal.fire({
            text: 'Déconnexion effectuée. Nous espérons vous revoir bientôt !',
            icon: 'info',
            allowEnterKey: true,
            color: '#fff',
            customClass:{
                container: 'swalModal'
            },
            background:'#444',
          })
          setTimeout(() => {
            Swal.close();
          }, 2000);
        navigate('/login')
      }

}
  return (
    <div className={"sidebar-content"}>
      <div className="top">
        <div className="logo">
          <img src={siriusLogo} alt="application logo" width={"50px"} />
        </div>

        <div className="menu">
          <h5>Menu principale</h5>
          <NavLink to={"home"} className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Accueil</span>
          </NavLink>

          <NavLink to={"avis"} className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <span>Avis</span>
          </NavLink>
          <NavLink to={"document"} className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <span>Document</span>
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <div className="menu-btn deconnet">
          <Link
            to={"/"}
            onclick={() => toast.error("Vous vous êtes deconnecté.")}
          >
            Deconnexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
