import CardItem from "./Card";
import type { CardProject} from "../../data/models";


interface Props {
  data: CardProject[];
  showText?: boolean;
  showLabel?: boolean;
  showBadgeList?: boolean;
}

export default function CardLayout({ data, showText, showLabel, showBadgeList}: Props) {
  return (
    <>
      <div className="flex flex-wrap gap-6">
        {data.map((project, idx) => (

          <div key={idx}>

            <CardItem card={project}
            showText={showText}
            showLabel={showLabel} 
            showBadgeList={showBadgeList} />

          </div>
        ))}

      </div>


    </>
  );
}