import { useNavigate } from 'react-router-dom';

function Loads() {

  const navigate = useNavigate();

  const showDetail = (e: React.MouseEvent<HTMLDivElement>, lot: string) => {
    e.preventDefault();
    navigate(`/load/${lot}`)
  } 

  return (
    <div onClick={(e) => showDetail(e, 'LOT101')}>Navigate to Lot Detail</div>      
  );

}

export default Loads;