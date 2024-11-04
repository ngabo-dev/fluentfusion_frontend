import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const donationCards = [
  { id: 1, title: "Transportation planning", amount: "$10", description: "Support Transportation planning for Comprehensive Solutions", image: "/Transportation 2.jpg" },
  { id: 2, title: "Disaster risks", amount: "$50", description: "Disaster Preparedness needs your support", image: "/disasita1.jpg" },
  { id: 3, title: "Trainings", amount: "$100", description: "Contribute towards Empowering Urban Development", image: "/research.jpg" },
];

const Donate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [momoPhoneNumber, setMomoPhoneNumber] = useState('');
  const [currency, setCurrency] = useState('USD'); // Default currency

  const handleDonateClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setAmount('');
    setPaymentMethod('Credit Card');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setCardholderName('');
    setPaypalEmail('');
    setBankAccountNumber('');
    setBankAccountName('');
    setBankName('');
    setMomoPhoneNumber('');
    setCurrency('USD');
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    console.log(`Donating ${amount} ${currency} via ${paymentMethod}`);
    handleModalClose();
  };

  return (
    <>
      {/* Main Donation Section */}
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center p-12 bg-gray-50 h-96">
            <h1 className="text-3xl md:text-5xl font-serif mb-8 text-center">
              Donate Now
            </h1>
            <button 
              onClick={handleDonateClick}
              className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Donate
            </button>
          </div>
          <div className="flex items-center p-12">
            <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
              Our mission is to serve as an international hub that connects young city planners, technology providers, governments, communities, and other key stakeholders to collaboratively share knowledge, resources, and strategies in order to build resilient, inclusive, and smart cities for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Cards */}
      <p className='text-center font-bold text-3xl md:text-4xl leading-12'>Make an impact by donating</p>
      <div className="flex flex-wrap justify-center gap-8 p-6">
        {donationCards.map((card) => (
          <div key={card.id} className="border rounded-lg shadow-lg p-4 bg-white max-w-xs w-full sm:w-64">
            <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>
            <p className="text-lg">{card.amount}</p>
            <p className="text-gray-700">{card.description}</p>
            <button 
              onClick={() => { setAmount(card.amount.replace('$', '')); handleDonateClick(); }}
              className="mt-4 bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded "
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-4xl h-auto max-h-[80vh] overflow-y-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
            <form onSubmit={handleDonateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="amount">
                  Donation Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border rounded p-2 w-full"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="currency">
                  Currency
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="RWF">Rwandan Franc (RWF)</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="paymentMethod">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Momo Pay">Momo Pay</option>
                </select>
              </div>

              {/* Conditional Payment Inputs */}
              {paymentMethod === 'Credit Card' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="cardholderName">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter cardholder name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter card number"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="expiryDate">
                      Expiry Date (MM/YY)
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter CVV"
                      required
                    />
                  </div>
                </>
              )}
              {paymentMethod === 'PayPal' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="paypalEmail">
                    PayPal Email
                  </label>
                  <input
                    type="email"
                    id="paypalEmail"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter PayPal email"
                    required
                  />
                </div>
              )}
              {paymentMethod === 'Bank Transfer' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bankAccountName">
                      Bank Account Name
                    </label>
                    <input
                      type="text"
                      id="bankAccountName"
                      value={bankAccountName}
                      onChange={(e) => setBankAccountName(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter bank account name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bankAccountNumber">
                      Bank Account Number
                    </label>
                    <input
                      type="text"
                      id="bankAccountNumber"
                      value={bankAccountNumber}
                      onChange={(e) => setBankAccountNumber(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter bank account number"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bankName">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="border rounded p-2 w-full"
                      placeholder="Enter bank name"
                      required
                    />
                  </div>
                </>
              )}
              {paymentMethod === 'Momo Pay' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="momoPhoneNumber">
                    Momo Phone Number
                  </label>
                  <input
                    type="tel"
                    id="momoPhoneNumber"
                    value={momoPhoneNumber}
                    onChange={(e) => setMomoPhoneNumber(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 py-2 rounded w-full mt-4"
              >
                Submit Donation
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className="text-red-500 mt-2 w-full text-center"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;
