import * as admin from "firebase-admin";
import FirebaseInit from "../config/FirebaseInit";

FirebaseInit.init();

class FirebaseCloudMessaging {
  static async sendMessage(_id) {
    let idFnd = _id.toString();
    var message = {
      notification: {
        body: "Um novo pet foi encontrado!",
        title: "PET SÃO JOÃO",
      },
      data: {
        id_fnd: idFnd,
        click_action: "FLUTTER_NOTIFICATION_CLICK",
      },
      topic: "foundPets",
    };
    try {
      const resp = await admin.messaging().send(message);
    } catch (error) {
      throw error;
    }
  }

  static async regTopic(token) {
    const regToken = token;

    try {
      const resp = await admin
        .messaging()
        .subscribeToTopic(regToken, "foundPets");
      return resp;
    } catch (error) {
      throw error;
    }
  }

  static async unregTopic(token) {
    const regToken = token;
    try {
      const resp = await admin
        .messaging()
        .unsubscribeFromTopic(regToken, "foundPets");
      return resp;
    } catch (error) {
      throw error;
    }
  }
}

export default FirebaseCloudMessaging;
