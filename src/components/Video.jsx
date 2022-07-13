import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { Box, style} from '@mui/system';
import { Backdrop } from '@mui/material';
import { Typography, Fade } from '@mui/material';
export default function Video(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var divStyle = {
        backgroundImage: 'url('+ props.img+')'
    }

    
    
  return (
    <div>
        <div className="videocard" style={divStyle} onClick={handleOpen}>
            <PlayCircleIcon fontSize="large" />
            
        </div>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="tester"
      >
        <iframe width="1022" height="575" src="https://www.youtube.com/embed/bTe72Nz5nSA" title="JACKBOW - Is This Forever? Recap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    </div>
  )
}
