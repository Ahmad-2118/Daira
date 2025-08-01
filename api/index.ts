import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle API routes
  if (req.url === '/api/ping') {
    res.status(200).json({ message: "Hello from Vercel server!" });
    return;
  }

  if (req.url === '/api/demo') {
    res.status(200).json({ message: "Demo endpoint from Vercel!" });
    return;
  }

  // Default response
  res.status(404).json({ error: 'Not found' });
} 