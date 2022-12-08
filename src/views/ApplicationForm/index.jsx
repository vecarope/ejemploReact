import * as ApplicationForm from './components';

const ApplicationFormPage = () => {
  return (
    <main className="container mx-auto my-12">
      <ApplicationForm.OverviewCard />
      <ApplicationForm.PersonalInformation />
      <ApplicationForm.JobProfile />
      <ApplicationForm.ExperienceAndWork />
    </main>
  );
};

export default ApplicationFormPage;
