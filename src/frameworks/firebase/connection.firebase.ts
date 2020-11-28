import admin from 'firebase-admin';
export class Firebase {

  createConnection() {
    process.env.PROJECT_ID = "petsaojoaobackend"
    process.env.PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoUSX4wFzOizQ9\nmqr1wOqSM28qs5+Nhok0D3gD1rkaHXWHacaxgXBKzoBNWlTRxVlY6nVq4DHjmUiI\nE+lVSd0hABbvtonOM15HYoXuvuocdOlz95QGV2ZnZd+o1ReedfNYXVIiYtn+By1T\nN4lCTXzUXAd8h7F1wVfRw7sUG0nLEUi4mExoB6hG500UPV3ilLnLzTHPqrHHCkld\nr7wAqZXKACKvyWW4Yd6M7mZgOJ2QE4wYalQ0/jhA4Xskh9FulQM6eajgWtwzEieN\noWx6w6Oo5WYM5Zfs9LTXYbmKrOvoHuCwDhJ6DXiBaus7EqHOD4KuVcZEOnLU5JPD\nojtRLMHpAgMBAAECggEAFrD79MVgLaM0K4L0vdVgek3PVJsrLS4ARMG6HRBfW38x\nt0wCEq+f1yHwR51gNniL01Imer5XU3b4gYnnqM0gr+B+dxotiVxA/1AvvLBFyQjU\n6UKtFM7HGjTwemch/EWsBRNtrX+UomvOxzuDOGpQZCO1CauUd8rVP00LJUqJgAPw\nQRfIjGGm2BvcAE/xfy8FD07ApiaMhvnseQXuR+uV95kdV4WSEIhYVJkBmQQ2DSk3\nLfl0+j0euy9QDeHKgybLsMF7/26sdAWxpZ0Nkwp4kxVhvjFQzpe/sV2Kr4HsKgKC\nNvrec6SxUu24HPPHpUbnGq9FQmlLtX8Q6KIkMF5hhQKBgQDWiIKs7qag335BVdTP\n6FJHD2+UhURymoLY14dzR6UjYjVa2ZOebsYv+3tkkjcg0QsDSMVnMuPbRRpFjzNs\nPNE6c5EQC4wzUq9atXsFLj6gEEFA6YmttGROBgWKGd7bDOK0HkIvWVENsNp8f6mO\nK2hTDqOmVcO4Qq4OA5OXAHdfxQKBgQDI2cZJJWO++yPSYDhU3U5T++fcpZ0c3Bin\n3Dy3jkpjYGxCWH9866yfJeCr0joo/atR2Po4ztf5uKn1oy8i/utj5kpfXLG/ABg6\nf3svipUXfGRY9R0N05IUxbDgl2dPD2KAVgxBvrAtI2M1dy9e1oJn6YNJ3C3WzlA2\nHx9JKtf31QKBgQCxH8IsP1nJxtx52wC6q0iLLP5l9GXf7RwNJl3J2yRIA4SjvrH3\ng+QTp6FoFqR3bsCV9JYvL0AbQIGBXssJGWlxxgrF4ZLeqOzoip/IVjcUdnc5vdeT\nWDXciXI3ZEawOoJOThE9AJRAJn0tf0WhgMtAj/yjj3npfvwvy9omORdWNQKBgC5G\nFivmBFwMykz+xBuxPQmWYO3x7genIbsSv55elv7cSTTj5MNoHMYx2NhdP+8PunfJ\n8KRD63hqNiYUqZh7eMn0VbAwz/a8U9iuZDgoyn61tvzTxBTaaK6GeWDVIQUS+1Or\n/3jqMPbFT2cTBYPpEfRU1V2f76OstsgxVWjrCQTdAoGABGGT2stoOJDHkiKUE4iI\nxit4N0KsFR6zYci94hNGVxLt83JBrHPXy0OFdfRk1/Q23jQzvznCLUcfyZF++9WV\njkElQStepTt6N1cSzuKnfS5IxZMZ2bnv0xhnnc4RaQjtOC9yvcpMMQwAqWPkhMMN\na+log487CY6bG+dVdYDZB+c=\n-----END PRIVATE KEY-----\n"
    process.env.CLIENT_EMAIL = "firebase-adminsdk-ywy56@petsaojoaobackend.iam.gserviceaccount.com"
    return admin.initializeApp({
      
        credential: admin.credential.cert({
            project_id: process.env.PROJECT_ID, 
            client_email: process.env.CLIENT_EMAIL, 
            private_key: process.env.PRIVATE_KEY,
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