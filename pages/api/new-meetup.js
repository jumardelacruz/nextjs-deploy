//   /api/new-meetup

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // req - incoming, res - response return
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://jumardelacruz09:Ak0_s!_Jumz!@cluster0.u6d6bti.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ messsge: "Meetup inserted!" });
  }
}
