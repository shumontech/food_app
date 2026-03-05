
import { connect } from "../../lib/dbconnect";

const feedBackCollection = connect("feedBack_DB")
export async function GET(request) {

  
  const result = await feedBackCollection.find().toArray()


  return Response.json(result)
}
export async function POST(request) {
  const {massage} = await request.json();

  if(!massage || typeof massage !== "string"){ {
    return Response.json({
      status: 400,
      message: "Massage is required"
    })
  }
}
const newFeedBack = {massage, date: new Date().toISOString()}

const result = await feedBackCollection.insertOne(newFeedBack)


  return Response.json(result);
}



