import React, {Component} from 'react';
import { Modal, Button, Row, Col, Form, ButtonToolbar}   from 'react-bootstrap';
import SnackBar from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton';


export class EditMatterModal extends Component{
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
        fetch('https://localhost:44306/api/Matter', {
          method:'PUT',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            ID:null,  
            Identifiant: event.target.Identifiant.value,
            NameMa: event.target.NameMa.value,
            Coeff: event.target.Coeff.value,
            CC: event.target.CC.value,
            TP: event.target.TP.value,
            Exam: event.target.Exam.value
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
           Edit Matter
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
                     defaultValue={this.props.depid}
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
                 <Form.Group controlId="NameMa">
                  <Form.Label>Name of Matter</Form.Label>
                 <Form.Control
                 type="text"
                 name="Name of Matter"
                 required
                 placeholder="Name of Matter"
                 />
                 </Form.Group>
                 <Form.Group controlId="Coeff">
                  <Form.Label>Coeff</Form.Label>
                 <Form.Control
                 type="text"
                 name="Coeff"
                 required
                 placeholder="Coeff"
                 />
                 </Form.Group>
                 <Form.Group controlId="Exam">
                  <Form.Label>Exam</Form.Label>
                 <Form.Control
                 type="text"
                 name="Exam"
                 required
                 placeholder="Exam"
                 />
                 </Form.Group>
                 <Form.Group controlId="TP">
                  <Form.Label>TP</Form.Label>
                 <Form.Control
                 type="text"
                 name="TP"
                 required
                 placeholder="TP"
                 />
                 </Form.Group>
                 <Form.Group controlId="CC">
 <Form.Label>CC</Form.Label>
                 <Form.Control
                 type="text"
                 name="CC"
                 required
                 placeholder="CC"
                 />
                 <Form.Group>
 <Button variant="primary" type="submit">EditMatter</Button>
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