import delay from './delay';

export default class SessionApi {
    static getJwtToken(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
                );
            }, delay)
        });
    }
}