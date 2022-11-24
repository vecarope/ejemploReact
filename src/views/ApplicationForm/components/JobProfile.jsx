export const JobProfile = () => {
  const lenguage = [
    'Python',
    'Javascript',
    'HTML/CSS',
    'Java',
    'PHP',
    'Ruby',
    'Scala',
    'Perl y/o Go',
    'C/C++',
    'Kotlin',
    'Swift',
    'C#',
    'TypeScript',
    'Assembly',
    'R',
    'Go',
    'Bash/Shell'
  ];
  const basesFrameworks = [
    'Oracle',
    'Cassandra',
    'SQLite',
    'Redis',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase Realtime Database',
    'MariaDB',
    'Microsoft SQL Server',
    'JQuery',
    'React',
    'Spring',
    'Angular',
    'Vue.js',
    'Laravel',
    'Django',
    'Ruby On Rails',
    'ASP.NET o ASP.NETCore',
    'Flask',
    'Express.js',
    'FastAPI',
    '.NET',
    'Node.js'
  ];

  const tools = [
    'Github',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe XD',
    'AWS',
    'Docker',
    'Figma',
    'GIT',
    'Google Analytics',
    'Google Cloud Plataform',
    'Google Data Studio',
    'InVision',
    'InVision Studio',
    'Jira',
    'Kubernetes',
    'Marvel',
    'Microsoft Excel',
    'Microsoft Azure',
    'Miro',
    'Power BI',
    'Proto.io',
    'Qlik',
    'Sketch',
    'SPSS',
    'Tableau',
    'Unity 3D',
    'Unreal Engine',
    'Zepelin'
  ];

  /* faltaría traer el SELECT como un componente import y los datos con axios */
  return (
    <section className="mt-10  sm:mt-0">
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

      {/* Sección de Checkbox */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3">
        {/* lenguaje */}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Lenguaje</b>
              </p>
            </div>

            <div className="w-60">
              <ul>
                {lenguage.map((lenguage) => (
                  <li className="flex w-60 pt-2">
                    <input
                      type="checkbox"
                      className=".checkbox rounded-sm bg-[#E2F2FE] border-[#140B34] flex-none my-1"
                    />
                    <span className="flex-1 px-2 font-sans">{lenguage}</span>
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
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label=".form-select-sm lenguage"
                    >
                      <option selected> Nivel</option>
                      <option value="1">Nivel 1</option>
                      <option value="2">Nivel 2</option>
                      <option value="3">Nivel 3</option>
                    </select>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*  bases o frameworks*/}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Bases o frameworks</b>
              </p>
            </div>

            <div className="w-96">
              <ul>
                {basesFrameworks.map((basesFrameworks) => (
                  <li className="flex items-center w-96 pt-2">
                    <input
                      type="checkbox"
                      className=".checkbox rounded-sm bg-[#E2F2FE] border-[#140B34] flex-none my-1"
                    />
                    <span className="flex-1 px-2 font-sans">{basesFrameworks}</span>
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
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label=".form-select-sm basesFrameworks"
                    >
                      <option selected> Nivel</option>
                      <option value="1">Nivel 1</option>
                      <option value="2">Nivel 2</option>
                      <option value="3">Nivel 3</option>
                    </select>
                  </li>
                ))}
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
                {tools.map((tools) => (
                  <li className="flex items-center w-96 pt-2">
                    <input
                      type="checkbox"
                      className=".checkbox rounded-sm bg-[#E2F2FE] border-[#140B34] flex-none my-1"
                    />
                    <span className="flex-1 px-2 font-sans">{tools}</span>
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
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label=".form-select-sm tools"
                    >
                      <option selected> Nivel</option>
                      <option value="1">Nivel 1</option>
                      <option value="2">Nivel 2</option>
                      <option value="3">Nivel 3</option>
                    </select>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
    
    
  );
  
};
