import OneSignal from 'react-onesignal';

export default async function runOneSignal() {

    let externalUserId = '123456789'; // You will supply the external user id to the OneSignal SDK

    // Setting External User Id with Callback Available in SDK Version 3.9.3+
    OneSignal.setExternalUserId(externalUserId, (results) => {
        // The results will contain push and email success statuses
        console.log('Results of setting external user id');
        console.log(results);

        // Push can be expected in almost every situation with a success status, but
        // as a pre-caution its good to verify it exists
        if (results.push && results.push.success) {
            console.log('Results of setting external user id push status:');
            console.log(results.push.success);
        }

        // Verify the email is set or check that the results have an email success status
        if (results.email && results.email.success) {
            console.log('Results of setting external user id email status:');
            console.log(results.email.success);
        }

        // Verify the number is set or check that the results have an sms success status
        if (results.sms && results.sms.success) {
            console.log('Results of setting external user id sms status:');
            console.log(results.sms.success);
        }
    });

    await OneSignal.init({ appId: '55695055-76e2-4457-ac2f-fa36fb10822b', allowLocalhostAsSecureOrigin: true });
    OneSignal.showSlidedownPrompt();
}