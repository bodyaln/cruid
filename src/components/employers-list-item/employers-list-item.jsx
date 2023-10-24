import { useState } from 'react'
import './employers-list-item.css'

// class EmployersListItem extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//         increase: false,

//     }
//   }

//   onIncrease = ()=>{
//     this.setState(({increase})=>({
//         increase: !increase
//     }))
//   }
//   render(){

//     const {name,salary,i} = this.props;
//     const {increase} = this.state;
//     return (
//         <li key={i} className={increase ? "list-group-item d-flex justify-content-between increase" : "list-group-item d-flex justify-content-between"}>
//         <span className="list-group-item-label">{name}</span>
//         <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
//         <div className='d-flex justify-content-center align-items-center'>
//             <button type="button"
//                 className="btn-cookie btn-sm"
//                 onClick={this.onIncrease}>
//                 <i className="fas fa-cookie"></i>
//             </button>
  
//             <button type="button"
//                     className="btn-trash btn-sm ">
//             <i className="fas fa-trash"></i>
//             </button>
//             <i className="fas fa-star"></i>
//             </div>
//         </li>
//     );
//   }
// }

function EmployersListItem({name, salary,i,onDelete}) {
    const [increase, setIncrease] = useState(false);
    const [like, setLike] = useState(false);
    let className = "list-group-item d-flex justify-content-between";
    if(increase){
        className+= ' increase'
    }
    if(like){
        className+= ' like'
    }
    return (
        <li key={i} className={className} >
        <span className="list-group-item-label" onClick={()=> setLike(like => !like)}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm ">
                <i className="fas fa-cookie"
                onClick={()=> setIncrease(increase=>!increase)}
                ></i>
            </button>
  
            <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}
                    >
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
            </div>
        </li>
    );
  }
  
export default EmployersListItem;