import { User } from "./User";

export class Message {
  constructor({ id, messageText, createdAt, user }) {
    console.log(id);
    this.id = id ? id : Date.now();
    this.messageText = messageText;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
    this.user = user;
  }

  displayCreatedAt() {
    return this.createdAt.toLocaleString();
  }

  static fromObject(dataObject) {
    console.log(dataObject.id);
    const message = new Message({
      id: dataObject.id,
      messageText: dataObject.messageText,
      createdAt: dataObject.createdAt,
      user: User.fromObject(dataObject.user),
    });

    return message;
  }
}
