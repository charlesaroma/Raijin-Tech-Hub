import SEO from "../../components/SEO";
import { BreadcrumbStructuredData } from "../../components/StructuredData";
import UserAgreement from "./2companyuserAgreement"

const companyPage = () => {
  return (
    <>
      <SEO 
        title="Company Information | Raijin Tech Hub Uganda"
        description="Learn about Raijin Tech Hub's mission, vision, policies, and commitment to delivering exceptional IT solutions in Uganda. Read our terms of service, privacy policy, and more."
        keywords="about Raijin Tech Hub, company information, IT company Uganda, tech company profile, terms of service, privacy policy"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Company', path: '/company' }
        ]}
      />
      <div className="relative w-screen h-full flex flex-col space-y-0 overflow-x-hidden">
        <UserAgreement />
      </div>
    </>
  );
};

export default companyPage;
