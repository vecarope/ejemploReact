import Modal from '../Modals/Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';

const DataSkills = (props) => {
  const { devLanguage, database, tools } = props;

  return (
    <Modal title="Edita tus skills">
      {(props) => (
        <div>
          <ul
            class="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
            id="tabs-tabJustify"
            role="tablist"
          >
            <li class="nav-item flex-grow text-center" role="presentation">
              <a
                href="#tabs-homeJustify"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                id="tabs-home-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-homeJustify"
                role="tab"
                aria-controls="tabs-homeJustify"
                aria-selected="true"
              >
                Lenguajes
              </a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
              <a
                href="#tabs-profileJustify"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-profile-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profileJustify"
                role="tab"
                aria-controls="tabs-profileJustify"
                aria-selected="false"
              >
                Herramientas
              </a>
            </li>
            <li class="nav-item flex-grow text-center" role="presentation">
              <a
                href="#tabs-messagesJustify"
                class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                id="tabs-messages-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messagesJustify"
                role="tab"
                aria-controls="tabs-messagesJustify"
                aria-selected="false"
              >
                Herramientas
              </a>
            </li>
          </ul>
          <div class="tab-content" id="tabs-tabContentJustify">
            <div
              class="tab-pane fade show active"
              id="tabs-homeJustify"
              role="tabpanel"
              aria-labelledby="tabs-home-tabJustify"
            >
              Tab 1:
            </div>
            <div
              class="tab-pane fade"
              id="tabs-profileJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              Tab 2
            </div>
            <div
              class="tab-pane fade"
              id="tabs-messagesJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              Tab 3
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DataSkills;
