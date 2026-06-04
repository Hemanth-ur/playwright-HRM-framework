exports.getLatestEmail = async function() {

    // MailHog API call

    const response = await fetch
        (
          'http://localhost:8025/api/v2/messages'
        );

    const emails = await response.json();

    return emails.items[0];
};