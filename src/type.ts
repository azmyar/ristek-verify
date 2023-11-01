export interface CertDetails {
  id: string;
  recipient: string;
  eventName: string;
  asWhat: string;
  issuedDate: string;
}

export interface TicketDetails {
  id: string;
  recipient: string;
  issuedDate: string;
  expiredDate: string;
  eventName: string;
}
