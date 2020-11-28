import admin from 'firebase-admin';
export class Firebase {

  createConnection() {
   return admin.initializeApp({
      
        credential: admin.credential.cert({
            projectId: process.env.PROJECT_ID, 
            clientEmail: process.env.CLIENT_EMAIL, 
            privateKey: process.env.PRIVATE_KEY,
          }),
        storageBucket: 'petsaojoaobackend.appspot.com'
      });
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