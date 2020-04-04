# PassVault
A light weight NodeJS CLI to manage your passwords. 

## Commands

- `passvault init`: initialises passvault at "~/.config/passvault/passwords". option: --path.
- `passvault add <ID>`: add a new entry ID/password or update the password of an existing ID.
- `passvault get <ID>` or `passvault <ID>`: get corresponding password for a given ID.
- `passvault delete <ID>`: delete ID and corresponding password.
- `passvault status <ID>`: get password expiration for all IDs.

Each command prompts for the decryption key and the new password if applicable.


