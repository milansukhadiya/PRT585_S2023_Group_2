const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Business Layer Object
class BusinessLayer {
  // ... your business logic here
}

// Ticketing System
class TicketingSystem {
  // ... your ticketing system logic here
}

// Schedule Job to Send Email
const scheduleEmail = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hayleyhzx@gmail.com',
      pass: 'Kp13110995566'
    }
  });

  const mailOptions = {
    from: 'hayleyhzx@gmail.com',
    to: 'hayleyhzx@gmail.com',
    subject: 'Scheduled Email',
    text: 'This is a scheduled email.'
  };

  // Schedule a job to send an email every minute
  cron.schedule('* * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
};

const main = () => {
  const businessLayer = new BusinessLayer();
  const ticketingSystem = new TicketingSystem();

  scheduleEmail();
};

main();
