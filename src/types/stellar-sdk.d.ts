declare module '@stellar/stellar-sdk' {
  // Minimal surface needed by the app without pulling in full SDK types.
  export const xdr: any

  export class Address {
    static account(buffer: any): Address
    static contract(buffer: any): Address
    static fromScVal(scv: any): Address
    toScVal(): any
    toString(): string
  }

  export namespace rpc {
    class Server {
      constructor(serverURL: string, opts?: any)
      getLedgerEntries(...keys: Array<any>): Promise<{
        entries: Array<Api.LedgerEntryResult>
        latestLedger: number
      }>
    }
    namespace Api {
      interface LedgerEntryResult {
        key: any
        val: any
        lastModifiedLedgerSeq: number
        liveUntilLedgerSeq?: number
      }
    }
  }
}
