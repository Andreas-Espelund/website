import React from 'react'
import PageTitle from '../components/PageTitle';
import { useState } from 'react'
import { send } from 'emailjs-com';
import { CircularProgress, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import LargeButton from '../components/LargeButton';

export default function Contact() {

  const initial_state = {
    from_name: '',
    message: '',
    subject:'',
    reply_to: '',
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [loading, setLoading] = useState(false);
  const [toSend, setToSend] = useState(initial_state);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    send(
      'service_g7fwbkt',
      'template_gkzgtrt',
      toSend,
      '67_OHIbn6T0xxVFjI'
    )

      .then((response) => {
        setLoading(false);
        setOpen(true);
        console.log('SUCCESS!', response.status, response.text);
        setToSend({...initial_state})
        
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div>
      <PageTitle text="Contact us!"/>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sendt!
        </Alert>
      </Snackbar>
      <form className="contactform" onSubmit={onSubmit} id="contact_form">
        <div>
          <label for="from_name">Name*</label>
          <input 
            onChange={handleChange}
            value={toSend.from_name} 
            required 
            type="text" 
            id="from_name" 
            name="from_name"
          />
        </div>


        <div>
          <label for="reply_to">Email*</label>
          <input 
            onChange={handleChange}
            value={toSend.reply_to} 
            required 
            type="reply_to" 
            id="reply_to" 
            name="reply_to"
          />
        </div>

        <div>
          <label for="subject">Subject*</label>
          <input 
            onChange={handleChange}
            value={toSend.subject} 
            required 
            type="text" 
            id="subject" 
            name="subject"
          />
        </div>

        <div>
          <label for="message">Message*</label>
          <textarea 
            onChange={handleChange}
            value={toSend.message} 
            required 
            type="text" 
            id="message" 
            name="message"
            rows="5"
          />
        </div>
      
        <div>
          <LargeButton type="submit" >
          {loading?  <CircularProgress color="inherit"/> :<div>SUBMIT</div>}
          </LargeButton>
        </div>
      </form>
    </div>
  )
}
