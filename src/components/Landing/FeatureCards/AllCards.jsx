import Card from './Card';
import { featuresData } from '../../../common/featuresData';

const AllCards = () => {
  return (
    <div class="flex m-auto items-center justify-center">
      {featuresData.map((ele) => (
        <Card
          head={ele.title}
          pic={ele.cover}
          text={ele.content}
          key={ele.id}
          id={ele.id}
        />
      ))}
    </div>
  );
};

export default AllCards;
