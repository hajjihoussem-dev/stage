

import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddMatterModal} from './AddMatterModal';
import { EditMatterModal } from './EditMatterModal';


export class Matter extends Component{
constructor(props){
    super(props);
    this.state={deps:[], addModalShow : false, editModalShow : false}
}
componentDidMount(){
    this.refreshList();
}
refreshList(){

fetch('https://localhost:44306/api/Matter')
    .then(response=> response.json())
    .then(data =>{
        this.setState({deps:data});
    }
         );
}

componentDidUpdate(){
    this.refreshList();
}

deleteMat(depid){
    if(window.confirm('Are you sure?'))
    {
        fetch('https://localhost:44306/api/Matter/'+depid, {
            method:'DELETE',
            header:{'Accept':'application/json',
        'content-Type':'application/json'
        }
        })
    }
}

render(){
    const {deps, depidentifiant, depid, depname, depcoeff, deptp, depcc, depexam} = this.state;
let addModalClose =()=> this.setState({addModalShow:false});
let editModalClose =()=> this.setState({editModalShow:false});
    return (
        <div>
<Table className="mt-4" striped bordered hover size="sm">
<thead>
<tr>
    <th>ID</th>
    <th>Identifiant</th>
    <th>Matiere</th>
    <th>Coeff</th>
    <th>TP</th>
    <th>CC</th>
    <th>Examen</th>
    <th>Option</th>
</tr>
</thead>
<tbody>
{deps.map(dep=>
    <tr key={dep.ID}>
    <td>{dep.ID}</td>
    <td>{dep.Identifiant}</td>
    <td>{dep.NameMa}</td>
    <td>{dep.Coeff}</td>
    <td>{dep.CC}</td>
    <td>{dep.TP}</td>
    <td>{dep.Exam}</td>
    <td>
<ButtonToolbar>
<Button className="mr-2" variant="primary"
onClick={()=> this.setState({editModalShow:true, depid:dep.ID, depidentifiant:dep.Identifiant, depname:dep.NameMa, depcoeff:dep.Coeff, depcc:dep.CC, deptp:dep.TP, depexam:dep.Exam})} > 
    Update
</Button>
<Button className="mr-2"
onClick={()=>this.deleteMat(dep.ID)} variant="danger">Delete</Button>
<EditMatterModal
show={this.state.editModalShow}
onHide={editModalClose}
depid={depid}
depname={depname}
depcoeff={depcoeff}
depcc={depcc}
deptp={deptp}
depexam={depexam}
    />

</ButtonToolbar>



    </td>
    </tr>
)}
</tbody>
</Table>
<ButtonToolbar>
<Button variant= 'info' onClick={()=> this.setState({addModalShow:true})}>Add Matter</Button>

<AddMatterModal show= {this.state.addModalShow}
onHide= {addModalClose} />
</ButtonToolbar>
</div>
)
}
}