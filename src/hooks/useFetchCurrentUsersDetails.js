import { useEffect, useState } from "react";

const useFetchCurrentUsersDetails = (url) => {
  const [usernames, setUsernames] = useState();
  const [emails, setEmails] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const usernames = data.map((user) => {
          return user.username;
        })
        const emails = data.map((user) => {
          return user.email;
        })
        setUsernames(usernames);
        setEmails(emails);

      })
  }, [url])

  return { usernames, emails };
};

export default useFetchCurrentUsersDetails;