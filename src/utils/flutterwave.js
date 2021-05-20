export default function payForTicket({ body }) {
  return new Promise((resolve, reject) => {
    window.FlutterwaveCheckout({
      public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
      tx_ref: body.reference,
      amount: body.totalPayment,
      currency: 'NGN',
      country: 'NG',
      payment_options: 'card',
      customer: {
        email: body.email,
        phone_number: body.phone,
        name: body.name,
      },
      callback(data) {
        if (data.status === 'successful') {
          resolve(data);
        } else {
          resolve(data);
        }
        reject();
      },
      onclose() {
        resolve({ close: true });
      },
      customizations: {
        title: 'Wavy Events',
        description: `Payment for '${body.event.name}' event.`,
        logo: 'https://res.cloudinary.com/plushdeveloper/image/upload/v1571182472/smile.png',
      },
    });
  });
}
