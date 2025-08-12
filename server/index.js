const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// API to set cookie
app.post('/api/cookies/set', (req, res) => {
  const { consent } = req.body;
  res.cookie('cookie_consent', consent, {
    httpOnly: false, // allow frontend to read
    maxAge: 60*1000,
    // maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    sameSite: 'lax'
  });
  res.json({ message: 'Consent saved' });
});

// API to check cookie
app.get('/api/cookies/check', (req, res) => {
  const consent = req.cookies.cookie_consent || null;
  res.json({ consent });
});

app.listen(5000, () => console.log('Server running on port 5000'));
