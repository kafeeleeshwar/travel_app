import React, { useState } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
     const [formData, setFormData] = useState({ origin: '', destination: '', date: '' });
     const [flights, setFlights] = useState([]);

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
       e.preventDefault();
       try {
         const response = await axios.get('http://localhost:5000/api/flights', {
           params: formData,
         });
         setFlights(response.data);
       } catch (err) {
         console.error(err);
         alert('Error fetching flights');
       }
     };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-3xl font-bold mb-4">Flight Search</h1>
         <form onSubmit={handleSubmit} className="mb-4">
           <input
             type="text"
             name="origin"
             value={formData.origin}
             onChange={handleChange}
             placeholder="Origin"
             className="border p-2 mr-2"
           />
           <input
             type="text"
             name="destination"
             value={formData.destination}
             onChange={handleChange}
             placeholder="Destination"
             className="border p-2 mr-2"
           />
           <input
             type="date"
             name="date"
             value={formData.date}
             onChange={handleChange}
             className="border p-2 mr-2"
           />
           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
             Search
           </button>
         </form>
         <div>
           {flights.map((flight, index) => (
             <div key={index} className="border p-4 mb-2">
               <p>Flight: {flight.flight_number}</p>
               <p>From: {flight.origin} To: {flight.destination}</p>
               <p>Date: {flight.date}</p>
               <p>Price: ${flight.price}</p>
             </div>
           ))}
         </div>
       </div>
     );
   }

   export default App;