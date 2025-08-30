import { useParams } from "react-router";
import OtherProjectCardDetails from "../../components/Card/OtherProjectCard";
import OtherProjectsLayout from "../../components/OtherProjectsPage/OtherProjectsMain";
import PageLayout from "../../components/PageLayout/PageLayout";
import { OtherProjectsCardsText2018, OtherProjectsCardsText2019, OtherProjectsCardsText2020, OtherProjectsCardsText2022, OtherProjectsCardsText2023, OtherProjectsCardsText2024 } from "../../data/otherProjects";

export default function OtherProjectDetailPage() {
  const params = useParams()
  const cardId = params.id

  const card = OtherProjectsCardsText2024
    .concat(OtherProjectsCardsText2023)
    .concat(OtherProjectsCardsText2022)
    .concat(OtherProjectsCardsText2020)
    .concat(OtherProjectsCardsText2019)
    .concat(OtherProjectsCardsText2018)
    .find(project => project.id === cardId)

    if (!card) {
      return <PageLayout>Could not find card</PageLayout>
    }

  return (
    <>
      <OtherProjectsLayout>
        <OtherProjectCardDetails card={card} />
      </OtherProjectsLayout>
    </>
    
  )
}