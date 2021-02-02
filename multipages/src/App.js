import React from 'react';
import './App.css';
import DataGetter from './components/DataGetter';

function App() {
  return (
    <div className="container mt-5">
     <h1 className="text-primary mb-3">Pagination is a disign pattern</h1>
     <p>Pagination user interface design pattern is used to splitting the contents of a website, or section of contents from a website</p>
     <DataGetter />
    </div>
  );
}

export default App;
