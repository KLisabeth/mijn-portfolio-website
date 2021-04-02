import fetch from 'node-fetch';
import key from "../config/key.js"



const apiKey = key.API_KEY;
const URL = key.URL;

const messageRoute = (req, res) => {
  const { email, comment } = req.body;
  
  const url = URL;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey
    },
    body: JSON.stringify({
      sender: {email: 'katie_lisabeth@yahoo.com' , name: `${email}`},
      to: [{email: 'katie_lisabeth@yahoo.com', name: 'Kateryna Lisabeth'}],
      htmlContent: `<!DOCTYPE html> <html> <body> <h4>${comment}</h4> </body> </html>`,
      subject: 'A message from my profile viewer'
    })
  };
  
  fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
    return res.json({
      msg: "Your message has been sent",
    })

  }
export default messageRoute;



