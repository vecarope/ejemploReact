import { useEffect, useState } from 'react';
import apiClient from '../../../services/api.service';
export const JobProfile = () => {
  const [lenguage, setLenguage] = useState(null);
  const [basesFrameworks, setBasesFrameworks] = useState(null);
  const [tools, setTools] = useState(null);

  const getAllData = async () => {
    setLenguage(await apiClient('/dev-languages'));
    setBasesFrameworks(await apiClient('/databases'));
    setTools(await apiClient('/tools'));
  };

  useEffect(() => {
    getAllData();
  }, []);

  /* faltaría traer el SELECT como un componente import y los datos con axios */
  return (
    <section className="mt-10">
      <h3 className="text-2xl ml-16 font-sans font-bold text-[#140B34]">
        PERFIL LABORAL
      </h3>
      <div className="flex justify-center">
        <div className="p-9 max-w-6xl">
          <p className="font-sans text-lg tracking-wide leading-relaxed py-3">
            Queremos conocer tus competencias y experiencia. A continuación
            podrás elegir las competencias que conoces con respecto a 3 niveles:
            <br />
            <br />
            <b>Nivel 1:</b> No tengo experiencia laboral, pero he desarrollado
            proyectos utilizado esta tecnología/herramienta.
            <br />
            <br />
            <b>Nivel 2:</b> Tengo poca experiencia laboral, menos de dos años,
            necesito supervisión constante.
            <br />
            <br />
            <b>Nivel 3:</b> Tengo experiencia laboral (+2 años) y/o autonomía
            completa a la hora de desarrollar proyectos.
            <br />
            <br />
            <b>
              Ten en cuenta, de acuerdo a las competencias declaradas, te
              pediremos que seas capaz de demostrarlo de forma práctica durante
              el proceso de selección.
            </b>
            <br />
            <br />
          </p>
          <p className="font-sans text-lg tracking-wide leading-relaxed py-3">
            <b>Indícanos tus conocimientos a Nivel 1, Nivel 2, Nivel 3 </b>(No
            tengo experiencia laboral, pero he desarrollado proyectos utilizado
            esta tecnología/herramienta):
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3">
        {/* lenguaje */}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Lenguaje</b>
              </p>
            </div>

            <div className="w-min-auto">
              <ul>
                {lenguage !== null ? (
                  lenguage.data.map((lenguage) => (
                    <li className="flex w-60 pt-2" key={lenguage.id}>
                      <span className="flex-1 px-2 font-sans">
                        {lenguage.name}
                      </span>
                      <select
                        className="flex-1 bg-[#E2F2FE] border-[#140B34] rounded-md form-select form-select-sm
                            appearance-none
                            block
                            w-full
                            px-2
                            py-1
                            text-sm
                            font-normal
                            text-gray-700
                            bg-clip-padding bg-no-repeat
                            border border-solid
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label=".form-select-sm lenguage"
                      >
                        <option defaultValue={'0'}>Nivel</option>
                        <option value="1">Nivel 1</option>
                        <option value="2">Nivel 2</option>
                        <option value="3">Nivel 3</option>
                      </select>
                    </li>
                  ))
                ) : (
                  <p>Cargando datos...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* bases o frameworks */}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Bases o frameworks</b>
              </p>
            </div>

            <div className="w-96">
              <ul>
                {basesFrameworks !== null ? (
                  basesFrameworks.data.map((basesFrameworks) => (
                    <li
                      className="flex items-center w-96 pt-2"
                      key={basesFrameworks.id}
                    >
                      <span className="flex-1 px-2 font-sans">
                        {basesFrameworks.name}
                      </span>
                      <select
                        className="flex-1 bg-[#E2F2FE] border-[#140B34] rounded-md form-select form-select-sm
                            appearance-none
                            block
                            w-full
                            px-2
                            py-1
                            text-sm
                            font-normal
                            text-gray-700
                           bg-clip-padding bg-no-repeat
                            border border-solid
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label=".form-select-sm basesFrameworks"
                      >
                        <option defaultValue={'0'}>Nivel</option>
                        <option value="1">Nivel 1</option>
                        <option value="2">Nivel 2</option>
                        <option value="3">Nivel 3</option>
                      </select>
                    </li>
                  ))
                ) : (
                  <p>Cargando datos...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
        {/*  herramientas*/}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Herramientas</b>
              </p>
            </div>

            <div className=" w-96">
              <ul>
                {tools !== null ? (
                  tools.data.map((tools) => (
                    <li className="flex items-center w-96 pt-2" key={tools.id}>
                      <span className="flex-1 px-2 font-sans">
                        {tools.name}
                      </span>
                      <select
                        className="flex-1 bg-[#E2F2FE] border-[#140B34] rounded-md form-select form-select-sm
                            appearance-none
                            block
                            w-full
                            px-2
                            py-1
                            text-sm
                            font-normal
                            text-gray-700
                           bg-clip-padding bg-no-repeat
                            border border-solid
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label=".form-select-sm tools"
                      >
                        <option defaultValue={'0'}> Nivel</option>
                        <option value="1">Nivel 1</option>
                        <option value="2">Nivel 2</option>
                        <option value="3">Nivel 3</option>
                      </select>
                    </li>
                  ))
                ) : (
                  <p>Cargando datos...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
