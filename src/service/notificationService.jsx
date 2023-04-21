import axios from "axios";

export const pushNotification = (header, content, exId) => {
  console.log("pushing");

  const noti = {
    app_id: "55695055-76e2-4457-ac2f-fa36fb10822b",
    include_external_user_ids: [exId],
    headings: { en: header },
    contents: { en: content },
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic ZDg3NTU4OTYtZWI3My00MzhiLWI1ZTctZDgyYzQ2ZDdkNGYz",
  };
  axios
    .post("https://onesignal.com/api/v1/notifications", noti, {
      headers: headers,
    })
    .then((res) => {
      console.log(res.config);
      console.log(res.config.data);
    });
};