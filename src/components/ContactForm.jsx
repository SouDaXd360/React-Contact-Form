import { useState } from "react";

function ContactForm({ buttonText, username, setUsername}){
    //const [username,setUsername] = useState('');
    const [useremail,setUseremail] = useState('');
    const [message,setMessage] = useState('');
    const [subject,setSubject] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            username: username,
            email: useremail,
            subject: subject,
            message: message,
        };

        try{
            const response = await fetch('http://localhost:3001/api/contact',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if(response.ok){
                alert('Form submitted successfully!');
                console.log('Success:' ,result);

            }
            else{
                alert('Error submitting form.');
                console.error('Error:', result);
            }
        } 
        
        catch(error) {
            console.error('There was an error sending the data!', error);
            alert('A network error occured.');
        }
    };

    return(
        <form action="#" className="contact-form" onSubmit={handleSubmit}>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} name="user_name" placeholder="Soumik Dash"/>
    
                <label htmlFor="useremail">Email:</label>
                <input type="email" id="useremail" value={useremail} onChange={(event) => setUseremail(event.target.value)} required/>
    
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)}required/>
    
                <label htmlFor="message">Message:</label>
                <textarea value={message} onChange={(event) => setMessage(event.target.value)} id="message"  rows="4" placeholder="Your message..."></textarea>
    
                
                <input type="submit" value={buttonText} className="submit-btn"/>
        </form>
    );

}

export default ContactForm;