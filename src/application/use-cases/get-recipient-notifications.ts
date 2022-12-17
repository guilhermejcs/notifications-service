import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface GettRecipientNotificationsRequest {
    recipientId: string;
}

interface GettRecipientNotificationsResponse {notifications: Notification[]};

@Injectable()
export class GettRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(
        request: GettRecipientNotificationsRequest,
    ): Promise<GettRecipientNotificationsResponse> {
        const { recipientId } = request;

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

        return {
            notifications,
        }
    }
}