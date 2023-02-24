interface Props {
  mondayToFriday: string;
  saturday: string;
  sunday: string;
}

const WorkTime: React.FC<Props> = ({ mondayToFriday, saturday, sunday }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <p className="w-14">Пн-Пт:</p>
        <p>{mondayToFriday}</p>
      </div>
      <div className="flex gap-5">
        <p className="w-14">Сб:</p>
        <p>{saturday}</p>
      </div>
      <div className="flex gap-5">
        <p className="w-14">Вс:</p>
        <p>{sunday}</p>
      </div>
    </div>
  );
};

export default WorkTime;
