export const PersonalInformation = () => {
  const gender = ['Femenino', 'Masculino', 'No binario', 'Otro'];

  const workStatus = [
    'Cesante, busco empleo en TI por primera vez.',
    'Cesante, ya he trabajado antes en TI.',
    'Tengo trabajo en TI, pero busco otro.',
    'Tengo trabajo (en otras áreas), pero busco en TI.'
  ];

  const cargo = [
    'Desarrollador/a Full Stack',
    'Desarrollador/a Back End',
    'Desarrollador/a Front End',
    'Diseñador/a UX / UX Research o UI',
    'Desarrollador/a Movil',
    'Data Scientist o especialista machine learning',
    'Ingenería de Datos'
  ];

  return (
    <div className="mt-10  sm:mt-0">
      <div className="my-8 ">
        <h3 className="text-2xl ml-16 font-sans font-bold text-[#140B34]">
          INFORMACIÓN PERSONAL
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-6 ">
        <div className="mt-5 my-4 md:col-span-2 md:mt-0">
          <div className="grid grid-cols-6 mx-40 md:gap-x-40 md:gap-y-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-xl my-4 font-sans font-medium text-[#140B34]"
              >
                Nombre
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 "
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                Número de teléfono móvil
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phone"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] py-2 px-3 shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="city"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                Ciudad
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="country"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                País/región
              </label>
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="country-name"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                ¿Con qué género te identificas?
              </label>
              <select
                id="gender"
                name="gender"
                autoComplete="gender-name"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl"
              >
                <option disabled selected>
                  Selecionar
                </option>
                {gender.map((gender) => (
                  <option>{gender}</option>
                ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="stateJob"
                className="block  my-4 text-lg text-[#140B34]"
              >
                ¿Cuál es tu estado laboral actual ?
              </label>
              <ul>
                {workStatus.map((workStatus) => (
                  <li>
                    <input
                      type="radio"
                      name="radio"
                      className=".radio1 mr-4 my-2"
                    />
                    <label className=" text-base font-light text-[#232323]">
                      {workStatus}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="stateJob"
                className="block text-lg font-[20px] mb-5 text-[#140B34]"
              >
                ¿Cuál o cuáles cargos te gustaria optar?
              </label>
              <label
                htmlFor="stack"
                className="block font-light text-base text-[#575253]"
              >
                <strong>Ten en cuenta:</strong> De acuerdo al cargo que
                postules, te pediremos que seas capaz de demostrarlo de manera
                practica durante el proceso de seleción.
              </label>
              <div className="form-control">
                <label className="label cursor-pointer mb-8">
                  <ul>
                    {cargo.map((cargo) => (
                      <li>
                        <input
                          type="checkbox"
                          className=".checkbox mr-4 my-2"
                        />
                        <span className="label-text font-light text-base text-[#232323]">
                          {cargo}
                        </span>
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="submit"
              className="inline-flex  justify-center rounded-md border border-transparent bg-[#2738F5] py-2 px-4 
              text-sm font-medium text-white shadow-sm hover:bg-[#2738F5]-700 focus:outline-none focus:ring-2 focus:ring-[#2738F5]-500 focus:ring-offset-2"
            >
              CONTINUAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
