
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddRegisterModal} from './AddRegisterModal';
import {EditRegisterModal } from './EditRegisterModal';

export class Register extends Component{
    constructor(props){
        super(props);
        this.state={regs:[], addModalShow : false, editModalShow : false}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
    
    fetch('https://localhost:44306/api/Register')
        .then(response=> response.json())
        .then(data =>{
            this.setState({regs:data});
        }
             );
    }
    
    componentDidUpdate(){
        this.refreshList();
    }
    
    deleteReg(regid){
        if(window.confirm('Are you sure?'))
        {
            fetch('https://localhost:44306/api/Register/'+regid, {
                method:'DELETE',
                header:{'Accept':'application/json',
            'content-Type':'application/json'
            }
            })
        }
    }
render(){
    const {regs, regid, regidentifiant, regnom, regprenom, regdatenai, regemail, regadresse, regcodepostal, regtelephone} = this.state;
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
            <th>Date de naissance</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Code Postal</th>
            <th>Telephone</th>
            <th>Option</th>
        </tr>
        </thead>
  <tbody>
  {regs.map(reg=>
    <tr key={reg.ID}>
    <td>{reg.ID}</td> 
    <td>{reg.Identifiant}</td>
    <td>{reg.Nom}</td>
    <td>{reg.Prenom}</td>
    <td>{reg.Datenai}</td>
    <td>{reg.Email}</td>
    <td>{reg.Adresse}</td>
    <td>{reg.CodePostal}</td>
    <td>{reg.Telephone}</td>
    <td>
<ButtonToolbar>
<Button className="mr-2" variant="primary"
onClick={()=> this.setState({editModalShow:true, regid:reg.ID, regidentifiant:reg.Identifiant, regnom:reg.Nom, regprenom:reg.Prenom, regdatenai:reg.Datenai, regemail:reg.Email, regadresse:reg.Adresse, regcodepostal:reg.CodePostal, regtelephone:reg.Telephone})} > 
    Update
</Button>
<Button className="mr-2"
onClick={()=>this.deleteReg(reg.ID)} variant="danger">Delete</Button>
<EditRegisterModal
show={this.state.editModalShow}
onHide={editModalClose}
regid={regid}
regidentifiant={regidentifiant}
regnom={regnom}
regprenom={regprenom}
regdatenai={regdatenai}
regemail={regemail}
regadresse={regadresse}
regcodepostal={regcodepostal}
regtelephone={regtelephone}
    />

</ButtonToolbar>
    </td>
    </tr>
)}
  </tbody>
        </Table>
        <ButtonToolbar>
<Button variant= 'info' onClick={()=> this.setState({addModalShow:true})}>Add Register</Button>

<AddRegisterModal show= {this.state.addModalShow}
onHide= {addModalClose} />
</ButtonToolbar>
        </div>
    )
}

}