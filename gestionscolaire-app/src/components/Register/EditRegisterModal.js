import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ButtonToolbar}   from 'react-bootstrap';
import SnackBar from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton';


export class EditRegisterModal extends Component{
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
        fetch('https://localhost:44306/api/Register', {
          method:'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            ID: event.target.ID.value,  
            Identifiant: event.target.Identifiant.value,
             Nom: event.target.Nom.value,
            Prenom: event.target.Prenom.value,
            Datenai:event.target.Datenai.value,
             Email: event.target.Email.value,
             Adresse: event.target.Adresse.value,
            CodePostal: event.target.CodePostal.value,
             Telephone: event.target.Telephone.value
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
           Edit Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          <Row>
                 <Col sm={6}>
                   <Form onSubmit={this.handleSubmit}>
                   <Form.Group controlId="ID">
                      <Form.Label>ID</Form.Label>
                     <Form.Control
                     type="text"
                     name="ID"
                     required
                     disabled
                     defaultValue={this.props.regid}
                     placeholder="ID"
                     />
                     </Form.Group>
                     <Form.Group controlId="Identifiant">
                      <Form.Label>Identifiant</Form.Label>
                     <Form.Control
                     type="text"
                     name="Identifiant"
                     required
                     placeholder="Identifiant"
                     />
                     </Form.Group>
                     <Form.Group controlId="Nom">
                      <Form.Label>Nom</Form.Label>
                     <Form.Control
                     type="text"
                     name="Nom"
                     required
                     placeholder="Nom"
                     />
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
                     <Form.Group controlId="Datenai">
                      <Form.Label>Date de naissance</Form.Label>
                     <Form.Control
                     type="date"
                     name="Datenai"
                     required
                     placeholder="Datenai"
                     />
                     </Form.Group>
                     <Form.Group controlId="Email">
                      <Form.Label>Email</Form.Label>
                     <Form.Control
                     type="text"
                     name="Email"
                     required
                     placeholder="Email"
                     />
                     </Form.Group>
                     <Form.Group controlId="Adresse">
                      <Form.Label>Adresse</Form.Label>
                     <Form.Control
                     type="text"
                     name="Adresse"
                     required
                     placeholder="Adresse"
                     />
                     </Form.Group>
                     <Form.Group controlId="CodePostal">
                      <Form.Label>Code Postal</Form.Label>
                     <Form.Control
                     type="text"
                     name="CodePostal"
                     required
                     placeholder="CodePostal"
                     />
                     </Form.Group>
                     <Form.Group controlId="Telephone">
                      <Form.Label>Telephone</Form.Label>
                     <Form.Control
                     type="text"
                     name="Telephone"
                     required
                     placeholder="Telephone"
                     />
                     <Form.Group>
     <Button variant="primary" type="submit">Update</Button>
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