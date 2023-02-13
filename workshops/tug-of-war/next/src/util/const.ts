import { Connection, PublicKey } from "@solana/web3.js";

export const CONNECTION = new Connection(process.env.RPC ? process.env.RPC : 'https://api.devnet.solana.com',  {
    wsEndpoint: process.env.WSS_RPC ? process.env.WSS_RPC : "wss://api.devnet.solana.com",
    commitment: 'confirmed' 
  });

export const TUG_OF_WAR_PROGRAM_ID = new PublicKey('6yr31Dq6uQFRG6F3nuZszaykAoyf1iqWJLiSZL75C4Pf');

// TODO: replace with PDA chest vault and pay out rewards in the end
export const MERCHANT_WALLET = new PublicKey('va1yPZsd2qieP5pE6gtxvAHkHKEW3qmtoZy3oN1GcBX');
