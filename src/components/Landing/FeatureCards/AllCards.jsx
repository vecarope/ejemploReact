import Card from './Card';
import { featuresData } from '../../../common/featuresData';

const AllCards = () => {
  return (
    <div>
      {featuresData.map((ele) => (
        <Card
          head={ele.title}
          pic={ele.cover}
          text={ele.content}
          key={ele.id}
        />
      ))}
    </div>
  );
};

export default AllCards;
