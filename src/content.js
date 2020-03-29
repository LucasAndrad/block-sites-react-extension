import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './components/Modal';

const app = document.createElement('div');
app.id = 'modal-root';
document.body.appendChild(app);
ReactDOM.render(<Modal />, app);
