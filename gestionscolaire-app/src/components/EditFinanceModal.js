
import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ButtonToolbar}   from 'react-bootstrap';
import SnackBar from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton';


export class EditFinanceModal extends Component{
    constructor(props){
        super(props);
        this.state= {snackbaropen:false, snackbarmsg:''};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    snackbarClose=(event) =>{ 
        this.setState({
          snackbaropen:false
        });
      };

      handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44306/api/Finance', {
          method:'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            ID:null,  
            Identifiant: event.target.Identifiant.value,
             Nom: event.target.Nom.value,
            Prenom: event.target.Prenom.value,
             Mdv: event.target.Mdv.value,
             Sf: event.target.Sf.value,
             Bank: event.target.Bank.value,
            Ts: event.target.Ts.value,
             Email: event.target.Email.value
      })
       })
       .then(res=> res.json())
       .then((result) => 
       {
         //alert(result);
         this.setState({snackbaropen:true, snackbarmsg:result});
       },
       (error)=> {
        // alert('Failed')
        this.setState({snackbaropen:true, snackbarmsg:'failed'});
       }
       )
      }
      render(){
        return(
          <div className="container">
            <SnackBar   
            anchorOrigin={{vertical:'center', horizontal:'center'}}
            open={this.state.snackbaropen}
            autoHideDuration={3000}
            onClose={this.snackbarClose}
            message={<span id="message-id">{this.state.snackbarmsg}</span>}
            action ={[
              <IconButton 
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.state.snackbarClose}>x
            </IconButton>
            
    
            ]}
             />   
            <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           Edit Finance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          <Row>
                 <Col sm={6}>
                   <Form onSubmit={this.handleSubmit}>
                   <Form.Group controlId="Identifiant">
                  <Form.Label>Identifiant</Form.Label>
                 <Form.Control as="select" >
                
                 </Form.Control>
                 </Form.Group>
                     <Form.Group controlId="Nom">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control as="select" >
                 
                 </Form.Control>
                     </Form.Group>
                     <Form.Group controlId="Prenom">
                      <Form.Label>Prenom</Form.Label>
                     <Form.Control
                     type="text"
                     name="Prenom"
                     required
                     placeholder="Prenom"
                     />
                     </Form.Group>
                     <Form.Group controlId="Mdv">
                      <Form.Label>Paiement</Form.Label>
                      <Form.Select>
                      <option> --- </option>
                      <option>Espéce</option>
                      <option>Chéque</option>
                      <option>Recu</option>
                     </Form.Select>

                     </Form.Group>
                     <Form.Group controlId="Sf">
                      <Form.Label>Situation Financiere</Form.Label>
                      <Form.Select>
                      <option> --- </option>
                      <option>Payée</option>
                      <option>Non payée</option>
                      
                     </Form.Select>
                     </Form.Group>
                     <Form.Group controlId="Bank">
                      <Form.Label>Banque</Form.Label>
                      <Form.Select>
                      <option> --- </option>
                      <option>Aman Bank</option>
                      <option>Attijeri Bank</option>
                      <option>BH Bank</option>
                      <option>BNA Bank</option></Form.Select>
                     </Form.Group>
                     <Form.Group controlId="Ts">
                      <Form.Label>Frais Scolarité</Form.Label>
                      <Form.Select>
                      <option> --- </option>
                      <option>Semestre</option>
                      <option>Année</option>
                      
                     </Form.Select>
                     <Form.Group controlId="Email">
                     <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="text"
                    name="Email"
                    required
                    placeholder="Email"
                    />
                    </Form.Group>
                     <Form.Group>
     <Button variant="primary" type="submit">Add Finance</Button>
                     </Form.Group>
                    
                     </Form.Group>
                   </Form>
                 </Col>
               </Row>
          
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
         </div>
        );
    }
}