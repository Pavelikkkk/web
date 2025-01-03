import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ErrorDialog = ({ open, onClose, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Ошибка</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;