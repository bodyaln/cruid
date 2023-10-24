import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

function EmployersList({data, onDelete}) {
  return (
    <ul className='app-list list-group'>
      {data.map((item) =>{
        const {id, ...itemProps} = item;
        return(
          <EmployersListItem key={id} {...itemProps}
          onDelete={()=> onDelete(id)}
          /> 
        )
       
      } )}

    </ul>
  );
}

export default EmployersList;