import React, { useState } from 'react';

const PaymentForm = () => {
  const [amount, setAmount] = useState('100');
  const [currency, setCurrency] = useState('ETB');
  const [email, setEmail] = useState('abebech_bekele@gmail.com');
  const [firstName, setFirstName] = useState('Bilen');
  const [lastName, setLastName] = useState('Gizachew');
  const [phoneNumber, setPhoneNumber] = useState('0912345678');
  const [txRef, setTxRef] = useState('chewatatest-6669');
  const [callbackUrl, setCallbackUrl] = useState('https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60');
  const [returnUrl, setReturnUrl] = useState('https://www.google.com/');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer CHAPUBK_TEST-JT31tHejUILY5wjKZ7035CZExrBd26zD");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      amount,
      currency,
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      tx_ref: txRef,
      callback_url: callbackUrl,
      return_url: returnUrl,
      customization: {
        title: "Payment for my favourite merchant",
        description: "I love online payments"
      }
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
      .then(response => response.text())
      .then(result => setResult(result))
      .catch(error => setError(error));
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Currency: </label>
          <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>Transaction Reference: </label>
          <input type="text" value={txRef} onChange={(e) => setTxRef(e.target.value)} />
        </div>
        <div>
          <label>Callback URL: </label>
          <input type="text" value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
        </div>
        <div>
          <label>Return URL: </label>
          <input type="text" value={returnUrl} onChange={(e) => setReturnUrl(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && <div><h2>Result</h2><pre>{result}</pre></div>}
      {error && <div><h2>Error</h2><pre>{error.toString()}</pre></div>}
    </div>
  );
};

export default PaymentForm;
