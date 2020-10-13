import returnJson from "./ConfigServiceAccountKey"

var admin = require("firebase-admin");
// var serviceAccount = {
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



