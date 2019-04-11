import Firebase from 'firebase'

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJ_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER_ID
};

const fb = Firebase.initializeApp(config);
const db = fb.database()

export const dbRef = db.ref('phrases')

