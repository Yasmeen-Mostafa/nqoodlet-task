import { useAppSelector } from "../../../store/hooks";
import Card from "./Card";

const CardDisplay = () => {
  const { cards } = useAppSelector((state) => state.cards);
  console.log(cards);
  return (
    <div className="flex flex-wrap justify-start gap-6 p-8">
      {cards.map((card) => (
        <Card
          key={card.id}
          lastFour={card.last_four}
          isPhysical={card.is_physical}
          status={card.status}
        />
      ))}
    </div>
  );
};

export default CardDisplay;
