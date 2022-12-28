import { useEffect, useState } from 'react';
import * as FormField from '../../../components/Forms';
import apiClient from '../../../services/api.service';

export const JobProfile = ({ errors, touched, values }) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* lenguaje */}
        <div className="flex justify-center w-5/6 mx-auto">
          <div className="form-control ">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Lenguaje</b>
              </p>
            </div>

            <FormField.InputSelectArray
              data={lenguage?.data}
              name="lenguage"
              id="lenguage"
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
        {/* bases o frameworks */}
        <div className="flex justify-center w-5/6 mx-auto">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Bases o frameworks</b>
              </p>
            </div>

            <FormField.InputSelectArray
              data={basesFrameworks?.data}
              name="baseAndFramework"
              id="baseAndFramework"
              touched={touched}
              errors={errors}
              values={values}
            />
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
            <FormField.InputSelectArray
              data={tools?.data}
              name="tools"
              id="tools"
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <FormField.InputTextArea
          label="Indícanos alguna otra competencia, herramienta o tecnología que conozcas que creas importante agregar:"
          touched={touched}
          errors={errors}
          placeholder="Cuentanos aqui..."
          required
          name="additionalToolsComment"
          id="additionalToolsComment"
        />
      </div>
    </section>
  );
};
