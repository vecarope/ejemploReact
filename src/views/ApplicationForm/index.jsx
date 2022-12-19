import * as ApplicationForm from './components';
import { validateSchemaAplicationForm } from './validation/validationFormAplication';
import { Form, Formik } from 'formik';
import { initialForm } from './data';
import { useAuth } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

const ApplicationFormPage = () => {
  const { userData } = useAuth();
  return (
    <main className="container mx-auto my-12">
      {!userData ? (
        <Navigate to={'/login'} />
      ) : (
        <>
          <ApplicationForm.OverviewCard />
          <Formik
            initialValues={initialForm}
            validationSchema={validateSchemaAplicationForm}
            onSubmit={async (values) => {
              try {
                console.log(values);
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <ApplicationForm.PersonalInformation
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.EducationProfile
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.JobProfile errors={errors} touched={touched} />
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
        </>
      )}
    </main>
  );
};

export default ApplicationFormPage;
