import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us17",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const requestBody = req.body;
    const requestBodyJson = JSON.parse(requestBody)
    const { email = "", firstName = "", lastName = "", address = "" } = requestBodyJson

    if (!email) {
      res.status(404).json({ error: "Email field not found" });
    } else {
      try {
        const response = await mailchimp.lists.addListMember("c04aaf5e55", {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName, // Add first name
            LNAME: lastName,  // Add last name
          },
        });
        console.log(response);
        res.status(200).json({ email, firstName, lastName, address });
      } catch (error) {
        // Check for Mailchimp API errors
        if (error.response && error.response.statusCode === 400) {
          const errorBody = JSON.parse(error.response.text);
          res.status(400).json({ error: errorBody.detail, title: errorBody.title }); // User-friendly message
        } else {
          console.error("Error adding member to Mailchimp:", error);
          res.status(500).json({ error: "Something went wrong" }); // Generic error message
        }
      }
    }
    console.log({ requestBodyJson });
  } else {
    res.send(":(")
  }
}