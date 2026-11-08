# Security Specification & Test-Driven Rules

## 1. Data Invariants
1. **Default-Deny Catch-All**: All document paths not explicitly permitted are forbidden.
2. **Immutable User ID**: Any user-created document (`preparation_sheets`, `quiz_submissions`, `users`) must have `userId == request.auth.uid`. Users cannot spoof identity.
3. **RBAC Isolation**: Users cannot alter their own `role` from 'student' to 'teacher' or 'admin'. Only admins can assign or modify roles.
4. **Idempotency Protection**: Quiz submissions require `idempotencyKey` and cannot be duplicated to farm infinite stars or water drops.
5. **Teacher Feedback Guard**: Only teachers (`role == 'teacher'` or `admin`) can author documents in `teacher_feedbacks` or review preparation sheets.
6. **No Blanket Reads**: All listing operations on sensitive student data are constrained by `userId` or class/teacher scope.

## 2. The Dirty Dozen Payloads (Rejection Matrix)
1. **Payload 1 (Ghost Field)**: User sends `{ isVerified: true, role: 'admin' }` on self-profile creation. -> **REJECTED**
2. **Payload 2 (Admin Role Escalation)**: Student updates profile with `{ role: 'admin' }`. -> **REJECTED**
3. **Payload 3 (ID Poisoning)**: Document path with 2KB junk character string. -> **REJECTED** (exceeds size/regex limit).
4. **Payload 4 (Orphaned Submission)**: Quiz submission with mismatched `userId != request.auth.uid`. -> **REJECTED**
5. **Payload 5 (Reward Farming)**: Duplicate write updating stars without idempotency check. -> **REJECTED**
6. **Payload 6 (Unauthenticated Write)**: Write with `request.auth == null`. -> **REJECTED**
7. **Payload 7 (Unverified Email)**: Write attempt from an unverified email account. -> **REJECTED**
8. **Payload 8 (Student Writing Teacher Feedback)**: Student creating feedback in `teacher_feedbacks`. -> **REJECTED**
9. **Payload 9 (Oversized Payload Denial of Wallet)**: Notes string exceeding 2000 chars. -> **REJECTED**
10. **Payload 10 (PII Snooping)**: Student attempting to list all profiles from another school. -> **REJECTED**
11. **Payload 11 (Terminal State Shortcutting)**: Student mutating status of an already `reviewed` preparation sheet. -> **REJECTED**
12. **Payload 12 (Immutability Bypass)**: Attempt to alter `createdAt` on an existing submission. -> **REJECTED**
