const Chapa = require("chapa-node");

const chapa = new Chapa("chapaKey");

//separate your customization from the initialize function
chapa.customize({
  logo: "logo url",
  description: "description about the app",
  title: "my app title",
});

//initialize payment
const initializeInfo = {
  amount: "1000",
  currency: "ETB",
  email: "abebe@kebede.com",
  first_name: "Abebe",
  last_name: "Kebede",
  tx_ref: "tx-ref-A110000...",
  return_url: "the return url after payment",
  callback_url: "https://myapp.com/my-verify-endpoint/:tx_ref",
};

chapa
  .initialize(initializeInfo)
  .then((response) => {
    console.log(response);
    /*if initialization was successfull response will look like this
        {
        "message": "Hosted Link",
        "status": "success",
        "data": {
            "checkout_url": "https://checkout.chapa.co/checkout/payment/27291184910"
        }

        redirect users to this 'checkout_url' to complete the transaction
    */
  })
  .catch((error) => {
    console.log(error);
  });

//verify payment
chapa
  .verify("tx_ref")
  .then((response) =>
    /*after verifing the transaction do your logic.*/ console.log(response)
  )
  .catch((error) => console.log(error));

//get banks
chapa
  .getBanks()
  .then((banks) =>
    /*supported banks with their bank code for transfer*/ console.log(banks)
  )
  .catch((err) => console.log(err));

//transfer money
const transferInfo = {
  account_name: "Abebe Kebede",
  account_number: "32423423",
  amount: "100",
  currency: "ETB",
  beneficiary_name: "Kebede Abebe",
  reference: "3241342142sfdd", //This a merchant’s uniques reference for the transfer, it can be used to query for the status of the transfe,
  bank_code: "fe087651-4910-43af-b666-bbd393d8e81f" //from the getBanks,
};

chapa
  .transfer(transferInfo)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));