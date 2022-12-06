

const availability =[ 'Full Time', 'Part Time', 'Freelance']; 

const status = [ 'Quiero trabajo desde mi ciudad actual', 'Estoy disponible para migrar de mi ciudad dentro de mi país', 'Estoy disponible para migrar a otro país', ]; 

const visaStatus = [ 'Estados Unidos', 'Unión Europea','Mi país de residencia actual','Otros países' ]

export const JobType = () =>
{
  return (
    <>
      <div className="mt-10  sm:mt-0">
        <div className="my-8 ">
          <h3 className="text-2xl ml-10 md:ml-16 font-sans font-bold text-dark-purple">
          ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
          </h3>
        </div>
        <div className="md:grid md:grid-cols-1 md:gap-8 ">
          <div className="mt-5 my-4 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-6 mx-10 md:mx-40 md:gap-x-6 md:gap-y-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor=""
                className="block  md:text-xl my-4 font-sans font-light text-dark-purple"
              >
              Déjanos una breve descripción con respecto tu trabajo ideal
              </label>
              <input
                type="text"
                name="course1"
                id="course1"
                autoComplete="give-course1"
                className="mt-1 block w-full input-lg  mx-w-xs rounded-md border-fill-light-200 bg-fill-light shadow-sm focus:fill-light
                focus:ring-fill-light-300 "
                required
              />
            </div>   
            <div className="col-span-8 sm:col-span-2">
              <label
                htmlFor="stateJob"
                className="block text-base font-[20px] my-5 md:my-4  text-dark-purple"
              >
                Indícanos tu disponibilidad laboral:
              </label>
              <div className="form-control">
                <label className="label cursor-pointer mb-2">
                  <ul>
                    {availability.map((availability) => (
                      <li>
                        <input
                          type="checkbox"
                          className=".checkbox mr-4 my-2"
                        />
                        <span className="font-light text-base text-dark-text">
                          { availability }
                        </span>
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label
                htmlFor="stateJob"
                className="block  my-5 md:my-4 text-base text-dark-purple"
              >
                ¿Qué describe mejor tu situación actual?
              </label>
              <ul>
                {status.map((status) => (
                  <li  className=" text-left list-inside">
                    <input
                      type="radio"
                      name="status"
                      className=".radio1 mr-4 my-2"
                    />
                    <span className="text-base  font-light text-dark-text">
                      {status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label
                htmlFor="stateJob"
                className="block text-base font-[20px] my-5 md:my-4  text-dark-purple"
              >
                ¿Cuentas con Visa de trabajo activa en?
              </label>
              <div className="form-control">
                <label className="label cursor-pointer mb-8">
                  <ul>
                    {visaStatus.map(( visaStatus) => (
                      <li>
                        <input
                          type="checkbox"
                          className=".checkbox mr-4 my-2"
                        />
                        <span className="text-left font-light text-base text-dark-text">
                          { visaStatus }
                        </span>
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

