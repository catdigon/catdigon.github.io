import OtherProjectsCards from "../../components/OtherProjectsPage/OtherProjectsCards/OtherProjectsGrid";
import OtherProjectsLayout from "../../components/OtherProjectsPage/OtherProjectsMain";

import PageLayout from "../../components/PageLayout/PageLayout";

export default function OtherProjectsPage() {

  return (
    <>
      <PageLayout>

        <OtherProjectsLayout>
          <OtherProjectsCards />
        </OtherProjectsLayout>

      </PageLayout>
    </>

  )
}
