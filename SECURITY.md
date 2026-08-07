# Security Notes

## Never commit secrets
Do not place API keys, passwords, OAuth client secrets, database credentials, JWT signing secrets or private tokens inside React source files.

Use environment variables for local development and server-side secrets for production.

## Frontend limitation
Anything shipped to a browser can be inspected by the user. Therefore a React-only "owner password" is not a real security boundary.

## Production owner controls
Use:
1. HTTPS
2. Backend authentication
3. Secure session cookies
4. Server-side authorization
5. Database-backed users/roles
6. Rate limiting
7. Audit logging

## Verification
GitHub public URL structure can be checked client-side, but production-grade proof verification should run server-side. LinkedIn post ownership cannot be reliably proven by merely checking the URL domain; use an approved provider/OAuth flow or other server-side verification strategy.

## Hackathon safety
The repository should remain public if the rules require a public repository. Public code must contain only non-secret configuration and mock/demo values.
