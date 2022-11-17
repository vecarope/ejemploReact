import * as ApplicationForm from './components';

const ApplicationFormPage = () => {
  return (
    <main className="container mx-auto my-12">
      <ApplicationForm.OverviewCard />
      <ApplicationForm.PersonalInformation />
    </main>
  );
};

export default ApplicationFormPage;
