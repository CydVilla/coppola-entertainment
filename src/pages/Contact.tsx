import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Company',
    otherCategory: '',
    comments: '',
    email: '',
    phone: '',
    contactByPhone: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="contact-header">
          <h1 className="page-title">Contact</h1>
          <div className="title-underline" />
          <p className="contact-subtitle">
            Please let us know how we may assist you.
          </p>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">To better direct your message, please select:</label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Company">Company</option>
              <option value="Upcoming Projects">Upcoming Projects</option>
              <option value="Investment Opportunities">Investment Opportunities</option>
              <option value="Past Projects">Past Projects</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.category === 'Other' && (
            <div className="form-group">
              <label htmlFor="otherCategory">Other:</label>
              <input
                type="text"
                id="otherCategory"
                value={formData.otherCategory}
                onChange={(e) => setFormData({ ...formData, otherCategory: e.target.value })}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="comments">Enter your comments in the space provided below:</label>
            <textarea
              id="comments"
              rows={8}
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              required
            />
          </div>

          <div className="contact-info-section">
            <h3>Tell us how Coppola Entertainment may best reach you:</h3>
            
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telephone:</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.contactByPhone}
                  onChange={(e) => setFormData({ ...formData, contactByPhone: e.target.checked })}
                />
                <span>Please contact BY PHONE regarding this matter.</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button 
              type="button" 
              className="clear-button"
              onClick={() => setFormData({
                name: '',
                category: 'Company',
                otherCategory: '',
                comments: '',
                email: '',
                phone: '',
                contactByPhone: false,
              })}
            >
              Clear Form
            </button>
          </div>

          <p className="form-footer">
            Thank you for taking the time to contact Coppola Entertainment.
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;

