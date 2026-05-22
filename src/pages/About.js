import React from 'react';
import { ShieldCheck, Headphones, BadgeDollarSign, Plane, Users, Globe, Clock3, Star } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page about-aof">
      <section className="about-hero">
        <div className="container">
          <span className="about-chip">About WeGo Fares</span>
          <h1>Independent Travel Booking Assistance</h1>
          <p>
            We help travelers compare flight, hotel, and package options with clear information before booking.
          </p>
        </div>
      </section>

      <section className="about-intro container">
        <div className="about-intro-card">
          <h2>Who We Are</h2>
          <p>
            WeGo Fares is an independent travel booking service. We are not an airline, hotel, or government agency.
            Our team helps travelers review route options, provider rules, fare details, and booking steps.
          </p>
          <p>
            From first-time flyers to frequent travelers, we provide practical assistance with itinerary selection,
            provider-policy guidance, and post-booking questions.
          </p>
        </div>
      </section>

      <section className="about-highlights container">
          <h2>How We Help Travelers</h2>
        <div className="highlight-grid">
          <article className="highlight-card">
            <ShieldCheck size={22} />
            <h3>Secure Bookings</h3>
            <p>Checkout details are reviewed before payment and confirmation.</p>
          </article>
          <article className="highlight-card">
            <Headphones size={22} />
            <h3>Travel Assistance</h3>
            <p>Advisors can help explain route options and provider conditions.</p>
          </article>
          <article className="highlight-card">
            <BadgeDollarSign size={22} />
            <h3>Fare Review</h3>
            <p>Compare available fares, taxes, and service details before you book.</p>
          </article>
          <article className="highlight-card">
            <Clock3 size={22} />
            <h3>Practical Support</h3>
            <p>Get help with booking questions and itinerary updates when needed.</p>
          </article>
        </div>
      </section>

      <section className="about-stats container">
        <div className="stats-box">
          <div className="stat-item">
            <Globe size={20} />
            <h3>500+</h3>
            <p>Global Routes</p>
          </div>
          <div className="stat-item">
            <Plane size={20} />
            <h3>120+</h3>
            <p>Airline Partners</p>
          </div>
          <div className="stat-item">
            <Users size={20} />
            <h3>2M+</h3>
            <p>Traveler Inquiries</p>
          </div>
          <div className="stat-item">
            <Star size={20} />
            <h3>4.8/5</h3>
            <p>Published Feedback</p>
          </div>
        </div>
      </section>

      <section className="about-values container">
        <div className="values-card">
          <h2>Our Commitments</h2>
          <ul>
            <li><strong>Transparency:</strong> Clear pricing, provider rules, and service information before confirmation.</li>
            <li><strong>Independence:</strong> We identify ourselves as a third-party travel booking service.</li>
            <li><strong>Accuracy:</strong> Offers and availability are subject to provider confirmation at booking.</li>
            <li><strong>Support:</strong> We help explain options without representing ourselves as an airline.</li>
          </ul>
        </div>
      </section>

      <section className="about-cta container">
        <div className="cta-card">
          <h2>Ready to Plan Your Next Trip?</h2>
          <p>Search options, review details, and confirm only when the itinerary fits your plans.</p>
          <a href="/" className="about-cta-btn">Search Flights</a>
        </div>
      </section>
    </div>
  );
}

export default About;
