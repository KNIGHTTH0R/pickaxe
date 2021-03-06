/// <reference path="../template.ts" />

declare module "bitcoin-core" {
  namespace BitcoinCore {
    /*
     * This is a code duplication with the template definition, but I don't know
     * how not to.
     */
    interface Coinbaseaux {
      flag: string;
    }

    interface Transaction {
      data: string;
      hash: string;
      depends: number[];
      fee: number;
      sigops: number;
    }

    class BlockTemplate {
      capabilities: string[];
      version: number;
      previousblockhash: string;
      transactions: Transaction[];
      coinbaseaux: Coinbaseaux;
      coinbasevalue: number;
      longpollid: string;
      target: string;
      mintime: number;
      mutable: string[];
      noncerange: string;
      sigoplimit: number;
      sizelimit: number;
      curtime: number;
      bits: string;
      height: number;

      [key: string]: any;
    }

    interface ClientStatic {
      new(params?: {
        agentOptions?: any,
        headers?: boolean,
        host?: string,
        network?: string,
        password?: string,
        port?: number,
        ssl?: boolean,
        timeout?: number,
        username?: string,
        version?: string
      }): Client;
    }

    interface ReceivedAddress {
      address: string;
      account: string;
      amount: number;
      confirmations: number;
      label: string;
      txids: Array<string>;
    }

    interface Client {
      getWork(): any;
      getBlockTemplate(): Promise<BlockTemplate>;
      submitBlock(block: string): Promise<any>;
      listReceivedByAddress(minConf?:number, includeEmpty?: boolean):
        Promise<Array<ReceivedAddress>>;
    }
  }

  let bitcoinCore: BitcoinCore.ClientStatic;
  export = bitcoinCore;
}
