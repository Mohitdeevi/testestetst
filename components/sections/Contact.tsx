'use client';
import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="submit">Let’s build something powerful</Button>
        </form>
        {showToast && <Toast message="Message sent successfully!" onClose={() => setShowToast(false)} />}
      </div>
    </section>
  );
};

export default Contact;
