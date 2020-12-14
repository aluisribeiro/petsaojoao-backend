import admin from 'firebase-admin';
import dotenv from "dotenv"
dotenv.config()
export class Firebase {

  createConnection() {

   return admin.initializeApp({
      // To validate this credentials its necessary define a environment variable with name GOOGLE_APPLICATION_CREDENTIALS
      // with the path to file json geted of firebase
      credential: admin.credential.applicationDefault(),
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.BUCKET
    })
  }

  connectToBucket(){
    admin.storage().bucket()
  }

  async saveBucket(filename: string, path: string, destination: string){

    const bucket = admin.storage().bucket()

    await bucket.upload(path, {
      destination: `${destination}${filename}`,
    })
  }

  async closeConnection(){
    return await admin.app().delete()
  }

}


export default Firebase