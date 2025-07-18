// src/client.js

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '0wzb2pco', 
  dataset: 'production',
  apiVersion: '2024-07-16', 
  useCdn: true,
  token: 'YOUR_API_TOKEN', 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);