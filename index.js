import returnJson from "./Config/ConfigServiceAccountKey"

var admin = require("firebase-admin");
// var serviceAccount = {
//      "type": "service_account",
//     "project_id": "",
//     "private_key_id": "",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvbXVMPoySN5k0\nIk3XsoWO4pNbbQcaNCFRcLatg19yiAI5frz5ggbpY5M3rM6bdyU3vTBHBG+wS8cy\nAf+qj3Xt7T1yNdAojnaXxF5DqAkdyo3fE9lWqO24qafD8YGW5l+JV8etKk+fAdBf\ngtTcI6L/6EiwzgLLCuEVbeDsrjwUiuUmRlOQH0V2XARpQ68EqUdiZuoeTRnaN2qW\nFiVgKkOD0BmMhFP1t4LyczSkOUfGt3fEq5npdf4+3t2Jhbz01gQ8KM4aGBoW6lTS\nEhUTMCYVHy1SsKdhISKvA/OB1r1T+OevNmjF3p/y/RqkcTpAqt3l/rQ7ECCuo3jt\nqPE3nN7DAgMBAAECggEAPoqa8WIxUmWQ8HW0Y8xI8j5Tw5n0mMJyCGtTLTvzWM0l\nYeMNszRIi4dM8mHgzKsm8R65KfBqcyMo8mqk/+UiaX8VU3Tc78COhh/jbWJoUZ8n\nghq89rjF+3o8jc45YZdjAv9w+AroFOucIpjtk0f/MhXZaHMhqsqHoVCpiie50qZ0\nyuqPrHFMkGHrZgyLG0j0d3bPQNyEkGz642VVZ4tHEnSLrI1Xg5Kz7j/bPW9MJClQ\nbRKwWEWiNGCLaOgyPLqd7CYc/ln5q/sk5tebJyO0fK9b8umE+3AwNONpoH5/PIcc\nDRfBztXGnoUQkZt4Uk8m0GroqsF2FF5l2SmArY4olQKBgQDaqOpNiY7MXuXqtLXY\nPb9N41rm/aq7nViP4JQVqB7cjthoRKhYUsUbXaDgTeQZ9DJW2bqMGIU8rrkMoVCJ\nyFO/ajlvv0q3F4lCrLAk3K/0ftMYA/TilZUW1k1sPWuaoMORPyYS3NCzZy31OBhV\nKe+IoWRyts8PxUCAOvb5dVPwLQKBgQDNYpJbd3gLdiI5G5kNMiAhmsDtrBV4VP3N\nyAcwShG3rbQJ0kxYGhEYNJLwZEON3VRTeT9H6NZjiu9eXBuMaCSPJ0yMj1RaLB+O\nV2fdst4Nvj9SlJgmO/1BeUXFmJOGdhwGzpnjZPmM49yGAWcths26ajQud2fqSQz1\nUTQJo8hwrwKBgQCeynZE0rWR8wSS2qMII2dO/+Gex+56Cv0qlxPTWmD3GQFNTzbV\n1V3wzqCq48XXl0ALVFilrpTriZM2+dsMBB/VbSXC4i83IW97rP7J9j4NlyBjW1Q2\nTByWFhDpnv0KsN71Ft/maNdiwXZdk1wQVMDv/wx8Rge+0ydROADtDehkDQKBgQC3\nLaohP+1mM4eUbYPU3BcCQba+g5Nmjk8LQNMAg59Htfn0JIcIsL78Wq+PDa2ekn9K\nL8J7zTOg9mJFQ1sioCOzNba1SoROJDpExroRZh1cHoj1iygkOa7HvXS4Jju1WhPn\nEk74G6/is7uUHR474ZYNI/nEU6TvtRWEmlcSHeyAawKBgCwfJV2xpui1IuxUyMBL\nuznlqv8lIUJB+pYz5059rxNzZLlf1tMdzPaUarC275Tl8v2yHDxnSr1vfe1SPzRZ\ndebeTVVu7aNeXmvYFnsh9P3wyxTxZo4U+CfrTMu0hSkK/5cDVFJoYabMN8YiQOIw\no8KkzeifuDfokmSTL/2EX1RS\n-----END PRIVATE KEY-----\n",
//     "client_email": "",
//     "client_id": "",
//     "auth_uri": "https://dfadsfa.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "",
//     "client_x509_cert_url": ""
// }


/*------------ node -r esm index-------------*/

var FirbaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(returnJson),
    databaseURL: "https://nubae-c1b63.firebaseio.com"
});

/*-----------Create User---------------*/

function createUser() {
    var users = FirbaseAdmin.auth()
        .createUser({
            email: 'user@example.com',
            emailVerified: false,
            phoneNumber: '+11234567890',
            password: 'secretPassword',
            displayName: 'John Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false
        })
        .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
        })
        .catch(function (error) {
            console.log('Error creating new user:', error);
        });

}

/*-----------Update user---------*/

var uid = '7ChgkdsMwUMzsEy4mOl8B6VREYH2';

function updateUser(uid) {
    var users = FirbaseAdmin.auth()
        .updateUser(uid, {
            email: 'modifiedUser@example.com',
            phoneNumber: '+11234567890',
            emailVerified: true,
            password: 'newPassword',
            displayName: 'Jane Doe',
            photoURL: 'http://www.example.com/12345678/photo.png',
            disabled: false
        })
        .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully updated user', userRecord.toJSON());
        })
        .catch(function (error) {
            console.log('Error updating user:', error);
        });
}

/*-------------Delete User---------------*/

function GetUser(uid) {
    var users = FirbaseAdmin.auth()
        .getUser(uid)
        .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully fetched user data:', userRecord.toJSON());
        })
        .catch(function (error) {
            console.log('Error fetching user data:', error);
        });
}


/*-------------Delete User---------------*/

function deleteUser(uid) {
    var users = FirbaseAdmin.auth()
        .deleteUser(uid)
        .then(function () {
            console.log('Successfully deleted user');
        })
        .catch(function (error) {
            console.log('Error deleting user:', error);
        });
}

// deleteUser('ogo1l3AuonO9jH6Q8Ner7knfeiJ2')

/*--------------Delete Multiple User------------------*/

function deleteMultipleUser(uids) {
    //uids array of ids
    var users = FirbaseAdmin.auth()
        .deleteUsers([uid1, uid2, uid3])
        .then(function (deleteUsersResult) {
            console.log('Successfully deleted ' + deleteUsersResult.successCount + ' users');
            console.log('Failed to delete ' + deleteUsersResult.failureCount + ' users');
            deleteUsersResult.errors.forEach(function (err) {
                console.log(err.error.toJSON());
            });
        })
        .catch(function (error) {
            console.log('Error deleting users:', error);
        });
}

/*--------------Delete Multiple User------------------*/

function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    var users = FirbaseAdmin.auth()
        .listUsers(1000, nextPageToken)
        .then(function (listUsersResult) {
            listUsersResult.users.forEach(function (userRecord) {
                // console.log('user', userRecord.toJSON());
            });
            console.log('----------------Total user---------------------')
            console.log(listUsersResult.users.length)
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch(function (error) {
            console.log('Error listing users:', error);
        });
}

// Start listing users from the beginning, 1000 at a time.
GetUser(uid)
updateUser(uid)
listAllUsers();



