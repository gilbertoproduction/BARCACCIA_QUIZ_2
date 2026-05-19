# Security Specification - Barcaccia Polls

## Data Invariants
1. A Vote must belong to a valid Member ('SIMO', 'MARCO', 'DAVE', 'PIETRO', 'FILO').
2. A Vote must reference a valid pollId.
3. Only the user who cast the vote can modify or delete it (if we use Auth).
4. `votedAt` must be a server timestamp.

## The Dirty Dozen Payloads
1. Attempting to vote as a member not in the enum.
2. Attempting to vote with a massive (1MB) list of options.
3. Attempting to vote without a pollId.
4. Attempting to modify someone else's vote.
5. Attempting to inject a fake `timestamp` from the client.
6. Attempting to create a poll as a regular user.
7. Attempting to delete a vote cast by another user.
8. Attempting to list all votes without being authenticated.
9. Attempting to update a vote but changing the `member` field.
10. Attempting to inject a malicious script in the `selectedOptions`.
11. Attempting to vote multiple times for the same member/poll combo (this should be handled by logic, but rules could help).
12. Attempting to write to a non-existent collection.

## Proposed Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }

    function isSignedIn() {
      return request.auth != null;
    }

    function isValidId(id) {
      return id is string && id.size() <= 128 && id.matches('^[a-zA-Z0-9_\\-]+$');
    }

    function isMember(m) {
      return m in ['SIMO', 'MARCO', 'DAVE', 'PIETRO', 'FILO'];
    }

    match /polls/{pollId} {
      allow read: if isSignedIn();
      allow write: if false; // Only manual/admin setup
    }

    match /votes/{voteId} {
      allow read: if isSignedIn();
      allow create: if isSignedIn() && isValidVote(request.resource.data);
      allow update: if isSignedIn() && resource.data.userId == request.auth.uid && isValidVote(request.resource.data);
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }

    function isValidVote(data) {
      return data.pollId is string && 
             isMember(data.member) &&
             data.selectedOptions is list &&
             data.selectedOptions.size() <= 100 &&
             data.timestamp == request.time &&
             data.userId == request.auth.uid;
    }
  }
}
```
