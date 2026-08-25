const mask_mail = (mail) => {
    // 1. Guard clause: Return original string if there's no '@'
    const atIndex = mail.indexOf("@");
    if (atIndex === -1) return mail;

    // 2. Separate the local part and the domain
    const localPart = mail.substring(0, atIndex);
    const domain = mail.substring(atIndex);

    // 3. Handle short email addresses (1 or 2 characters)
    if (localPart.length <= 2) {
        return localPart[0] + '*'.repeat(localPart.length === 2 ? 1 : 0) + domain;
    }

    // 4. Your original logic for standard emails
    const firstLetter = localPart[0];
    const lastLetter = localPart[localPart.length - 1];
    const maskMiddle = '*'.repeat(localPart.length - 2);

    return firstLetter + maskMiddle + lastLetter + domain;
}

console.log(mask_mail("ashwani@gmail.com")); // a*****i@gmail.com
console.log(mask_mail("ab@gmail.com"));      // a*@gmail.com
console.log(mask_mail("a@gmail.com"));       // a@gmail.com
console.log(mask_mail("invalid-email"));     // invalid-email