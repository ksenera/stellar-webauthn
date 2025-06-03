import { Keypair, Server, TransactionBuilder, Networks, Operation, Asset } from 'stellar-sdk';

export class StellarClient {
  constructor(secret) {
    this.keypair = Keypair.fromSecret(secret);
    this.server = new Server('https://horizon-testnet.stellar.org');
    this.network = Networks.TESTNET;
  }
}
// actually send the payment 
// first load the account 
// build the tranx
// operation = payment 
// submit the trans 