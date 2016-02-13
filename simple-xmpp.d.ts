import * as events from 'events';

/* this interface should be extended with the constructor params from node-xmpp-client */
// interface ConnectParams {
// 	skipPresence?: boolean;
// }

declare interface SimpleXmpp extends events.EventEmitter {
	send(to: string, message: string, group?: boolean): void;
	join(to: string, password?: string): void;
	invite(to: string, room: string, reason?: string): void;
	subscribe(to: string): void;
	unsubscribe(to: string): void;
	acceptSubscription(to: string): void;
	acceptUnsubscription(to: string): void;
	getRoster(): void;
	probe(buddy: string, callback: () => void): void;
	getVCard(buddy: string, callback: () => void): void;
	getVCardForUser(jid: string, user: string, callback: () => void): void;
	setPresence(show: string, status: string): void;
	setChatstate(to: string, state: string): void;
	disconnect(): void;
	connect(params: /*ConnectParams*/any): void;
}

declare var simpleXmpp: SimpleXmpp;

export = simpleXmpp;
