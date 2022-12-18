import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
    extends ServerKafka
    implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                brokers: ['unique-bear-11420-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'dW5pcXVlLWJlYXItMTE0MjAkdGdzMWUJLc28lj86M83N3bNS6YRLUyZkD38ASM4',
                    password: 'hXx_3A8XQhkN1p6XUqSf8RDcGAsNrIGjvu8A4OEAxaAdU6FnA8f7woYW2rnjnL_CGIgX-w==',
                },
                ssl: true,
            },
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
}