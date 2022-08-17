import { FC, memo, useEffect } from "react";
type AnimalListProps = {
  animals: any[];
  fetchAnimals: (type: string) => void;
};

const AnimalList: FC<AnimalListProps> = ({ animals, fetchAnimals }) => {
  useEffect(() => {
    // fetchAnimals(type);
  }, []);
  return (
    <>
      <div>Animal List</div>
    </>
  );
};

AnimalList.defaultProps = {};

export default memo(AnimalList);
