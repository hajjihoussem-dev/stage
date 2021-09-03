
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddFinanceModal} from './AddFinanceModal';
import {EditFinanceModal } from './EditFinanceModal';

export class Finance extends Component{
    constructor(props){
        super(props);
        this.state={fins:[], addModalShow : false, editModalShow : false}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
    
    fetch('https://localhost:44306/api/Finance')
        .then(response=> response.json())
        .then(data =>{
            this.setState({fins:data});
        }
             );
    }
    
    componentDidUpdate(){
        this.refreshList();
    }
    
    deleteReg(finid){
        if(window.confirm('Are you sure?'))
        {
            fetch('https://localhost:44306/api/Finance/'+finid, {
                method:'DELETE',
                header:{'Accept':'application/json',
            'content-Type':'application/json'
            }
            })
        }
    }
render(){
    const {fins, finid, finidentifiant, finnom, finprenom, finbank, finemail, finmdv, fints, finsf} = this.state;
    let addModalClose =()=> this.setState({addModalShow:false});
    let editModalClose =()=> this.setState({editModalShow:false});
    return (
        <div>
        <Table className="mt-4" striped bordered hover size="sm">
        <thead>
        <tr>
            <th>ID</th>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Paiement</th>
            <th>Situation Financiére</th>
            <th>Banque</th>
            <th>Frais Scolarité</th>
            <th>Email</th>
            <th>Option</th>
        </tr>
        </thead>
  <tbody>
  {fins.map(fin=>
    <tr key={fin.ID}>
    <td>{fin.ID}</td> 
    <td>{fin.Identifiant}</td>
    <td>{fin.Nom}</td>
    <td>{fin.Prenom}</td>
    <td>{fin.Mdv}</td>
    <td>{fin.Sf}</td>
    <td>{fin.Bank}</td>
    <td>{fin.Ts}</td>
    <td>{fin.Email}</td>
    <td>
<ButtonToolbar>
<Button className="mr-2" variant="primary"
onClick={()=> this.setState({editModalShow:true, finid:fin.ID, finidentifiant:fin.Identifiant, finnom:fin.Nom, finprenom:fin.Prenom, finemail:fin.Email, finmdv:fin.Mdv, finbank:fin.Bank, fints:fin.Ts, finsf:fin.Sf})} > 
    Update
</Button>
<Button className="mr-2"
onClick={()=>this.deleteReg(fin.ID)} variant="danger">Delete</Button>
<EditFinanceModal
show={this.state.editModalShow}
onHide={editModalClose}
finid={finid}
finidentifiant={finidentifiant}
finnom={finnom}
finprenom={finprenom}
finmdv={finmdv}
finsf={finsf}
finbank={finbank}
fints={fints}
finemail={finemail}
    />

</ButtonToolbar>
    </td>
    </tr>
)}
  </tbody>
        </Table>
        <ButtonToolbar>
<Button variant= 'info' onClick={()=> this.setState({addModalShow:true})}>Add Finance</Button>

<AddFinanceModal show= {this.state.addModalShow}
onHide= {addModalClose} />
</ButtonToolbar>
        </div>
    )
}

}