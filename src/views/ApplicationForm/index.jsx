import * as ApplicationForm from './components';
import { validateSchemaAplicationForm } from './validation/validationFormAplication';
import { Form, Formik } from 'formik';
import { initialForm } from './data';
import { useAuth } from '../../context/authContext';
import { Fragment } from 'react';
import Error from '../../components/Error/Error';
import { postApplicationForm } from '../../hooks/postApplicationForm';

const ApplicationFormPage = () => {
  const { userData } = useAuth();
  return (
    <main className="container mx-auto my-12">
      {!userData ? (
        <Error />
      ) : (
        <Fragment>
          <ApplicationForm.OverviewCard />
          <Formik
            initialValues={initialForm}
            validationSchema={validateSchemaAplicationForm}
            onSubmit={async (values) => {
              try {
                await postApplicationForm(values);
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {({ errors, touched, isSubmitting, values }) => (
              <Form>
                <ApplicationForm.PersonalInformation
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.EducationProfile
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.JobProfile
                  errors={errors}
                  touched={touched}
                  values={values}
                />
                <ApplicationForm.ExperienceAndWork
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.JobType errors={errors} touched={touched} />
                <button
                  type="submit"
                  className="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover: text-dark-purple mb:text-white hover:text-white md:text-white font-sans"
                >
                  Enviar Formulario
                </button>
                {isSubmitting ? (
                  <div>
                    <p>Enviando datos...</p>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </Fragment>
      )}
    </main>
  );
};

export default ApplicationFormPage;
