
import { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            return;
        }

        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section>
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <textarea
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                />

                <button type="submit">Send Message</button>
            </form>

            
        </section>
    );
}

export default ContactPage;
