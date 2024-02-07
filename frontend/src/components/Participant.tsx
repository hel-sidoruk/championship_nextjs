import { ParticipantType } from '@/types';

type Props = { info: ParticipantType };

const Participant = ({ info }: Props) => {
  return (
    <div className="participant">
      <span>{info.name}</span>
      <span>{info.birthdate.split('-')[0]} г.р.</span>
      <span>г. {info.city}</span>
      <span>{info.team}</span>
      {!info.paid && <span className="error">(ожидается оплата)</span>}
    </div>
  );
};

export default Participant;
